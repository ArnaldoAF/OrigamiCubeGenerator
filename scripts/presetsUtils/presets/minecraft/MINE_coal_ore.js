import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_coal_ore = {
  name: "MINE - coal ore",
  code: "MINE_coal_ore",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_COAL_ORE,
      color: "#757575",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#757575",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_COAL_ORE,
      color: "#757575",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#757575",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_COAL_ORE,
      color: "#757575",
    },
  ],
};

export default MINE_coal_ore;
