import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_lapis_block = {
  name: "MINE - lapis block",
  code: "MINE_lapis_block",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_LAPIS_BLOCK,
      color: "#3E60B1",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#3E60B1",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_LAPIS_BLOCK,
      color: "#3E60B1",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#3E60B1",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_LAPIS_BLOCK,
      color: "#3E60B1",
    },
  ],
};

export default MINE_lapis_block;
