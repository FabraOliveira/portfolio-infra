# STATE.md — Controle de Contexto
**Sessão:** 2026-08-08 → 2026-08-09 | **Branch:** `main` | **Último commit:** `9252505`

---

## ✅ Atividades Concluídas nesta Sessão

### Página de Detalhes do Projeto — Padronização de Racks
- **Página de Caso Técnico Criada:** [projetos/higienizacao-racks-unitoledo/index.html](file:///c:/Users/fabra/OneDrive/Documentos/Code/Profissional/CodigoAberto/Portfolio%20Infra/projetos/higienizacao-racks-unitoledo/index.html)
  - **Hero Header:** Título "Organização e Higienização de Racks", subtítulo "UniToledo Wyden (Prédios 02 e 03)" e pílulas de estatísticas.
  - **Contexto e Desafio:** Texto reformulado em 3 parágrafos focando na padronização da infraestrutura física, rastreabilidade do cabeamento e higienização técnica individualizada dos equipamentos.
  - **Destaque Troubleshooting:** Card `🚨 Troubleshooting: O Caso do Switch 30` detalhando a identificação de um loop de rede no Laboratório de Química e a desconexão do cabo legado.
  - **Galeria Comparativa por Setor:** Divisão em 6 setores com fotos lado a lado (Hack principal Prédio 03, Tempo Integral I, Lab Info, Lab Química, Biblioteca e Secretaria — Switches 04 e 05).
  - **Proteção Visual:** Aplicados `user-drag: none`, `user-select: none`, `draggable="false"` e `oncontextmenu="return false;"` no CSS/HTML, reforçados por interceptadores `contextmenu` e `dragstart` via JS para impedir download/arrasto ou abertura em nova guia.
  - **Lightbox Modal:** Visualizador em tela cheia via JS com fecho rápido e responsivo.

### Atualização da Página Inicial e Carrossel (`index.html`)
- **Card 2 (Padronização de Racks):** Movido para o 2º lugar no carrossel de projetos, renomeado para "Padronização de Racks", configurado com os ícones corporativos `UniToledo-Claro.png` / `UniToledo-Escuro.png` e botão de link direto "Ver detalhes".

### Documentação & Git
- **README.md:** Árvore de diretórios atualizada para incluir `projetos/higienizacao-racks-unitoledo/` e pastas comparativas `img/Antes/` e `img/Depois/`. Tabela de projetos reordenada.
- **Git & Deploy:** Imagens binárias e arquivos de código commitados (`45fc387`, `48a674f`, `9252505`) e publicados com sucesso na branch `main` no GitHub Pages.

### Landing Page do Projeto — AutoPrev
- **Landing Page Criada:** [projetos/autoprev/index.html](file:///c:/Users/fabra/OneDrive/Documentos/Code/Profissional/CodigoAberto/Portfolio%20Infra/projetos/autoprev/index.html)
  - **Hero Header:** Título com proposta de valor, badges Open Source, Portable .exe e Laudo PDF nativo.
  - **Dores vs. Soluções:** Comparativo visual de manutenção tradicional manual vs. automatizada com AutoPrev.
  - **Grid de Recursos:** 6 cards detalhando laudo PDF (`fpdf2`), auditoria de licença (OSPP/WMI), facilitador de domínio/Service Tag, persistência de sessão (JSON), elevação UAC assíncrona e UI Dark Mode.
  - **Fluxo em 3 Passos & Open Source:** Guia rápido de execução e convite para contribuição/star no GitHub.
  - **Galeria & Lightbox:** Suporte para prints de demonstração com proteção contra cópia/arrasto e modal de ampliação.
### Landing Page do Projeto — InvScan
- **Landing Page Criada:** [projetos/invscan/index.html](file:///c:/Users/fabra/OneDrive/Documentos/Code/Profissional/CodigoAberto/Portfolio%20Infra/projetos/invscan/index.html)
  - **Hero Header & Terminal Preview:** Título com proposta de valor, badges Open Source, Portable .exe e simulação interativa CLI do terminal de varredura UAC.
  - **Dores vs. Soluções:** Comparativo de inventário tradicional vs. automatizado com InvScan.
  - **Grid de 6 Recursos Simétricos:** Portátil (zero instalação), GUI + CLI, Fallback inteligente de MAC Address, detecção de Office em 4 camadas, classificação SSD vs. HDD (`MSFT_PhysicalDisk`) e CSV nativo UTF-8-BOM para Excel.
  - **Fluxo em 3 Etapas & FAQ Accordion:** Guia visual e perguntas frequentes expansíveis (offline, UAC, Excel, contingência Windows 7).
  - **Galeria & Lightbox:** Suporte para prints com fallbacks elegantes e proteção visual contra cópia/arrasto.
- **Integração na index.html:** Botão "Ver detalhes" do card do InvScan atualizado para direcionar à landing page.

---

## 🔲 Tarefas Pendentes para a Próxima Iteração

- [ ] Anexar capturas de tela do InvScan (`invscan-gui-dark.png`, `invscan-cli-varredura.png`, `invscan-excel-csv.png`, `invscan-config-app.png`) na pasta `img/`.
- [ ] Anexar as demais capturas do AutoPrev (`autoprev-pdf-laudo.png`, `autoprev-modal-dominio.png`) na pasta `img/`.
- [ ] Avaliar a criação de página de detalhes interna para o projeto `projetos/flashconfig/`.

### Design / Performance UX
- [ ] Implementar animações de *Scroll Reveal* (via Intersection Observer) para carregamento suave das seções na página inicial e de detalhes.
- [ ] Otimizar/comprimir as imagens PNG/JPEG da galeria comparativa para reduzir o tempo de carregamento no GitHub Pages.
