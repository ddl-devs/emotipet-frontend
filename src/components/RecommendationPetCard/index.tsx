"use client"
import { useState } from "react";
import style  from "./style.module.css";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';

interface Props {
    text: string;
    markDownText: string;
    createdAt: string;
}

export default function RecommendationPetCard({text, markDownText, createdAt}: Props) {

    const [details, setDetails] = useState(false);

    return(
        <div className="flex flex-col w-full justify-center items-center">
            <div className={`bg-whiteOrange flex flex-col items-center justify-center w-full rounded-full p-2 z-10`}>
                <button onClick={() => setDetails(!details)} className={` ${ details ? 'text-blackGray' : 'text-gray'} w-full flex flex-row justify-between px-2 text-lg outline-none`}>
                    <Image
                        src="/assets/svg/arrow.svg"
                        alt="icone de IA"
                        objectFit="cover"
                        height={16}
                        width={16}
                        className={`transform transition-transform duration-300 ${details ? 'rotate-180' : 'rotate-0 opacity-55'}`}
                    />
                    {text == "HEALTH" ? "Saúde" : text == "ACTIVITIES" ? "Atividades" : text == "TRAINING" ? "Treinamento" : text == "PRODUCTS" ? "PRODUTOS" : text} - {new Date(createdAt).toLocaleDateString('pt-BR')}
                    <Image
                        src="/assets/svg/arrow.svg"
                        alt="icone de IA"
                        objectFit="cover"
                        height={16}
                        width={16}
                        className={`transform transition-transform duration-300 ${details ? 'rotate-180' : 'rotate-0 opacity-55'}`}
                    />
                </button>
            </div>
            {details && (
                <div className={`${style['animate-slide-up']} relative bg-white shadow-lg w-[95%] p-5 rounded-xl mt-3`}>
                    <Image
                        src="/assets/svg/icone-IA.svg"
                        alt="icone de IA"
                        objectFit="cover"
                        height={16}
                        width={16}
                        className="absolute top-2 right-2"
                        style={{ filter: 'invert(50%) sepia(100%) saturate(500%) hue-rotate(200deg)' }}
                    />
                    <div className="prose max-w-none">
                      <ReactMarkdown
                        components={{
                          h1: ({node, ...props}) => <h1 className="text-2xl font-bold my-2" {...props} />,
                          h2: ({node, ...props}) => <h2 className="text-xl font-semibold my-2" {...props} />,
                          h3: ({node, ...props}) => <h3 className="text-lg font-medium my-2" {...props} />,
                          p: ({node, ...props}) => <p className="text-base my-2" {...props} />,
                          ul: ({node, ...props}) => <ul className="list-disc list-inside my-2" {...props} />,
                          ol: ({node, ...props}) => <ol className="list-decimal list-inside my-2" {...props} />,
                          li: ({node, ...props}) => <li className="ml-4" {...props} />,
                          strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
                          em: ({node, ...props}) => <em className="italic" {...props} />,
                          blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-2" {...props} />,
                        }}
                      >
                        {markDownText} 
                      </ReactMarkdown>
                    </div>
                </div>
            )}
        </div>
    )

}