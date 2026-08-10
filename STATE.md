# STATE.md — Controle de Contexto
**Sessão:** 2026-08-08 → 2026-08-09 | **Branch:** `main` | **Último commit:** `0ab6a4c`

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
- **README.md:** Árvore de diretórios atualizada para incluir `projetos/higienizacao-racks-unitoledo/`, `projetos/autoprev/` e `projetos/invscan/`. Tabela de projetos atualizada.
- **Git & Deploy:** Imagens binárias e arquivos de código commitados (`45fc387`, `48a674f`, `9252505`, `99d596d`) e publicados com sucesso na branch `main` no GitHub Pages.

### Landing Page do Projeto — AutoPrev
- **Landing Page Criada:** [projetos/autoprev/index.html](file:///c:/Users/fabra/OneDrive/Documentos/Code/Profissional/CodigoAberto/Portfolio%20Infra/projetos/autoprev/index.html)
  - **Hero Header:** Título com proposta de valor, badges Open Source, Portable .exe e Laudo PDF nativo.
  - **Dores vs. Soluções:** Comparativo visual de manutenção tradicional manual vs. automatizada com AutoPrev.
  - **Grid de Recursos:** 6 cards detalhando laudo PDF (`fpdf2`), auditoria de licença (OSPP/WMI), facilitador de domínio/Service Tag, persistência de sessão (JSON), elevação UAC assíncrona e Limpeza & Debloat do Windows.
  - **Fluxo em 3 Passos & Open Source:** Guia rápido de execução e convite para contribuição/star no GitHub.
  - **Galeria & Lightbox:** Suporte para prints de demonstração com imagens reais (`autoprev-dashboard-dark.png`, `autoprev-modal-dominio.png`, `autoprev-pdf-laudo.png`) e modal de ampliação.
- **Integração na index.html:** Botão "Ver detalhes" do card do AutoPrev atualizado para direcionar à landing page.

### Landing Page do Projeto — InvScan
- **Landing Page Criada:** [projetos/invscan/index.html](file:///c:/Users/fabra/OneDrive/Documentos/Code/Profissional/CodigoAberto/Portfolio%20Infra/projetos/invscan/index.html)
  - **Hero Header & Terminal Preview:** Título com proposta de valor, badges Open Source, Portable .exe e simulação interativa CLI do terminal de varredura UAC.
  - **Dores vs. Soluções:** Comparativo de inventário tradicional vs. automatizado com InvScan.
  - **Grid de 6 Recursos Simétricos:** Portátil (zero instalação), GUI + CLI, Fallback inteligente de MAC Address, detecção de Office em 4 camadas, classificação SSD vs. HDD (`MSFT_PhysicalDisk`) e CSV nativo UTF-8-BOM para Excel.
  - **Fluxo em 3 Etapas & FAQ Accordion:** Guia visual e perguntas frequentes expansíveis (offline, UAC, Excel, contingência Windows 7).
  - **Galeria 2x2 & Lightbox:** Galeria em 2 colunas exibindo os prints reais (`invscan-config-app.png`, `invscan-gui-dark.png`, `invscan-cli-varredura.png`, `invscan-excel-csv.png`) com proteção visual contra cópia/arrasto.
### Landing Page do Projeto — FlashConfig (Simulador Fiel da GUI)
- **Landing Page Criada & Redesenhada:** [projetos/flashconfig/index.html](file:///c:/Users/fabra/OneDrive/Documentos/Code/Profissional/CodigoAberto/Portfolio%20Infra/projetos/flashconfig/index.html)
  - **Simulador 100% Fiel da Interface do FlashConfig**: Construída na seção *Interface da Ferramenta em Ação* uma réplica perfeita da aplicação baseada nas 6 capturas de tela reais. Possui o menu lateral esquerdo idêntico (`Domínio`, `Instalação Office`, `Python`, `Padronização`, `Drivers`, `MANUTENÇÃO SENSÍVEL -> Debloat / Limpeza`), com alternância dinâmica das 6 views do software.
  - **Responsividade Mobile Touch-Scroll**: Barra de navegação adaptada para telas pequenas (< 768px e 320px) com pílulas horizontais navegáveis por toque, botões de ação ocupando 100% de largura e modais com rolagem de código.
  - **Modais de Explicação de Ação**: Cada botão de ação (`⚡ Instalar Office 2024`, `⚡ Instalar Office 365`, `🚀 Executar Facilitador de Domínio`, `🐍 Instalar Python`, `⚙️ Executar Padronização Corp/Acad`, `📁 Selecionar Pasta e Instalar`, `🧹 Executar Limpeza` e `🔥 Executar Debloat Avançado`) abre um modal explicativo detalhando os comandos, parâmetros e simulação de terminal visível (`CREATE_NEW_CONSOLE`).
  - **Copywriting Ajustado**: Título atualizado para *"O Fim das Configurações Pós-Formatação Manuais"*.
  - **Árvore de Diretórios do Pendrive**: Componente gráfico exclusivo simulando a estrutura física do pendrive `FlashConfig/` (`Scripts/Dominio`, `Scripts/Office`, `Scripts/Drivers`, `Scripts/Padronizar`, `Scripts/Debloat`).
- **Integração na index.html:** Botão "Ver detalhes" do card do FlashConfig direcionado para a subpágina.

### Auditoria de Limpeza & Clean Code
- **Expurgo de Código Morto & Arquivos Órfãos:**
  - Removido o modal `#statusModal` referente ao projeto descontinuado de *"modernização de mais de 100 notebooks corporativos"* em `index.html`.
  - Deletados os arquivos órfãos com placeholders `projetos/automacao-windows.html` e `projetos/integracao-unitoledo.html`.
  - Eliminadas ~120 linhas de JS e CSS não utilizadas em `script.js` e `styles.css`.


---

## 🔲 Tarefas Pendentes para a Próxima Iteração

- [x] Landing pages desenvolvidas para todos os 5 projetos do carrossel (`integracao-unitoledo`, `higienizacao-racks-unitoledo`, `autoprev`, `invscan`, `flashconfig`).
- [ ] Anexar capturas de tela do FlashConfig (`flashconfig-gui-dark.png`, `flashconfig-modal-dominio.png`, `flashconfig-terminal-execucao.png`, `flashconfig-perfis-padrao.png`) na pasta `img/`.

### Design / Performance UX
- [ ] Implementar animações de *Scroll Reveal* (via Intersection Observer) para carregamento suave das seções na página inicial e de detalhes.
- [ ] Otimizar/comprimir as imagens PNG/JPEG da galeria comparativa para reduzir o tempo de carregamento no GitHub Pages.
