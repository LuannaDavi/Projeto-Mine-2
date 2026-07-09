// kubejs/server_scripts/swem_loot_cleanup.js
//
// O SWEM (mod de cavalos) injeta itens em quase todo baú do jogo via Global
// Loot Modifiers, com chances de até 90%. Isso polui os baús com material de
// crafting genérico (chapas, rebites, couro) sem muita graça.
//
// Estratégia:
//   1) Remove TODOS os modificadores globais do SWEM de uma vez (pelo ID
//      exato de cada um, já que essa versão do LootJS não aceita regex aqui).
//   2) Recoloca só os itens realmente interessantes (poções de XP, ovos/pets
//      raros, itens de sela/arreio prontos) com chance bem mais baixa.

LootJS.modifiers(event => {
    // --- 1. Remove tudo que o SWEM injeta globalmente ---
    event.removeGlobalModifier(
        "swem:alfalfa_from_grass",
        "swem:timothy_from_grass",
        "swem:oat_from_grass",
        "swem:bastion",
        "swem:bastion_treasure",
        "swem:dungeon",
        "swem:end_city_treasure",
        "swem:nether_bridge",
        "swem:pillager_outpost",
        "swem:ruined_portal",
        "swem:stronghold",
        "swem:treasure",
        "swem:woodland_mansion"
    );

    // --- 2. Dungeon simples: só a poção de pulo, chance baixa ---
    event.addLootTableModifier("minecraft:chests/simple_dungeon")
        .randomChance(0.08)
        .addLoot("swem:jump_xp_potion");

    // --- 3. Stronghold: poção de vida, chance baixa ---
    event.addLootTableModifier(["minecraft:chests/stronghold_crossing", "minecraft:chests/stronghold_corridor"])
        .randomChance(0.1)
        .addLoot("swem:health_xp_potion");

    // --- 4. Outpost de pilagers: sela pronta, chance baixa ---
    event.addLootTableModifier("minecraft:chests/pillager_outpost")
        .randomChance(0.1)
        .addLoot("swem:adventure_saddle");

    // --- 5. Bastion (usa regex pra pegar as duas variantes): poção de velocidade ---
    event.addLootTableModifier(/minecraft:chests\/bastion_.*/)
        .randomChance(0.08)
        .addLoot("swem:speed_xp_potion");

    // --- 6. "Tesouro" (naufrágio, pirâmide, templo, iglu, baú enterrado): ovo raro ---
    event.addLootTableModifier([
        "minecraft:chests/buried_treasure",
        "minecraft:chests/igloo_chest",
        "minecraft:chests/desert_pyramid",
        "minecraft:chests/shipwreck_supply",
        "minecraft:chests/jungle_temple"
    ])
        .randomChance(0.06)
        .addLoot("swem:rainbow_egg");

    // --- 7. Cidade do fim: item de sela de alto nível, bem raro ---
    event.addLootTableModifier("minecraft:chests/end_city_treasure")
        .randomChance(0.12)
        .addLoot("swem:adventure_girth_strap");

    // --- 8. Mansão da floresta: pena de voo, item de destaque ---
    event.addLootTableModifier("minecraft:chests/woodland_mansion")
        .randomChance(0.15)
        .addLoot("swem:flight_feather");
});
