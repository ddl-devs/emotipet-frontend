"use server";

import apiClient from "./client";

export async function getMe() {
    const response = await apiClient("/users/me", {
        method: "GET",
    })
    return response;
}