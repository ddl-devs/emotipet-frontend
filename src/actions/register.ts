"use server";
import apiClient from "./client";

export async function registerUser(formData: FormData) {
    const response = await apiClient("/users/", {
    method: "POST",
    body: formData,
    headers: {
    },
    }, false);
    return response;
  }