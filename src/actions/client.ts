'use server';
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
    const wwwAuthenticate = response.headers.get('WWW-Authenticate');
    if (wwwAuthenticate?.includes('invalid_token') && wwwAuthenticate.includes('Jwt expired')) {
      const refreshToken = await getRefreshToken();
      if (refreshToken) {
        try {
          const tokens = await refreshAccessToken(refreshToken);
          await updateTokens(tokens);
          return apiClient(endpoint, options, requiresAuth);
        } catch {
          throw new Error('Sessão expirada');
        }
      } else {
        throw new Error('Sessão expirada');
      }
    }
  }
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Algo deu errado');
  }
  if (response.status === 204 || response.headers.get('Content-Length') === '0') {
    return null; 
  }
  return response.json();
};

const refreshAccessToken = async (refreshToken: string) => {
  const response = await fetch(`${apiUrl}/auth/refresh-token`, {
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
  return data;
};

const updateTokens = async (tokens: { token: string; refreshToken: string }) => {
  console.log('updateTokens', tokens.token, tokens.refreshToken);
  const cookieStore = await cookies();
  cookieStore.set('token', tokens.token, { path: '/', maxAge: 30 * 24 * 60 * 60 });
  cookieStore.set('refreshToken', tokens.refreshToken, { path: '/', maxAge: 30 * 24 * 60 * 60 });
};

const getRefreshToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get('refreshToken')?.value || null;
};

export default apiClient;