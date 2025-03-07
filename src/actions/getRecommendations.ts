import apiClient from "./client";

interface GetRecommendationsParams {    
    id: string;
    category?: string;
    startDate?: string;
    endDate?: string;
    page: number;
    size?: number;
}

export const getRecommendations = async ({ id, category, startDate, endDate, page, size=7 }: GetRecommendationsParams) => {
    const queryParams = new URLSearchParams();

    queryParams.append("page", String(page));
    queryParams.append("size", String(size));
    queryParams.append("sort", "createdAt,desc");
    if (category) queryParams.append("category", category);
    if (startDate) queryParams.append("startDate", startDate);
    if (endDate) queryParams.append("endDate", endDate);

    const url = `/recommendations/pet/${id}?${queryParams.toString()}`;
    const response = await apiClient(url, {
        method: "GET",
    });
    return response;
};