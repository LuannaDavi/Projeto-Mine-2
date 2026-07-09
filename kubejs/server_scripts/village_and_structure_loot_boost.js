// kubejs/server_scripts/village_and_structure_loot_boost.js
//
// Reforça dois pontos que ficaram pobres demais:
//   1) As casas de vila do Repurposed Structures (24 variantes por bioma),
//      cujo pool principal é dominado por argila/cacto/terracota/vara.
//   2) A estação de trem do Immersive Structure, cujo loot é só trilho.
//
// Nada exagerado - só uma segunda chance de sair algo realmente útil.

LootJS.modifiers(event => {
    // --- 1. Casas de vila do Repurposed Structures (todas as variantes de bioma) ---
    event.addLootTableModifier(/repurposed_structures:chests\/villages\/.*/)
        .randomChance(0.5)
        .addLoot(
            "minecraft:emerald",
            "minecraft:iron_ingot",
            "minecraft:bread",
            "minecraft:arrow",
            "minecraft:golden_carrot",
            "minecraft:iron_nugget"
        );

    // segunda chance, mais rara, de algo um pouco melhor
    event.addLootTableModifier(/repurposed_structures:chests\/villages\/.*/)
        .randomChance(0.15)
        .addLoot(
            "minecraft:iron_pickaxe",
            "minecraft:iron_sword",
            "minecraft:shield",
            "minecraft:enchanted_book"
        );

    // --- 2. Estação de trem do Immersive Structure (só tinha trilho) ---
    event.addLootTableModifier("imst:train_station")
        .randomChance(0.4)
        .addLoot(
            "minecraft:iron_ingot",
            "minecraft:copper_ingot",
            "minecraft:redstone",
            "minecraft:lantern"
        );

    event.addLootTableModifier("imst:train_station")
        .randomChance(0.12)
        .addLoot(
            "minecraft:name_tag",
            "minecraft:golden_apple",
            "minecraft:iron_ingot"
        );
});
