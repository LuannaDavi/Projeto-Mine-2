// kubejs/server_scripts/disable_infectious_effects.js
// Desativa os efeitos de Radiação e Infecção do mod Infectious,
// sem remover o resto do mod.
//
// Por que ServerEvents.tick (nivel de servidor) e nao PlayerEvents.tick:
// mobs como o Radioactive Zombie reaplicam esses efeitos a cada tick de
// ENTIDADE (radius de 4 blocos, duracao 600 ticks). Um script rodando em
// PlayerEvents.tick disputa a ordem de execucao com esse tick de entidade
// no mesmo ciclo, e pode perder a corrida (o efeito volta antes do proximo
// removeEffect rodar). ServerEvents.tick roda no fim do ciclo do servidor,
// depois que TODOS os ticks de entidade do mundo ja aconteceram - entao a
// remocao sempre vence, independente da ordem interna de entidades.

ServerEvents.tick(event => {
    const server = event.server
    const mobEffectRegistry = Utils.getRegistry(Utils.id('minecraft:mob_effect'))

    const radiation = mobEffectRegistry.getValue(Utils.id('infectious:radiation'))
    const infection = mobEffectRegistry.getValue(Utils.id('infectious:infection'))

    server.getPlayerList().getPlayers().forEach(player => {
        if (radiation && player.potionEffects.isActive(radiation)) {
            player.removeEffect(radiation)
        }
        if (infection && player.potionEffects.isActive(infection)) {
            player.removeEffect(infection)
        }
    })
})
