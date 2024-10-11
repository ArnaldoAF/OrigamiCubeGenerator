import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_acacia_leaves = {
  name: "MINE - acacia leaves block",
  code: "MINE_acacia_leaves",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_ACACIA_LEAVES,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_ACACIA_LEAVES,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_ACACIA_LEAVES,
      color: "#FFFFFF",
    },
  ],
};

export default MINE_acacia_leaves;
