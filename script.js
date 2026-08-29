const imagemDrive = (id) => "https://drive.google.com/thumbnail?id=" + id + "&sz=w1600";

const midias = [
  ["./fotos/foto-01.jpg", "Um abraço cheio de carinho em um jardim iluminado", "imagem", "contain"],
  ["./fotos/foto-02.jpg", "Nós dois diante de um coração de luz", "imagem", "cover"],
  ["./fotos/foto-03.jpg", "Nós dois juntos em um jardim mágico", "imagem", "cover"],
  ["./fotos/foto-04.jpg", "Nós dois caminhando de mãos dadas", "imagem", "cover"],
  ["./fotos/foto-05.jpg", "Uma celebração especial sob luzes douradas", "imagem", "cover"],
  ["./fotos/foto-06.jpg", "Uma noite romântica diante do computador", "imagem", "cover"],
  ["./fotos/foto-07.jpg", "Nossas lembranças reunidas em uma colagem", "imagem", "contain"],
  ["./fotos/foto-08.jpg", "Nós dois abraçados entre nossas coisas favoritas", "imagem", "contain"],
  ["./fotos/foto-09.jpg", "Nós dois juntos planejando nossa história", "imagem", "contain"],
  ["./fotos/foto-10.jpg", "Nós dois lado a lado entre cartas e lembranças", "imagem", "contain"],
  [imagemDrive("1cQazLREwILrkWWDcZNSJXhZit8f85Ybd"), "Nossa lembrança de 20 de junho de 2026", "imagem", "contain"],
  [imagemDrive("1559Y-GU-elm4d1uDlMecK5FV-6CDS8-7"), "Ilustração da nossa história", "imagem", "contain"],
  [imagemDrive("1DJZRIeLzvxIbT3Bz0GifdBdCLkMAN_5p"), "Ilustração romântica da nossa história", "imagem", "contain"],
  [imagemDrive("14JbFx8hfunpp-PXLYWWurDkr7lhitE6D"), "Nossa lembrança de 3 de julho de 2026", "imagem", "contain"],
  [imagemDrive("1Apq24xFDYZhaz7LFktbMmiP44tiXWGZP"), "Nossa lembrança de 8 de julho de 2026", "imagem", "contain"],
  [imagemDrive("1dbCAlgnmm8-5LU5cgWS_todyUGuJSNUc"), "Mais uma lembrança de 8 de julho de 2026", "imagem", "contain"],
  [imagemDrive("1UQ4WSQZwMpW2jJhNsIdLoKY_yja8UFFf"), "Nós dois em 8 de julho de 2026", "imagem", "contain"],
  [imagemDrive("18OrOFbCr_ez0ECDJM9-fvpdy3BJMZl-n"), "Nossa tarde de 18 de julho de 2026", "imagem", "contain"],
  [imagemDrive("157Ry3kX5LVXE0RQFeWOXLa7foJci42XI"), "Nós dois juntos em 18 de julho de 2026", "imagem", "contain"],
  [imagemDrive("1mwSos5lhCGeEk4ioqkkLXV_T8nL9uvrp"), "Uma lembrança especial de 18 de julho de 2026", "imagem", "contain"],
  [imagemDrive("1OjWj8TNYkuKhuWa8mNBN2xrBq8DetDu6"), "Nossa lembrança de julho de 2026", "imagem", "contain"],
  ["./videos/lembranca-01.mp4", "Vídeo de uma lembrança nossa em julho", "video"],
  [imagemDrive("1EfR6HrCQy5Ut_-gVCinhj_MRSou5icoq"), "Nossa lembrança de 30 de julho de 2026", "imagem", "contain"],
  ["./videos/lembranca-02.mp4", "Vídeo de uma lembrança nossa", "video"],
  [imagemDrive("1VwI9vPm1xt7C5uYPzQt5OXIBAzjRUoYv"), "Imagem de uma lembrança em vídeo", "imagem", "contain"],
  [imagemDrive("1Lo3wCN3kNPqK5nHJ7rsV8QnQuAQ2FmKE"), "Nossa madrugada de 9 de agosto de 2026", "imagem", "contain"],
  [imagemDrive("1_hx1NMuFJVxHmMj8eoVrgxvrOfGVUT6f"), "Nós dois em 9 de agosto de 2026", "imagem", "contain"],
  ["./videos/lembranca-03.mp4", "Vídeo da nossa história em agosto", "video"],
  [imagemDrive("1QvcrRBiz4S004WWI1vwmlZYcWXw753xL"), "Nossa lembrança de 11 de agosto de 2026", "imagem", "contain"],
  ["./videos/lembranca-04.mp4", "Vídeo de uma lembrança nossa em agosto", "video"],
  [imagemDrive("1NqcEF91wNtow1loC5InuELelp08-fBmU"), "Ilustração especial do nosso amor", "imagem", "contain"],
  [imagemDrive("1IFnscMRuKQmqJTI0xzvKCUI6p728Q9Kf"), "Ilustração de nós dois", "imagem", "contain"],
  [imagemDrive("1m33izix1c1q2JARWn5G5nOmK2wUPGC16"), "Cena ilustrada da nossa história", "imagem", "contain"],
  [imagemDrive("1QaUkeeFoeXEPKesad3d9q00ODVNKnv28"), "Mais uma cena ilustrada da nossa história", "imagem", "contain"],
  [imagemDrive("1a4nCCe7kvqW8DGy0rGWtPzYFshSGn80_"), "Uma pequena lembrança nossa", "imagem", "contain"],
  [imagemDrive("1_R7wvCf1ZUbTs3lFSjax-ltbCjbZl9L8"), "Uma lembrança compartilhada por mensagem", "imagem", "contain"],
  [imagemDrive("1gUEtW8N9QmjGA8o2jnkUj6qITrWUp479"), "Arte romântica sobre nós dois", "imagem", "contain"],
  [imagemDrive("1u50yfAJAWlq-7Dnrvt-8J0W4SXegEvrC"), "Arte da nossa história juntos", "imagem", "contain"],
  ["./videos/lembranca-05.mp4", "Vídeo de 23 de agosto de 2026", "video"],
  [imagemDrive("16DKOA8fFgnp2pXB7F2XEAYEQbfRhyqsh"), "Cena cinematográfica da nossa história", "imagem", "contain"],
  [imagemDrive("1D4t0pTd7Gi-wtzfeyZ-4txWEDKxHJRTU"), "Nós dois em uma cena de conto de fadas", "imagem", "contain"],
  [imagemDrive("1hrj3JrkPRRdySPOpKM3zV4IJHQ7w33Mi"), "Cena romântica de conto de fadas", "imagem", "contain"],
  [imagemDrive("16f3CPtbTqwOEJlVzQKf2zx9gaCYSYm9T"), "Montagem cinematográfica da nossa história", "imagem", "contain"],
  [imagemDrive("1RYOGN_KFGRtkixzk5SrnbdP3FclyOQoC"), "Cena final cinematográfica do nosso amor", "imagem", "contain"],
  ["./videos/lembranca-06.mp4", "Vídeo especial de 26 de agosto de 2026", "video"],
  [imagemDrive("14UX4kPTV5I0gOBXuruthgyeNtrsrUoP0"), "Nossa lembrança de 26 de agosto de 2026", "imagem", "contain"],
  [imagemDrive("10jvGoXB0DTo-uQN1xzu8JnmP2AcgQRGH"), "Última ilustração da nossa história", "imagem", "contain"],
];

