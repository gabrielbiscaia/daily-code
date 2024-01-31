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

// Quando o usuário clica no botão "Configurações", oculta o menu e exibe as configurações
btn_cfg.onclick = function() {
  box_menu.style.display = "none";
  box_cfg.style.display = "block";
}

// Quando o usuário clica no botão "Créditos", oculta o menu e exibe os créditos
btn_crd.onclick = function() {
  box_menu.style.display = "none";
  box_crd.style.display = "block";
}

btn_back1.onclick = function() {
  box_cfg.style.display = "none";
  box_menu.style.display = "block";
}

btn_back2.onclick = function() {
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
  }
}