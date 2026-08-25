# 🐉 Projeto Mine-2 — "sem nome definido"

Um modpack para Minecraft focado em **fantasia, aventura e tecnologia**, com mais de 250 mods cobrindo civilização, magia, exploração, combate e construção.

![Minecraft](https://img.shields.io/badge/Minecraft-1.20.1-62B47A?style=flat-square)
![Forge](https://img.shields.io/badge/Forge-47.4.20-3C5A99?style=flat-square)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=flat-square)

---

## 📋 Requisitos

| | |
|---|---|
| **Versão do Minecraft** | 1.20.1 |
| **Forge** | 47.4.20 |
| **RAM recomendada** | 8–10 GB alocados no mínimo (pack pesado, com muitos mods de worldgen e efeitos visuais) |
| **Java** | 21 ou superior |
| **Espaço em disco** | ~5 GB (mods + resourcepacks + saves) |

---

## 🚀 Instalação

1. Adicione todos os mods à pasta `mods` e abra o jogo **uma vez**. É esperado que dê erro — isso é necessário para que as pastas de datapacks e configurações sejam criadas.
2. Feche o jogo e copie os **datapacks** e **server_scripts** para a pasta do KubeJS dentro da `.minecraft`.
3. Copie as configurações básicas da pasta `configureddefaults`.

> A pasta `jars corrigidos` **não precisa ser baixada** — ela existe só por organização, guardando cópias de jars que foram ajustados manualmente.

### Missões do FTB Quests não carregam?

Se as missões da pasta `ftbquests` não aparecerem no jogo, siga este passo extra:

1. Abra o jogo, crie um mundo, abra o menu do FTB Quests e ative o **modo de edição**.
2. Crie uma missão qualquer (não precisa fazer sentido) só para a pasta de quests ser gerada.
3. **Saia do modo de editor** em seguida, para não estragar a experiência de jogo.
4. Copie as missões para dentro da pasta do FTB Quests em `config`, garantindo que fiquem dentro da subpasta `chapters`.

---

## 💡 Dicas úteis

- **Mochilas:** o pack tem três mods de mochila diferentes, e elas **não se sobrepõem**:
  - *Camping* → equipa no Curios
  - *Traveler's Backpack* → equipa com botão direito
  - *Sophisticated Backpacks* → não precisa estar equipada, basta estar no inventário
- Se o `options.txt` não funcionar dentro de `configureddefaults`, tente colocá-lo em `defaultconfigs` ou solto direto na pasta `.minecraft`.
- O `options.txt` controla as configurações de teclas. A versão para **Mac ainda não foi feita** — usuários de Mac precisam configurar manualmente.
- Os **resourcepacks são totalmente opcionais**.
- O **Distant Horizons** vem com boa parte dos recursos reduzidos por padrão — isso é proposital, feito para reduzir lag em sessões longas. Aumentar os ajustes gráficos dele pode causar quedas de performance perceptíveis.
- Por mais que existam versões mais novas de alguns mods, o modpack mantém certas versões mais antigas por questões de **compatibilidade e estabilidade** entre os mods do pacote.

---

## ⚠️ Problemas conhecidos

| Problema | Status |
|---|---|
| Usar qualquer armadura do **Brazilian Delight** junto com armas do **Epic Fight Ressurection** pode causar crash, por conflito na biblioteca de dependências | Sem solução encontrada |
| Atacar com armas do **Weapons of Miracles (WOM)** enquanto no ar, em modo criativo, pode causar crash | Sem solução encontrada |
| O **EMI** pode travar o jogo ao usar a transferência automática de receita (botão de craft rápido) em certas telas, por incompatibilidade com o compat interno do JEI | Sem solução encontrada — evite usar a transferência automática de receita pelo EMI como contorno |

---

## 📢 Avisos

- Alguns jars e pacotes de recursos foram modificados para se encaixar no modpack ou corrigir pequenos bugs. Todo o crédito pelo conteúdo original permanece com os respectivos autores.
- As missões ainda apresentam pequenos bugs, sendo corrigidos aos poucos.

---

## 🎮​ Créditos

Este modpack reúne o trabalho de centenas de criadores de mods da comunidade Minecraft. Todo o crédito pelos mods individuais pertence aos seus respectivos autores — este repositório organiza, configura e adapta esse conteúdo, sem reivindicar autoria sobre o trabalho original de terceiros.

---

## 📄 Licença

O conteúdo original deste repositório (scripts KubeJS, datapacks de correção, configuração de missões) está disponível sob a **licença MIT** — veja o arquivo [`LICENSE`](LICENSE). Os mods individuais mantêm suas próprias licenças, definidas por seus autores originais.
