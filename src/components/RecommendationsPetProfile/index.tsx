"use client";

import RecommendationPetCard from "../RecommendationPetCard";
import ProfileInputFilter from "../ProfileInputFilter";
import { useState, useEffect } from "react";
import { getRecommendations } from "@/actions/getRecommendations";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Recommendation } from "@/types/recommendation";
import { createRecommendation } from "@/actions/createRecommendation";

export default function RecommendationsPetProfile() {
    const [category, setCategory] = useState("");
    const [createCategory, setCreateCategory] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
    const [loading, setLoading] = useState(false);
    const [loadingCreate, setLoadingCreate] = useState(false);
    const params = useParams();
    const [page, setPage] = useState(0);
    const id = Array.isArray(params.id) ? params.id[0] : params.id || "";


    const handleFilter = async () => {
        setLoading(true);
        try {
            const response = await getRecommendations({ id, category, startDate, endDate, page });
            setRecommendations(response.content);
        } catch (error) {
            console.error("Erro ao obter recomendações:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleFilter();
    }, []);

    useEffect(() => {
        handleFilter();
    }, [page]); 
    
    const handlePageChange = (newPage: number) => {
        if (newPage >= 0) {
            setPage(newPage);
        }
    };

    const handleCreateCategory = async () => {
        setLoadingCreate(true);
        try {
            const response = await createRecommendation({ id, createCategory });
            setLoadingCreate(false);
            handleFilter();
        } catch (error) {
            console.error("Erro ao obter recomendações:", error);
        } finally {
            setLoading(false);
        }
    };

  return (
    <div className={`p-3 w-1/2 flex flex-col pt-5 items-start justify-start rounded-3xl`}>
      <h1 className="text-[40px] font-bold text-orange">Recomendações</h1>
      <div className="flex flex-col gap-3 justify-start items-start w-full">
        <div className="flex mt-4 flex-row gap-4 justify-start min-w-[257px] items-end flex-wrap">
            <ProfileInputFilter options={{ACTIVITIES:"Atividades", HEALTH:"Saúde", PRODUCTS:"Produtos", IMC:"IMC", TRAINING:"Treinamento" }} select={true} wid="100px" input={category} label="Categoria:" id="category" placeholder="Categoria" onChange={(e) => setCategory(e.target.value)} />
            <ProfileInputFilter hei="38px" wid="100px" type="date" input={startDate} label="Data inicial:" id="startDate" placeholder="DD/MM/YYYY" onChange={(e) => setStartDate(e.target.value)} />
            <ProfileInputFilter hei="38px" wid="100px" type="date" input={endDate} label="Data final:" id="endDate" placeholder="DD/MM/YYYY" onChange={(e) => setEndDate(e.target.value)} />
            <button onClick={handleFilter} className='gap-1 flex justify-center items-center bg-green rounded-full text-white text-lg font-medium h-10 w-24'>
            <Image
              src="/assets/svg/filter.svg"
              alt="Filtrar"
              width={15}
              height={15}
              className=""
            />
            Filtrar
            </button>
        </div>
        <div className="flex flex-row gap-4 justify-start min-w-[257px] items-end flex-wrap">
        <ProfileInputFilter options={{ACTIVITIES:"Atividades", HEALTH:"Saúde", PRODUCTS:"Produtos", IMC:"IMC", TRAINING:"Treinamento" }} select={true} wid="100px" input={category} label="Categoria:" id="category-register" placeholder="Categoria" onChange={(e) => setCreateCategory(e.target.value)} />
        {!loadingCreate ? 
                <button onClick={handleCreateCategory} className="relative mt-0 pl-2 pt-1 font-semibold justify-center items-center flex bg-gradient-to-br from-[#4B9DFA] to-[#5676DE] w-24 h-10 text-white text-lg rounded-full">
                        <Image
                            src="/assets/svg/iconeIA.svg"
                            alt="Criar análise"
                            width={18}
                            height={18}
                            className="absolute left-0 top-1.5 left-2"
                        />
                        Criar
                </button>
            :
            <div className="flex justify-center items-center mt-5">
                <div className="loader"></div>
            </div>
        }
        </div>
        <div className="flex flex-row gap-4 w-full justify-center items-start flex-wrap mt-6">
            <div className="flex flex-row gap-4 w-full justify-center items-start flex-wrap">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <div className="loader"></div>
                    </div>
                ) : (
                !recommendations || recommendations.length === 0 ? (
                    <div className="flex justify-center items-center">
                    Nenhuma recomendação encontrada
                    </div>
                ) : (
                    recommendations.map((recommendation) => (
                        <RecommendationPetCard key={recommendation.id}
                        markDownText={recommendation.recommendation}
                        text={recommendation.categoryRecommendation}
                        createdAt={recommendation.createdAt}/>
                    ))
                )
                )}
            </div>
            <div className="flex justify-center items-center mt-4 mb-4">
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 0}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-l"
                >
                    &lt;
                </button>
                <span className="bg-gray-200 text-gray-700 px-4 py-2">{page + 1}</span>
                <button
                    onClick={() => handlePageChange(page + 1)}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r"
                >
                    &gt;
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}