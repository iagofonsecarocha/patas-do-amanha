# Instituto Patas do Amanhã 🐾

Plataforma web fictícia desenvolvida para uma ONG de proteção animal, como projeto integrador da disciplina de **Desenvolvimento Web**.  
O objetivo é permitir que a organização apresente seus projetos, engaje voluntários e facilite a captação de recursos, aplicando HTML5, CSS3, JavaScript e boas práticas de acessibilidade, versionamento e deploy.

---

## 🔧 Tecnologias utilizadas

- **HTML5 semântico**
- **CSS3** (Design System, Flexbox, Grid, responsividade)
- **JavaScript** (manipulação de DOM, SPA básica, validação)
- **GitHub Pages** para deploy

---


## 📁 Estrutura de pastas

├─ assets/
│  │  ├─ styles.css        # Arquivo principal que importa os módulos
│  │  ├─ variables.css     # Design system (cores, tipografia, espaçamento)
│  │  ├─ layout.css        # Layout geral (hero, grid, seções, footer)
│  │  ├─ navbar.css        # Cabeçalho, navegação, menu mobile, submenu
│  │  ├─ components.css    # Botões, cards, formulários, alerts, modal, SPA
│  │  └─ utilities.css     # Classes utilitárias, skip-link, temas
│  ├─ img/
│  │  ├─ hero-animais.png
│  │  ├─ voluntarios-projetos.jpg
│  │  └─ cadastro-voluntarios.jpg
│  └─ js/
│     └─ scripts.js        # Máscaras, SPA, validação e modal
├─ index.html              # Página inicial
├─ projetos.html           # Página de projetos sociais
└─ cadastro.html           # Página de cadastro de voluntários

🧩 Funcionalidades principais
Estrutura de páginas
Home (index.html)
Hero com chamada para os projetos
Seção “Quem somos”
Seção “Missão, Visão e Valores”
SPA com navegação dinâmica (Sobre / Projetos / Voluntariado)
Informações de contato
Projetos (projetos.html)
Listagem de projetos em destaque (cards responsivos)
Badges para categorização (ex.: Adoção, Urgente)
Seções de voluntariado e doações com âncoras para navegação rápida

Cadastro (cadastro.html)

Formulário completo com:
Nome completo
E-mail
CPF
Telefone
Data de nascimento
Endereço, CEP, Cidade, Estado
Máscaras de input (CPF, telefone, CEP)
Modal com termos de participação
Mensagens de validação visual


♿ Acessibilidade (WCAG 2.1 AA)

O projeto implementa diversos recursos de acessibilidade:
HTML semântico: uso de header, main, section, footer, nav, h1–h3.
Leitores de tela:
Link de “Ir para o conteúdo principal” (skip-link).

# Instituto Patas do Amanhã 🐾

SPA com região dinâmica marcada com aria-live="polite".
Navegação por teclado:
Todos os botões e links são elementos nativos (<a>, <button>).

---

## 🔗 Demonstração