const album = document.querySelector("#album");
const introAmor = document.querySelector("#intro-amor");
const storyOverlay = document.querySelector("#story-overlay");
const conteudo = document.querySelector("#conteudo");
const rodape = document.querySelector("#rodape");
const galeria = document.querySelector("#galeria");
const videoAbertura = document.querySelector("#video-abertura");
const iniciarStory = document.querySelector("#iniciar-story");
const ativarSomStory = document.querySelector("#ativar-som-story");
const slides = document.querySelector("#slides");
const controles = document.querySelector("#controles");
const contador = document.querySelector("#contador");
const tipoMidia = document.querySelector("#tipo-midia");
let atual = 0;
let pausado = false;
let aberturaAtiva = true;
let somAtivo = false;
let inicioToque = null;

midias.forEach(([src, descricao, tipo, ajuste], indice) => {
  const figura = document.createElement("figure");
  figura.className = "slide" + (indice === 0 ? " ativo" : "");
  figura.setAttribute("aria-hidden", indice === 0 ? "false" : "true");

  if (tipo === "imagem") {
    const imagem = document.createElement("img");
    imagem.src = src;
    imagem.alt = indice === 0 ? descricao : "";
    imagem.className = ajuste === "contain" ? "conter" : "cobrir";
    if (indice > 1) imagem.loading = "lazy";
    figura.appendChild(imagem);
  } else {
    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.className = "video-slide";
    video.setAttribute("aria-label", descricao);
    video.setAttribute("playsinline", "");
    video.addEventListener("error", () => {
      figura.dataset.erro = "true";
      video.controls = false;
    });
    video.addEventListener("ended", () => irPara(atual + 1));
    figura.appendChild(video);
  }
  // Keep DOM order aligned with `midias`, so navigation points match slides.
  slides.appendChild(figura);

  const ponto = document.createElement("button");
  ponto.type = "button";
  ponto.className = "ponto" + (indice === 0 ? " ativo" : "");
  ponto.setAttribute("aria-label", "Ir para " + descricao.toLowerCase());
  if (tipo === "video") ponto.innerHTML = '<span class="marcador-video" aria-hidden="true"></span>';
  ponto.addEventListener("click", () => irPara(indice));
  controles.appendChild(ponto);
});

