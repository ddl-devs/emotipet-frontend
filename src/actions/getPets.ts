import apiClient from "./client";

interface GetPetsParams {
  page: number;
  name?: string;
  breed?: string;
  gender?: string;
  species?: string;
}

export const getPets = async ({ page, name, breed, gender, species }: GetPetsParams) => {
    const queryParams = new URLSearchParams();
    queryParams.append("page", String(page));
    if (name) queryParams.append("name", name);
    if (breed) queryParams.append("breed", breed);
    if (gender) queryParams.append("gender", gender);
    if (species) queryParams.append("species", species);
    const url = `/users/my-pets?${queryParams.toString()}`;
    const response = await apiClient(url, {
        method: "GET",
    });
    return response;
};