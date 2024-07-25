const botoes = document.querySelectorAll(".botao");
const imagemEtapa = document.getElementById("imagem-etapa");
const textoEtapa = document.getElementById("texto-etapa");

const etapas = {
    1: {
        imagem: "img/colheita.jpeg",
        texto: "Colheita: A fase final onde os produtos estão prontos para serem colhidos."
    },
    2: {
        imagem: "img/plantio.jpeg",
        texto: "Plantio: A etapa inicial onde as sementes são plantadas no solo."
    },
    3: {
        imagem: "img/transporte.jpeg",
        texto: "Transporte: A fase onde os produtos são transportados do campo para o mercado."
    },
    4: {
        imagem: "img/venda.jpeg",
        texto: "Venda: A etapa final onde os produtos são vendidos para os consumidores."
    }
};

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const etapa = botao.getAttribute('data-etapa');
        
        // Atualiza a imagem e o texto com base na etapa selecionada
        if (etapas[etapa]) {
            imagemEtapa.src = etapas[etapa].imagem;
            textoEtapa.textContent = etapas[etapa].texto;
        }
    });
});
