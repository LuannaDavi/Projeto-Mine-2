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

1. Adicione todos os mods à pasta `mods` e abra o jogo **uma vez**. É esperado que dê erro - isso é necessário para que as pastas de datapacks e configurações sejam criadas.
2. Feche o jogo e copie os **datapacks** e **server_scripts** para a pasta do KubeJS dentro da `.minecraft`.
3. Copie as configurações básicas da pasta `configureddefaults`.

> A pasta `jars corrigidos` **não precisa ser baixada** - ela existe só por organização, guardando cópias de jars que foram ajustados manualmente.

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
- O **Distant Horizons** vem com boa parte dos recursos reduzidos por padrão - isso é proposital, feito para reduzir lag em sessões longas. Aumentar os ajustes gráficos dele pode causar quedas de performance perceptíveis.
- Por mais que existam versões mais novas de alguns mods, o modpack mantém certas versões mais antigas por questões de **compatibilidade e estabilidade** entre os mods do pacote.

---

## ⚠️ Problemas conhecidos

| Problema | Status |
|---|---|
| Usar qualquer armadura do **Brazilian Delight** junto com armas do **Epic Fight Ressurection** pode causar crash, por conflito na biblioteca de dependências | Sem solução encontrada |
| Atacar com armas do **Weapons of Miracles (WOM)** enquanto no ar, em modo criativo, pode causar crash | Sem solução encontrada |

---

## 📢 Avisos

- Alguns jars e pacotes de recursos foram modificados para se encaixar no modpack ou corrigir pequenos bugs. Todo o crédito pelo conteúdo original permanece com os respectivos autores.
- As missões ainda apresentam pequenos bugs, sendo corrigidos aos poucos.

---

## 🗺️ Missões (FTB Quests)

O pack tem uma progressão própria de missões, organizada em 8 grupos e 27 capítulos, cobrindo praticamente todo o conteúdo relevante do modpack — não é só "matar X, coletar Y", cada capítulo tem sua própria introdução e tom.

### 🌱 Fundamentos
- **Do Zero ao Fogo** - o começo de tudo: mesa de trabalho, fornalha, primeiros passos de sobrevivência.

### ⚙️ Tecnologia
- **Create** - engrenagens, esteiras e contraptions que fazem o trabalho pesado por você.
- **Mekanism** - reatores, tubos de energia e máquinas que dobram as leis da física a seu favor.
- **Outros Sistemas** - agricultura mágica, do plantio de essência ao Supremium.

### 🔮 Magia
- **Ars Nouveau** - grimórios, glifos e feitiços moldáveis à sua escolha.
- **Magia e Combate** - livros de feitiço, colônias sob ataque, batalhas que pedem mais que espada.
- **Grimório e Tempestade** - runas, afinidades e escolas de magia, do primeiro grimório de cobre ao Necronomicon.

### 🧭 Exploração
- **Exploração** - estruturas escondidas, pesca lendária, ruínas de todo tipo de bioma.
- **Civilizações** - aldeias, comércio, exércitos de recrutas e a fundação da sua colônia.
- **Estruturas do Mundo** - ruínas, vilarejos reconstruídos, naufrágios.

### ⚔️ Combate
- **Criaturas** - bosses, feras raras e caçadas de ponta.
- **Equipamento** - armaduras, escudos e armas pra sobreviver ao resto da jornada.
- **Bestiário Selvagem** - espécies estranhas espalhadas por todo canto do mapa.
- **Horrores e Golens** - golens de todo tipo e horrores que preferiam continuar escondidos.
- **Arsenal Avançado** - arcos, armas de fogo e artilharia pesada.
- **Gelo e Fogo** - dragões, mitologia grega, trolls e fadas - comece pesquisando cobre e prata.
- **Ferreiro Modular** - ferramentas modulares, cabo/cabeça/extra, do bronze ao Manyullyn.

