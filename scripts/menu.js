// Instanciando botões
var btn_start = document.getElementById("button-start");
var btn_cfg = document.getElementById("button-config");
var btn_crd = document.getElementById("button-credits");
var btn_back1 = document.getElementById("btn-back1");
var btn_back2 = document.getElementById("btn-back2");

// Instanciado as box
var box_menu = document.getElementById("box-menu");
var box_cfg = document.getElementById("box-config");
var box_crd = document.getElementById("box-credits");

// Instanciação dos audios
// Objeto para armazenar os áudios pré-carregados
var volume = 50;
const audioFiles = {
  next: new Audio('../audio/menu/botao-avancar.wav'),
  back: new Audio('../audio/menu/botao-voltar.wav'),
};

// Função para reproduzir um áudio pré-carregado
function playAudio(audio) {
  audio.volume = volume/100;
  audio.play();
}

// Quando o usuário clica no botão "Configurações", oculta o menu e exibe as configurações
btn_cfg.onclick = function() {
  playAudio(audioFiles.next);
  box_menu.style.display = "none";
  box_cfg.style.display = "block";
}

// Quando o usuário clica no botão "Créditos", oculta o menu e exibe os créditos
btn_crd.onclick = function() {
  playAudio(audioFiles.next);
  box_menu.style.display = "none";
  box_crd.style.display = "block";
}

btn_back1.onclick = function() {
  playAudio(audioFiles.back);
  box_cfg.style.display = "none";
  box_menu.style.display = "block";
}

btn_back2.onclick = function() {
  playAudio(audioFiles.back);
  box_crd.style.display = "none";
  box_menu.style.display = "block";
}

window.onload = function(){
  slider = document.querySelector(".slider input");
  slider.oninput = function(){
    progressBar = document.querySelector(".slider progress");
    progressBar.value = slider.value;
    sliderValue = document.querySelector(".sliderValue");
    sliderValue.innerHTML = slider.value;
    volume = parseFloat(slider.value);
  }
}

btn_start.addEventListener("click", () =>{
  playAudio(audioFiles.next);
  window.electronAPI.startGame();
})