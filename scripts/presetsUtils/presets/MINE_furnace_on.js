import { BLOCKS, CELL_SELECTOR } from "../../constants.js";

const MINE_furnace_on = {
  name: "MINE - furnace ON",
  code: "MINE_furnace_on",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_FURNACE_TOP,
      color: "#9A9A9A",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#9A9A9A",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_FURNACE_SIDE,
      color: "#9A9A9A",
    },
    {
      selector: CELL_SELECTOR.CELL_13,
      image: BLOCKS.MINE_FURNACE_FRONT_ON,
      color: "#9A9A9A",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#9A9A9A",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_FURNACE_TOP,
      color: "#9A9A9A",
    },
  ],
};

export default MINE_furnace_on;
