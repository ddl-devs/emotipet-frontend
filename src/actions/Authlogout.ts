"use server";

import { cookies } from "next/headers";
import apiClient from "./client";
import { useAuth } from "@/contexts/AuthContext";

export async function Authlogout() {
  const cookiesStore = await cookies();
  const refreshToken = cookiesStore.get("refreshToken")?.value;

  if (!refreshToken) {
    console.error("Refresh token não encontrado.");
    return null;
  }

  // Faz logout no backend
  const response = await apiClient("/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refresh_token: refreshToken,
    }),
  }, true);

  if (response.status === 200 || response.status === 204) {
    return true;
  } else {
    console.log("Erro ao fazer logout no backend.");
    return false;
  }

}