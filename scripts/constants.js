export const CELL_SELECTOR = {
  ALL: ".origami-cell",

  LINE_1: ".line-1",
  LINE_2: ".line-2",
  LINE_3: ".line-3",
  LINE_4: ".line-4",
  LINE_5: ".line-5",

  CELL_1: "#cell-1",
  CELL_2: "#cell-2",
  CELL_3: "#cell-3",
  CELL_4: "#cell-4",
  CELL_5: "#cell-5",
  CELL_6: "#cell-6",
  CELL_7: "#cell-7",
  CELL_8: "#cell-8",
  CELL_9: "#cell-9",
  CELL_10: "#cell-10",
  CELL_11: "#cell-11",
  CELL_12: "#cell-12",
  CELL_13: "#cell-13",
  CELL_14: "#cell-14",
  CELL_15: "#cell-15",
  CELL_16: "#cell-16",
  CELL_17: "#cell-17",
  CELL_18: "#cell-18",
  CELL_19: "#cell-19",
  CELL_20: "#cell-20",
  CELL_21: "#cell-21",
  CELL_22: "#cell-22",
  CELL_23: "#cell-23",
  CELL_24: "#cell-24",
  CELL_25: "#cell-25",
};

export const COLORPICKER_SELECTOR = "#colorpicker-all";

export const SIMPLE_COLORPICKER_SELECTOR = "#simple-colorpicker-all";

export const COLORPICKER_CONTAINER = "#color-container-all";

export const OPEN_MODAL_SELECTORS = {
  ALL: "#openModalAll",

  LINE_1: "#openModalLine1",
  LINE_2: "#openModalLine2",
  LINE_3: "#openModalLine3",
  LINE_4: "#openModalLine4",
  LINE_5: "#openModalLine5",

  CELL_1: "#openModalCell1",
  CELL_2: "#openModalCell2",
  CELL_3: "#openModalCell3",
  CELL_4: "#openModalCell4",
  CELL_5: "#openModalCell5",
  CELL_6: "#openModalCell6",
  CELL_7: "#openModalCell7",
  CELL_8: "#openModalCell8",
  CELL_9: "#openModalCell9",
  CELL_10: "#openModalCell10",
  CELL_11: "#openModalCell11",
  CELL_12: "#openModalCell12",
  CELL_13: "#openModalCell13",
  CELL_14: "#openModalCell14",
  CELL_15: "#openModalCell15",
  CELL_16: "#openModalCell16",
  CELL_17: "#openModalCell17",
  CELL_18: "#openModalCell18",
  CELL_19: "#openModalCell19",
  CELL_20: "#openModalCell20",
  CELL_21: "#openModalCell21",
  CELL_22: "#openModalCell22",
  CELL_23: "#openModalCell23",
  CELL_24: "#openModalCell24",
  CELL_25: "#openModalCell25",
};

export const COLORS = [
  {
    name: "White",
    code: "#FFFFFF",
  },
  {
    name: "Silver",
    code: "#C0C0C0",
  },
  {
    name: "Gray",
    code: "#808080",
  },
  {
    name: "Black",
    code: "#000000",
  },
  {
    name: "Red",
    code: "#FF0000",
  },
  {
    name: "Maroon",
    code: "#800000",
  },
  {
    name: "Yellow",
    code: "#FFFF00",
  },
  {
    name: "Olive",
    code: "#808000",
  },
  {
    name: "Lime",
    code: "#00FF00",
  },
  {
    name: "Green",
    code: "#008000",
  },
  {
    name: "Aqua",
    code: "#00FFFF",
  },
  {
    name: "Teal",
    code: "#008080",
  },
  {
    name: "Blue",
    code: "#0000FF",
  },
  {
    name: "Navy",
    code: "#000080",
  },
  {
    name: "Fuchsia",
    code: "#FF00FF",
  },
  {
    name: "Purple",
    code: "#800080",
  },
];

export const DEAFAULT_COLOR = "#FFFFFF";

export const IMAGEPICKER_SELECTOR = "#imageUploadAll";

export const IMAGEPICKER_CONTAINER = "#imagePreviewContainerAll";

export const IMAGE_PREVIEW_SELECTOR = "#imagePreviewAll";

export const FILE_NAME = "origami-grid";

export const PDF_OPTIONS_BIG = {
  X: 0,
  Y: 0,
  WIDTH: 210,
  HEIGHT: 210,
};

