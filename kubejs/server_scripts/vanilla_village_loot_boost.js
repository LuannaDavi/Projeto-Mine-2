// kubejs/server_scripts/vanilla_village_loot_boost.js
//
// As casas de vila vanilla (ferreiro, curtidor, açougueiro, pedreiro,
// cartógrafo, clérigo, pescador, etc.) sempre foram propositalmente escassas
// no Minecraft original. Reforço geral e leve pra todas de uma vez.

LootJS.modifiers(event => {

    // Pool comum: reforço leve em toda casa/oficina de vila vanilla
    event.addLootTableModifier(/minecraft:chests\/village\/.*/)
        .randomChance(0.45)
        .addLoot(
            "minecraft:emerald",
            "minecraft:bread",
            "minecraft:iron_ingot",
            "minecraft:arrow",
            "minecraft:golden_carrot"
        );

    // Segunda chance, mais rara, de algo melhor
    event.addLootTableModifier(/minecraft:chests\/village\/.*/)
        .randomChance(0.12)
        .addLoot(
            "minecraft:iron_sword",
            "minecraft:iron_pickaxe",
            "minecraft:shield",
            "minecraft:enchanted_book",
            "minecraft:diamond"
        );
});
