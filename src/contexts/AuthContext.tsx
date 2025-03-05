"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { deleteCookie, getCookie } from "cookies-next";
import { User } from '@/types/user';
import { useRouter } from "next/navigation";
import { getMe } from '@/actions/getMe';

interface AuthContextType {
  user: any;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User|null>(null);
  const token = getCookie('token');
  const router = useRouter();

  const logout = () => {
    setUser(null);

    deleteCookie('token');
    deleteCookie('refreshToken');
    router.push('/');
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        if (token) {
          const userData = await getMe();
          setUser(userData);
        } else {
          setUser(null);
        }
      } catch (error) {
        setUser(null);
      } 
    };

    loadUser();
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
