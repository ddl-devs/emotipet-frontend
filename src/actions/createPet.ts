"use server";

import { cookies } from "next/headers";
import apiClient from "./client";

const getToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("token")?.value || null;
};

export async function createPet(formData: FormData) {
  const token = await getToken();

  if (!token) {
    console.error("No token found");
    return;
  }

  try {
    const response = await apiClient("/pets/", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}
