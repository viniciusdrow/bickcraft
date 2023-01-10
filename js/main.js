$(".rslides").responsiveSlides({
  auto: true,
  speed: 500,
  timeout: 4500,
});

$(".rslides_portfolio").responsiveSlides({
  auto: true,
  speed: 500,
  timeout: 4000,
  pager: true,
});

// Logica Animacao
Visibility.onVisible(function () {
  // Pagina Principal
  setTimeout(() => {
    $(".introducao h1").addClass("animate__animated animate__fadeInDown");
  }, 400);
  setTimeout(() => {
    $(".introducao blockquote").addClass(
      "animate__animated animate__fadeInDown"
    );
  }, 800);
  setTimeout(() => {
    $(".introducao .btn").addClass("animate__animated animate__fadeInDown");
  }, 1200);
  setTimeout(() => {
    $(".animar").addClass("animate__animated animate__fadeInLeft");
  }, 1600);

  // Paginas Secundarias

  setTimeout(() => {
    $(".introducao-interna h1").addClass(
      "animate__animated animate__fadeInDown"
    );
  }, 400);
  setTimeout(() => {
    $(".introducao-interna p").addClass(
      "animate__animated animate__fadeInDown"
    );
  }, 800);
  setTimeout(() => {
    $(".animar-interno").addClass("animate__animated animate__fadeInLeft");
  }, 1200);
});
