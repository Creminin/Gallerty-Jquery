$(document).ready(function () {
  $('#NewImg').click(() => {
    $('form').slideDown();
  })

  $('#Cancel').click(() => {
    $('form').slideUp();
  });

  $('form').on('submit', (e) => {
    e.preventDefault();
  })
})