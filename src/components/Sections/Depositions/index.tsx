import { useEffect, useState } from "react";

import AppCarousel from "@/components/AppCarousel";
import DepostionsCard from "@/components/DepositionsCard";

export default function Depositions() {
  const [windowSize, setWindowSize] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsMobile(window.innerWidth < 768);
      } else {
        setWindowSize(window.innerWidth);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize]);

  return (
    <div className="px-4 bg-depositions bg-cover bg-center lg:pt-10">
      <div className="pt-16 pb-32">
        <h1 className="font-microTecni text-white text-center text-xl lg: sm:mr-16">
          DEPOIMENTOS
        </h1>
      </div>
      <div className="h-[816px] pt-4 pb-72 flex flex-col bg-depositions bg-cover bg-center relative">
        <div className="hidden xl:block absolute top-0 bottom-0 left-0 w-80 bg-gradient-to-r from-black/90 to-transparent z-10"></div>
        <div className="hidden xl:block absolute top-0 bottom-0 right-0 w-80 bg-gradient-to-r from-transparent to-black/90 z-10"></div>

        <div className="w-full">
          <AppCarousel
            centerSlidePercentage={
              windowSize >= 1920
                ? 50
                : windowSize >= 1440
                ? 50
                : isMobile
                ? 50
                : 0
            }
          >
            <DepostionsCard
              deposition="Eu estava procurando uma empresa para criar o site da minha loja de roupas e escolhi a XR Tech por recomendação de um amigo. Foi a melhor decisão que eu poderia ter tomado! O site ficou incrível, com um visual moderno e super fácil de navegar. E o melhor, minhas vendas online aumentaram significativamente desde então. A equipe foi muito atenciosa e compreendeu perfeitamente o que eu queria. Estou extremamente satisfeita!"
              reporterImage="/images/roberto.svg"
              name=" Joana, dona de uma loja de roupas"
            />
            <DepostionsCard
              deposition="Como dono de uma editora independente, eu precisava de uma plataforma online onde pudesse vender meus livros diretamente aos clientes. A XR Tech superou todas as minhas expectativas! Eles criaram uma plataforma personalizada que não só parece ótima, mas também é muito funcional. O processo de compra para os clientes é simples e eficiente. A equipe de desenvolvimento foi muito profissional e sempre disponível para esclarecer minhas dúvidas. Recomendo fortemente seus serviços."
              reporterImage="/images/roberto.svg"
              name="Carlos, proprietário de uma editora"
            />
            <DepostionsCard
              deposition="Eu precisava de um site para promover minhas aulas de yoga e workshops online, e a equipe da XR Tech foi simplesmente incrível. Eles entenderam exatamente o que eu queria: um site sereno, acolhedor e informativo. Eles também me ajudaram a integrar um sistema de reserva e pagamento online, o que facilitou muito minha vida e a dos meus alunos. Agradeço muito pela dedicação e pelo excelente trabalho."
              reporterImage="/images/roberto.svg"
              name="Marina, instrutora de yoga"
            />
            <DepostionsCard
              deposition="Trabalhar com a XR Tech foi uma experiência excepcional. Nossa empresa precisava desenvolver uma plataforma interna complexa para melhorar nossos processos de trabalho, e a equipe deles aceitou o desafio de cabeça erguida. O projeto foi concluído com êxito, dentro do prazo e do orçamento."
              reporterImage="/images/roberto.svg"
              name="Ricardo, gerente de TI"
            />
          </AppCarousel>
        </div>
      </div>
    </div>
  );
}
