const fotos = [
  ["foto-01.jpg", "Um abraço cheio de carinho em um jardim iluminado", "contain"],
  ["foto-02.jpg", "Nós dois diante de um coração de luz", "cover"],
  ["foto-03.jpg", "Nós dois juntos em um jardim mágico", "cover"],
  ["foto-04.jpg", "Nós dois caminhando de mãos dadas", "cover"],
  ["foto-05.jpg", "Uma celebração especial sob luzes douradas", "cover"],
  ["foto-06.jpg", "Uma noite romântica diante do computador", "cover"],
  ["foto-07.jpg", "Nossas lembranças reunidas em uma colagem", "contain"],
  ["foto-08.jpg", "Nós dois abraçados entre nossas coisas favoritas", "contain"],
  ["foto-09.jpg", "Nós dois juntos planejando nossa história", "contain"],
  ["foto-10.jpg", "Nós dois lado a lado entre cartas e lembranças", "contain"],
];

const slides = document.querySelector("#slides");
const controles = document.querySelector("#controles");
const contador = document.querySelector("#contador");
const album = document.querySelector("#album");
let atual = 0;
let pausado = false;
let inicioToque = null;

fotos.forEach(([arquivo, descricao, ajuste], indice) => {
  const figura = document.createElement("figure");
  figura.className = "slide" + (indice === 0 ? " ativo" : "");
  figura.setAttribute("aria-hidden", indice === 0 ? "false" : "true");

  const imagem = document.createElement("img");
  imagem.src = "./fotos/" + arquivo;
  imagem.alt = indice === 0 ? descricao : "";
  imagem.className = ajuste === "contain" ? "conter" : "cobrir";
  if (indice > 1) imagem.loading = "lazy";
  figura.appendChild(imagem);
  slides.insertBefore(figura, slides.firstChild);

  const ponto = document.createElement("button");
  ponto.type = "button";
  ponto.className = "ponto" + (indice === 0 ? " ativo" : "");
  ponto.setAttribute("aria-label", "Ir para a foto " + (indice + 1));
  ponto.addEventListener("click", () => irPara(indice));
  controles.appendChild(ponto);
});

const elementosSlide = [...document.querySelectorAll(".slide")];
const pontos = [...document.querySelectorAll(".ponto")];

function irPara(indice) {
  atual = (indice + fotos.length) % fotos.length;
  elementosSlide.forEach((slide, i) => {
    const ativo = i === atual;
    slide.classList.toggle("ativo", ativo);
    slide.setAttribute("aria-hidden", ativo ? "false" : "true");
    slide.querySelector("img").alt = ativo ? fotos[i][1] : "";
    pontos[i].classList.toggle("ativo", ativo);
    pontos[i].setAttribute("aria-current", ativo ? "true" : "false");
  });
  contador.textContent = String(atual + 1).padStart(2, "0") + " / " + String(fotos.length).padStart(2, "0");
}

document.querySelector("#anterior").addEventListener("click", () => irPara(atual - 1));
document.querySelector("#proxima").addEventListener("click", () => irPara(atual + 1));
album.addEventListener("mouseenter", () => { pausado = true; });
album.addEventListener("mouseleave", () => { pausado = false; });
album.addEventListener("focusin", () => { pausado = true; });
album.addEventListener("focusout", () => { pausado = false; });
album.addEventListener("touchstart", (evento) => { inicioToque = evento.touches[0]?.clientX ?? null; }, { passive: true });
album.addEventListener("touchend", (evento) => {
  if (inicioToque === null) return;
  const distancia = evento.changedTouches[0].clientX - inicioToque;
  if (Math.abs(distancia) > 45) irPara(atual + (distancia < 0 ? 1 : -1));
  inicioToque = null;
}, { passive: true });

window.setInterval(() => { if (!pausado) irPara(atual + 1); }, 4800);
