import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_iron_block = {
  name: "MINE - iron block",
  code: "MINE_iron_block",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_IRON_BLOCK,
      color: "#E3E3E3",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#E3E3E3",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_IRON_BLOCK,
      color: "#E3E3E3",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#E3E3E3",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_IRON_BLOCK,
      color: "#E3E3E3",
    },
  ],
};

export default MINE_iron_block;
