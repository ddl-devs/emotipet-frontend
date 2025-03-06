"use server";

import apiClient from "./client";

const fetchUserData = async (token: string) => {
  if (!token) {
    console.error("No token found");
    return;
  }

  try {
    const response = await apiClient("/users/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const userData = await response;
    return userData;
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
};

export default fetchUserData;