const elementosSlide = [...document.querySelectorAll(".slide")];
const pontos = [...document.querySelectorAll(".ponto")];

function concluirAbertura() {
  aberturaAtiva = false;
  videoAbertura.pause();
  storyOverlay.hidden = true;
  conteudo.hidden = false;
  rodape.hidden = false;
  irPara(0);
}

function reproduzirAbertura() {
  videoAbertura.muted = !somAtivo;
  const tentativa = videoAbertura.play();
  if (tentativa) {
    tentativa.then(() => { iniciarStory.hidden = true; }).catch(() => { iniciarStory.hidden = false; });
  }
}

function ativarSom() {
  somAtivo = true;
  videoAbertura.muted = false;
  videoAbertura.volume = 1;
  ativarSomStory.hidden = true;
  reproduzirAbertura();
}

window.setTimeout(() => {
  introAmor.hidden = true;
  storyOverlay.hidden = false;
  videoAbertura.currentTime = 0;
  videoAbertura.muted = true;
  reproduzirAbertura();
}, 4300);

function irPara(indice) {
  atual = (indice + midias.length) % midias.length;
  elementosSlide.forEach((slide, i) => {
    const ativo = i === atual;
    slide.classList.toggle("ativo", ativo);
    slide.setAttribute("aria-hidden", ativo ? "false" : "true");
    const imagem = slide.querySelector("img");
    const video = slide.querySelector("video");
    if (imagem) imagem.alt = ativo ? midias[i][1] : "";
    if (video) {
      if (!ativo) video.pause();
      if (ativo && video.readyState === 0) video.load();
    }
    pontos[i].classList.toggle("ativo", ativo);
    pontos[i].setAttribute("aria-current", ativo ? "true" : "false");
  });
  tipoMidia.textContent = midias[atual][2] === "video" ? "vídeo" : "foto";
  contador.textContent = String(atual + 1).padStart(2, "0") + " / " + String(midias.length).padStart(2, "0");
  // Scroll only the indicator strip; `scrollIntoView` could horizontally
  // scroll the whole page and crop the desktop layout.
  const pontoAtual = pontos[atual];
  controles.scrollTo({
    left: pontoAtual.offsetLeft - (controles.clientWidth - pontoAtual.offsetWidth) / 2,
    behavior: "smooth",
  });
}

videoAbertura.addEventListener("ended", concluirAbertura);
videoAbertura.addEventListener("canplay", reproduzirAbertura);
videoAbertura.addEventListener("play", () => { iniciarStory.hidden = true; });
videoAbertura.addEventListener("error", () => { iniciarStory.hidden = false; });
iniciarStory.addEventListener("click", reproduzirAbertura);
ativarSomStory.addEventListener("click", ativarSom);
document.querySelector("#fechar-abertura").addEventListener("click", concluirAbertura);
document.querySelector("#anterior").addEventListener("click", () => irPara(atual - 1));
document.querySelector("#proxima").addEventListener("click", () => irPara(atual + 1));
album.addEventListener("mouseenter", () => { pausado = true; });
album.addEventListener("mouseleave", () => { pausado = false; });
album.addEventListener("focusin", () => { pausado = true; });
album.addEventListener("focusout", () => { pausado = false; });
album.addEventListener("touchstart", (evento) => { inicioToque = evento.touches[0]?.clientX ?? null; }, { passive: true });
album.addEventListener("touchend", (evento) => {
  if (inicioToque === null || aberturaAtiva) return;
  const distancia = evento.changedTouches[0].clientX - inicioToque;
  if (Math.abs(distancia) > 45) irPara(atual + (distancia < 0 ? 1 : -1));
  inicioToque = null;
}, { passive: true });

window.setInterval(() => {
  if (!aberturaAtiva && !pausado && midias[atual][2] !== "video") irPara(atual + 1);
}, 4800);
