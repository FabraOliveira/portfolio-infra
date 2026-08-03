# STATE.md — Controle de Contexto
**Sessão:** 2026-08-02 → 2026-08-03 | **Branch:** `main` | **Último commit:** `ef8a852`

---

## ✅ Atividades Concluídas nesta Sessão

### Reestruturação e Atualização dos Cards de Projetos (`index.html` & `README.md`)
- **Novo Card (3º Lugar):** Adicionado card do projeto **`InvScan`** (Automação de inventário de hardware e software via WMI), com texto descritivo, modal dinâmico e link para o repositório GitHub.
- **Card Atualizado (4º Lugar):** Card *Software de Pós Formatação Coorp* renomeado e atualizado para **`FlashConfig`** (Ferramenta open-source de pós-formatação em escala corporativa via pendrive), com botões para modal e repositório GitHub.
- **Card Atualizado (5º Lugar - Último):** Card *Modernização de Equipamentos* atualizado para **`Organização e Higienização dos hacks não conformes — UniToledo Wyden`**, com descrição resumida do projeto de rede e botão de status.
- **Ordem Atualizada do Carrossel:** UniToledo Wyden (1º) → AutoPrev (2º) → InvScan (3º) → FlashConfig (4º) → Organização e Higienização dos Racks UniToledo Wyden (5º).
- **README.md:** Tabela de projetos exibidos e mapa de estrutura do projeto atualizados para refletir exatamente os novos cards.

### Ícones de Projetos & Estilização (`img/` & `styles.css`)
- **Ícones de Projetos:** Adicionados e referenciados os novos pares de ícones:
  - `FlashConfig--tema-claro.png` e `FlashConfig--tema-escuro.png`
  - `InvScan--tema-claro.png` e `InvScan--tema-escuro.png`
- **Padronização de Tamanho de Ícones:** Definida dimensão fixa de `96px x 96px` com `object-fit: contain` para `.project-img`, garantindo alinhamento e proporção entre todos os cards.

### UX do Carrossel Mobile (`styles.css`)
- **Card Peeking:** No modo mobile (`<= 768px`), o card ajusta para `flex: 0 0 85%` com `scroll-snap-align: center`, deixando ~15% do próximo card visível para indicar arrasto horizontal (*swipe*).
- **Setas Compactas:** Reativadas as setas de navegação `.carousel-btn` em tamanho compacto (`36px x 36px`) com *backdrop blur* nas extremidades da tela mobile.

### Git & Deploy
- **Publicação:** Alterações commitadas e enviadas (`git push origin main`) para o repositório público e GitHub Pages.

---

## 🔲 Tarefas Pendentes para a Próxima Iteração

### Projetos — Conteúdo e Documentação
- [ ] Criar ícone/imagem própria para o projeto "Organização e Higienização dos racks UniToledo Wyden" (atualmente utiliza `EmBreve`).
- [ ] Adicionar páginas internas de detalhes (`projetos/autoprev/`, `projetos/flashconfig/`, `projetos/invscan/`) conforme os projetos amadurecerem.
- [ ] Avaliar inclusão de métricas e prints nas modais dos projetos `InvScan` e `FlashConfig`.

### Design / Performance UX
- [ ] Testar animações de scroll reveal (Intersection Observer) para carregamento progressivo das seções.
- [ ] Otimizar/comprimir imagens PNG pesadas da pasta `img/` para acelerar o tempo de carregamento no GitHub Pages.
