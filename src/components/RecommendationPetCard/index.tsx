"use client"
import { useState } from "react";
import style  from "./style.module.css";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';

interface Props {
    text: string;
    markDownText: string;
}

export default function RecommendationPetCard({text, markDownText}: Props) {

    const [details, setDetails] = useState(false);
    const markText = `## Cuidados para Affenpinscher Macho (1 ano, 1kg)\n\n**Análise Emocional:**  A análise mostra predominantemente felicidade (60% de precisão em duas medições), com um registro de tristeza (39% de precisão).  A baixa precisão em ambas as classificações indica a necessidade de observação mais cuidadosa do comportamento.\n\n**Cuidados Preventivos:**\n\n* **Vacinação:** Manter o calendário de vacinação em dia.\n* **Vermifugação:** Programa de desparasitação interna e externa regular, conforme orientação veterinária.\n* **Exames:** Consultas veterinárias regulares (pelo menos anualmente) para check-up completo, incluindo avaliação dentária.  Considerar exames de sangue para avaliação de saúde geral.\n\n**Alimentação:**\n\n* **Ração:**  Ração seca de alta qualidade, formulada para cães pequenos de raça miniatura, com proteínas de alta digestibilidade.  Evite rações com alto teor de gordura para prevenir obesidade.  A quantidade deve ser ajustada ao peso e nível de atividade.\n* **Porções:** Dividir a ração em várias refeições ao longo do dia.\n* **Água:** Água fresca disponível sempre.\n\n**Cuidados Específicos da Raça:**\n\n* **Pelagem:** Escovação regular (diária ou a cada dois dias) para prevenir nós e manter a pelagem saudável. Banhos com shampoos específicos para cães.\n* **Dentes:** Escovação regular dos dentes para prevenir problemas dentários comuns em cães pequenos.\n* **Articulações:** Apesar de não ser uma raça com grande propensão a problemas articulares graves, o pequeno porte pode aumentar a vulnerabilidade.  Evitar saltos de grandes alturas e monitorar a atividade física.\n* **Olhos:** Limpeza regular dos olhos, caso necessário, com solução apropriada. Os olhos proeminentes da raça podem ser mais propensos a irritações.\n\n**Considerações Adicionais:**\n\n* **Enriquecimento ambiental:** Brincadeiras, interação e atividades para estimular o cão mental e fisicamente, auxiliando na prevenção de comportamentos indesejáveis e promovendo o bem-estar emocional.  Observar o comportamento para identificar sinais de tristeza ou ansiedade (apatia, falta de apetite, mudanças no sono).  Se necessário, procurar ajuda de um veterinário comportamental.\n* **Monitoramento:** Devido à baixa precisão das análises emocionais, é crucial monitorar o comportamento do cão diariamente, observando alterações no humor, apetite, sono e interação social.\n\n**Observação:**  Estas são recomendações gerais.  Um veterinário deve ser consultado para um plano de cuidados personalizado e adaptado às necessidades específicas do seu cão.\n`

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
                    {text}
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
                        {markText}
                      </ReactMarkdown>
                    </div>
                </div>
            )}
        </div>
    )

}