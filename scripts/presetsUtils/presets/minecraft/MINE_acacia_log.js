import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_acacia_log = {
  name: "MINE - acacia log",
  code: "MINE_acacia_log",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_ACACIA_LOG_TOP,
      color: "#AA7631",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#AA7631",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_ACACIA_LOG,
      color: "#AA7631",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#AA7631",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_ACACIA_LOG_TOP,
      color: "#AA7631",
    },
  ],
};

export default MINE_acacia_log;
