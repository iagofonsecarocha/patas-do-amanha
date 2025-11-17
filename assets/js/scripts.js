console.log("Scripts carregados com sucesso.");

/* =========================================================
   MÁSCARAS DE FORMULÁRIO
   ========================================================= */

function aplicarMascaraCPF(valor) {
  return valor
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function aplicarMascaraTelefone(valor) {
  valor = valor.replace(/\D/g, "");

  if (valor.length > 11) {
    valor = valor.slice(0, 11);
  }

  if (valor.length <= 10) {
    return valor
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  } else {
    return valor
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
  }
}

function aplicarMascaraCEP(valor) {
  return valor
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 9);
}

/* =========================================================
   SPA BÁSICA (Single Page Application) + TEMPLATES EM JS
   ========================================================= */

const SPA = {
  templates: {
    sobre: `
      <div>
        <h3 class="spa-view-title">Sobre o Instituto Patas do Amanhã</h3>
        <p>
          O Instituto Patas do Amanhã nasceu do desejo de oferecer uma segunda chance
          para cães e gatos em situação de abandono e maus-tratos. Atuamos com resgate,
          reabilitação, adoção responsável e ações educativas em comunidades vulneráveis.
        </p>
        <p>
          Nossa equipe é formada por voluntários, protetores independentes e profissionais
          da área da saúde animal, sempre guiados pela transparência e pelo respeito à vida.
        </p>
      </div>
    `,
    projetos: `
      <div>
        <h3 class="spa-view-title">Projetos em andamento</h3>
        <ul>
          <li><strong>Vida Nova:</strong> reabilitação de cães vítimas de abandono.</li>
          <li><strong>MiauSeguro:</strong> apoio a gatos feridos com lares temporários.</li>
          <li><strong>Amigo de Pata:</strong> atendimento básico em comunidades vulneráveis.</li>
        </ul>
        <p class="mt-2">
          Para ver mais detalhes, acesse a página de <strong>Projetos</strong> pelo menu principal.
        </p>
      </div>
    `,
    cadastro: `
      <div>
        <h3 class="spa-view-title">Como ser voluntário</h3>
        <p>
          Para participar como voluntário, é importante ter disponibilidade, responsabilidade
          e respeito aos animais. O processo é simples:
        </p>
        <ol>
          <li>Preencha seus dados na página de <strong>Cadastro</strong>.</li>
          <li>Aguarde o contato da equipe de voluntariado.</li>
          <li>Participe de uma conversa de alinhamento e treinamento básico.</li>
        </ol>
        <p class="mt-2">
          Use o formulário oficial na página de Cadastro para enviar suas informações completas.
        </p>
      </div>
    `
  },

  init() {
    const root = document.getElementById("spa-root");
    const buttons = document.querySelectorAll("[data-spa-view]");
    if (!root || !buttons.length) return;

    const renderView = (view) => {
      const template = this.templates[view] || this.templates.sobre;
      root.innerHTML = template;
    };

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const view = btn.dataset.spaView;
        // troca conteúdo
        renderView(view);
        // estados visuais dos botões
        buttons.forEach((b) => {
          if (b === btn) {
            b.classList.add("btn-primary");
          } else {
            b.classList.remove("btn-primary");
          }
        });
      });
    });

    // Tela padrão
    renderView("sobre");
  }
};

/* =========================================================
   VALIDAÇÃO AVANÇADA DE FORMULÁRIO (CONSISTÊNCIA)
   ========================================================= */

