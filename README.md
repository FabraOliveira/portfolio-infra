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
├── styles.css          # Todos os estilos (dark/light theme, componentes, simulador GUI)
├── script.js           # Lógica: tema, menu mobile responsivo, carrossel de projetos
├── img/                # Ícones e imagens dos projetos e UI
│   ├── Antes/          # Imagens do estado inicial dos racks (comparativo)
│   ├── Depois/         # Imagens do estado final higienizado e organizado (comparativo)
│   ├── AutoPrev--tema-claro.png
│   ├── FlashConfig--tema-claro.png / FlashConfig--tema-escuro.png
│   ├── InvScan--tema-claro.png / InvScan--tema-escuro.png
│   ├── UniToledo-Claro.png / UniToledo-Escuro.png
│   └── ... (demais ícones de UI e redes sociais)
├── projetos/
│   ├── autoprev/
│   │   └── index.html  # Landing page do projeto AutoPrev
│   ├── flashconfig/
│   │   └── index.html  # Landing page do projeto FlashConfig (com Simulador Fiel da GUI)
│   ├── higienizacao-racks-unitoledo/
│   │   └── index.html  # Página de detalhes do projeto Padronização de Racks
│   ├── integracao-unitoledo/
│   │   └── index.html  # Página de detalhes do projeto UniToledo
│   └── invscan/
│       └── index.html  # Landing page do projeto InvScan
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
| 2 | Padronização de Racks | Ver detalhes (página interna) | ✅ Publicado |
| 3 | AutoPrev | Ver detalhes (página interna) + Ver repositório | 🔗 GitHub |
| 4 | InvScan | Ver detalhes (página interna) + Ver repositório | 🔗 GitHub |
| 5 | FlashConfig | Ver detalhes (página interna) + Ver repositório | 🔗 GitHub |

> **Regra de botões:** Todos os projetos possuem páginas internas completas. Projetos open-source possuem botão adicional direto para o repositório público no GitHub.

---

## 🎨 Padrões de design

- **Tema**: Dark por padrão, com alternância para Light via botão no header
- **Botões primários (hero)**: filled accent (`var(--accent)`)
- **Botões de projeto (`.project-actions`)**: ghost/outline, hover → fundo azul com sombra luminosa
- **Simulador Interativo da GUI**: réplica HTML/CSS/JS idêntica a softwares de desktop para demonstração prática sem dependência de prints
- **Ícones de projeto**: padronizados com dimensão de `96px x 96px` (`object-fit: contain`)
- **Tema claro/escuro para ícones**: controlado via classes `.project-img-light` e `.project-img-dark` com pares `[nome]--tema-claro.png` e `[nome]--tema-escuro.png`
- **Carrossel Mobile**: exibição com card peeking (`85%` de largura para mostrar ~15% do próximo card) e setas compactas visíveis para excelente usabilidade em touch.

---

## 📬 Contato

- [LinkedIn](https://www.linkedin.com/in/fabricio-de-oliveira-bimbi-516719223/)
- ✉️ Email: fabricio.bimbi@outlook.com.br

## 🔐 Licença

Este projeto está licenciado sob os termos da licença MIT.

> Feito por Fabricio de Oliveira.
