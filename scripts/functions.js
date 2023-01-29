//! Funções para alterar as imagens utilizadas nas divs -----------------

function ajustaImagens(largura) {
  console.log('funcao exportada');
  ajustaImagemHeader(largura);
  ajustaImagensProdutos(largura);
}

function ajustaImagemHeader(largura) {
  let headerContainer = document.getElementById('header');
  largura <= 375
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
