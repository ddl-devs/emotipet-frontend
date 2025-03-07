"use client";

import Image from 'next/image';
import ProfileInputFilter from '../ProfileInputFilter';
import { CardPetAnalysis } from '../CardPetAnalysis';
import CreateAnalysis from '../CreateAnalysis';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getPetAnalysis } from '@/actions/getPetAnalysis';

export default function AnalysisPetProfile() {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [analyses, setAnalyses] = useState<Analysis[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (id) {
      handleFilter();
    }
  }, [id]);

  const handleFilter = async () => {
    setLoading(true);
    try {
      const response = await getPetAnalysis({ id: Number(id), startDate, endDate, type, page, result, status });
      setAnalyses(response.content);
    } catch (error) {
      console.error("Erro ao obter análises:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [page]); 

  const handlePageChange = (newPage: number) => {
    if (newPage >= 0) {
      setPage(newPage);
    }
  };

  return (
    <div className={` p-3 w-1/2 left-0 flex flex-col pt-5 items-start justify-start rounded-3xl mb-10`}>
      <div className='flex flex-row gap-3 justify-start items-start w-full'>
        <div className='flex flex-row gap-3 flex-wrap justify-center items-center'>
          <h1 className="text-[40px] font-bold text-orange">Análises</h1>
        </div>
      </div>
        <div className="flex mt-4 flex-row gap-4 justify-start min-w-[257px] items-end flex-wrap">
          <ProfileInputFilter wid="100px" input={result} label="Resultado" id="result" placeholder="Resultado" onChange={(e) => setResult(e.target.value)} />
          <ProfileInputFilter hei="38px" wid="100px" type="date" input={startDate} label="Data inicial:" id="startDate" placeholder="DD/MM/YYYY" onChange={(e) => setStartDate(e.target.value)} />
          <ProfileInputFilter hei="38px" wid="100px" type="date" input={endDate} label="Data final:" id="endDate" placeholder="DD/MM/YYYY" onChange={(e) => setEndDate(e.target.value)} />
          <ProfileInputFilter options={{EMOTIONAL:"Emoção", BREED:"Raça"}} select={true} wid="100px" input={type} label="Tipo:" id="tipo" placeholder="Tipo" onChange={(e) => setType(e.target.value)} />
          <ProfileInputFilter options={{IN_ANALYSIS:"Em análise", COMPLETED:"Completo", FAILURE:"Falha"}} select={true} wid="100px" input={status} label="Status:" id="status" placeholder="Status" onChange={(e) => setStatus(e.target.value)} />
          <button onClick={handleFilter} className='gap-1 flex justify-center items-center bg-green rounded-full text-white text-lg font-medium h-10 w-24'>
            <Image
              src="/assets/svg/filter.svg"
              alt="filtrar"
              width={15}
              height={15}
              className=""
            />
            Filtrar
          </button>
          <button onClick={() => setShowModal(true)} className="relative mt-0 pl-2 pt-1 font-semibold justify-center items-center flex bg-gradient-to-br from-[#4B9DFA] to-[#5676DE] w-24 h-10 text-white text-lg rounded-full">
            <Image
              src="/assets/svg/iconeIA.svg"
              alt="Criar análise"
              width={18}
              height={18}
              className="absolute left-0 top-1.5 left-2"
            />
            Criar
          </button>
          {showModal && <CreateAnalysis setShowModal={setShowModal} modal={true} />}
        </div>

      <div className='mt-5 flex flex-wrap flex-col gap-2 justify-center w-full'>
        <div>
          {loading ? (
            <div className="flex justify-center items-center mt-10">
              <div className="loader"></div>
            </div>
          ) : (
            !analyses || analyses.length === 0 ? (
              <div className="flex justify-center items-center mt-10">
                Nenhuma análise encontrada
              </div>
            ) : (
              <div id='analises' className='flex flex-row flex-wrap gap-2 items-center justify-start mt-10 max-w-3xl'>
                {analyses.map((analysis, index) => (
                  <CardPetAnalysis
                    key={index}
                    analysisStatus={analysis.analysisStatus}
                    accuracy={analysis.accuracy}
                    createdAt={analysis.createdAt}
                    result={analysis.result}
                    analysisType={analysis.analysisType}
                    picture={analysis.picture}
                  />
                ))}
              </div>
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
  );
}