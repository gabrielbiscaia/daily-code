// Referenciado elementos da tela
var btn_arrow = document.getElementById("arrow");
var img_background = document.getElementById("img-background");
var img_character1 = document.getElementById("img-character1");
var img_character2 = document.getElementById("img-character2");
var speaker = document.getElementById("speaker");
var text = document.getElementById("text");

// Efeito de digitação
const typewriter = new Typewriter(text, {
    autoStart: true,
    strings: "Eita, que horas será que são em?",
    loop: false,
    delay: 15,
    pauseFor: 0,
    cursor: "",
})

// Definindo os dados para cada parte do jogo
var gameData = [
    // Parte 1 - Quarto
    {
        black_screen_transition: false,
        id: 1,
        speaker: "Enzo",
        text: "MEU DEUS JÁ SÃO 6 HORAS",
        img_character1: "../img/enzo.png",
        img_character2: "",
        main_character1: true,
        background: "../img/bedroom.png",
        audio: "",
    },
    {
        black_screen_transition: false,
        id: 2,
        speaker: "Enzo",
        text: "Ta na hora de levantar! Hoje eu tenho prova de lógica de programação, não posso me atrasar de maneira alguma.",
        img_character1: "../img/enzo.png",
        img_character2: "",
        main_character1: true,
        background: "../img/bedroom.png",
        audio: "",
    },
    {
        black_screen_transition: false,
        id: 3,
        speaker: "Enzo",
        text: "E falando em prova, não estudei quase nada... Que que eu faço agora.",
        img_character1: "../img/enzo.png",
        img_character2: "",
        main_character1: true,
        background: "../img/bedroom.png",
        audio: "",
    },
    {
        black_screen_transition: false,
        id: 4,
        speaker: "Enzo",
        text: "E se eu...",
        img_character1: "../img/enzo.png",
        img_character2: "",
        main_character1: true,
        background: "../img/bedroom.png",
        audio: "",
    },
    {
        black_screen_transition: false,
        id: 5,
        speaker: "Enzo",
        text: "Já sei, vou estudando para prova conforme eu vou indo pra faculdade!",
        img_character1: "../img/enzo.png",
        img_character2: "",
        main_character1: true,
        background: "../img/bedroom.png",
        audio: "",
    },
    {
        black_screen_transition: false,
        id: 6,
        speaker: "Enzo",
        text: "Assim vou treinando minha lógica de programação pra ir com a cabeça fresca pra faculdade!",
        img_character1: "../img/enzo.png",
        img_character2: "",
        main_character1: true,
        background: "../img/bedroom.png",
        audio: "",
    },
    {
        black_screen_transition: false,
        id: 7,
        speaker: "Enzo",
        text: "Vou tomar um banho pra ver se eu acordo, preciso estar 100% acordado para fazer essa prova.",
        img_character1: "../img/enzo.png",
        img_character2: "",
        main_character1: true,
        background: "../img/bedroom.png",
        audio: "",
    },
    // Parte 2 - Banheiro
    {
        black_screen_transition: true,
        id: 8,
        speaker: "Enzo",
        text: "... Cara o que vai cair na prova mesmo?",
        img_character1: "../img/enzo.png",
        img_character2: "",
        main_character1: true,
        background: "../img/enzo-bath.png",
        audio: "",
    },
    {
        black_screen_transition: false,
        id: 9,
        speaker: "Enzo",
        text: "Estrutura condicional... Laços de repetições... Filas... Vou tomar um banho pra ver se eu acordo, preciso estar 100% acordado para fazer essa prova.Pilha",
        img_character1: "../img/enzo.png",
        img_character2: "",
        main_character1: true,
        background: "../img/bedroom.png",
        audio: "",
    },
    {
        black_screen_transition: false,
        id: 10,
        speaker: "Enzo",
        text: "É, acho que é só isso mesmo.",
        img_character1: "../img/enzo.png",
        img_character2: "",
        main_character1: true,
        background: "../img/bedroom.png",
        audio: "",
    },
    {
        black_screen_transition: false,
        id: 11,
        speaker: "Enzo",
        text: "Ta, como eu posso pensar na utilização de uma estrutura condicional para tomar banho?",
        img_character1: "../img/enzo.png",
        img_character2: "",
        main_character1: true,
        background: "../img/bedroom.png",
        audio: "",
    },
    {
        black_screen_transition: false,
        id: 12,
        speaker: "Enzo",
        text: "Ja sei",
        img_character1: "../img/enzo.png",
        img_character2: "",
        main_character1: true,
        background: "../img/bedroom.png",
        audio: "",
    },
];

function nextStep() {
    console.log("Entrou")
    // Verifique se ainda há etapas restantes
    if (gameData.length > 0) {
        // Obtenha os dados da próxima etapa
        var nextData = gameData.shift();

        // Atualize os elementos da tela com os dados da próxima etapa
        speaker.textContent = nextData.speaker;

        // Reproduza o áudio, se houver
        if (nextData.audio) {
            // Código para reproduzir o áudio
        }

        // Digite o texto da próxima etapa usando o Typewriter
        typewriter
            .deleteAll(1)
            .typeString(nextData.text)
            .start();
    } else {
        // Se não houver mais etapas, você pode fazer algo, como encerrar o jogo ou mostrar uma mensagem de conclusão
        console.log("Fim do jogo!");
    }
}

btn_arrow.addEventListener("click", nextStep);


// Funcao para fazer a transição e desativar o botao
// Fazer as letras terem o efeito de escrevendo