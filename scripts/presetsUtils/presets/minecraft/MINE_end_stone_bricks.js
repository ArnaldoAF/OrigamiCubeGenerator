import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_end_stone_bricks = {
  name: "MINE - end stone bricks",
  code: "MINE_end_stone_bricks",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_END_STONE_BRICKS,
      color: "#E8F4B1",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#E8F4B1",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_END_STONE_BRICKS,
      color: "#E8F4B1",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#E8F4B1",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_END_STONE_BRICKS,
      color: "#E8F4B1",
    },
  ],
};

export default MINE_end_stone_bricks;