### 🌌 Dimensões
- **Nether** - o Nether reinventado, com cantos e perigos inéditos.
- **Twilight** - uma floresta com luz própria e sequência obrigatória de guardiões.
- **End** - além do dragão: o que sobra do Fim quando fauna e flora tomam conta.
- **Aether** - ilhas flutuantes, um paraíso acima das nuvens.
- **Blue Skies** - um mundo doce e lunar que desafia toda lógica de bioma.
- **Fronteira Estelar** - cinco mundos além da atmosfera; comece juntando ferro, muito ferro.

### 🏡 Vida e Lazer
- **Extras** - mecânicas por puro prazer, sem pressa nem progressão.
- **Culinária** - pratos do mundo inteiro, porque sobreviver bem também é comer bem.
- **Construção** - blocos decorativos, móveis, tudo que transforma abrigo em casa.

### 🏆 Desafios
- **O Caminho do Lendário** - o topo da progressão: exige domínio real de todos os sistemas do pack, sem atalho e sem sorte.

---

## 🎒 O que tem pra fazer no pack

Um raio-x dos mods que mais moldam a experiência do modpack - os que adicionam mundo, criaturas, itens e sistemas novos de verdade. (Bibliotecas, compats e mods só de script ficaram de fora dessa lista - são o motor por baixo do capô, não o que você vai ver na tela.)

### 🌍 Mundos e exploração

- **Ad Astra** (+ Extra Additions, More Structures, Tools) - bota um foguete de pé, sai do planeta e vai visitar a Lua, Marte e além. Tem oxigênio pra gerenciar, então não esquece o capacete.
- **Aether** - o contraponto celestial do Nether. Ilhas flutuantes, moas pra montar, e um paraíso que também quer te matar, só que educadamente.
- **Blue Skies** - duas dimensões novas inteiras (Everbright e Everdawn), cada uma com bioma, mobs e árvores gigantes próprias. Bom lugar pra se perder de propósito.
- **Twilight Forest** - floresta amaldiçoada clássica, cheia de labirintos, castelos e chefes que só abrem caminho se você provar que merece.
- **The Outer End** - porque o End vanilla é meio vazio, né? Expande o fim do mundo com muito mais conteúdo.
- **Incendium** - o Nether também merece um upgrade: estruturas, biomas e mobs novos pra quem não tem medo de lava.
- **Repurposed Structures** - reconstrói estruturas vanilla (vilas, cidades soterradas, etc.) pra combinar com todos os biomas novos que os outros mods trazem.
- **Dungeons Arise** (+ Seven Seas) - masmorras e fortalezas espalhadas pelo mapa, incluindo variantes marítimas pra quem gosta de saquear navio afundado.

### 🐉 Criaturas e monstros

- **Ice and Fire** - dragões de verdade, do tipo que voa, cospe elemento e tem covil cheio de tesouro. Também traz ciclopes, górgonas, hidras e um bestiário digno de mitologia.
- **Alex's Mobs** - dezenas de criaturas realistas e nem tão realistas assim, do capivara ao monstro do lago Ness.
- **Alex's Caves** - cavernas profundas com bioma e monstros próprios pra quem acha que já explorou tudo embaixo da terra.
- **Mowzie's Mobs** - poucos mobs, mas cada um é praticamente um mini-chefe com padrão de ataque único.
- **L_Ender's Cataclysm** - chefões de fim de jogo pra quem já zerou a Wither e quer sofrer mais um pouco.
- **Legendary Monsters** - variantes "elite" de estruturas e criaturas, pensadas pra quem quer loot melhor com risco maior.
- **Born in Chaos** - hordas de criaturas corrompidas com tema sombrio, ótimas pra farm de item raro (com risco).
- **Goblins Tyranny** - acampamentos de goblins pra saquear, com direito a comerciante e briga.
- **Infectious** - zombies mutantes com sistema de infecção próprio.
- **Guard Villagers** - dá arma e armadura pros aldeões se defenderem sozinhos - vila deixa de ser bufê grátis pra zumbi.
- **Buddycards** - cartas colecionáveis de criaturas do mod, porque até monstro merece um card genial.

### 🏰 Civilização e construção

