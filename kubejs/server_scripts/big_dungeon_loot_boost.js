// kubejs/server_scripts/big_dungeon_loot_boost.js
//
// As estruturas mais trabalhosas e vistosas do pack (por tamanho real em
// blocos, não só nome) vieram de mods diferentes que claramente não foram
// balanceados entre si. Isso reforça só os pontos fracos confirmados:
//
//   - Legendary Monsters: Ancient Stronghold (recompensa "luxury" fraca)
//   - Dungeons Arise: Shiraz Palace (pool de tesouro 98% vazia)
//   - fdbosses: baús do chefe Malkuth (fogo/gelo)
//   - BossesRise: chefe Underworld Knight (só dropava a própria espada)

LootJS.modifiers(event => {

    // --- Ancient Stronghold (Legendary Monsters) - reforço da recompensa de luxo ---
    event.addLootTableModifier("legendary_monsters:chests/ancient_stronghold_luxury_loot_table")
        .randomChance(0.6)
        .addLoot(
            "minecraft:diamond",
            "minecraft:emerald",
            "minecraft:experience_bottle",
            "minecraft:enchanted_book"
        );

    event.addLootTableModifier("legendary_monsters:chests/ancient_stronghold_luxury_loot_table")
        .randomChance(0.2)
        .addLoot(
            "minecraft:netherite_scrap",
            "minecraft:golden_apple"
        );

    // --- Shiraz Palace treasure (Dungeons Arise) - a pool principal era quase só "vazio" ---
    event.addLootTableModifier("dungeons_arise:chests/shiraz_palace/shiraz_palace_treasure")
        .randomChance(0.7)
        .addLoot(
            "minecraft:diamond",
            "minecraft:emerald",
            "minecraft:gold_ingot",
            "minecraft:experience_bottle"
        );

    event.addLootTableModifier("dungeons_arise:chests/shiraz_palace/shiraz_palace_treasure")
        .randomChance(0.18)
        .addLoot(
            "minecraft:netherite_ingot",
            "minecraft:enchanted_golden_apple"
        );

    // --- Malkuth (fdbosses) - baús de fogo e gelo, ambos fracos ---
    event.addLootTableModifier([
        "fdbosses:chest/malkuth_dungeon/fire_chest",
        "fdbosses:chest/malkuth_dungeon/ice_chest"
    ])
        .randomChance(0.5)
        .addLoot(
            "minecraft:diamond",
            "minecraft:gold_ingot",
            "minecraft:experience_bottle"
        );

    event.addLootTableModifier([
        "fdbosses:chest/malkuth_dungeon/fire_chest",
        "fdbosses:chest/malkuth_dungeon/ice_chest"
    ])
        .randomChance(0.15)
        .addLoot("minecraft:netherite_scrap");

    // --- Underworld Knight (BossesRise) - só dropava a própria espada ---
    event.addLootTableModifier("block_factorys_bosses:bosses/underworld_knight")
        .randomChance(1.0)
        .addLoot("minecraft:diamond")
        .addLoot("minecraft:experience_bottle");

    event.addLootTableModifier("block_factorys_bosses:bosses/underworld_knight")
        .randomChance(0.35)
        .addLoot("minecraft:netherite_scrap", "minecraft:enchanted_book");
});
