// Seleciona todos os elementos .circle e a barra de progresso
const circles = document.querySelectorAll(".circle");
const progressBar = document.querySelector(".indicator");

// Função para atualizar a barra de progresso
function updateProgressBar() {
  const activeCircles = document.querySelectorAll(".circle.active");
  let progress = (activeCircles.length - 1) / (circles.length - 1) * 100;
  progressBar.style.width = `${progress}%`;
}

// Chame a função de atualização da barra de progresso para configurá-la inicialmente
updateProgressBar();
