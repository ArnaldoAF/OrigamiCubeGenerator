import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_pumpkin = {
  name: "MINE - pumpkin",
  code: "MINE_pumpkin",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_PUMPKIN_TOP,
      color: "#B77417",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#B77417",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_PUMPKIN_SIDE,
      color: "#B77417",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#B77417",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_PUMPKIN_TOP,
      color: "#B77417",
    },
  ],
};

export default MINE_pumpkin;
