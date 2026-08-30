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

// ============================================================
// stop_infectious_lag.js
// Impede o bug de spawn do Infectious que gera o spam de "Tried
// to add entity ... but it was marked as removed already".
//
// Causa raiz real (confirmada via decompilacao de
// ZombieOnInitialEntitySpawnProcedure.class e mais de 50
// procedures irmãs, uma por variante de zumbi):
//   O proprio mod tenta descartar (discard) o zumbi NO MOMENTO
//   do spawn quando: nao ha jogador num raio de 10 blocos E
//   (luz baixa OU exposto ao ceu). Isso parece ser a tentativa
//   (mal feita) do mod de simular "queimar no sol" -- mas como
//   roda durante o proprio processo de adicionar a entidade ao
//   mundo (nao depois, num tick normal), cria uma corrida: o
//   jogo ainda esta registrando a entidade quando o mod manda
//   descartar ela, gerando o erro repetidamente. Como spawn
//   natural sem jogador por perto e o cenario mais comum do
//   jogo, isso acontece o tempo todo.
//
// Historico: v1 mirava so o ajudante mutation_trigger (funcionou
// mas nao era a causa principal). v2 tentava detectar UUID
// duplicado (nao funcionou, a causa nao e duplicacao de UUID).
// v3 (esta versao) ataca a causa raiz de verdade: cancela o
// spawn ANTES do mod ter chance de rodar sua logica de descarte
// -- replicando a mesma condicao que o mod usa, mas de forma
// limpa, sem a corrida.
//
// API confirmada via decompilacao do kubejs-forge-2001.6.5-build.26.jar:
//   - EntityEvents.spawned, cancelavel via event.cancel()
// ============================================================

EntityEvents.spawned(event => {
    let id = event.entity.type
    if (!id.startsWith('infectious:') || !id.includes('zombie')) return

    let level = event.entity.level
    let pos = event.entity.blockPosition()

    // mesma condicao usada pelo mod: sem jogador num raio de 10
    // blocos E (luz baixa OU exposto ao ceu)
    let nearbyPlayer = level.getNearestPlayer(event.entity, 10)
    if (nearbyPlayer) return // tem jogador perto, deixa nascer normal

    let lowLight = level.getMaxLocalRawBrightness(pos) <= 4
    let exposedToSky = level.canSeeSky(pos)

    if (lowLight || exposedToSky) {
        // essa entidade ia se autodestruir no mesmo instante por
        // causa da logica do proprio mod -- cancela o spawn de
        // forma limpa em vez de deixar a corrida acontecer
        event.cancel()
    }
})
