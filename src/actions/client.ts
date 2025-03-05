import { cookies } from 'next/headers';

const apiUrl = 'http://localhost:8080'; 

const getToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get('token')?.value || null;
};

const apiClient = async (
  endpoint: string,
  options: RequestInit = {},
  requiresAuth: boolean = true
) => {
  const token = await getToken();
  const headers: Record<string, string> = {};

  if (!(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  if (requiresAuth && token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${apiUrl}${endpoint}`, {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  });

  if (response.status === 401) {
    const refreshToken = await getRefreshToken();
    if (refreshToken) {
      const newToken = await refreshAccessToken(refreshToken);
      if (newToken) {
        updateTokenCookie(newToken);
        return apiClient(endpoint, options, requiresAuth);
      }
    }
  }

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Algo deu errado');
  }

  return response.json();
};

const refreshAccessToken = async (refreshToken: string) => {
  const response = await fetch(`${apiUrl}/refresh-token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) {
    throw new Error('Falha ao renovar token');
  }

  const data = await response.json();
  return data.token;
};

const updateTokenCookie = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set('token', token, { path: '/', maxAge: 30 * 24 * 60 * 60 });
};

const getRefreshToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get('refreshToken')?.value || null;
};

export default apiClient;
