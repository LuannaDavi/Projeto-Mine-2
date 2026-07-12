// kubejs/server_scripts/starter_kit_common_structures.js
//
// As estruturas GRANDES e raras já foram reforçadas (big_dungeon_loot_boost.js).
// Esse aqui é o oposto: um empurrãozinho barato nas estruturas PEQUENAS e
// COMUNS de vários mods (não só Infectious), pensado pra um jogador que
// acabou de nascer e esbarrou numa ruína cedo no jogo. Nada caro:
// comida, pedra, carvão, madeira, um pouco de ferro.

LootJS.modifiers(event => {

    // --- Infectious: casas pequenas/médias (não as grandes já cobertas acima) ---
    event.addLootTableModifier([
        "minecraft:chests/village/village_plains_house", // reaproveitado pelas casas pequenas do Infectious
    ])
        .randomChance(0.3)
        .addLoot("minecraft:bread", "minecraft:cobblestone", "minecraft:coal", "minecraft:stick", "minecraft:oak_planks", "minecraft:apple");

    // --- Idas: peças pequenas (idas_small) ---
    event.addLootTableModifier(/idas:chests\/.*/)
        .randomChance(0.35)
        .addLoot("minecraft:bread", "minecraft:cobblestone", "minecraft:coal", "minecraft:stick", "minecraft:oak_planks", "minecraft:apple");

    // --- Graveyard: as peças pequenas/decorativas (dead_tree, ruins, small_grave etc) ---
    event.addLootTableModifier(/graveyard:chests\/(dead_tree|ruins|small_grave|mushroom_grave|memorial_tree).*/)
        .randomChance(0.35)
        .addLoot("minecraft:bread", "minecraft:cobblestone", "minecraft:coal", "minecraft:stick", "minecraft:oak_planks", "minecraft:apple");

    // --- Repurposed Structures: reforço extra além do que já foi feito, focado em comida/pedra ---
    event.addLootTableModifier(/repurposed_structures:chests\/villages\/.*/)
        .randomChance(0.3)
        .addLoot("minecraft:bread", "minecraft:cobblestone", "minecraft:coal", "minecraft:stick", "minecraft:oak_planks", "minecraft:apple");
});

