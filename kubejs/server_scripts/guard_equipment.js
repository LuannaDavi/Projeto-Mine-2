// ============================================================
// DODONA - Guard Equipment
// Guardas e NPCs equipam armas de outros mods aleatoriamente
// ============================================================

EntityEvents.spawned(event => {
  const entity = event.entity;
  const type = entity.type;
  const random = Math.random();

  // === GUARDAS DE ALDEIAS (Guard Villagers) ===
  if (type === 'guardvillagers:archer_guard') {
    const bows = [
      'l2archery:longbow',
      'l2archery:shortbow',
      'minecraft:crossbow',
      'minecraft:bow'
    ];
    entity.mainHandItem = Item.of(bows[Math.floor(random * bows.length)]);

    if (random > 0.7) {
      entity.offHandItem = Item.of('l2archery:explosive_arrow', 16);
    } else if (random > 0.4) {
      entity.offHandItem = Item.of('l2archery:poison_arrow', 8);
    } else {
      entity.offHandItem = Item.of('minecraft:arrow', 32);
    }
  }

  if (type === 'guardvillagers:guard') {
    if (random < 0.15) {
      entity.mainHandItem = Item.of('fantasy_weapons:bloodmoon_sword');
    } else if (random < 0.30) {
      entity.mainHandItem = Item.of('knightquest:knight_sword');
    } else if (random < 0.45) {
      entity.mainHandItem = Item.of('irons_spellbooks:iron_sword');
    } else if (random < 0.60) {
      entity.mainHandItem = Item.of('simple_weapons:iron_spear');
    } else if (random < 0.75) {
      entity.mainHandItem = Item.of('minecraft:iron_sword');
    } else {
      entity.mainHandItem = Item.of('minecraft:iron_axe');
    }

    if (random > 0.5) {
      entity.offHandItem = Item.of(
        random > 0.75 ? 'just_parry:parry_shield' : 'minecraft:shield'
      );
    }
  }

  // === GUARDAS DE MINECOLONIES ===
  if (type === 'minecolonies:citizen') {
    const nbt = entity.nbt;
    if (!nbt) return;

    const job = nbt.getString('Job') || '';

    if (job.toLowerCase().includes('knight') || job.toLowerCase().includes('guard')) {
      const knightWeapons = [
        'knightquest:knight_sword',
        'fantasy_weapons:knights_blade',
        'irons_spellbooks:iron_sword',
        'minecraft:iron_sword',
        'simple_weapons:iron_halberd'
      ];
      entity.mainHandItem = Item.of(
        knightWeapons[Math.floor(random * knightWeapons.length)]
      );
      if (random > 0.5) {
        entity.offHandItem = Item.of(
          random > 0.7 ? 'just_parry:parry_shield' : 'minecraft:shield'
        );
      }
    }

    if (job.toLowerCase().includes('ranger') || job.toLowerCase().includes('archer')) {
      entity.mainHandItem = Item.of(
        random > 0.5 ? 'l2archery:longbow' : 'l2archery:shortbow'
      );
      entity.offHandItem = Item.of('minecraft:arrow', 32);
    }
  }

  // === SIMPLE DWARVES - anoes com equipamento tematico ===
  if (type.startsWith('simpledwarves:')) {
    if (random < 0.3) {
      entity.mainHandItem = Item.of('knightquest:knight_axe');
    } else if (random < 0.6) {
      entity.mainHandItem = Item.of('minecraft:iron_axe');
    } else {
      entity.mainHandItem = Item.of('minecraft:iron_pickaxe');
    }
    if (random > 0.6) {
      entity.offHandItem = Item.of('minecraft:shield');
    }
  }

  // === THE MERCHANTS GUILD - comerciantes com itens tematicos ===
  if (type.startsWith('themerchantsguild:')) {
    if (random < 0.2) {
      entity.mainHandItem = Item.of('artifacts:lucky_scarf');
    } else if (random < 0.4) {
      entity.mainHandItem = Item.of('relics:relic_fragment', 3);
    } else if (random < 0.6) {
      entity.mainHandItem = Item.of('waystones:warp_scroll');
    }
  }

  // === COMPANIONS - equipamento por bioma ===
  if (type === 'companions:companion') {
    try {
      const biome = entity.level.getBiome(entity.blockPosition()).toString();

      if (biome.includes('desert') || biome.includes('savanna')) {
        entity.mainHandItem = Item.of('l2archery:shortbow');
      } else if (biome.includes('taiga') || biome.includes('snow') || biome.includes('frozen')) {
        entity.mainHandItem = Item.of('l2archery:longbow');
      } else if (biome.includes('nether') || biome.includes('basalt') || biome.includes('crimson')) {
        entity.mainHandItem = Item.of('fantasy_weapons:blazing_sword');
      } else if (biome.includes('jungle')) {
        entity.mainHandItem = Item.of('simple_weapons:iron_dagger');
      } else {
        entity.mainHandItem = Item.of('minecraft:iron_sword');
      }
    } catch (e) {
      entity.mainHandItem = Item.of('minecraft:iron_sword');
    }
  }
});