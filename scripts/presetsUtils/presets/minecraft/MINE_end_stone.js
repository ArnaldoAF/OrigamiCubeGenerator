import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_end_stone = {
  name: "MINE - end stone",
  code: "MINE_end_stone",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_END_STONE,
      color: "#CCD0A9",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#CCD0A9",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_END_STONE,
      color: "#CCD0A9",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#CCD0A9",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_END_STONE,
      color: "#CCD0A9",
    },
  ],
};

export default MINE_end_stone;
