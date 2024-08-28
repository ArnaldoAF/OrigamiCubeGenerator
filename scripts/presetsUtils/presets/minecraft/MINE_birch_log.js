import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_birch_log = {
  name: "MINE - birch log",
  code: "MINE_birch_log",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_BIRCH_LOG_TOP,
      color: "#FBFAF9",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#FBFAF9",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_BIRCH_LOG,
      color: "#FBFAF9",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#FBFAF9",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_BIRCH_LOG_TOP,
      color: "#FBFAF9",
    },
  ],
};

export default MINE_birch_log;
