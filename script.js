 // LISTA DAS IMAGENS
    var imagens = [
        "mascote.jpeg",
        "taça.jpeg",
        "neymar.jpeg"
    ]

    // IMAGEM ATUAL
    var atual = 0

    // PEGA A TAG IMG
    var imagem = document.querySelector("#imagem")

    // PRÓXIMA FOTO
    function proxima() {

        atual++

        if (atual > 2) {
            atual = 0
        }

        imagem.src = imagens[atual]
    }

    // FOTO ANTERIOR
    function voltar() {

        atual--

        if (atual < 0) {
            atual = 2
        }

        imagem.src = imagens[atual]
    }
    
function atualizarContador() {
    const dataCopa = new Date("June 11, 2026 00:00:00");
    const hoje = new Date();

    const diferenca = dataCopa - hoje;

    const dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

    document.getElementById("contador").innerHTML =
        `Faltam ${dias} dias para a Copa do Mundo de 2026!`;
}

atualizarContador();