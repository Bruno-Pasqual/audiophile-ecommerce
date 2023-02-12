const circulos = document.querySelectorAll('.circulo_check');
circulos.forEach((circulo) => {
  circulos.forEach((circulO) => {
    circulO.classList.remove('ativo');
  });
  circulo.addEventListener('click', () => {
    removeAtivo(circulos);
    circulo.classList.toggle('ativo');
  });
});

removeAtivo = (circulos) => {
  circulos.forEach((elemento) => {
    elemento.classList.remove('ativo');
  });
};
