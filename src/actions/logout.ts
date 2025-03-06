"use server";

import { cookies } from "next/headers";
import apiClient from "./client";
import { useAuth } from "@/contexts/AuthContext";

export async function logout() {
    const cookiesStore = await cookies();
    const refreshToken = cookiesStore.get("refreshToken")?.value;

    const response = await apiClient("/auth/logout", {
        method: "POST",
        body: JSON.stringify({
            "refresh_token": refreshToken,
        })
    });
    return response;
}