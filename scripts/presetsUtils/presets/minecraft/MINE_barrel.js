import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_barrel = {
  name: "MINE - barrel",
  code: "MINE_barrel",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_BARREL_TOP,
      color: "#805E36",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#805E36",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_BARREL_SIDE,
      color: "#805E36",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#805E36",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_BARREL_BOTTOM,
      color: "#805E36",
    },
  ],
};

export default MINE_barrel;
