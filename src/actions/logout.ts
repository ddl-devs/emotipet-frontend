"use server";

import { cookies } from "next/headers";
import apiClient from "./client";
import { useAuth } from "@/contexts/AuthContext";

export async function logout() {
    const cookiesStore = await cookies();
    const response = await apiClient("/auth/logout", {
        method: "POST",
        body: JSON.stringify({
            'refresh_token': cookiesStore.get("refreshToken")?.value,
        }),
    }, true);
    if (response) {
        const {logout} = useAuth();
        logout();
    }
    return response;
}