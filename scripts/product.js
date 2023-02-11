/* fetch('./data.json')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    setDados(json);
    criaCardsCategory('earphones');
  }); */

let dados;

fetch('./data.json')
  .then((response) => response.json())
  .then((json) => {
    dados = json;
  })
  .then(() => {
    console.log(dados);
  });

const imgs = document.querySelectorAll('.gallery_img');
imgs.forEach((img, index) => {
  img.src = `/assets/product-xx59-headphones/mobile/image-gallery-${
    index + 1
  }.jpg`;
});
