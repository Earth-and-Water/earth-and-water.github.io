var SEARCH_DATA = [
    // Mobs
    { id: 'mob', title: 'Mob', url: 'mobs.html', category: 'Category' },
    { id: 'bore', title: 'Bore', url: 'mobs/bore.html', category: 'Mobs' },
    { id: 'brine', title: 'Brine', url: 'mobs/brine.html', category: 'Mobs' },
    { id: 'earth_charge', title: 'Earth Charge', url: 'mobs/earth_charge.html', category: 'Mobs' },
    { id: 'water_charge', title: 'Water Charge', url: 'mobs/water_charge.html', category: 'Mobs' },
    
    // Blocks
    { id: 'block', title: 'Block', url: 'blocks.html', category: 'Category' },
    { id: 'test', title: 'TEST', url: 'blocks.html', category: 'Category' },
    { id: 'dripstone_stairs', title: 'Dripstone Stairs', url: 'blocks/dripstone_stairs.html', category: 'Blocks' },
    { id: 'dripstone_slab', title: 'Dripstone Slab', url: 'blocks/dripstone_slab.html', category: 'Blocks' },
    { id: 'dripstone_wall', title: 'Dripstone Wall', url: 'blocks/dripstone_wall.html', category: 'Blocks' },
    { id: 'dripstone_bricks', title: 'Dripstone Bricks', url: 'blocks/dripstone_bricks.html', category: 'Blocks' },
    { id: 'dripstone_brick_stairs', title: 'Dripstone Brick Stairs', url: 'blocks/dripstone_brick_stairs.html', category: 'Blocks' },
    { id: 'dripstone_brick_slab', title: 'Dripstone Brick Slab', url: 'blocks/dripstone_brick_slab.html', category: 'Blocks' },
    { id: 'dripstone_brick_wall', title: 'Dripstone Brick Wall', url: 'blocks/dripstone_brick_wall.html', category: 'Blocks' },
    { id: 'polished_dripstone', title: 'Polished Dripstone', url: 'blocks/polished_dripstone.html', category: 'Blocks' },
    { id: 'polished_dripstone_stairs', title: 'Polished Dripstone Stairs', url: 'blocks/polished_dripstone_stairs.html', category: 'Blocks' },
    { id: 'polished_dripstone_slab', title: 'Polished Dripstone Slab', url: 'blocks/polished_dripstone_slab.html', category: 'Blocks' },
    { id: 'polished_dripstone_wall', title: 'Polished Dripstone Wall', url: 'blocks/polished_dripstone_wall.html', category: 'Blocks' },
    { id: 'polished_dripstone_tiles', title: 'Polished Dripstone Tiles', url: 'blocks/polished_dripstone_tiles.html', category: 'Blocks' },
    { id: 'dripstone_pillar', title: 'Dripstone Pillar', url: 'blocks/dripstone_pillar.html', category: 'Blocks' },
    { id: 'chiseled_dripstone_bricks', title: 'Chiseled Dripstone Bricks', url: 'blocks/chiseled_dripstone_bricks.html', category: 'Blocks' },
    { id: 'dark_dripstone_block', title: 'Dark Dripstone Block', url: 'blocks/dark_dripstone_block.html', category: 'Blocks' },
    { id: 'dark_dripstone_stairs', title: 'Dark Dripstone Stairs', url: 'blocks/dark_dripstone_stairs.html', category: 'Blocks' },
    { id: 'dark_dripstone_slab', title: 'Dark Dripstone Slab', url: 'blocks/dark_dripstone_slab.html', category: 'Blocks' },
    { id: 'dark_dripstone_wall', title: 'Dark Dripstone Wall', url: 'blocks/dark_dripstone_wall.html', category: 'Blocks' },
    { id: 'dark_dripstone_bricks', title: 'Dark Dripstone Bricks', url: 'blocks/dark_dripstone_bricks.html', category: 'Blocks' },
    { id: 'dark_dripstone_brick_stairs', title: 'Dark Dripstone Brick Stairs', url: 'blocks/dark_dripstone_brick_stairs.html', category: 'Blocks' },
    { id: 'dark_dripstone_brick_slab', title: 'Dark Dripstone Brick Slab', url: 'blocks/dark_dripstone_brick_slab.html', category: 'Blocks' },
    { id: 'dark_dripstone_brick_wall', title: 'Dark Dripstone Brick Wall', url: 'blocks/dark_dripstone_brick_wall.html', category: 'Blocks' },
    { id: 'polished_dark_dripstone', title: 'Polished Dark Dripstone', url: 'blocks/polished_dark_dripstone.html', category: 'Blocks' },
    { id: 'polished_dark_dripstone_stairs', title: 'Polished Dark Dripstone Stairs', url: 'blocks/polished_dark_dripstone_stairs.html', category: 'Blocks' },
    { id: 'polished_dark_dripstone_slab', title: 'Polished Dark Dripstone Slab', url: 'blocks/polished_dark_dripstone_slab.html', category: 'Blocks' },
    { id: 'polished_dark_dripstone_wall', title: 'Polished Dark Dripstone Wall', url: 'blocks/polished_dark_dripstone_wall.html', category: 'Blocks' },
    { id: 'dark_dripstone_pillar', title: 'Dark Dripstone Pillar', url: 'blocks/dark_dripstone_pillar.html', category: 'Blocks' },
    { id: 'pointed_dark_dripstone', title: 'Pointed Dark Dripstone', url: 'blocks/pointed_dark_dripstone.html', category: 'Blocks' },
    { id: 'dark_prismarine_pillar', title: 'Dark Prismarine Pillar', url: 'blocks/dark_prismarine_pillar.html', category: 'Blocks' },
    { id: 'dark_prismarine_wall', title: 'Dark Prismarine Wall', url: 'blocks/dark_prismarine_wall.html', category: 'Blocks' },
    { id: 'chiseled_prismarine_bricks', title: 'Chiseled Prismarine Bricks', url: 'blocks/chiseled_prismarine_bricks.html', category: 'Blocks' },
    { id: 'prismarine_pillar', title: 'Prismarine Pillar', url: 'blocks/prismarine_pillar.html', category: 'Blocks' },
    { id: 'prismarine_tiles', title: 'Prismarine Tiles', url: 'blocks/prismarine_tiles.html', category: 'Blocks' },
    { id: 'prismarine_tile_stairs', title: 'Prismarine Tile Stairs', url: 'blocks/prismarine_tile_stairs.html', category: 'Blocks' },
    { id: 'prismarine_tile_slab', title: 'Prismarine Tile Slab', url: 'blocks/prismarine_tile_slab.html', category: 'Blocks' },
    { id: 'prismarine_tile_wall', title: 'Prismarine Tile Wall', url: 'blocks/prismarine_tile_wall.html', category: 'Blocks' },
    { id: 'mixed_prismarine_tiles', title: 'Mixed Prismarine Tiles', url: 'blocks/mixed_prismarine_tiles.html', category: 'Blocks' },
    { id: 'chiseled_dark_prismarine', title: 'Chiseled Dark Prismarine', url: 'blocks/chiseled_dark_prismarine.html', category: 'Blocks' },
    { id: 'steel_block', title: 'Steel Block', url: 'blocks/steel_block.html', category: 'Blocks' },
    { id: 'oxygen_block', title: 'Oxygen Block', url: 'blocks/oxygen_block.html', category: 'Blocks' },
    { id: 'reinforced_spawner', title: 'Reinforced Spawner', url: 'blocks/reinforced_spawner.html', category: 'Blocks' },
    
    // Items
    { id: 'item', title: 'Item', url: 'items.html', category: 'Category' },
    { id: 'bore_rod', title: 'Bore Rod', url: 'items/bore_rod.html', category: 'Items' },
    { id: 'brine_rod', title: 'Brine Rod', url: 'items/brine_rod.html', category: 'Items' },
    { id: 'reinforced_key', title: 'Reinforced Key', url: 'items/reinforced_key.html', category: 'Items' },
    { id: 'steel_ingot', title: 'Steel Ingot', url: 'items/steel_ingot.html', category: 'Items' },
    { id: 'steel_nugget', title: 'Steel Nugget', url: 'items/steel_nugget.html', category: 'Items' },
    { id: 'spiked_shield', title: 'Spiked Shield', url: 'items/spiked_shield.html', category: 'Items' },
    { id: 'bore_spawn_egg', title: 'Bore Spawn Egg', url: 'items/bore_spawn_egg.html', category: 'Items' },
    { id: 'brine_spawn_egg', title: 'Brine Spawn Egg', url: 'items/brine_spawn_egg.html', category: 'Items' },
    
    // Weapons
    { id: 'whip', title: 'Whip', url: 'items/whip.html', category: 'Weapons' },
    { id: 'battle_axe', title: 'Battle Axe', url: 'items/battle_axe.html', category: 'Weapons' },
    
    // Biomes
    { id: 'biome', title: 'Biome', url: 'biomes.html', category: 'Category' },
    { id: 'dark_dripstone_cave', title: 'Dark Dripstone Cave', url: 'biomes/dark_dripstone_cave.html', category: 'Biomes' },
    
    // Effects
    { id: 'effect', title: 'Effect', url: 'effects.html', category: 'Category' },
    { id: 'stun', title: 'Stun', url: 'effects.html#stun', category: 'Effects' },
    { id: 'breath_giving', title: 'Breath Giving', url: 'effects.html#breath-giving', category: 'Effects' },
    
    // Smithing
    { id: 'smithing', title: 'Smithing', url: 'smithing.html', category: 'Category' },
    { id: 'steel_upgrade', title: 'Steel Upgrade', url: 'smithing.html#spiked-shield', category: 'Smithing' },
    { id: 'block_smithing_template', title: 'Block Smithing Template', url: 'smithing.html#block-template', category: 'Smithing' },
    { id: 'guard_smithing_template', title: 'Guard Smithing Template', url: 'smithing.html#guard-template', category: 'Smithing' },
    
    // Structures
    { id: 'structure', title: 'Structure', url: 'structures.html', category: 'Structures' },
    { id: 'conduit_monument', title: 'Conduit Monument', url: 'structures/conduit_monument.html', category: 'Structures' },
    { id: 'ancient_ruins', title: 'Ancient Ruins', url: 'structures/ancient_ruins.html', category: 'Structures' },
    
    // History
    { id: 'history', title: 'History', url: 'history.html', category: 'Category' },
    { id: 'andesite_bricks', title: 'Andesite Bricks', url: 'history.html#scrapped', category: 'History' },
    { id: 'diorite_bricks', title: 'Diorite Bricks', url: 'history.html#scrapped', category: 'History' },
    { id: 'granite_bricks', title: 'Granite Bricks', url: 'history.html#scrapped', category: 'History' },
    { id: 'spear', title: 'Spear', url: 'history.html#scrapped', category: 'History' },
    { id: 'steel_helmet', title: 'Steel Helmet', url: 'history.html#scrapped', category: 'History' },
    { id: 'weakened_trident', title: 'Weakened Trident', url: 'history.html#scrapped', category: 'History' },
    { id: 'shockwave', title: 'Shockwave', url: 'history.html#scrapped', category: 'History' },
    { id: 'bubble_vortex', title: 'Bubble Vortex', url: 'history.html#scrapped', category: 'History' },
    
    // Advancements
    { id: 'advancement', title: 'Advancement', url: 'advancements.html', category: 'Category' },
    { id: 'mob_lock', title: 'Mob Lock', url: 'advancements/mob_lock.html', category: 'Advancements' },
    { id: 'long_ago', title: 'Long Ago…', url: 'advancements/long_ago.html', category: 'Advancements' },
    { id: 'boreing', title: 'Boreing', url: 'advancements/boreing.html', category: 'Advancements' },
    { id: 'atlantean_eye', title: 'Atlantean Eye', url: 'advancements/atlantean_eye.html', category: 'Advancements' },
    { id: 'stalactite_sanctum', title: 'Stalactite Sanctum', url: 'advancements/stalactite_sanctum.html', category: 'Advancements' },
    
    // Paintings
    { id: 'painting', title: 'Painting', url: 'paintings.html', category: 'Category' },
    { id: 'ruins', title: 'Ruins', url: 'paintings/ruins.html', category: 'Paintings' }
];

// Simple search function (like most static sites use)
function searchSite(query) {
    if (!query) return [];
    
    var terms = query.toLowerCase().split(/\s+/);
    var results = [];
    
    for (var i = 0; i < SEARCH_DATA.length; i++) {
        var item = SEARCH_DATA[i];
        var score = 0;
        var title = item.title.toLowerCase();
        var category = item.category.toLowerCase();
        
        for (var j = 0; j < terms.length; j++) {
            var term = terms[j];
            if (title.indexOf(term) === 0) score += 10;
            else if (title.indexOf(term) !== -1) score += 5;
            if (category.indexOf(term) !== -1) score += 3;
        }
        
        if (score > 0) {
            results.push({
                title: item.title,
                url: item.url,
                category: item.category,
                score: score
            });
        }
    }
    
    return results.sort(function(a, b) { return b.score - a.score; }).slice(0, 8);
}
