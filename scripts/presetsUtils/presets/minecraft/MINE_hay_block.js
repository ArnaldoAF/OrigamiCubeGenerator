import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_hay_block = {
  name: "MINE - hay block",
  code: "MINE_hay_block",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_HAY_BLOCK_TOP,
      color: "#BE9B0D",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#BE9B0D",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_HAY_BLOCK_SIDE,
      color: "#BE9B0D",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#BE9B0D",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_HAY_BLOCK_TOP,
      color: "#BE9B0D",
    },
  ],
};

export default MINE_hay_block;
