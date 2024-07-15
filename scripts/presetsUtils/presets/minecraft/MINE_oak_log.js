import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_oak_log = {
  name: "MINE - oak log",
  code: "MINE_oak_log",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_OAK_LOG_TOP,
      color: "#6B5534",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#6B5534",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_OAK_LOG,
      color: "#6B5534",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#6B5534",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_OAK_LOG_TOP,
      color: "#6B5534",
    },
  ],
};

export default MINE_oak_log;
