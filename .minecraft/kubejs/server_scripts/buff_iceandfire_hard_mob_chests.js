// ============================================================
// buff_iceandfire_hard_mob_chests.js
// Buffa os baus de tesouro dos covis de Ciclope e Hidra do Ice
// and Fire -- mesmo espirito do buff_dragon_chest_loot.js, so
// que pros outros dois "desafios dificeis" do mod que tambem
// tinham baus fracos.
//
// API confirmada via decompilacao do lootjs-forge-1.20.1-2.13.1.jar:
//   - LootModificationEventJS.addLootTableModifier(filters)
//
// Loot tables confirmadas via decompilacao do
// iceandfire-2.1.13-1.20.1-beta-5.jar (data/iceandfire/loot_tables/chest/):
//   cyclops_cave.json -- so tinha lã, carneiro, mações, sem
//     nenhum item de valor real pro nivel de dificuldade do mob.
//   hydra_cave.json -- ja tinha algumas pecas boas (armadura,
//     maça dourada encantada) mas com peso baixo, competindo
//     num pool de 20 entradas com so 1-4 rolagens.
// ============================================================

LootJS.modifiers(event => {

    // === CICLOPE ===
    // praticamente reconstruindo do zero, ja que o original nao
    // tinha nada de valor pra adicionar em cima
    event.addLootTableModifier('iceandfire:chest/cyclops_cave')
        .addLoot(Item.of('minecraft:diamond', 3))
        .addLoot(Item.of('minecraft:emerald', 5))
        .addLoot(Item.of('minecraft:gold_ingot', 10))
        .addLoot(Item.of('minecraft:experience_bottle', 6))
        .addLoot(Item.of('minecraft:iron_ingot', 12))

    // === HIDRA ===
    // aqui so precisa reforcar o que ja existe e garantir os
    // itens bons que antes eram raros demais
    event.addLootTableModifier('iceandfire:chest/hydra_cave')
        .modifyLoot('minecraft:diamond', stack => stack.withCount(4))
        .modifyLoot('minecraft:emerald', stack => stack.withCount(6))
        .modifyLoot('minecraft:gold_ingot', stack => stack.withCount(20))
        .modifyLoot('minecraft:iron_ingot', stack => stack.withCount(20))
        .addLoot(Item.of('minecraft:enchanted_golden_apple', 1))
        .addLoot(Item.of('minecraft:diamond', 4))
        .addLoot(Item.of('minecraft:emerald', 6))

})
