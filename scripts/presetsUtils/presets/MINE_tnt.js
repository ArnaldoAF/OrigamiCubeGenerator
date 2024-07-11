import { BLOCKS, CELL_SELECTOR } from "../../constants.js";

const MINE_tnt = {
  name: "MINE - TNT block",
  code: "MINE_tnt",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_TNT_TOP,
      color: "#85290F",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#85290F",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_TNT_SIDE,
      color: "#85290F",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#85290F",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_TNT_BOTTOM,
      color: "#85290F",
    },
  ],
};

export default MINE_tnt;
