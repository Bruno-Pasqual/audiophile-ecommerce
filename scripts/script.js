/* import ajustaImagens from './functions.js'; */

// console.log(headerContainer.offsetWidth);

window.addEventListener('resize', () => {
  let largura = document.documentElement.clientWidth;
  console.log(typeof largura);
  ajustaImagens(largura);
});

funcaoInicial();

// ! Funções -------------------------------------------------------
function funcaoInicial() {
  let largura = document.documentElement.clientWidth;
  console.log(typeof largura);
  ajustaImagens(largura);
}

//todo -- Funções para fazer a troca das imagens

function ajustaImagens(largura) {
  ajustaImagemHeader(largura);
  ajustaImagensProdutos(largura);
  trocaImagens(largura);
}

function ajustaImagemHeader(largura) {
  let headerContainer = document.getElementById('header');
  largura < 768
    ? (headerContainer.style.backgroundImage = `url("/assets/home/mobile/image-header.jpg")`)
    : largura >= 768 && largura < 1440
    ? (headerContainer.style.backgroundImage = `url("/assets/home/tablet/image-header.jpg")`)
    : largura > 1440
    ? (headerContainer.style.backgroundImage = `url("/assets/home/desktop/image-hero.jpg")`)
    : '';
}

function ajustaImagensProdutos(largura) {
  let zx9Image = document.querySelector('.zx9_img');
  largura < 768
    ? (zx9Image.src = `/assets/home/mobile/image-speaker-zx9.png`)
    : largura >= 768 && largura < 1440
    ? (zx9Image.src = `/assets/home/tablet/image-speaker-zx9.png`)
    : largura >= 1440
    ? (zx9Image.src = `/assets/home/desktop/image-speaker-zx9.png`)
    : '';
}

function trocaImagens(largura) {
  let containerPropaganda = document.querySelector(
    '.imagem_propaganda_container'
  );
  if (largura < 768) {
    containerPropaganda.style.backgroundImage = `/assets/shared/mobile/image-best-gear.jpg`;
  } else if (largura >= 768 && largura < 1440) {
    containerPropaganda.style.backgroundImage = `/assets/shared/tablet/image-best-gear.jpg`;
  } else if (largura >= 1440) {
    containerPropaganda.style.backgroundImage = `/assets/shared/desktop/image-best-gear.jpg`;
  }
}
