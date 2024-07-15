import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_gold_block = {
  name: "MINE - gold block",
  code: "MINE_gold_block",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_GOLD_BLOCK,
      color: "#FFD73D",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#FFD73D",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_GOLD_BLOCK,
      color: "#FFD73D",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#FFD73D",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_GOLD_BLOCK,
      color: "#FFD73D",
    },
  ],
};

export default MINE_gold_block;
