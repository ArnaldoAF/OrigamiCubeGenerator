import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_water = {
  name: "MINE - water block",
  code: "MINE_water",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_WATER,
      color: "#7082FF",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#7082FF",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_WATER,
      color: "#7082FF",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#7082FF",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_WATER,
      color: "#7082FF",
    },
  ],
};

export default MINE_water;
