$(document).ready(function () {
  $('#NewImg').click(() => {
    $('form').slideDown();
  })

  $('#Cancel').click(() => {
    $('form').slideUp();
  });

  $('form').on('submit', (e) => {
    e.preventDefault();
    const novaImagem = $('#LinkImg').val();
    const novoItem = $('<li></li>');

    $(`<img src="${novaImagem}" />`).appendTo(novoItem);

    $(`<div class="Link-Total-Size-Img">
        <a 
        href="${novaImagem}"
        target="_blank"
        title="Abrir imagem em tamanho real"
        >Abrir imagem em tamanho real</a>
    </div>`).appendTo(novoItem);
    $(novoItem).appendTo('ul')

    $('#LinkImg').val('');
  })
})