- **MineColonies** - construa e gerencie uma colônia inteira, com colonos que têm profissão, IA própria e reclamam se você não constrói a casa certa.
- **Structurize** (+ Blueprints) - o motor de construção por trás do MineColonies, também útil sozinho pra planejar construções grandes.
- **Handcrafted** - móveis e decoração - sofá, mesa, cama de verdade, o toque final que faz a casa parecer casa.
- **Supplementaries** - dezenas de blocos decorativos e utilitários pequenos (sinos, lousas, redes, faróis) que preenchem os detalhes.
- **Chisels and Bits** - esculpe blocos em pedacinhos pra criar formas que o Minecraft normal não permite.
- **Domum Ornamentum** - mais blocos decorativos, focados em combinar bem com construção medieval/rústica.
- **Waystones** - pedras de teleporte espalhadas pelo mundo - não mais correr 5000 blocos pra voltar pra base.
- **Quark** - pacote "vanilla+": dezenas de pequenos adicionais que parecem que sempre estiveram no jogo.

### ⚔️ Combate e armas

- **Epic Fight** (Ressurection) - troca o combate padrão por um sistema de combos, esquiva e postura, tipo jogo de ação de verdade.
- **Iron's Spellbooks** - magia ofensiva com grimórios - bolas de fogo, gelo, raio, tudo customizável.
- **TACZ** - armas de fogo modernas funcionais, com mira, recarga e tudo mais.
- **Weapons of Miracles** - arsenal de armas estilizadas com habilidades próprias (cuidado com a tela preta, já sabemos desse bug).
- **Simple Weapons / Fantasy Weapons** - arsenal de armas corpo a corpo extra, pra variar do espadão padrão.
- **Relics** - itens únicos e lendários com efeitos especiais, bons de caçar como objetivo de longo prazo.
- **Artifacts** - parecido, itens especiais espalhados pelo mundo com bônus únicos ao equipar.

### 🔮 Magia

- **Ars Nouveau** (+ Creo, Elemental) - sistema de magia baseado em glifos que você combina pra criar seu próprio feitiço, do zero.
- **Necronomicon** - grimório de magia sombria, temática de pacto e ritual.
- **Iron's Spellbooks** também entra aqui - é armas e magia ao mesmo tempo.

### 🍲 Comida e culinária

- **Farmer's Delight** (+ Aquaculture, Brazilian, Ender's, Chef's Delight e mais) - culinária de verdade: corta, cozinha, empratado bonito. A base de um ecossistema de comida gigante no pack.
- **Mystical Agriculture** (+ Agradditions) - agricultura mágica pra plantar até minério -planta essência de ferro, colhe lingote.

### ⚙️ Tecnologia e automação

- **Create** (+ Confectionery, Stuff Additions, Enchantment Industry, Jetpack e vários addons) - engenharia mecânica visual: engrenagens, esteiras, contraptions que você monta peça por peça e vê funcionando.
- **Mekanism** (+ Additions, Generators, Tools) — tecnologia industrial pesada, do gerador básico ao reator de fusão.
- **Steam Rails** - trilhos e trens funcionais, ótimo combo com o Create.

### 🎒 Armazenamento e utilidade

- **Sophisticated Backpacks** - mochila modular com upgrades (filtro automático, fornalha portátil, etc.)
- **Traveler's Backpack** - mochila visível nas costas, com tema por bioma/criatura.
- **Iron Chests** - baús de tier crescente, do cobre ao obsidiana.
- **Tom's Storage** - sistema de armazenamento em rede, pra quem já cansou de andar entre baú e baú.
- **JourneyMap** - mapa em tempo real, com waypoint e minimapa - nunca mais se perde (a menos que você queira).

---

## 🎮 Créditos

Este modpack reúne o trabalho de centenas de criadores de mods da comunidade Minecraft. Todo o crédito pelos mods individuais pertence aos seus respectivos autores - este repositório organiza, configura e adapta esse conteúdo, sem reivindicar autoria sobre o trabalho original de terceiros.
