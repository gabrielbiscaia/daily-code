import { gameData } from './gameData.js';
import { audioFiles } from './audioData.js';
import { typewriter } from './typewriter.js';
import { questionData } from './questionData.js';

// Declaração de variáveis
// Referenciado elementos da tela
const btn_arrow = document.getElementById("arrow");
const btn_done = document.getElementById("btn-done");
const img_background = document.getElementById("img-background");
const img_character1 = document.getElementById("img-character1");
const img_character2 = document.getElementById("img-character2");
const speaker = document.getElementById("speaker");
const box_question = document.getElementById("box-question");
const box_question_text = document.getElementById("box-question-text");
const blackScreen = document.getElementById("black-screen");

// Instancinado variaveis relacionados as pergunatas
const totalQuestions = questionData.length;
var questionNow;
var totalCorrectAnswers = 0;


// Começo do jogo
callBlackScreen(0, 1000, 3000, false)
playAudio(audioFiles.alarme, 0.3);
audioFiles.background.loop = true;
playAudio(audioFiles.background, 0.04);
setTimeout(function(){
    pauseAudio(audioFiles.alarme)
}, 2200)

function playAudio(audio, volume) {
    audio.volume = volume;
    audio.play();
}

function pauseAudio(audio){
    audio.pause();
}

function enableArrow(){
    btn_arrow.style.display = 'block';
}

function disableArrow(){
    btn_arrow.style.display = 'none';
}

function hideBoxQuestion(){
    box_question.style.display = "none"
}

function nextStep() {
    if (gameData.length > 0) {

        var nextData = gameData.shift();

        if(nextData.black_screen_transition){
            callBlackScreen(100, 1000, 3000,nextData.thereIsQuestion)
        }else{
            if(nextData.thereIsQuestion){
                showQuestion();
            }else{
                hideBoxQuestion();
            }
        }

        speaker.textContent = nextData.speaker;
        img_background.src = nextData.background;

        if (nextData.img_character1 === "") {
            img_character1.style.display = "none";
        } else {
            img_character1.src = nextData.img_character1;
            img_character1.style.display = "block";
        }

        if (nextData.img_character2 === "") {
            img_character2.style.display = "none";
        } else {
            img_character2.src = nextData.img_character2;
            img_character2.style.display = "block";
        }

        if (nextData.audio != "") {
            setTimeout(function(){
                playAudio(nextData.audio, 0.1);
            },200)
        }

        changeText(nextData.text, nextData.thereIsQuestion)

    }
}

function changeText(text, thereIsQuestion){
    typewriter
    .callFunction(()=>{
        disableArrow()
    })
    .deleteAll(0.1)
    .typeString(text)
    .start()
    .callFunction(()=>{
        if(thereIsQuestion){}
        else{enableArrow()}
    });
}

function showQuestion(){
    questionNow = questionData.shift();
    box_question_text.innerHTML = questionNow.questionText;
    box_question.style.display = "block"
}

function verifyAnswer(answer){

    // Se o input estiver vazio
    if(answer == ""){
        var input_answer = document.getElementById("input-answer");
        blink(input_answer);
    }else{
        // Se for a resposta correta
        if(answer == questionNow.correctAnswer){
            playAudio(audioFiles.piter_comemoracao, 0.3);
            totalCorrectAnswers++;
            changeText(questionNow.correctFeedback, false)
        }else{
            playAudio(audioFiles.piter_erro, 0.3)
            changeText(questionNow.wrongFeedback, false)
        }
        hideBoxQuestion();
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
            box_question.style.display = "none";
        }else{
            btn_arrow.style.display = "block";
        }
    }, blackScreenDuration + fadeOutDuration)
    blackScreen.classList.remove("fade-out");

}
function blink(input_answer) {
    var interval = setInterval(function() {
        if (input_answer.style.backgroundColor === "yellow") {
            input_answer.style.backgroundColor = "transparent";
        } else {
            input_answer.style.backgroundColor = "yellow";
        }
    }, 500); // Intervalo de 500 milissegundos (0.5 segundos)

    // Após 3 segundos, para de piscar
    setTimeout(function() {
        clearInterval(interval);
        input_answer.style.backgroundColor = "transparent"; // Retorna à cor padrão
    }, 3000); // Duração total do piscar (3 segundos)
}

btn_arrow.addEventListener("click", ()=>{
    playAudio(audioFiles.button_next, 0.1)
    nextStep();
});

btn_done.addEventListener("click", ()=>{
    var input_answer = document.getElementById("input-answer");
    var answer = input_answer.value.toLowerCase().trim();
    verifyAnswer(answer)
});