- **Site em produção:** [Acesse aqui](https://iagofonsecarocha.github.io/patas-do-amanha/)
- **Repositório:** [GitHub](https://github.com/iagofonsecarocha/patas-do-amanha)

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 semântico**
- **CSS3** (Design System, Flexbox, Grid, responsividade)
- **JavaScript** (manipulação de DOM, SPA básica, validação)
- **Git & GitHub** (GitFlow, commits semânticos, releases)
- **GitHub Pages** para deploy

---

## 📁 Estrutura de Pastas

```text
patas-do-amanha/
├─ assets/
│  ├─ css/
│  │  ├─ styles.css        # Arquivo principal que importa os módulos
│  │  ├─ variables.css     # Design system (cores, tipografia, espaçamento)
│  │  ├─ layout.css        # Layout geral (hero, grid, seções, footer)
│  │  ├─ navbar.css        # Cabeçalho, navegação, menu mobile, submenu
│  │  ├─ components.css    # Botões, cards, formulários, alerts, modal, SPA
│  │  └─ utilities.css     # Classes utilitárias, skip-link, temas
│  ├─ img/
│  │  ├─ hero-animais.png
│  │  ├─ voluntarios-projetos.jpg
│  │  └─ cadastro-voluntarios.jpg
│  └─ js/
│     └─ scripts.js        # Máscaras, SPA, validação e modal
├─ index.html              # Página inicial
├─ projetos.html           # Página de projetos sociais
└─ cadastro.html           # Página de cadastro de voluntários
```

---

## 🧩 Funcionalidades Principais

### Estrutura de Páginas

- **Home (`index.html`)**
	- Hero com chamada para os projetos
	- Seção “Quem somos”
	- Seção “Missão, Visão e Valores”
	- SPA com navegação dinâmica (Sobre / Projetos / Voluntariado)
	- Informações de contato
- **Projetos (`projetos.html`)**
	- Listagem de projetos em destaque (cards responsivos)
	- Badges para categorização (ex.: Adoção, Urgente)
	- Seções de voluntariado e doações com âncoras para navegação rápida
- **Cadastro (`cadastro.html`)**
	- Formulário completo com:
		- Nome completo
		- E-mail
		- CPF
		- Telefone
		- Data de nascimento
		- Endereço, CEP, Cidade, Estado
		- Máscaras de input (CPF, telefone, CEP)
		- Modal com termos de participação
		- Mensagens de validação visual

---

## ♿ Acessibilidade (WCAG 2.1 AA)

O projeto implementa diversos recursos de acessibilidade:

- **HTML semântico:** uso de `header`, `main`, `section`, `footer`, `nav`, `h1–h3`.
- **Leitores de tela:**
	- Link de “Ir para o conteúdo principal” (skip-link)
	- `aria-label` na navegação principal
	- SPA com região dinâmica marcada com `aria-live="polite"`
- **Navegação por teclado:**
	- Todos os botões e links são elementos nativos (`<a>`, `<button>`)
	- Submenu de “Projetos” acessível por hover e `:focus-within`
- **Contraste:**
	- Paleta de cores com contraste mínimo de 4.5:1
	- Modo alto contraste e modo escuro, ativados por botões no cabeçalho
- **Temas acessíveis:**
	- Padrão
	- Alto contraste (fundo claro + texto preto + cores fortes)
	- Modo escuro (fundo escuro + texto claro)
	- Preferência de tema salva em `localStorage`

---

## 🖥️ SPA Básica (Single Page Application)

Na página inicial, há uma seção que simula uma SPA:

- Botões: Sobre a ONG, Projetos, Quero ser voluntário
- Conteúdo carregado dinamicamente com JavaScript (templates)
- Área dinâmica com `aria-live="polite"` para leitores de tela

---

## ✅ Validação e Máscaras de Formulário

Implementado em `assets/js/scripts.js`:

- **Máscaras:**
	- CPF → 000.000.000-00
	- Telefone → com DDD e 8/9 dígitos
	- CEP → 00000-000
- **Validação avançada:**
	- Nome: mínimo 3 caracteres
	- E-mail: regex simples
	- CPF: 11 dígitos numéricos
	- Telefone: 10 a 11 dígitos
	- Data de nascimento: idade ≥ 18 anos
	- CEP: 8 dígitos
	- Estado: 2 letras (sigla)
- **Feedback visual:**
	- Bordas verdes para campos válidos
	- Bordas vermelhas e mensagem de erro para inválidos
	- Alerta em caso de envio inconsistente

---

## 🔄 Versionamento (Git / GitHub)

O repositório segue uma estratégia inspirada no GitFlow:

- **Branches principais:**
	- `main` → produção (deploy)
	- `develop` → desenvolvimento
- **Branches de feature:**
	- `feature/spa-home`
	- `feature/validacao-form`
	- `feature/acessibilidade-temas`
- **Commits semânticos:**
	- `feat(spa): adiciona templates dinâmicos na home`
	- `fix(form): corrige máscara de telefone`
	- `style(hero): ajusta layout em duas colunas`
	- `docs(readme): documenta fluxo de deploy`
- **Releases:**
	- `v1.0.0` – Estrutura base de páginas e layout
	- `v1.1.0` – SPA, validação avançada e acessibilidade
- **Issues e milestones** para organização das entregas

---

## 🚀 Deploy (GitHub Pages)

Deploy realizado via GitHub Pages, branch `main`.

**Passos:**
1. Commit das alterações na branch `main`
2. Push para o GitHub
3. Configuração: Settings → Pages → Deploy from branch → `main` / root
4. Aguardar publicação em: `https://<usuario>.github.io/patas-do-amanha/`

---

## 📦 Entregas da Disciplina

- **Entrega 1 – HTML5:** Estrutura semântica, seções institucionais e formulário completo
- **Entrega 2 – CSS3:** Design System, layout responsivo, componentes visuais
- **Entrega 3 – JavaScript:** SPA básica, máscaras, validação, modal de termos
- **Entrega 4 – Versão final:** GitFlow, acessibilidade, temas, README e deploy

---

## 👤 Autor

Projeto desenvolvido por **Iago Fonseca da Rocha**
Para fins acadêmicos e de portfólio.
Submenu de “Projetos” abre tanto no hover quanto em :focus-within, permitindo uso apenas por teclado.
Contraste:
Paleta de cores pensada para contraste mínimo de 4.5:1 em texto normal.
Modo de alto contraste e modo escuro, ativados por botões de acessibilidade no cabeçalho.
Temas acessíveis:
Padrão
Alto contraste (fundo claro + texto preto + cores fortes)
Modo escuro (fundo escuro + texto claro)
Preferência de tema salva em localStorage.
SPA básica (Single Page Application)
Na página inicial, há uma seção que simula uma SPA:
Botões:
Sobre a ONG

Projetos

Quero ser voluntário

Conteúdo carregado dinamicamente com JavaScript, usando um objeto de templates.

Área dinâmica com aria-live="polite" para melhor experiência em leitores de tela.

✅ Validação e máscaras de formulário

Implementado em assets/js/scripts.js:

Máscaras:

CPF → 000.000.000-00

Telefone → com DDD e 8/9 dígitos

CEP → 00000-000

Validação avançada:

Nome com mínimo de 3 caracteres

E-mail com regex simples

CPF com 11 dígitos numéricos

Telefone entre 10 e 11 dígitos

Data de nascimento com verificação de idade (≥ 18 anos)

CEP com 8 dígitos

Estado com 2 letras (sigla)

Feedback visual:

Bordas verdes para campos válidos

Bordas vermelhas e mensagem de erro para campos inválidos

Alerta em caso de envio com dados inconsistentes

🔄 Versionamento (Git / GitHub)

O repositório segue uma estratégia simplificada inspirada no GitFlow:

Branches principais:

main → código em produção (deploy)

develop → código em desenvolvimento

Branches de feature:

feature/spa-home

feature/validacao-form

feature/acessibilidade-temas

Commits semânticos:

feat(spa): adiciona templates dinâmicos na home

fix(form): corrige máscara de telefone

style(hero): ajusta layout em duas colunas

docs(readme): documenta fluxo de deploy

Releases com versionamento semântico:

v1.0.0 – Estrutura base de páginas e layout

v1.1.0 – SPA, validação avançada e acessibilidade

Issues e milestones foram utilizados para organizar as entregas da disciplina (SPA, validação, acessibilidade, README e deploy).

🚀 Deploy (GitHub Pages)

O deploy é feito com GitHub Pages, utilizando a branch main.

Passos gerais:

Commit das alterações na branch main.

Push para o GitHub.

Configuração em: Settings → Pages → Deploy from branch → main / root.


📝 Entregas da disciplina

Entrega 1 – HTML5

Páginas: index.html, projetos.html, cadastro.html

Estrutura semântica, seções institucionais e formulário completo.

Entrega 2 – CSS3

Design System com variáveis CSS (cores, tipografia, espaçamento).

Layout responsivo com Grid 12 colunas e Flexbox.

Cards, botões, formulários, badges e modal.

Entrega 3 – JavaScript

SPA básica com templates em JS.

Máscaras de formulário.

Validação avançada de consistência de dados.

Modal de termos com abertura/fechamento dinâmicos.

Entrega 4 – Versão final

GitFlow, commits semânticos, tags e releases.

Acessibilidade alinhada à WCAG 2.1 AA.

Temas de alto contraste e modo escuro.

README profissional e deploy via GitHub Pages.

👤 Autor

Projeto desenvolvido por Iago Fonseca da Rocha
Para fins acadêmicos e de portfólio.