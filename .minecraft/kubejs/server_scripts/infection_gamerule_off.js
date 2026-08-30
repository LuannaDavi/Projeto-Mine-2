// kubejs/server_scripts/infection_gamerule_off.js
//
// Desliga a infecção do mod Infectious automaticamente, toda vez que
// QUALQUER mundo carrega - diferente do datapack antigo, isso não depende
// de ativação por save, já que scripts do KubeJS carregam sempre, pra
// qualquer mundo novo ou existente.

ServerEvents.loaded(event => {
    event.server.getCommands().performPrefixedCommand(
        event.server.createCommandSourceStack(),
        "gamerule enableInfection false"
    );
});
