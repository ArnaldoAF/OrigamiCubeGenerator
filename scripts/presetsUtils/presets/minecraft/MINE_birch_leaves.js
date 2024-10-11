import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_birch_leaves = {
  name: "MINE - brich leaves block",
  code: "MINE_birch_leaves",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_BIRCH_LEAVES,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_BIRCH_LEAVES,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_BIRCH_LEAVES,
      color: "#FFFFFF",
    },
  ],
};

export default MINE_birch_leaves;