export const PDF_OPTIONS_MEDIUM = {
  SQUARE1: {
    X: 10,
    Y: 0,
  },
  SQUARE2: {
    X: 10,
    Y: 150,
  },
  WIDTH: 138,
  HEIGHT: 138,
};

export const PDF_OPTIONS_SMALL = {
  SQUARE1: {
    X: 3,
    Y: 3,
  },
  SQUARE2: {
    X: 107,
    Y: 3,
  },
  SQUARE3: {
    X: 3,
    Y: 150,
  },
  SQUARE4: {
    X: 107,
    Y: 150,
  },
  WIDTH: 103,
  HEIGHT: 103,
};

export const PRESET_LIST_SELECTOR = "#preset-list";

// this works on github pages
export const BLOCKS_PATH = "./assets/blocks";
export const SMB_BLOCKS_PATH = "super_mario_bros";
export const MT_SLG_BLOCKS_PATH = "metal_slug";
export const SMW_BLOCKS_PATH = "super_mario_world";
export const MINE_BLOCKS_PATH = "minecraft";
export const DEV_BLOCKS_PATH = "dev";
export const CHESS_PATH = "chess";
export const MEGAMAN_PATH = "megaman";

export const SM64_FONT_BLOCKS_PATH = "super_mario64_font";

export const BLOCKS = {
  DASHLINE: `${BLOCKS_PATH}/dashline.png`,

  SMB_BRICK: `${BLOCKS_PATH}/${SMB_BLOCKS_PATH}/SMB_brick.png`,
  SMB_GROUND: `${BLOCKS_PATH}/${SMB_BLOCKS_PATH}/SMB_ground.png`,
  SMB_EMPTY: `${BLOCKS_PATH}/${SMB_BLOCKS_PATH}/SMB_empy_block.png`,
  SMB_QUESTION: `${BLOCKS_PATH}/${SMB_BLOCKS_PATH}/SMB_question.png`,
  SMB_SOLID: `${BLOCKS_PATH}/${SMB_BLOCKS_PATH}/SMB_solid.png`,
  SMB_CASTLE_1: `${BLOCKS_PATH}/${SMB_BLOCKS_PATH}/SMB_castle_block_1.png`,
  SMB_CASTLE_2: `${BLOCKS_PATH}/${SMB_BLOCKS_PATH}/SMB_castle_block_2.png`,
  SMB_DOOR: `${BLOCKS_PATH}/${SMB_BLOCKS_PATH}/SMB_door.png`,

  MB_POW: `${BLOCKS_PATH}/MB_pow.png`,

  MTSLG_2H: `${BLOCKS_PATH}/${MT_SLG_BLOCKS_PATH}/MtSlg_2H.png`,
  MTSLG_C: `${BLOCKS_PATH}/${MT_SLG_BLOCKS_PATH}/MtSlg_C.png`,
  MTSLG_D: `${BLOCKS_PATH}/${MT_SLG_BLOCKS_PATH}/MtSlg_D.png`,
  MTSLG_F: `${BLOCKS_PATH}/${MT_SLG_BLOCKS_PATH}/MtSlg_F.png`,
  MTSLG_G: `${BLOCKS_PATH}/${MT_SLG_BLOCKS_PATH}/MtSlg_G.png`,
  MTSLG_H: `${BLOCKS_PATH}/${MT_SLG_BLOCKS_PATH}/MtSlg_H.png`,
  MTSLG_I: `${BLOCKS_PATH}/${MT_SLG_BLOCKS_PATH}/MtSlg_I.png`,
  MTSLG_L: `${BLOCKS_PATH}/${MT_SLG_BLOCKS_PATH}/MtSlg_L.png`,
  MTSLG_R: `${BLOCKS_PATH}/${MT_SLG_BLOCKS_PATH}/MtSlg_R.png`,
  MTSLG_S: `${BLOCKS_PATH}/${MT_SLG_BLOCKS_PATH}/MtSlg_S.png`,
  MTSLG_T: `${BLOCKS_PATH}/${MT_SLG_BLOCKS_PATH}/MtSlg_T.png`,
  MTSLG_Z: `${BLOCKS_PATH}/${MT_SLG_BLOCKS_PATH}/MtSlg_Z.png`,

  SMW_BONUS: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_bonus_block.png`,
  SMW_CLOULD: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_clould.png`,
  SMW_EXCLAMATION_BLUE: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_exclamation_block_blue.png`,
  SMW_EXCLAMATION_GREEN: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_exclamation_block_green.png`,
  SMW_EXCLAMATION_RED: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_exclamation_block_red.png`,
  SMW_EXCLAMATION_YELLOW: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_exclamation_block_yellow.png`,
  SMW_GROUND_TOP: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_ground_top.png`,
  SMW_GROUND: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_ground.png`,
  SMW_ICE: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_ice_block.png`,
  SMW_MESSAGE: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_message_block.png`,
  SMW_MESSAGE_SIDE: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_message_block_side.png`,
  SMW_NOTE: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_note_block.png`,
  SMW_NOTE_SIDE: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_note_block_side.png`,
  SMW_QUESTION: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_question_block.png`,
  SMW_QUESTION_RED: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_question_block_red.png`,
  SMW_ROTATING_BLUE: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_rotating_block_blue.png`,
  SMW_ROTATING_GREEN: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_rotating_block_green.png`,
  SMW_ROTATING_RED: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_rotating_block_red.png`,
  SMW_ROTATING_YELLOW: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_rotating_block_yellow.png`,
  SMW_STONE: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_stone_block.png`,
  SMW_SWITCH_OFF: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_switch_block_OFF.png`,
  SMW_SWITCH_ON: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_switch_block_ON.png`,
  SMW_USED: `${BLOCKS_PATH}/${SMW_BLOCKS_PATH}/SMW_used_block.png`,

  MINE_BAMBOO_BLOCK: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_bamboo_block.png`,
  MINE_BAMBOO_BLOCK_TOP: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_bamboo_block_top.png`,
  MINE_BEEHIVE_END: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_beehive_end.png`,
  MINE_BEEHIVE_FRONT: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_beehive_front.png`,
  MINE_BEEHIVE_FRONT_HONEY: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_beehive_front_honey.png`,
  MINE_BEEHIVE_SIDE: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_beehive_side.png`,
  MINE_BEE_NEST_BOTTOM: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_bee_nest_bottom.png`,
  MINE_BEE_NEST_FRONT: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_bee_nest_front.png`,
  MINE_BEE_NEST_FRONT_HONEY: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_bee_nest_front_honey.png`,
  MINE_BEE_NEST_SIDE: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_bee_nest_side.png`,
  MINE_BEE_NEST_TOP: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_bee_nest_top.png`,
  MINE_BOW_TABLE_FRONT: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_bow_table_front.png`,
  MINE_BOW_TABLE_SIDE: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_bow_table_side.png`,
  MINE_BOW_TABLE_TOP: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_bow_table_top.png`,
  MINE_BRONZE_BLOCK: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_Bronze_block.png`,
  MINE_CRAFTING_TABLE_FRONT: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_crafting_table_front.png`,
  MINE_CRAFTING_TABLE_SIDE: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_crafting_table_side.png`,
  MINE_CRAFTING_TABLE_TOP: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_crafting_table_top.png`,
  MINE_FURNACE_FRONT_OFF: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_furnace_front_off.png`,
  MINE_FURNACE_FRONT_ON: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_furnace_front_on.png`,
  MINE_FURNACE_SIDE: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_furnace_side.png`,
  MINE_FURNACE_TOP: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_furnace_top.png`,
  MINE_GOLD_BLOCK: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_gold_block.png`,
  MINE_GOLD_ORE: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_gold_ore.png`,
  MINE_GRASS_BLOCK_BOTTOM: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_grass_block_bottom.png`,
  MINE_GRASS_BLOCK_SIDE: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_grass_block_side.png`,
  MINE_GRASS_BLOCK_TOP: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_grass_block_top.png`,
  MINE_IRON_ORE: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_iron_ore.png`,
  MINE_OAK_LOG: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_oak_log.png`,
  MINE_OAK_LOG_TOP: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_oak_log_top.png`,
  MINE_DARK_OAK_LOG: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_dark_oak_log.png`,
  MINE_DARK_OAK_LOG_TOP: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_dark_oak_log_top.png`,
  MINE_ACACIA_LOG: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_acacia_log.png`,
  MINE_ACACIA_LOG_TOP: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_acacia_log_top.png`,
  MINE_BIRCH_LOG: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_birch_log.png`,
  MINE_BIRCH_LOG_TOP: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_birch_log_top.png`,
  MINE_CHERRY_LOG: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_cherry_log.png`,
  MINE_CHERRY_LOG_TOP: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_cherry_log_top.png`,
  MINE_COAL_ORE: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_coal_ore.png`,
  MINE_DIAMOND_ORE: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_diamond_ore.png`,
  MINE_EMERALD_ORE: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_emerald_ore.png`,
  MINE_LAPIS_ORE: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_lapis_ore.png`,
  MINE_TNT_BOTTOM: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_tnt_bottom.png`,
  MINE_TNT_SIDE: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_tnt_side.png`,
  MINE_TNT_TOP: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_tnt_top.png`,
  MINE_BARREL_BOTTOM: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_barrel_bottom.png`,
  MINE_BARREL_SIDE: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_barrel_side.png`,
  MINE_BARREL_TOP: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_barrel_top.png`,
  MINE_BARREL_TOP_OPEN: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_barrel_top_open.png`,
  MINE_COBBLESTONE: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_cobblestone.png`,
  MINE_COBBLESTONE_MOSSY: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_cobblestone_mossy.png`,
  MINE_STONEBRICK: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_stonebrick.png`,
  MINE_STONEBRICK_MOSSY: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_stonebrick_mossy.png`,
  MINE_STONEBRICK_CRACKED: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_stonebrick_cracked.png`,
  MINE_END_STONE: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_end_stone.png`,
  MINE_END_STONE_BRICKS: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_end_stone_bricks.png`,
  MINE_HAY_BLOCK_SIDE: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_hay_block_side.png`,
  MINE_HAY_BLOCK_TOP: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_hay_block_top.png`,
  MINE_IRON_BLOCK: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_iron_block.png`,
  MINE_MELON_SIDE: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_melon_side.png`,
  MINE_MELON_TOP: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_melon_top.png`,
  MINE_PUMPKIN_SIDE: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_pumpkin_side.png`,
  MINE_PUMPKIN_TOP: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_pumpkin_top.png`,
  MINE_EMERALD_BLOCK: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_emerald_block.png`,
  MINE_LAPIS_BLOCK: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_lapis_block.png`,
  MINE_OAK_PLANKS: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_oak_planks.png`,
  MINE_ACACIA_PLANKS: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_acacia_planks.png`,
  MINE_BAMBOO_PLANKS: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_bamboo_planks.png`,
  MINE_BIRCH_PLANKS: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_birch_planks.png`,
  MINE_DARK_OAK_PLANKS: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_dark_oak_planks.png`,
  MINE_JUNGLE_PLANKS: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_jungle_planks.png`,
  MINE_WATER: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_water.png`,
  MINE_LAVA: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_lava.png`,
  MINE_ACACIA_LEAVES: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_acacia_leaves.png`,
  MINE_BIRCH_LEAVES: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_birch_leaves.png`,
  MINE_DARK_OAK_LEAVES: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_dark_oak_leaves.png`,
  MINE_JUNGLE_LEAVES: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_jungle_leaves.png`,
  MINE_MANGROVE_LEAVES: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_mangrove_leaves.png`,
  MINE_OAK_LEAVES: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_oak_leaves.png`,
  MINE_SPRUCE_LEAVES: `${BLOCKS_PATH}/${MINE_BLOCKS_PATH}/MINE_spruce_leaves.png`,

  DEV_VUE: `${BLOCKS_PATH}/${DEV_BLOCKS_PATH}/DEV_vue.png`,
  DEV_ANGULAR: `${BLOCKS_PATH}/${DEV_BLOCKS_PATH}/DEV_angular.png`,
  DEV_CSS: `${BLOCKS_PATH}/${DEV_BLOCKS_PATH}/DEV_css.png`,
  DEV_GIT: `${BLOCKS_PATH}/${DEV_BLOCKS_PATH}/DEV_git.png`,
  DEV_HTML: `${BLOCKS_PATH}/${DEV_BLOCKS_PATH}/DEV_html.png`,
  DEV_JAVA: `${BLOCKS_PATH}/${DEV_BLOCKS_PATH}/DEV_java.png`,
  DEV_JS: `${BLOCKS_PATH}/${DEV_BLOCKS_PATH}/DEV_js.png`,
  DEV_REACT: `${BLOCKS_PATH}/${DEV_BLOCKS_PATH}/DEV_react.png`,
  DEV_TS: `${BLOCKS_PATH}/${DEV_BLOCKS_PATH}/DEV_ts.png`,
  DEV_C_SHARP: `${BLOCKS_PATH}/${DEV_BLOCKS_PATH}/DEV_c_sharp.png`,

  CHESS_BISHOP: `${BLOCKS_PATH}/${CHESS_PATH}/CHESS_bishop.png`,
  CHESS_KING: `${BLOCKS_PATH}/${CHESS_PATH}/CHESS_king.png`,
  CHESS_KNIGHT: `${BLOCKS_PATH}/${CHESS_PATH}/CHESS_knight.png`,
  CHESS_PAWN: `${BLOCKS_PATH}/${CHESS_PATH}/CHESS_pawn.png`,
  CHESS_QUEEN: `${BLOCKS_PATH}/${CHESS_PATH}/CHESS_queen.png`,
  CHESS_ROOK: `${BLOCKS_PATH}/${CHESS_PATH}/CHESS_rook.png`,

  CHESS_BISHOP_BLACK: `${BLOCKS_PATH}/${CHESS_PATH}/CHESS_bishop_black.png`,
  CHESS_KING_BLACK: `${BLOCKS_PATH}/${CHESS_PATH}/CHESS_king_black.png`,
  CHESS_KNIGHT_BLACK: `${BLOCKS_PATH}/${CHESS_PATH}/CHESS_knight_black.png`,
  CHESS_PAWN_BLACK: `${BLOCKS_PATH}/${CHESS_PATH}/CHESS_pawn_black.png`,
  CHESS_QUEEN_BLACK: `${BLOCKS_PATH}/${CHESS_PATH}/CHESS_queen_black.png`,
  CHESS_ROOK_BLACK: `${BLOCKS_PATH}/${CHESS_PATH}/CHESS_rook_black.png`,

  MM_BOMBMAN: `${BLOCKS_PATH}/${MEGAMAN_PATH}/MM_BombMan.png`,
  MM_CUTMAN: `${BLOCKS_PATH}/${MEGAMAN_PATH}/MM_CutMan.png`,
  MM_ELECMAN: `${BLOCKS_PATH}/${MEGAMAN_PATH}/MM_ElecMan.png`,
  MM_FIREMAN: `${BLOCKS_PATH}/${MEGAMAN_PATH}/MM_FireMan.png`,
  MM_GUTSMAN: `${BLOCKS_PATH}/${MEGAMAN_PATH}/MM_GutsMan.png`,
  MM_ICEMAN: `${BLOCKS_PATH}/${MEGAMAN_PATH}/MM_IceMan.png`,

  // DEV_vue.png
  // DEV_angular.png
  // DEV_css.png
  // DEV_git.png
  // DEV_html.png
  // DEV_java.png
  // DEV_js.png
  // DEV_react.png
  // DEV_ts.png

  //CHESS_bishop.png
  //CHESS_king.png
  //CHESS_knight.png
  //CHESS_pawn.png
  //CHESS_queen.png
  //CHESS_rook.png

  SM64_FONT_0: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_0.png`,
  SM64_FONT_1: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_1.png`,
  SM64_FONT_2: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_2.png`,
  SM64_FONT_3: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_3.png`,
  SM64_FONT_4: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_4.png`,
  SM64_FONT_5: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_5.png`,
  SM64_FONT_6: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_6.png`,
  SM64_FONT_7: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_7.png`,
  SM64_FONT_8: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_8.png`,
  SM64_FONT_9: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_9.png`,
  SM64_FONT_A: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_A.png`,
  SM64_FONT_B: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_B.png`,
  SM64_FONT_C: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_C.png`,
  SM64_FONT_D: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_D.png`,
  SM64_FONT_E: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_E.png`,
  SM64_FONT_F: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_F.png`,
  SM64_FONT_G: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_G.png`,
  SM64_FONT_H: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_H.png`,
  SM64_FONT_I: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_I.png`,
  SM64_FONT_J: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_J.png`,
  SM64_FONT_K: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_K.png`,
  SM64_FONT_L: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_L.png`,
  SM64_FONT_M: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_M.png`,
  SM64_FONT_N: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_N.png`,
  SM64_FONT_O: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_O.png`,
  SM64_FONT_P: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_P.png`,
  SM64_FONT_Q: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_Q.png`,
  SM64_FONT_R: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_R.png`,
  SM64_FONT_S: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_S.png`,
  SM64_FONT_T: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_T.png`,
  SM64_FONT_U: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_U.png`,
  SM64_FONT_V: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_V.png`,
  SM64_FONT_W: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_W.png`,
  SM64_FONT_X: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_X.png`,
  SM64_FONT_Y: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_Y.png`,
  SM64_FONT_Z: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_Z.png`,
  SM64_FONT_QUESTION_MARK: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_(question).png`,
};
