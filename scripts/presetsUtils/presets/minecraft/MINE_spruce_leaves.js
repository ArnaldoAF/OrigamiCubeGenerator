import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_spruce_leaves = {
  name: "MINE - spruce leaves block",
  code: "MINE_spruce_leaves",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_SPRUCE_LEAVES,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_SPRUCE_LEAVES,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_SPRUCE_LEAVES,
      color: "#FFFFFF",
    },
  ],
};

export default MINE_spruce_leaves;
