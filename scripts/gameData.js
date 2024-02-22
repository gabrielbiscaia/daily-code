import { audioFiles } from "./audioData.js";

const gameData = [
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

export { gameData };