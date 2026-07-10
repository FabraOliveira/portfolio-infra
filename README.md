# Portfólio Infraestrutura e Redes

🚀 Bem-vindo ao meu portfólio profissional!

Este projeto é uma vitrine do meu trabalho como **Técnico em Informática com foco em Infraestrutura e Redes**, onde apresento minha trajetória, competências desenvolvidas, habilidades técnicas e projetos realizados em ambientes corporativos.

[🔗 Acesse o portfólio online](https://fabraoliveira.github.io/portfolio-infra/#inicio)

---

## 👨‍💻 Sobre

Sou Fabricio de Oliveira Bimbi, profissional de TI com foco em **Infraestrutura e Redes**, formado em **Análise e Desenvolvimento de Sistemas** e **Bacharelado em Engenharia de Software**.

Atuo com suporte técnico, manutenção de computadores, redes corporativas, cabeamento estruturado, Active Directory, GPO, padronização de estações, documentação técnica e apoio em projetos de infraestrutura.

Atualmente também curso **Redes de Computadores**, buscando aprofundar meus conhecimentos em ambientes corporativos, conectividade, segurança e administração de redes.

---

## 📁 Estrutura do projeto

```text
portfolio-infra/
├── index.html          # Página principal (SPA estática)
├── styles.css          # Todos os estilos (dark/light theme, componentes)
├── script.js           # Lógica: tema, menu mobile, carrossel, modal dinâmico
├── img/                # Ícones e imagens dos projetos e UI
│   ├── AutoPrev--tema-claro.png
│   ├── Alura--tema-escuro.png
│   ├── EmBreve--tema-claro.png
│   ├── EmBreve--tema-escuro.png
│   ├── UniToledo-Claro.png / UniToledo-Escuro.png
│   ├── Excel--tema-claro.png / Excel.png
│   └── ... (demais ícones de UI e redes sociais)
├── projetos/
│   └── integracao-unitoledo/
│       └── index.html  # Página de detalhes do projeto UniToledo
└── .agents/            # Configuração do Antigravity (AG Kit)
    ├── memory/
    │   ├── MEMORY.md
    │   └── project-conventions.md
    └── ...
```

---

## 🗂️ Ordem das seções (navegação)

A página segue esta sequência fixa de seções:

1. **Início** — Hero com apresentação e painel de status técnico
2. **Sobre** — Texto de apresentação e métricas de experiência
3. **Projetos** — Carrossel com cards de projetos
4. **Competências** — Grid de habilidades técnicas por área
5. **Contato** — Links de redes sociais e e-mail

---

## 🗃️ Projetos exibidos (ordem do carrossel)

| # | Projeto | Botões | Status |
|---|---|---|---|
| 1 | Integração de Infraestrutura — UniToledo Wyden | Ver detalhes (página interna) | ✅ Publicado |
| 2 | AutoPrev | Ver detalhes (modal) + Ver repositório | 🔗 GitHub |
| 3 | Planilha financeira | Ver detalhes (modal) + Repositório | 🔗 GitHub |
| 4 | Software de Pós Formatação Coorp | Ver status (modal) | 🚧 Em breve |
| 5 | Modernização de Equipamentos | Ver status (modal) | 🚧 Em breve |

> **Regra de botões:** projetos sem repositório público exibem apenas "Ver status". Projetos com repositório exibem dois botões lado a lado (ghost style, hover azul).

---

## 🎨 Padrões de design

- **Tema**: Dark por padrão, com alternância para Light via botão no header
- **Botões primários (hero)**: filled accent (`var(--accent)`)
- **Botões de projeto (`.project-actions`)**: ghost/outline, hover → fundo azul com sombra luminosa
- **Modal dinâmico**: `openModal(text)` injeta texto específico por projeto
- **Ícones de projeto**: dois arquivos por projeto (`--tema-claro.png` / `--tema-escuro.png`)
- **Tema claro/escuro para ícones**: controlado via classes `.project-img-light` e `.project-img-dark`

---

## 📬 Contato

- [LinkedIn](https://www.linkedin.com/in/fabricio-de-oliveira-bimbi-516719223/)
- ✉️ Email: fabricio.bimbi@outlook.com.br

## 🔐 Licença

Este projeto está licenciado sob os termos da licença MIT.

> Feito por Fabricio de Oliveira.
