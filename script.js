// script.js

const botoes = document.querySelectorAll(".step");
const infoImage = document.getElementById("info-image");
const infoText = document.getElementById("info-text");

const etapasInfo = {
    "Plantio": {
        imagem: "img/plantio.jpeg",
        texto: "O plantio é a primeira etapa essencial na agricultura. Envolve a preparação do solo, a seleção das sementes e o cultivo das plantas. Esta fase é crucial para garantir uma colheita saudável e produtiva. Técnicas modernas de plantio, como o uso de máquinas agrícolas e a rotação de culturas, ajudam a maximizar a eficiência e a sustentabilidade."
    },
    "Crescimento": {
        imagem: "img/plantio.jpeg",
        texto: "Durante a fase de crescimento, as plantas precisam de cuidados contínuos. Isso inclui irrigação adequada, controle de pragas e doenças, e a aplicação de fertilizantes para promover um crescimento saudável. Monitorar o desenvolvimento das plantas é vital para garantir que elas estejam crescendo de maneira uniforme e saudável."
    },
    "Colheita": {
        imagem: "img/colheita.jpeg",
        texto: "A colheita marca o fim do ciclo de cultivo e o início da preparação dos produtos para o consumo ou venda. É uma fase que exige precisão para evitar perdas e garantir a qualidade dos produtos. Técnicas de colheita manual ou mecanizada são utilizadas, dependendo do tipo de cultura e das condições do terreno."
    },
    "Transporte": {
        imagem: "img/transporte.jpeg",
        texto: "Após a colheita, os produtos são transportados para centros de processamento, armazenamento ou diretamente para os mercados. O transporte eficiente é crucial para manter a qualidade dos produtos e reduzir perdas. Veículos especializados e sistemas de logística ajudam a garantir que os produtos cheguem ao destino final em boas condições."
    },
    "Venda": {
        imagem: "img/venda.jpeg",
        texto: "A venda é a última etapa do processo agrícola, onde os produtos chegam ao consumidor final. Seja em feiras, mercados ou supermercados, a apresentação e a qualidade dos produtos influenciam as decisões de compra. A venda direta do produtor ao consumidor também tem ganhado popularidade, promovendo produtos frescos e o comércio justo."
    }
};

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const etapa = botao.textContent;
        if (etapasInfo[etapa]) {
            infoImage.src = etapasInfo[etapa].imagem;
            infoText.textContent = etapasInfo[etapa].texto;
        }
    });
});

document.querySelector(".step").click(); // Mostrar a primeira etapa por padrão
