"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { deleteCookie, getCookie } from "cookies-next";
import { User } from "@/types/user";
import { useRouter } from "next/navigation";
import getMe from "@/actions/getMe";

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(getCookie("token") as string || null);
  const router = useRouter();

  const logout = () => {
    setUser(null);
    deleteCookie("token");
    deleteCookie("refreshToken");
    router.push("/");
  };

  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          const userData = await getMe(token);
          setUser(userData);
        } catch (err) {
          setUser(null);
          logout();
        }
      } else {
        setUser(null);
      }
    };

    loadUser();
  }, [token]);

  useEffect(() => {
    const handleTokenChange = () => {
      const newToken = getCookie("token") as string || null;
      if (newToken !== token) {
        setToken(newToken);
      }
    };

    window.addEventListener("focus", handleTokenChange);
    return () => {
      window.removeEventListener("focus", handleTokenChange);
    };
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};