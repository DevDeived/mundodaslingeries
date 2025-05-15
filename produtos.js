

const botoesComprar = document.querySelectorAll('.adicionar-carrinho');
    botoesComprar.forEach(botao => {
      botao.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
      });
    });

