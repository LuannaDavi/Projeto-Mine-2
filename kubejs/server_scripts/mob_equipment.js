// ============================================================
// DODONA - Mob Equipment
// Mobs comuns com chance de nascer com armas de outros mods
// ============================================================

EntityEvents.spawned(event => {
  const entity = event.entity;
  const type = entity.type;
  const random = Math.random();

  // === ZUMBIS ===
  if (type === 'minecraft:zombie' || type === 'minecraft:zombie_villager') {
    if (random < 0.05) {
      entity.mainHandItem = Item.of('fantasy_weapons:cursed_blade');
    } else if (random < 0.10) {
      entity.mainHandItem = Item.of('born_in_chaos_v1:darkened_sword');
    } else if (random < 0.15) {
      entity.mainHandItem = Item.of('minecraft:iron_sword');
    } else if (random < 0.18) {
      entity.mainHandItem = Item.of('simple_weapons:iron_dagger');
    }

    if (random > 0.92) {
      entity.equipmentSlot('feet', Item.of('born_in_chaos_v1:cursed_boots'));
    }
  }

  // === ESQUELETOS ===
  if (type === 'minecraft:skeleton') {
    if (random < 0.15) {
      entity.mainHandItem = Item.of('l2archery:longbow');
    } else if (random < 0.30) {
      entity.mainHandItem = Item.of('l2archery:shortbow');
    }

    if (random > 0.90) {
      entity.offHandItem = Item.of('l2archery:poison_arrow', 8);
    } else if (random > 0.80) {
      entity.offHandItem = Item.of('l2archery:explosive_arrow', 4);
    }
  }

  // === WITHER SKELETONS ===
  if (type === 'minecraft:wither_skeleton') {
    if (random < 0.20) {
      entity.mainHandItem = Item.of('fantasy_weapons:blazing_sword');
    } else if (random < 0.35) {
      entity.mainHandItem = Item.of('irons_spellbooks:fire_staff');
    }
  }

  // === PIGLINS ===
  if (type === 'minecraft:piglin' || type === 'minecraft:piglin_brute') {
    if (random < 0.15) {
      entity.mainHandItem = Item.of('fantasy_weapons:blazing_sword');
    } else if (random < 0.25) {
      entity.mainHandItem = Item.of('simple_weapons:golden_spear');
    }
  }

  // === GOBLINS TYRANNY ===
  if (type.startsWith('goblins_tyranny:')) {
    const goblinWeapons = [
      'minecraft:stone_sword',
      'minecraft:wooden_axe',
      'l2archery:shortbow',
      'simple_weapons:wooden_dagger',
      'simple_weapons:stone_spear'
    ];
    if (random < 0.50) {
      entity.mainHandItem = Item.of(
        goblinWeapons[Math.floor(random * goblinWeapons.length)]
      );
    }
  }

  // === BORN IN CHAOS ===
  if (type.startsWith('born_in_chaos_v1:')) {
    if (random < 0.12) {
      entity.mainHandItem = Item.of('knightquest:bone_sword');
    } else if (random < 0.20) {
      entity.mainHandItem = Item.of('simple_weapons:bone_dagger');
    }
  }

  // === ILLAGERS (Pillagers, Vindicators, Evokers) ===
  if (type === 'minecraft:vindicator') {
    if (random < 0.20) {
      entity.mainHandItem = Item.of('fantasy_weapons:battle_axe');
    } else if (random < 0.35) {
      entity.mainHandItem = Item.of('simple_weapons:iron_halberd');
    }
  }

  if (type === 'minecraft:pillager') {
    if (random < 0.20) {
      entity.mainHandItem = Item.of('l2archery:longbow');
    }
  }

  // === MOBS DO SAVAGE AND RAVAGE ===
  if (type.startsWith('savage_and_ravage:')) {
    if (random < 0.15) {
      entity.mainHandItem = Item.of('fantasy_weapons:bloodmoon_sword');
    }
  }

  // === LEGENDARY MONSTERS - versoes epicas ===
  if (type.startsWith('legendarymonsters:')) {
    const epicWeapons = [
      'fantasy_weapons:bloodmoon_sword',
      'knightquest:dragon_sword',
      'irons_spellbooks:arcane_staff',
      'simple_weapons:diamond_halberd'
    ];
    if (random < 0.40) {
      entity.mainHandItem = Item.of(
        epicWeapons[Math.floor(random * epicWeapons.length)]
      );
    }
    // Legendary monsters tem chance de armadura
    if (random > 0.70) {
      entity.equipmentSlot('chest', Item.of('minecraft:iron_chestplate'));
    }
    if (random > 0.80) {
      entity.equipmentSlot('head', Item.of('minecraft:iron_helmet'));
    }
  }

  // === MOBS DO GRAVEYARD ===
  if (type.startsWith('graveyard:')) {
    if (random < 0.15) {
      entity.mainHandItem = Item.of('born_in_chaos_v1:darkened_sword');
    } else if (random < 0.25) {
      entity.mainHandItem = Item.of('irons_spellbooks:bone_staff');
    }
  }

  // === MOBS DO AETHER ===
  if (type.startsWith('aether:')) {
    if (random < 0.15) {
      entity.mainHandItem = Item.of('fantasy_weapons:celestial_blade');
    }
  }
});