// Âncora Imóveis — melhorias progressivas de UX.
// Importante: a navegação por categorias e a galeria de fotos funcionam
// inteiramente em CSS/HTML (inputs radio + :checked), então nada aqui é
// necessário para o site funcionar — é só polimento para quem tem JS ativo.
(function () {
  "use strict";

  // Fecha o menu mobile automaticamente ao tocar em um link.
  var navToggle = document.getElementById("nav-toggle");
  if (navToggle) {
    document.querySelectorAll(".nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.checked = false;
      });
    });
  }

  // Busca rápida do topo/hero: envia para comprar.html ou alugar.html
  // conforme a finalidade escolhida (a busca continua funcionando via
  // envio normal do formulário mesmo sem esta melhoria).
  var quicksearch = document.querySelector(".quicksearch");
  if (quicksearch) {
    var finalidade = quicksearch.querySelector('[name="finalidade"]');
    quicksearch.addEventListener("submit", function () {
      if (finalidade && finalidade.value === "Alugar") {
        quicksearch.setAttribute("action", "alugar.html");
      } else {
        quicksearch.setAttribute("action", "comprar.html");
      }
    });
  }

  // Contador simples de caracteres nas mensagens longas, só como cortesia visual.
  document.querySelectorAll("textarea").forEach(function (area) {
    area.setAttribute("maxlength", "600");
  });
})();
