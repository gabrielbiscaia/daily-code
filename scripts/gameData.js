import { audioFiles } from "./audioData.js";

const gameData = [
    // Parte 1 - Quarto
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
        text: "E falando em prova, não estudei quase nada...",
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
        audio: audioFiles.piter_feliz,
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
        text: "Vou tomar um banho pra ver se eu acordo, preciso estar 100% acordado para a prova.",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-waking.png",
        audio: "",
        thereIsQuestion: false,
    },
    // Parte 2 - Banheiro
    {
        black_screen_transition: true,
        speaker: "Piter",
        text: "... O que vai cair na prova mesmo?",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-shower.png",
        audio: audioFiles.porta,
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Estruturas condicionais... Laços de repetições... Filas... e Pilha.",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-shower.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "É, acho que é só isso mesmo.",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-shower.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Ta, como eu posso pensar na utilização de uma <b>estrutura condicional</b> para tomar banho?",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-shower.png",
        audio: "",
        thereIsQuestion: true,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Falando em banho, bora-la!",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-shower.png",
        audio: audioFiles,
        thereIsQuestion: false,
    },
    {
        black_screen_transition: true,
        speaker: "Piter",
        text: "Sensação boa! Banho tomado e cabeça fresca!",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-shower.png",
        audio: audioFiles.shower,
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Acho que agora vou ir tomar um café da manhã, preciso de energia para pensar na hora da prova.",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-shower.png",
        audio: "",
        thereIsQuestion: false,
    },
    // Parte 3 - Cozinha
    {
        black_screen_transition: true,
        speaker: "Piter",
        text: "Beleza, café... hmmm... lógica de programação... pensamento computacional...",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-coffee.png",
        audio: audioFiles.porta,
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Bom, da para eu fazer diversas comparações aqui... Vou utilizar um <b>laço de repetição</b> e uma <b>estrutura condicional</b>.",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-coffee.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Vamos começar com um <b>laço de repetição</b>.",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-coffee.png",
        audio: "",
        thereIsQuestion: true,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Mas parando para pensar, se eu for despejando água sem parar... é perigoso transbordar.",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-coffee.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Logo, devo utilizar algo para evitar isso, uma <b>estrutura condicional</b>. Pensando na <b>linguagem C</b> ficaria algo tipo...",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-coffee.png",
        audio: "",
        thereIsQuestion: true,
    },
    {
        black_screen_transition: true,
        speaker: "Piter",
        text: "O beleza, cafezinho tomado... cafeina no sangue... agora to acordado para prova!",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-coffee.png",
        audio: audioFiles.cafe,
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Mas... Tem a louça pra lavar ainda...",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-coffee.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "...",
        img_character1: "",
        img_character2: "",
        background: "../img/pile-dishes.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "E quanta louça! Parece que comeram um banquete antes de mim!",
        img_character1: "",
        img_character2: "",
        background: "../img/pile-dishes.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Vamos ver se consigo tirar algo bom disso... A louça me lembra muito a <b>estrutura</b> de uma...",
        img_character1: "",
        img_character2: "",
        background: "../img/pile-dishes.png",
        audio: "",
        thereIsQuestion: true,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Certo, então eu vou lavar essa louça <b>desempilhando</b> um prato de cada vez!",
        img_character1: "",
        img_character2: "",
        background: "../img/pile-dishes.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: true,
        speaker: "Piter",
        text: "Certo, agora é ir para faculdade, vou ir de carro, vamos ver se consigo comparar"+ 
        " outra situação do dia a dia com algum trecho de código.",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-coffee.png",
        audio: audioFiles.washing_dishes,
        thereIsQuestion: false,
    },
    // Parte 4 - Carro
    {
        black_screen_transition: true,
        speaker: "Piter",
        text: "Em 5 minutinhos chego na faculdade...",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-car.png",
        audio: audioFiles.carro_ligar,
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Cara não consegui pensar em nada que tenha haver com pensamento comp...",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-car.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: true,
        speaker: "Piter",
        text: "QUE SUSTO! Quase furei o sinal vermelho!",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-car.png",
        audio: audioFiles.carro_frear,
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Isso! O sinal! Pensando na <b>linguagem C</b>, qual a <b>condição</b> de cada luz do semaforo?",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-car.png",
        audio: "",
        thereIsQuestion: true,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Olha! Abriu o semáforo! Vamos la!",
        img_character1: "",
        img_character2: "",
        background: "../img/piter-car.png",
        audio: "",
        thereIsQuestion: false,
    },
    // Parte 5 - Faculdade
    {
        black_screen_transition: true,
        speaker: "Piter",
        text: "Ufa, até que enfim cheguei na faculdade... foi até que rapidinho.",
        img_character1: "../img/piter.png",
        img_character2: "",
        background: "../img/university.png",
        audio: audioFiles.carro_ligar,
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "...",
        text: "Eae Piter, tudo certo?",
        img_character1: "../img/piter.png",
        img_character2: "",
        background: "../img/university.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Fala Bryan, to bem e você?",
        img_character1: "../img/piter.png",
        img_character2: "../img/bryan.png",
        background: "../img/university.png",
        audio: audioFiles.piter_feliz,
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Bryan",
        text: "Ótimo também meu querido.",
        img_character1: "../img/piter.png",
        img_character2: "../img/bryan.png",
        background: "../img/university.png",
        audio: audioFiles.bryan_rindo,
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Bryan",
        text: "Piter deixa eu te falar, tava afim de pegar um lanche ali no R.U antes da prova."+ 
        " Saí de casa muito cedo por causa do busão e não comi nada, você quer vir comigo?",
        img_character1: "../img/piter.png",
        img_character2: "../img/bryan.png",
        background: "../img/university.png",
        audio: audioFiles.bryan_irritado,
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Lógico irmão, temos um tempinho livre até a prova, vamos lá.",
        img_character1: "../img/piter.png",
        img_character2: "../img/bryan.png",
        background: "../img/university.png",
        audio: audioFiles.piter_entendeu,
        thereIsQuestion: false,
    },
    // Parte 6 - Cantina
    {
        black_screen_transition: true,
        speaker: "Bryan",
        text: "Rapaz quanta gente...",
        img_character1: "../img/piter.png",
        img_character2: "../img/bryan.png",
        background: "../img/restaurant.png",
        audio: audioFiles.restaurante,
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Bryan",
        text: "Cara, se você quiser pode ir para sala, fica à vontade, não sei quanto tempo vai demorar aqui.",
        img_character1: "../img/piter.png",
        img_character2: "../img/bryan.png",
        background: "../img/restaurant.png",
        audio: audioFiles.bryan_decepcionado,
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Relaxa Bryan, eu fico aqui com você, não importa se essa...",
        img_character1: "../img/piter.png",
        img_character2: "../img/bryan.png",
        background: "../img/restaurant.png",
        audio: audioFiles.piter_feliz,
        thereIsQuestion: true,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Ou seja, logo mais a gente é atendido.",
        img_character1: "../img/piter.png",
        img_character2: "../img/bryan.png",
        background: "../img/restaurant.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Bryan",
        text: "Sim, sim. Assim que geral que ta na nossa frente na <b>fila</b> for atendidos, será a nossa vez.",
        img_character1: "../img/piter.png",
        img_character2: "../img/bryan.png",
        background: "../img/restaurant.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Bryan",
        text: "Alias, obrigado por me acompanhar piter!",
        img_character1: "../img/piter.png",
        img_character2: "../img/bryan.png",
        background: "../img/restaurant.png",
        audio: audioFiles.bryan_rindo,
        thereIsQuestion: false,
    },
    // Parte 7 - Sala de Prova
    {
        black_screen_transition: true,
        speaker: "Piter",
        text: "É, chegou a hora. Daqui não passa.",
        img_character1: "../img/piter.png",
        img_character2: "",
        background: "../img/classroom.png",
        audio: audioFiles.background,
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "Felizmente passei por situações do cotidiano em que apliquei o <b>pensamento computacional</b> para resolver os problemas.",
        img_character1: "../img/piter.png",
        img_character2: "",
        background: "../img/classroom.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "E consequentemente, aprimorei minha lógica de programação!",
        img_character1: "../img/piter.png",
        img_character2: "",
        background: "../img/classroom.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Ana",
        text: "Alunos, por favor, deixem em cima da cadeira, somente lápis, caneta, borracha e se quiserem a garrafa de água.",
        img_character1: "../img/piter.png",
        img_character2: "../img/ana.png",
        background: "../img/classroom.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Ana",
        text: "Se eu pegar alguém colando é <b>ZERO</b> na hora!",
        img_character1: "../img/piter.png",
        img_character2: "../img/ana.png",
        background: "../img/classroom.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: false,
        speaker: "Piter",
        text: "PARTIU!",
        img_character1: "../img/piter.png",
        img_character2: "../img/ana.png",
        background: "../img/classroom.png",
        audio: "",
        thereIsQuestion: false,
    },
    {
        black_screen_transition: true,
        speaker: "Gabriel Biscaia",
        text: "",
        img_character1: "",
        img_character2: "",
        background: "../img/university.png",
        audio: audioFiles.button_encerrar,
        thereIsQuestion: false,
    }
];

export { gameData };