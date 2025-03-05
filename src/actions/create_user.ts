"use server";

import { cookies } from "next/headers";
import apiClient from "./client";

export async function authLogin(username: string, password: string) {
    const cookiesStore = await cookies();
    const response = await apiClient("/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
    }, false);
    if (response) {
        cookiesStore.set("token", response.access_token);
        cookiesStore.set("refreshToken", response.refresh_token, {});
    }
    return response;
}