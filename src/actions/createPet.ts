"use server"

import apiClient from "./client";

export async function createPet(formData: FormData) {
    const response = await apiClient("/pets/", {
        method: "POST",
        body: formData,
        headers: {
        },
    }, true);
    return response;
}