const FormValidation = {
  init() {
    const form = document.getElementById("form-cadastro");
    if (!form) return;

    this.form = form;

    const inputs = form.querySelectorAll("input[required]");
    inputs.forEach((input) => {
      input.addEventListener("blur", () => {
        this.validateField(input);
      });
    });

    form.addEventListener("submit", (event) => {
      let allValid = true;

      inputs.forEach((input) => {
        const ok = this.validateField(input);
        if (!ok) {
          allValid = false;
        }
      });

      // Também aproveita a validação nativa do HTML5
      if (!form.checkValidity() || !allValid) {
        event.preventDefault();
        alert(
          "Existem campos com preenchimento incorreto. Revise os campos em vermelho e corrija as informações."
        );
      }
    });
  },

  validators: {
    "nome-completo"(valor) {
      if (valor.trim().length < 3) {
        return "O nome deve ter pelo menos 3 caracteres.";
      }
      return "";
    },
    email(valor) {
      if (!valor) return "Informe um e-mail.";
      // Validação simples de e-mail
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(valor)) {
        return "Informe um e-mail válido (ex: nome@dominio.com).";
      }
      return "";
    },
    cpf(valor) {
      const digitos = valor.replace(/\D/g, "");
      if (digitos.length !== 11) {
        return "O CPF deve ter 11 dígitos numéricos.";
      }
      return "";
    },
    telefone(valor) {
      const digitos = valor.replace(/\D/g, "");
      if (digitos.length < 10 || digitos.length > 11) {
        return "O telefone deve ter DDD e entre 8 e 9 dígitos.";
      }
      return "";
    },
    "data-nascimento"(valor) {
      if (!valor) return "Informe sua data de nascimento.";

      const data = new Date(valor);
      if (Number.isNaN(data.getTime())) {
        return "Data de nascimento inválida.";
      }

      const hoje = new Date();
      let idade = hoje.getFullYear() - data.getFullYear();
      const mes = hoje.getMonth() - data.getMonth();
      if (mes < 0 || (mes === 0 && hoje.getDate() < data.getDate())) {
        idade--;
      }

      if (idade < 18) {
        return "Você precisa ter pelo menos 18 anos para ser voluntário.";
      }
      return "";
    },
    cep(valor) {
      const digitos = valor.replace(/\D/g, "");
      if (digitos.length !== 8) {
        return "O CEP deve ter 8 dígitos numéricos.";
      }
      return "";
    },
    estado(valor) {
      if (valor.trim().length !== 2) {
        return "Use a sigla do estado com 2 letras (ex: SP, RJ).";
      }
      return "";
    }
  },

  validateField(input) {
    const name = input.name;
    const value = input.value || "";
    let message = "";

    if (!value.trim()) {
      message = "Campo obrigatório.";
    } else if (this.validators[name]) {
      message = this.validators[name](value.trim()) || "";
    }

    this.setFieldError(input, message);
    return !message;
  },

  setFieldError(input, message) {
    let errorEl = input.parentElement.querySelector(".error-message");
    if (!errorEl) {
      errorEl = document.createElement("small");
      errorEl.className = "error-message";
      input.parentElement.appendChild(errorEl);
    }

    if (message) {
      errorEl.textContent = message;
      errorEl.style.display = "block";
      input.classList.add("has-error");
    } else {
      errorEl.textContent = "";
      errorEl.style.display = "none";
      input.classList.remove("has-error");
    }
  }
};

/* =========================================================
   INICIALIZAÇÃO GERAL (NAV, MÁSCARAS, MODAL, SPA, FORM)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const cpfInput = document.getElementById("cpf");
  const telefoneInput = document.getElementById("telefone");
  const cepInput = document.getElementById("cep");

  /* NAV MOBILE (HAMBÚRGUER) */
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* SUBMENU (ABRIR NO MOBILE VIA CLICK) */
  const submenuParents = document.querySelectorAll(".has-submenu");

  submenuParents.forEach((item) => {
    const link = item.querySelector(".nav-link-with-submenu");
    if (!link) return;

    link.addEventListener("click", (event) => {
      // Em telas pequenas, evita navegação imediata para permitir abrir o submenu
      if (window.innerWidth <= 768) {
        event.preventDefault();
        item.classList.toggle("open");
      }
    });
  });

  /* FECHAR SUBMENU E MENU MOBILE AO CLICAR NUM LINK DO DROPDOWN */
  const submenuLinks = document.querySelectorAll(".submenu a");
  submenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      submenuParents.forEach((item) => item.classList.remove("open"));

      if (mainNav) {
        mainNav.classList.remove("is-open");
      }
      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  /* MÁSCARAS */
  if (cpfInput) {
    cpfInput.addEventListener("input", (event) => {
      event.target.value = aplicarMascaraCPF(event.target.value);
    });
  }

  if (telefoneInput) {
    telefoneInput.addEventListener("input", (event) => {
      event.target.value = aplicarMascaraTelefone(event.target.value);
    });
  }

  if (cepInput) {
    cepInput.addEventListener("input", (event) => {
      event.target.value = aplicarMascaraCEP(event.target.value);
    });
  }

  /* MODAL DE TERMOS (CADASTRO) */
  const modalOverlay = document.querySelector(".modal-overlay");
  const openModalButtons = document.querySelectorAll(".js-open-modal");
  const closeModalButtons = document.querySelectorAll(".js-close-modal");

  function abrirModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.add("is-open");
    modalOverlay.setAttribute("aria-hidden", "false");
  }

  function fecharModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("is-open");
    modalOverlay.setAttribute("aria-hidden", "true");
  }

  openModalButtons.forEach((btn) => {
    btn.addEventListener("click", abrirModal);
  });

  closeModalButtons.forEach((btn) => {
    btn.addEventListener("click", fecharModal);
  });

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (event) => {
      if (event.target === modalOverlay) {
        fecharModal();
      }
    });
  }

  /* INICIALIZA SPA E VALIDAÇÃO AVANÇADA */
  SPA.init();
  FormValidation.init();
});
