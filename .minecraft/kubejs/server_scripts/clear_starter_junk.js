// ============================================================
// clear_starter_junk.js
// Limpa o inventario do jogador so na PRIMEIRA vez que QUALQUER
// jogador entra nesse mundo especifico -- nunca mais depois
// disso, nem reabrindo o jogo, nem em outra sessao.
//
// HISTORICO DE BUGS JA CORRIGIDOS NESSE SCRIPT:
//   v1: usava so uma tag no JOGADOR -- perigoso em mundo ja
//       existente, porque um jogador que nunca logou antes
//       (mesmo num save antigo) seria tratado como "novo".
//   v2: tentava resolver isso com getGameTime() do nivel --
//       metodo nao existe nesse encadeamento, falhava.
//   v3: tentava com getTickCount() do SERVIDOR -- bug: essa
//       contagem e por SESSAO do servidor, reseta toda vez que
//       o jogo abre de novo. Resultado: logar num mundo antigo
//       logo depois de abrir o jogo tambem limpava o inventario,
//       porque a contagem de ticks estava baixa de novo.
//   v4 (esta versao): usa uma marca permanente gravada no
//       PROPRIO MUNDO (overworld), nao no jogador nem no
//       servidor. Isso e salvo em disco de verdade, entao
//       sobrevive a fechar e abrir o jogo quantas vezes for.
//       So limpa quando essa marca NUNCA existiu pra esse save.
//
// API confirmada via decompilacao do kubejs-forge-2001.6.5-build.26.jar:
//   - PlayerEvents.loggedIn
//   - player.getPersistentData() / level.getPersistentData()
//     (ServerLevelKJS tambem implementa WithPersistentData,
//     confirmado via decompilacao)
// ============================================================

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

        // marca o mundo como processado JA, antes de agendar a
        // limpeza -- assim, mesmo que dois jogadores entrem ao
        // mesmo tempo num mundo novo, so o primeiro aciona a
        // limpeza (para cada um, ja que a limpeza roda por
        // jogador mesmo, mas a marca do mundo evita reprocessar
        // em sessoes futuras)
        worldData.putBoolean('pack_setup_done', true)

        player.tell(Text.aqua('[debug] Primeira vez nesse mundo. Vou limpar o inventario em 5 segundos...'))

        player.server.scheduleInTicks(100, () => {
            player.getInventory().clearContent()
            player.tell(Text.gold('Seu inventário foi limpo dos itens de tutorial padrão dos mods.'))
        })

    } catch (e) {
        player.tell(Text.red('[debug] ERRO: ' + e))
    }
})
