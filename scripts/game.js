import { gameData } from './gameData.js';
import { audioFiles } from './audioData.js';
import { typewriter } from './typewriter.js';

// Declaração de variáveis
// Referenciado elementos da tela
const btn_arrow = document.getElementById("arrow");
const img_background = document.getElementById("img-background");
const img_character1 = document.getElementById("img-character1");
const img_character2 = document.getElementById("img-character2");
const speaker = document.getElementById("speaker");
const text = document.getElementById("text");
const box_question = document.getElementById("box-question");
var blackScreen = document.getElementById("black-screen");
var black_screen_transition;
var thereIsQuestion;


// Começo do jogo
callBlackScreen(0, 2500, 2000, false)
audioFiles.alarme.volume = 0.3;
playAudio(audioFiles.alarme);
audioFiles.background.volume = 0.06;
playAudio(audioFiles.background);
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

