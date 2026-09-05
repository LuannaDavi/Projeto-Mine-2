// ============================================================
// clear_starter_junk.js
// Limpa o inventario do jogador so na PRIMEIRA vez que QUALQUER
// jogador entra nesse mundo especifico -- nunca mais depois
// disso, nem reabrindo o jogo, nem em outra sessao. Depois da
// limpeza, da o livro guia do modpack.
//
// HISTORICO DE BUGS JA CORRIGIDOS NESSE SCRIPT:
//   v1: usava so uma tag no JOGADOR -- perigoso em mundo ja
//       existente.
//   v2: getGameTime() do nivel -- metodo nao existe nesse
//       encadeamento, falhava.
//   v3: getTickCount() do SERVIDOR -- reseta a cada sessao,
//       tratava mundo antigo como novo depois de reabrir o jogo.
//   v4: marca permanente no MUNDO (overworld), resolveu o
//       problema de mundo antigo.
//   v5: limpava repetidamente por 15 segundos usando
//       scheduleInTicks recursivo (uma funcao chamando ela
//       mesma via agendamento) -- bug: KubeJS/Rhino nao
//       resolvia a referencia da funcao a tempo quando declarada
//       dentro do try, gerando erro
//       "kjs$scheduleInTicks(number, Undefined)".
//   v6 (esta versao): troca a recursao por ServerEvents.tick,
//       que ja é um padrao confirmado funcionando em outros
//       scripts do pack (stop_infectious_lag.js). Guarda a
//       referencia do jogador direto numa lista (nao um UUID
//       pra rebuscar depois), evitando qualquer API nao
//       confirmada.
//
// API confirmada via decompilacao do kubejs-forge-2001.6.5-build.26.jar:
//   - PlayerEvents.loggedIn
//   - ServerEvents.tick
//   - player.getPersistentData() / level.getPersistentData()
// ============================================================

// lista de {player, restantes} -- jogadores ainda no periodo de
// limpeza repetida
let jogadoresLimpando = []
let tickCounter = 0

PlayerEvents.loggedIn(event => {
    let player = event.player

    try {
        let overworld = player.server.overworld()
        let worldData = overworld.getPersistentData()

        let alreadySetup = worldData.getBoolean('pack_setup_done')
        player.tell(Text.aqua('[debug] pack_setup_done (no MUNDO) = ' + alreadySetup))

        if (alreadySetup) {
            player.tell(Text.aqua('[debug] Este mundo ja foi processado antes -- nao mexendo no inventario.'))
            return
        }

        worldData.putBoolean('pack_setup_done', true)

        player.tell(Text.aqua('[debug] Primeira vez nesse mundo. Vou limpar o inventario repetidamente pelos proximos 15 segundos...'))

        jogadoresLimpando.push({ player: player, restantes: 15 })

    } catch (e) {
        player.tell(Text.red('[debug] ERRO: ' + e))
    }
})

ServerEvents.tick(event => {
    if (jogadoresLimpando.length === 0) return

    tickCounter++
    if (tickCounter % 20 !== 0) return // roda 1x por segundo

    let aindaFaltam = []

    for (const entrada of jogadoresLimpando) {
        let player = entrada.player

        player.getInventory().clearContent()

        if (entrada.restantes <= 1) {
            player.give(
                Item.of('patchouli:guide_book', { 'patchouli:book': 'guia:manual_sobrevivencia' })
            )
            player.tell(Text.gold('Seu inventário foi limpo dos itens de tutorial padrão dos mods.'))
            player.tell(Text.gold('Você recebeu o Manual de Sobrevivência do modpack!'))
        } else {
            aindaFaltam.push({ player: player, restantes: entrada.restantes - 1 })
        }
    }

    jogadoresLimpando = aindaFaltam
})
