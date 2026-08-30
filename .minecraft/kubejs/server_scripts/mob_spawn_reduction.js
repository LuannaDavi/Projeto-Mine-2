// kubejs/server_scripts/mob_spawn_reduction.js
// Reduz a frequência de spawns naturais de mobs agressivos (categoria "monster")
// Funciona para mobs vanilla e modded, pois a maioria registra na categoria monster.
// Nao afeta spawn por spawner, comando, spawn egg ou reproducao.

// ============================================================
// CONFIGURACAO
// ============================================================

// Chance de CANCELAR o spawn (0.0 = nunca cancela, 1.0 = cancela sempre)
// 0.5 = corta a populacao de mobs hostis pela metade, aproximadamente
const HOSTILE_SPAWN_CANCEL_CHANCE = 0.55

// Mobs que NUNCA devem ser bloqueados, mesmo sendo "monster"
// (chefes, mobs de quest, mercadores, etc - adicione IDs conforme necessario)
const SPAWN_WHITELIST = [
    'minecraft:wither',
    'minecraft:ender_dragon',
    'goblintraders:goblin_trader',
    'goblintraders:goblin',
    'goblintraders:trader',
]

// ============================================================
// LOGICA
// ============================================================

EntityEvents.spawned(event => {
    const entity = event.entity
    const id = entity.type.toString()

    // Nunca bloqueia mobs da whitelist
    if (SPAWN_WHITELIST.includes(id)) return

    // So atua em spawns naturais (nao afeta spawner, /summon, ovos de spawn, etc)
    // Se a propriedade nao existir nessa versao, o check e ignorado (undefined !== string)
    if (event.spawnReason && event.spawnReason !== 'natural') return

    // Verifica categoria do mob - "monster" cobre a grande maioria dos hostis,
    // vanilla e modded (zumbis, esqueletos, mobs de Alex's Mobs, Mowzie's, etc)
    let category = ''
    try {
        category = entity.category ? entity.category.toString().toLowerCase() : ''
    } catch (e) {
        category = ''
    }

    if (!category.includes('monster')) return

    if (Math.random() < HOSTILE_SPAWN_CANCEL_CHANCE) {
        event.cancel()
    }
})
