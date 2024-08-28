import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_cherry_log = {
  name: "MINE - cherry log",
  code: "MINE_cherry_log",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_CHERRY_LOG_TOP,
      color: "#543543",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#543543",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_CHERRY_LOG,
      color: "#543543",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#543543",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_CHERRY_LOG_TOP,
      color: "#543543",
    },
  ],
};

export default MINE_cherry_log;
