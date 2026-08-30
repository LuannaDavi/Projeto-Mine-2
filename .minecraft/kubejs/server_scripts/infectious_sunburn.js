// ============================================================
// infectious_sunburn.js
// Faz os zumbis do Infectious pegarem fogo durante o dia, como
// zumbis vanilla -- comportamento que o mod nunca implementou.
//
// Confirmado via decompilacao (CFR) do jar Infectious-forge-1.20.1-1.7.jar:
//   - net.mcreator.infectious.entity.ZombieEntity extends Monster
//     (nao extends net.minecraft.world.entity.monster.Zombie)
//   - A logica de "pegar fogo no sol" do vanilla vive dentro da
//     classe Zombie especificamente (aiStep). Como as entidades do
//     Infectious nunca herdaram dela, o comportamento nunca existiu
//     -- nao e uma config quebrada, e ausencia total de codigo.
//
// Como o mod nao da esse gancho, simulamos manualmente aqui:
// a cada segundo (20 ticks), verifica zumbis infecciosos expostos
// ao ceu durante o dia e toca fogo neles.
//
// Rodar a cada 20 ticks (nao todo tick) para nao adicionar mais
// carga de processamento -- ja tivemos problema de lag nesse
// pack, entao aqui a checagem e propositalmente leve e throttled.
// ============================================================

let tickCounter = 0

ServerEvents.tick(event => {
    tickCounter++
    if (tickCounter % 20 !== 0) return // roda 1x por segundo, nao todo tick

    event.server.getAllLevels().forEach(level => {
        if (!level.isDay()) return

        level.getAllEntities().forEach(entity => {
            let id = entity.type

            // so mexe em entidades do Infectious com "zombie" no nome
            // (cobre a grande maioria: zombie, crawling_zombie,
            // muscular_zombie, iron_door_zombie, zombified_wolf,
            // zombified_boar, zombified_spider, etc)
            if (!id.startsWith('infectious:') || !id.includes('zombie')) return

            // ja esta pegando fogo, nao precisa fazer nada
            if (entity.isOnFire()) return

            // precisa estar exposto ao ceu (nao embaixo de bloco/teto)
            if (!level.canSeeSky(entity.blockPosition())) return

            // nao pega fogo se estiver na agua ou chuva
            if (entity.isInWaterOrRain()) return

            entity.setSecondsOnFire(8)
        })
    })
})
