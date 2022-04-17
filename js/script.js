///////////////////// DARKTHEME
const html = document.querySelector("html");
const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
  html.classList.toggle("dark-mode");
});

///////////////////// MODAL
let btn = document.getElementById("btn");
let span = document.getElementsByClassName("close")[0];

// Função para aparecer o modal
function openModal(mn) {
  let modal = document.getElementById(mn);

  if (typeof modal == "undefined" || modal === null) return;

  modal.style.display = "Block";
  //Ao clicar no botão, o body ficará sem a barra de rolagem:
  document.body.style.overflow = "hidden";

  // Ao clicar fora do modal ele fica com display: none
  window.addEventListener("click", function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Quando clicar a tecla 'esc' do teclado fecha o modal
  window.addEventListener("keydown", function (e) {
    if (e.keyCode == 27 && modal.style.display == "block") {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
}

function closeModal(mn) {
  let modal = document.getElementById(mn);
  if (typeof modal == "undefined" || modal === null) return;
  modal.style.display = "none";
  //Ao clicar no botão, o body ficará sem a barra de rolagem:
  document.body.style.overflow = "auto";
}

// Inspirações para o modal:
// https://codepen.io/chomikoo/pen/oWWapq
// https://www.youtube.com/watch?v=NXdjf6GJSKo&ab_channel=SatellaSoft
