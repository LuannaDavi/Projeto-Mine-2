// ============================================================
// buff_dragon_loot.js
// Buffa os drops dos dragões do Ice and Fire (fire/ice/lightning),
// que estavam com loot table muito fraca pro nivel de dificuldade
// do boss (1 roll, item unico, escama OU carne, nunca os dois).
//
// API confirmada via decompilacao (CFR) dos jars:
//   - iceandfire-2.1.13-1.20.1-beta-5.jar (loot tables originais)
//   - lootjs-forge-1.20.1-2.13.1.jar (LootModificationEventJS,
//     LootActionsContainer, LootEntryWrapper)
//
// Entity IDs confirmados via assets/iceandfire/lang/en_us.json:
//   iceandfire:fire_dragon
//   iceandfire:ice_dragon
//   iceandfire:lightning_dragon
// ============================================================

// Sorteia um inteiro entre min e max (inclusive). JS puro, nao
// depende de nenhum metodo do KubeJS/LootJS que eu nao tenha
// confirmado por decompilacao.
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

LootJS.modifiers(event => {

    event.addEntityLootModifier(
        'iceandfire:fire_dragon',
        'iceandfire:ice_dragon',
        'iceandfire:lightning_dragon'
    )
        // Escamas: antes era 1 escama OU nada disso, agora sempre
        // dropa um bom punhado (usado em armadura de dragao,
        // craft de dragonsteel etc)
        .modifyLoot(
            [
                'iceandfire:dragonscales_red',
                'iceandfire:dragonscales_blue',
                'iceandfire:dragonscales_electric'
            ],
            stack => stack.withCount(randomInt(8, 16))
        )
        // Carne do dragao: mesma logica, buff de quantidade
        .modifyLoot(
            [
                'iceandfire:fire_dragon_flesh',
                'iceandfire:ice_dragon_flesh',
                'iceandfire:lightning_dragon_flesh'
            ],
            stack => stack.withCount(randomInt(4, 8))
        )
        // Garante que SEMPRE cai escama E carne (o pool original so
        // sorteava um item por vez, entao metade das vezes o jogador
        // matava um dragao inteiro e so ganhava carne, nada de escama)
        .addLoot('iceandfire:dragonscales_red')
        .addLoot('iceandfire:fire_dragon_flesh')
        .addLoot('iceandfire:dragonscales_blue')
        .addLoot('iceandfire:ice_dragon_flesh')
        .addLoot('iceandfire:dragonscales_electric')
        .addLoot('iceandfire:lightning_dragon_flesh')
        // Bonus de recompensa por ser um boss dificil: esmeraldas e
        // experiencia extra na hora
        .addLoot(Item.of('minecraft:emerald', 12))
        .dropExperience(250)

    // Nota: dragon eggs (dragonegg_red/blue/electric) foram
    // deixados como estavam de proposito -- sao usados pra domar
    // dragao, aumentar a chance ali poderia desequilibrar essa
    // parte do mod. Se quiser mexer nisso tambem, so pedir.

})
