import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_dark_oak_log = {
  name: "MINE - dark oak log",
  code: "MINE_dark_oak_log",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_DARK_OAK_LOG_TOP,
      color: "#4D3F29",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#4D3F29",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_DARK_OAK_LOG,
      color: "#4D3F29",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#4D3F29",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_DARK_OAK_LOG_TOP,
      color: "#4D3F29",
    },
  ],
};

export default MINE_dark_oak_log;
