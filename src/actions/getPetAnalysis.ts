import apiClient from "./client";

interface GetPetAnalysisParams {
    page: number;
    id: number;
    startDate?: string;
    endDate?: string;
    type?: string;
    result?: string;
    status?: string;
}

export const getPetAnalysis = async ({ id, startDate, endDate, type, result, page, status }: GetPetAnalysisParams) => {
    const queryParams = new URLSearchParams();

    queryParams.append("page", String(page));
    queryParams.append("sort", "createdAt,desc");
    if (startDate) queryParams.append("startDate", startDate);
    if (endDate) queryParams.append("endDate", endDate);
    if (type) queryParams.append("type", type);
    if (result) queryParams.append("result", result);
    if (status) queryParams.append("status", status);

    const url = `/pet-analysis/pet/${id}?${queryParams.toString()}`;
    const response = await apiClient(url, {
        method: "GET",
    });
    return response;
};