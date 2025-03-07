"use server";

import { cookies } from "next/headers";
import apiClient from "./client";

const getToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("token")?.value || null;
};

export async function getPet(idPet: string) {
  const token = await getToken();

  if (!token) {
    console.error("No token found");
    return;
  }

  try {
    const response = await apiClient(`/pets/${idPet}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response;
    return data;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}
