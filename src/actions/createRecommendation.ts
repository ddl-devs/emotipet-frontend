import { json } from "stream/consumers";
import apiClient from "./client";


interface GetRecommendationsParams {
    id: string;
    createCategory: string;
}

export const createRecommendation = async ({ id, createCategory }: GetRecommendationsParams) => {

    const url = `/recommendations/`;
    const response = await apiClient(url, {
        method: "POST",
        body: JSON.stringify({
            petId: id,
            categoryRecommendation: createCategory
        }),
    });
    return response;
};