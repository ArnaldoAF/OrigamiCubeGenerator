import { BLOCKS, CELL_SELECTOR } from "../../constants.js";

const MINE_bamboo = {
  name: "MINE - bamboo block",
  code: "MINE_bamboo",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_BAMBOO_BLOCK_TOP,
      color: "#809038",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#809038",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_BAMBOO_BLOCK,
      color: "#809038",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#809038",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_BAMBOO_BLOCK_TOP,
      color: "#809038",
    },
  ],
};

export default MINE_bamboo;
