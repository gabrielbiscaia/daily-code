// Declaração de variáveis
// Referenciado elementos da tela
var btn_arrow = document.getElementById("arrow");
var img_background = document.getElementById("img-background");
var img_character1 = document.getElementById("img-character1");
var img_character2 = document.getElementById("img-character2");
var speaker = document.getElementById("speaker");
var text = document.getElementById("text");

// Instancia da black screen
var blackScreen = document.getElementById("black-screen");

// Instanciação do objeto para armazenar os áudios pré-carregados
const audioFiles = {
    piter_comemoracao: new Audio('../audio/character/piter-comemoracao.wav'),
    piter_entendeu: new Audio('../audio/character/piter-entendeu.wav'),
    piter_erro: new Audio('../audio/character/piter-erro.wav'),
    piter_feliz: new Audio('../audio/character/piter-feliz.wav'),
    piter_irritado: new Audio('../audio/character/piter-irritado.wav'),
    piter_surpreso: new Audio('../audio/character/piter-surpreso.wav'),
};

// Instancia do efeito de digitação
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
        speaker: "Piter",
        text: "MEU DEUS JÁ SÃO 6 HORAS",
        img_character1: "",
        img_character2: "",
        main_character1: true,
        background: "../img/piter-waking.png",
        audio: audioFiles.piter_comemoracao,
    },
    {
        black_screen_transition: false,
        id: 2,
        speaker: "Piter",
        text: "Ta na hora de levantar! Hoje eu tenho prova de lógica de programação, não posso me atrasar de maneira alguma.",
        img_character1: "",
        img_character2: "",
        main_character1: true,
        background: "../img/piter-shower.png",
        audio: audioFiles.piter_entendeu,
    },
    {
        black_screen_transition: false,
        id: 3,
        speaker: "Piter",
        text: "E falando em prova, não estudei quase nada... Que que eu faço agora.",
        img_character1: "",
        img_character2: "",
        main_character1: true,
        background: "../img/piter-car.png",
        audio: audioFiles.piter_erro,
    },
    {
        black_screen_transition: false,
        id: 4,
        speaker: "Piter",
        text: "E se eu...",
        img_character1: "",
        img_character2: "",
        main_character1: true,
        background: "../img/piter-waking.png",
        audio: audioFiles.piter_surpreso,
    },
    {
        black_screen_transition: false,
        id: 5,
        speaker: "Piter",
        text: "Já sei, vou estudando para prova conforme eu vou indo pra faculdade!",
        img_character1: "",
        img_character2: "",
        main_character1: true,
        background: "../img/piter-waking.png",
        audio: "",
    },
    {
        black_screen_transition: false,
        id: 6,
        speaker: "Piter",
        text: "Assim vou treinando minha lógica de programação pra ir com a cabeça fresca pra faculdade!",
        img_character1: "",
        img_character2: "",
        main_character1: true,
        background: "../img/piter-waking.png",
        audio: "",
    },
    {
        black_screen_transition: false,
        id: 7,
        speaker: "Piter",
        text: "Vou tomar um banho pra ver se eu acordo, preciso estar 100% acordado para fazer essa prova.",
        img_character1: "",
        img_character2: "",
        main_character1: true,
        background: "../img/piter-waking.png",
        audio: "",
    },
];

callBlackScreen(0, 4000, 2000)

// Função para reproduzir um áudio pré-carregado
function playAudio(audio) {
    audio.play();
}

function nextStep() {
    // Verifique se ainda há etapas restantes
    if (gameData.length > 0) {
        // Obtenha os dados da próxima etapa
        var nextData = gameData.shift();

        // Atualize os elementos da tela com os dados da próxima etapa
        speaker.textContent = nextData.speaker;
        img_background.src = nextData.background;

        if (nextData.img_character1 === "") {
            img_character1.style.display = "none";
        } else {
            img_character1.style.display = "block"; // Ou qualquer outro valor que você precise
            img_character1.src = nextData.img_character1;
        }

        if (nextData.img_character2 === "") {
            img_character2.style.display = "none";
        } else {
            img_character2.style.display = "block"; // Ou qualquer outro valor que você precise
            img_character2.src = nextData.img_character2;
        }

        // Reproduza o áudio, se houver
        if (nextData.audio != "") {
            nextData.audio.volume = 0.3;
            playAudio(nextData.audio);
        }

        // Digite o texto da próxima etapa usando o Typewriter
        typewriter
            .deleteAll(0.1)
            .typeString(nextData.text)
            .start();
    } else {
        // Se não houver mais etapas, você pode fazer algo, como encerrar o jogo ou mostrar uma mensagem de conclusão
        console.log("Fim do jogo!");
    }
}

function callBlackScreen (fadeInDuration, fadeOutDuration, blackScreenDuration){
    blackScreen.style.display = "block"

    // Define a duração da transição de fade-in
    blackScreen.style.setProperty("--fade-in-duration", fadeInDuration + "ms");

    // Adiciona uma classe para ativar a transição de fade-in
    blackScreen.classList.add("fade-in");

    // Aguarda um curto período de tempo antes de remover a classe para garantir que o fade-in tenha tempo para completar
    setTimeout(function() {
        // Define a duração da transição de fade-out
        blackScreen.style.setProperty("--fade-out-duration", fadeOutDuration + "ms");

        // Remove a classe para ativar a transição de fade-out
        blackScreen.classList.remove("fade-in");

        // Adiciona uma classe para iniciar a transição de fade-out
        blackScreen.classList.add("fade-out");

        setTimeout(function(){
            blackScreen.style.display = "none"
        }, 3000)

    }, blackScreenDuration);
}

btn_arrow.addEventListener("click", nextStep);

