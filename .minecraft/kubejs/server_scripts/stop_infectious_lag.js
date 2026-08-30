// ============================================================
// stop_infectious_lag.js
// Cancela o spawn da entidade infectious:mutation_trigger,
// identificada via analise do latest.log como a causa raiz do
// lag constante (spam de "Tried to add entity ... but it was
// marked as removed already" a cada poucos segundos).
//
// Confirmado via decompilacao (CFR) do jar Infectious-forge-1.20.1-1.7.jar:
//   - MutationTriggerEntity eh uma entidade auxiliar (helper) que
//     acompanha o spawn de zumbis do mod, verifica o gamerule
//     zombieMutationLevel e se auto-descarta (m_146870_/discard).
//   - O ciclo de spawn/discard dela esta com bug (o mod tenta
//     re-adicionar a mesma instancia ja descartada), gerando o
//     erro no log e consumindo processamento todo tick.
//   - Ajustar os gamerules (enableHordes, zombieMutationLevel)
//     nao resolveu porque esse spawn acontece fora do sistema
//     de hordas/mutacao em si -- ela nasce junto de QUALQUER
//     zumbi do Infectious, independente do nivel de mutacao.
//
// API confirmada via decompilacao do kubejs-forge-2001.6.5-build.26.jar:
//   - EntityEvents.spawned dispara "quando uma entidade esta
//     prestes a ser adicionada ao mundo", cobre inclusive
//     chamadas diretas de codigo Java (nao so spawn natural),
//     e e cancelavel (hasResult).
// ============================================================

// ============================================================
// stop_infectious_lag.js
// Impede que entidades do Infectious sejam adicionadas ao mundo
// DUAS VEZES seguidas (mesmo UUID), causa raiz confirmada via
// analise de log do spam "Tried to add entity ... but it was
// marked as removed already".
//
// Historico da investigacao:
//   v1: cancelava so infectious:mutation_trigger (entidade
//       auxiliar que acompanha spawn de zumbi). Funcionou 100%
//       pra ela (0 ocorrencias depois), mas o log seguinte
//       revelou que o MESMO bug acontece direto em mais de 20
//       variantes de zumbi do mod (zombie_girl, muscular_zombie,
//       claw_zombie, zombified_wolf, etc) -- um problema mais
//       amplo no sistema de "evolucao"/mutacao do mod inteiro,
//       nao só no ajudante.
//   v2 (esta versao): em vez de perseguir variante por variante
//       dentro de codigo MCreator gerado (inviavel, sao dezenas
//       de procedures), detecta a duplicacao pelo sintoma real:
//       a MESMA entidade (mesmo UUID) tentando spawnar de novo
//       logo em seguida. Cancela so a segunda tentativa,
//       independente de qual variante seja -- sem impedir
//       nenhum zumbi de nascer normalmente pela primeira vez.
//
// API confirmada via decompilacao do kubejs-forge-2001.6.5-build.26.jar:
//   - EntityEvents.spawned, cancelavel via event.cancel()
// ============================================================

// UUID -> tick em que foi visto pela ultima vez
const seenUUIDs = new Map()
let tickCounter = 0

ServerEvents.tick(event => {
    tickCounter++
    // limpa entradas com mais de 10 segundos (200 ticks) a cada
    // 5 segundos, pra nao vazar memoria numa sessao longa
    if (tickCounter % 100 === 0) {
        for (const [uuid, seenAt] of seenUUIDs) {
            if (tickCounter - seenAt > 200) {
                seenUUIDs.delete(uuid)
            }
        }
    }
})

EntityEvents.spawned(event => {
    let id = event.entity.type
    if (!id.startsWith('infectious:')) return

    let uuid = event.entity.uuid.toString()

    if (seenUUIDs.has(uuid)) {
        // essa entidade ja tentou nascer antes, ha pouco tempo --
        // isso e a re-adicao bugada, cancela
        event.cancel()
        return
    }

    seenUUIDs.set(uuid, tickCounter)
})
