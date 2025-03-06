"use server";

import { getCookie } from "cookies-next/server";
import apiClient from "./client";

export async function putUser(idUser: string , formData: FormData) {
  const token = getCookie("token");

  if (!token) {
    console.error("No token found");
    return;
  }
  const response = await apiClient(`/users/${idUser}`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response;
}
