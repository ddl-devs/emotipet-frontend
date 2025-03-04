// src/app/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext'; 
import { authLogin } from '@/actions/login';
import apiClient from '@/actions/client';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { user } = useAuth();
  const { logout } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const response = await authLogin(email, password);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Algo deu errado');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Entrar</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

        {user && <p>Você está logado como {user.name} VIVA MÃE CHINA</p>}
        {user && <img src={user.photoUrl} alt={user.name} />}
        <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Login;
