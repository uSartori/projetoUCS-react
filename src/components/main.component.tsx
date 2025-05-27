import React from "react";
import ProfileComponent from "./profile.component";

const MainComponent = () => {
  return (
    <main className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Autores disponíveis na biblioteca:</h2>
        <ProfileComponent
          name="STEPHEN KING"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Stephen_King_at_the_2024_Toronto_International_Film_Festival_2_%28cropped%29.jpg/1200px-Stephen_King_at_the_2024_Toronto_International_Film_Festival_2_%28cropped%29.jpg"
          descricao={`Stephen King é um dos escritores mais famosos e prolíficos do gênero horror, suspense e fantasia. Nascido em 1947, ele publicou dezenas de livros e contos que se tornaram clássicos modernos, muitos adaptados para o cinema e TV. 
Seu estilo marcante mistura elementos sobrenaturais com psicologia humana, explorando o medo e o suspense de forma única.
Algumas das suas obras mais conhecidas incluem "Carrie", "O Iluminado", "It – A Coisa" e "À Espera de um Milagre". King é conhecido também por seu compromisso com a escrita e por influenciar toda uma geração de escritores. 
Sua carreira já dura mais de cinco décadas e ele continua ativo até hoje.`}
        />
      </div>
    </main>
  );
};

export default MainComponent;
