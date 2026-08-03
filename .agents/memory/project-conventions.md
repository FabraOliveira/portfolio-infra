---
type: project
created: 2026-05-25
updated: 2026-07-10
---

# Project Conventions

## Git Workflow
- Always create a new dedicated branch for major code changes.
- Branch name format should follow: `feature/[task-slug]` or `fix/[bug-slug]`.
- Commits diretos na `main` são aceitos apenas para hotfixes visuais e correções pontuais de conteúdo.
- Sempre incluir imagens novas no commit junto com o HTML que as referencia. Não subir referências sem o arquivo binário correspondente.

## Estrutura de Ícones de Projeto
- Todo projeto no carrossel deve ter dois arquivos de ícone: `[nome]--tema-claro.png` e `[nome]--tema-escuro.png`.
- Projetos sem repositório público exibem **somente** o botão "Ver status" (sem botão de repositório).
- Projetos com repositório exibem **dois botões** lado a lado: "Ver detalhes" ou "Ver status" + "Ver repositório" / "Repositório".

## Modal Dinâmico
- A função `openModal(text)` em `script.js` aceita um texto como parâmetro e o injeta no `<p>` do modal.
- Cada botão que abre o modal deve passar uma descrição resumida do projeto (máximo 3 linhas / ~200 caracteres).
- Nunca chamar `openModal()` sem argumento em projetos — sempre passar o texto específico do projeto.

## Estilo de Botões nos Projetos
- Botões dentro de `.project-actions` seguem estilo **ghost/outline** (fundo transparente, borda sutil).
- No hover: fundo `var(--accent)` + sombra luminosa + `translateY(-2px)`.
- No active: `scale(0.96)`.
- O flex container `.project-actions` usa `flex-wrap: nowrap` para garantir botões lado a lado.

## Ordem das Seções (Fixa)
A ordem de exibição das seções é imutável sem decisão explícita:
1. Início (hero)
2. Sobre
3. Projetos
4. Competências
5. Contato

## Imagens no GitHub
- Arquivos de imagem adicionados à pasta `img/` devem ser commitados separadamente ou junto com o HTML, nunca deixados como "untracked" após deploy de código que os referencia.
