(function () {
  "use strict";

  var navToggle = document.getElementById("nav-toggle");
  if (navToggle) {
    document.querySelectorAll(".nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.checked = false;
        navToggle.focus();
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navToggle.checked) {
        navToggle.checked = false;
        navToggle.focus();
      }
    });
  }

  var quicksearch = document.querySelector(".quicksearch");
  if (quicksearch) {
    quicksearch.addEventListener("submit", function (e) {
      var finalidade = quicksearch.querySelector('[name="finalidade"]');
      var tipo = quicksearch.querySelector('[name="tipo"]');
      var destino = finalidade && finalidade.value === "Alugar" ? "alugar.html" : "comprar.html";
      var mapaTipo = { casa: "#cat-casa", apartamento: "#cat-apto", comercial: "#cat-comercial" };
      var ancora = tipo && mapaTipo[tipo.value] ? mapaTipo[tipo.value] : "";
      e.preventDefault();
      window.location.href = destino + ancora;
    });
  }

  var WHATSAPP_NUMERO = "5511940028922";

  function textoDoCampo(form, name, rotulo) {
    var campo = form.querySelector('[name="' + name + '"]');
    if (!campo) return "";
    var valor = (campo.value || "").trim();
    return valor ? rotulo + ": " + valor + "\n" : "";
  }

  function montarMensagem(form, introducao) {
    var linhas = introducao ? introducao + "\n\n" : "";
    linhas += textoDoCampo(form, "nome", "Nome");
    linhas += textoDoCampo(form, "telefone", "Telefone");
    linhas += textoDoCampo(form, "email", "E-mail");
    linhas += textoDoCampo(form, "finalidade", "Quero");
    linhas += textoDoCampo(form, "tipo", "Tipo de imóvel");
    linhas += textoDoCampo(form, "bairro", "Bairro");
    linhas += textoDoCampo(form, "area", "Área (m²)");
    linhas += textoDoCampo(form, "valor", "Valor pretendido");
    linhas += textoDoCampo(form, "mensagem", "Mensagem");
    return linhas.trim();
  }

  function mostrarConfirmacao(form, mensagemFinal) {
    var botao = form.querySelector('button[type="submit"]');
    var textoOriginal = botao ? botao.textContent : "";
    if (botao) {
      botao.disabled = true;
      botao.textContent = "Abrindo o WhatsApp...";
    }
    var aviso = document.createElement("p");
    aviso.textContent = mensagemFinal;
    aviso.style.cssText = "margin-top:14px;padding:12px 14px;background:#eef7f0;border:1px solid #bfe3c9;border-radius:6px;color:#1f6b3c;font-size:.85rem";
    form.appendChild(aviso);
    if (botao) {
      setTimeout(function () {
        botao.disabled = false;
        botao.textContent = textoOriginal;
      }, 4000);
    }
  }

  document.querySelectorAll("form.js-lead-form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var introducao = form.getAttribute("data-intro") || "";
      var mensagem = montarMensagem(form, introducao);
      var url = "https://wa.me/" + WHATSAPP_NUMERO + "?text=" + encodeURIComponent(mensagem);

      window.open(url, "_blank", "noopener");
      mostrarConfirmacao(form, "Prontinho! Abrimos o WhatsApp em outra aba com sua mensagem pronta para enviar.");
    });
  });
})();
