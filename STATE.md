# STATE.md — Controle de Contexto
**Sessão:** 2026-07-10 | **Branch:** `main` | **Último commit:** `2af1025`

---

## ✅ Atividades Concluídas nesta Sessão

### CSS — Modernização de Botões (`styles.css`)
- Adicionado `filter: brightness(0.88)` no hover de `.btn` e `.mini-btn` (efeito escurecimento)
- Adicionado `transform: scale(0.96)` no `:active` (efeito de clique físico)
- Botões em `.project-actions` convertidos para estilo **ghost/outline** (fundo transparente)
- Hover dos botões de projeto: fundo `var(--accent)` + sombra luminosa + elevação
- `.project-actions` alterado para `flex-wrap: nowrap` e `gap: 8px` para botões lado a lado
- `.project-actions .mini-btn` com `flex: 1` para divisão igual de largura

### HTML — Reorganização de Seções (`index.html`)
- Nav atualizado: adicionado link "Início"; nova ordem → Início / Sobre / Projetos / Competências / Contato
- Seções do `<main>` reordenadas para refletir nova sequência de navegação

### HTML — Reestruturação dos Projetos (`index.html`)
- **Removidos:** Portfólio Full Stack, Redes Sociais
- **Adicionados:** AutoPrev, Software de Pós Formatação Coorp
- **Nova ordem do carrossel:** UniToledo → AutoPrev → Planilha financeira → Pós Formatação Coorp → Modernização
- Regra de botões aplicada por projeto (ver `project-conventions.md`)
- Botão "Repositório" removido de Pós Formatação Coorp e Modernização de Equipamentos

### JS — Modal Dinâmico (`script.js`)
- `openModal()` refatorado para `openModal(text)` — injeta texto específico no `<p>` do modal
- Cada botão `Ver detalhes` / `Ver status` passa descrição resumida do respectivo projeto

### Imagens (`img/`)
- Adicionados e commitados ao GitHub: `AutoPrev--tema-claro.png`, `Alura--tema-escuro.png`, `EmBreve--tema-claro.png`, `EmBreve--tema-escuro.png`
- Ícones de AutoPrev, Pós Formatação Coorp e Modernização de Equipamentos atualizados no HTML

### GitHub — Commits publicados
| Commit | Descrição |
|---|---|
| `750741a` | feat: reestruturação de seções, modernização de botões e novos projetos |
| `030e242` | fix: botões ghost com hover azul, texto dinâmico no modal, remoção de repo |
| `8522855` | fix: ícones corretos para AutoPrev, Pós Formatação e Modernização |
| `2af1025` | feat: adiciona imagens AutoPrev, Alura e EmBreve ao repositório |

---

## 🔲 Tarefas Pendentes para a Próxima Iteração

### Projetos — Conteúdo
- [ ] Criar ícone próprio para "Software de Pós Formatação Coorp" (atualmente usa `EmBreve`)
- [ ] Adicionar página de detalhes (`projetos/autoprev/index.html`) quando o projeto AutoPrev estiver documentado
- [ ] Adicionar repositório público do AutoPrev e atualizar link (atualmente `https://github.com/FabraOliveira/AutoPrev`)
- [ ] Adicionar repositório público do Pós Formatação Coorp quando disponível e inserir botão "Repositório"

### Projetos — Conteúdo (Modernização de Equipamentos)
- [ ] Criar página de detalhes quando o projeto estiver concluído
- [ ] Substituir ícone `EmBreve` por imagem real do projeto

### Design / UX
- [ ] Avaliar animação de entrada das seções (scroll reveal / intersection observer)
- [ ] Revisar responsividade do carrossel em telas < 480px (botões podem sobrepor)

### Infraestrutura
- [ ] Configurar `.gitignore` para excluir `.agents/` do repositório público (pasta de agente IA)
- [ ] Considerar compressão das imagens PNG da pasta `img/` para otimizar carregamento no GitHub Pages
