fetch('./data.json')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    setDados(json);
    criaCardsCategory('speakers');
  });

// Pega o fetch do json e o salva em uma variável dados no sessionStorage

function setDados(json) {
  sessionStorage.setItem('dados', JSON.stringify(json));
  console.log(json);
}

//Criando os cards dentro do container

function criaCardsCategory(category) {
  const dados = JSON.parse(sessionStorage.getItem('dados'));
  const containerPai = document.querySelector('.container_produtos_categoria');
  console.log('eai');

  dados.map((objeto) => {
    if (objeto.category === category) {
      containerPai.innerHTML += `   <div class="category_card_container">
      <div class="pai_imagem_category">
      <div class="category_img_container ${objeto.slug}"></div></div>
      <div class="category_details_container">
        ${objeto.new ? '<p class="new_product_tag">NEW PRODUCT</p>' : ''} 
        <h2 class="produto_category_name">${objeto.name}</h2>
        <p class="category_product_details">
         ${objeto.description}
        </p>
        <button class="botao_ver_produto laranja">SEE PRODUCT</button>
      </div>
    </div>
    `;
    }
  });
}
