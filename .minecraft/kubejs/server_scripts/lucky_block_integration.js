// kubejs/server_scripts/lucky_block_integration.js
// Lucky Block - Integração completa com o modpack
// Geração reduzida + loot temático + trade com Goblin Trader

// ============================================================
// 1. LOOT TABLE OVERRIDES
// Reduz aparição em baús e adiciona de forma controlada
// ============================================================

LootJS.modifiers(event => {

    // Baús de dungeons vanilla - chance bem reduzida (0.8%)
    event.addLootTableModifier('minecraft:chests/simple_dungeon')
        .randomChance(0.003)
        .addLoot(Item.of('lucky:lucky_block'))

    // Baús de masmorras do Dungeons Arise - 1.2%
    event.addLootTableModifier(/dungeons_arise:chests\/.*/)
        .randomChance(0.005)
        .addLoot(Item.of('lucky:lucky_block'))

    // Baús do IDAS - 1.2%
    event.addLootTableModifier(/idas:chests\/.*/)
        .randomChance(0.005)
        .addLoot(Item.of('lucky:lucky_block'))

    // Baús do Twilight Forest - temático para item mágico - 1%
    event.addLootTableModifier(/twilightforest:chests\/.*/)
        .randomChance(0.004)
        .addLoot(Item.of('lucky:lucky_block'))

    // Baús do The Graveyard - atmosfera sombria combina - 0.8%
    event.addLootTableModifier(/graveyard:chests\/.*/)
        .randomChance(0.003)
        .addLoot(Item.of('lucky:lucky_block'))

    // Todos os outros baús de estruturas modded - 0.5%
    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.002)
        .addLoot(Item.of('lucky:lucky_block'))

})

// ============================================================
// 2. LOOT CUSTOMIZADO DO LUCKY BLOCK - REMOVIDO
// O conteudo do Lucky Block (o que sai ao ativa-lo) NAO eh
// controlado por loot table vanilla neste mod. E controlado
// pelo arquivo config/lucky/drops.txt (sintaxe propria do mod).
// Para adicionar itens de mods aos drops, edite esse arquivo
// diretamente - veja drops_addon.txt para exemplos prontos.
// ============================================================
// ============================================================
// 3. REDUZ SPAWN NATURAL NO MUNDO
// Remove o Lucky Block de qualquer drop de bloco que o mod
// possa ter registrado por padrão durante a worldgen
// ============================================================

LootJS.modifiers(event => {
    event.addLootTableModifier('lucky:lucky_block')
        .removeLoot(filter => filter.matchItem('lucky:lucky_block'))
})