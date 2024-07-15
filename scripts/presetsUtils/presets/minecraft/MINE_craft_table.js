import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_craft_table = {
  name: "MINE - crafting table",
  code: "MINE_craft_table",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_CRAFTING_TABLE_TOP,
      color: "#A36C40",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#A36C40",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_CRAFTING_TABLE_SIDE,
      color: "#A36C40",
    },
    {
      selector: CELL_SELECTOR.CELL_13,
      image: BLOCKS.MINE_CRAFTING_TABLE_FRONT,
      color: "#A36C40",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#A36C40",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_CRAFTING_TABLE_TOP,
      color: "#A36C40",
    },
  ],
};

export default MINE_craft_table;
