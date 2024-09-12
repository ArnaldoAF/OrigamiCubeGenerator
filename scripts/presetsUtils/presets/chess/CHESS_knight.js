import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const CHESS_knight = {
  name: "CHESS - white Knight",
  code: "CHESS_knight",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.CHESS_KNIGHT,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.CHESS_KNIGHT,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.CHESS_KNIGHT,
      color: "#FFFFFF",
    },
  ],
};

export default CHESS_knight;
