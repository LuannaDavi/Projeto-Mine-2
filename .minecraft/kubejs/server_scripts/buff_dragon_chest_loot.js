// ============================================================
// buff_dragon_chest_loot.js
// Buffa os baus de tesouro DENTRO dos covis/ninhos de dragao do
// Ice and Fire -- diferente do buff_dragon_loot.js (que mexe no
// drop de quando o dragao MORRE), esse aqui mexe na loot table
// dos baus que ja existem la dentro, gerados com a estrutura.
//
// API confirmada via decompilacao do lootjs-forge-1.20.1-2.13.1.jar:
//   - LootModificationEventJS.addLootTableModifier(filters)
//     (diferente do addEntityLootModifier usado no outro script)
//
// Loot tables confirmadas via decompilacao do
// iceandfire-2.1.13-1.20.1-beta-5.jar (data/iceandfire/loot_tables/chest/):
//   fire_dragon_roost, ice_dragon_roost, lightning_dragon_roost,
//   fire_dragon_male_cave, fire_dragon_female_cave,
//   ice_dragon_male_cave, ice_dragon_female_cave,
//   lightning_dragon_male_cave, lightning_dragon_female_cave
// Todas tinham so 1-4 rolagens e peso baixo pra diamante/esmeralda
// -- fraco pro nivel de dificuldade de limpar um covil de dragao.
// ============================================================

LootJS.modifiers(event => {

    event.addLootTableModifier(
        'iceandfire:chest/fire_dragon_roost',
        'iceandfire:chest/ice_dragon_roost',
        'iceandfire:chest/lightning_dragon_roost',
        'iceandfire:chest/fire_dragon_male_cave',
        'iceandfire:chest/fire_dragon_female_cave',
        'iceandfire:chest/ice_dragon_male_cave',
        'iceandfire:chest/ice_dragon_female_cave',
        'iceandfire:chest/lightning_dragon_male_cave',
        'iceandfire:chest/lightning_dragon_female_cave'
    )
        // aumenta bastante os itens que ja existem na loot table
        .modifyLoot('minecraft:diamond', stack => stack.withCount(4))
        .modifyLoot('minecraft:emerald', stack => stack.withCount(6))
        .modifyLoot('minecraft:gold_ingot', stack => stack.withCount(16))
        .modifyLoot('minecraft:iron_ingot', stack => stack.withCount(16))
        .modifyLoot('minecraft:experience_bottle', stack => stack.withCount(8))
        // garante itens extras que nao existiam antes nesses baus
        .addLoot(Item.of('minecraft:netherite_scrap', 1))
        .addLoot(Item.of('minecraft:diamond', 6))
        .addLoot(Item.of('minecraft:emerald', 10))

})
