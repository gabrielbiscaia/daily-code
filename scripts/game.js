// Declaração de variáveis
// Referenciado elementos da tela
var btn_arrow = document.getElementById("arrow");
var img_background = document.getElementById("img-background");
var img_character1 = document.getElementById("img-character1");
var img_character2 = document.getElementById("img-character2");
var speaker = document.getElementById("speaker");
var text = document.getElementById("text");
var box_question = document.getElementById("box-question");
var black_screen_transition;
var thereIsQuestion;

// Instancia da black screen
var blackScreen = document.getElementById("black-screen");

// Instanciação do objeto para armazenar os áudios pré-carregados
const audioFiles = {
    // Audios do piter
    piter_comemoracao: new Audio('../audio/character/piter-comemoracao.wav'),
    piter_entendeu: new Audio('../audio/character/piter-entendeu.wav'),
    piter_erro: new Audio('../audio/character/piter-erro.wav'),
    piter_feliz: new Audio('../audio/character/piter-feliz.wav'),
    piter_irritado: new Audio('../audio/character/piter-irritado.wav'),
    piter_surpreso: new Audio('../audio/character/piter-surpreso.wav'),
    // Audios transição
    alarme: new Audio('../audio/environment/alarme.wav'),
    cafe: new Audio('../audio/environment/cafe.wav'),
    carro: new Audio('../audio/environment/carro.wav'),
    porta: new Audio('../audio/environment/porta.wav'),
    restaurante: new Audio('../audio/environment/restaurante.wav'),
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
        speaker: "Piter",
        text: "MEU DEUS JÁ SÃO 6 HORAS",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-waking.png",
        audio: audioFiles.piter_irritado,
        thereIsQuestion: true,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Ta na hora de levantar! Hoje eu tenho prova de lógica de programação, não posso me atrasar de maneira alguma.",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-waking.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "E falando em prova, não estudei quase nada... Que que eu faço agora.",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-waking.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "E se eu...",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-waking.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Já sei, vou estudando para prova conforme eu vou indo pra faculdade!",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-waking.png",
        audio: audioFiles.piter_comemoracao,
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Assim vou treinando minha lógica de programação pra ir com a cabeça fresca pra prova!",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-waking.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Vou tomar um banho pra ver se eu acordo, preciso estar 100% acordado para fazer essa prova.",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-waking.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: true,
        speaker: "Piter",
        text: "... Cara o que vai cair na prova mesmo?",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-shower.png",
        audio: audioFiles.porta,
        thereIsQuestion: false,
    },
];

// Começo do jogo
callBlackScreen(0, 3000, 3000, false)
audioFiles.alarme.volume = 0.3;
playAudio(audioFiles.alarme);
setTimeout(function(){
    pauseAudio(audioFiles.alarme)
}, 2200)

// Função para reproduzir um áudio pré-carregado
function playAudio(audio) {
    audio.play();
}

function pauseAudio(audio){
    audio.pause();
}

function nextStep() {
    if (gameData.length > 0) {
        var nextData = gameData.shift();

        if(nextData.black_screen_transition){
            callBlackScreen(100, 1000, 2000,nextData.thereIsQuestion)
        }else{
            if(nextData.thereIsQuestion){
                box_question.style.display = "block"
            }else{
                box_question.style.display = "none"
            }
        }

        speaker.textContent = nextData.speaker;
        img_background.src = nextData.background;

        if (nextData.img_character1 === "") {
            img_character1.style.display = "none";
        } else {
            img_character1.style.display = "block";
            img_character1.src = nextData.img_character1;
        }

        if (nextData.img_character2 === "") {
            img_character2.style.display = "none";
        } else {
            img_character2.style.display = "block";
            img_character2.src = nextData.img_character2;
        }

        if (nextData.audio != "") {
            nextData.audio.volume = 0.3;
            setTimeout(function(){
                playAudio(nextData.audio);
            },200)
        }

        typewriter
            .deleteAll(0.1)
            .typeString(nextData.text)
            .start();
    }
}

function callBlackScreen (fadeInDuration, fadeOutDuration, blackScreenDuration, thereIsQuestion){
    btn_arrow.style.display = 'none';

    blackScreen.style.setProperty("--fade-in-duration", fadeInDuration + "ms");
    blackScreen.classList.add("fade-in");

    setTimeout(function() {
        blackScreen.style.setProperty("--fade-out-duration", fadeOutDuration + "ms");
        blackScreen.classList.remove("fade-in");
        blackScreen.classList.add("fade-out");

    }, blackScreenDuration);

    setTimeout(function(){
        if(thereIsQuestion){
            box_question.style.display = "block";
        }else{
            btn_arrow.style.display = 'block';
        }
    }, blackScreenDuration + 1000)
    blackScreen.classList.remove("fade-out");

}

btn_arrow.addEventListener("click", nextStep);

