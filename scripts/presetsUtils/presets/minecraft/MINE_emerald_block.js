import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_emerald_block = {
  name: "MINE - emerald block",
  code: "MINE_emerald_block",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_EMERALD_BLOCK,
      color: "#41D76C",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#41D76C",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_EMERALD_BLOCK,
      color: "#41D76C",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#41D76C",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_EMERALD_BLOCK,
      color: "#41D76C",
    },
  ],
};

export default MINE_emerald_block;
