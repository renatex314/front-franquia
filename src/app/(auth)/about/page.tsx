import AppIcon from "@/components/AppIcon";

const SobreNosPage = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      <div className="flex flex-col bg-white p-16 rounded-md w-[60%] mx-auto mt-10 mb-10 text-lg select-none">
        <AppIcon className="w-60 h-60 mx-auto inline mb-10" res="high" />
        <p className="mb-3">
          A Global Speaking é uma escola de idiomas que oferece cursos de
          diversas línguas para pessoas de todas as idades e níveis de
          proficiência. Nossa missão é proporcionar aos nossos alunos uma
          experiência de aprendizagem dinâmica, divertida e eficaz, que os
          prepare para se comunicar com confiança em um mundo globalizado.
        </p>
        <p className="mb-3">
          Na Global Speaking, você vai aprender um novo idioma, fazer novos
          amigos, ampliar seus horizontes e abrir novas oportunidades.
        </p>
        <p className="mb-3">Aqui, a sua imaginação é o limite.</p>
      </div>
    </div>
  );
};

export default SobreNosPage;
