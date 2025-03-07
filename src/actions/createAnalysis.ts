import apiClient from "./client";

interface CreatePetAnalysisParams {
  id: number;
  picture: File;
  type: string;
}

export const createPetAnalysis = async ({ id, picture, type }: CreatePetAnalysisParams) => {
  const formData = new FormData();
  formData.append("petId", id.toString());
  formData.append("picture", picture);
  formData.append("analysisType", type);

  const url = `/pet-analysis/`;
  const response = await apiClient(url, {
    method: "POST",
    body: formData,
  });
  return response;
};