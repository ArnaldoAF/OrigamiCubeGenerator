import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const CHESS_king_black = {
  name: "CHESS - black King",
  code: "CHESS_king_black",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.CHESS_KING_BLACK,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.CHESS_KING_BLACK,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.CHESS_KING_BLACK,
      color: "#FFFFFF",
    },
  ],
};

export default CHESS_king_black;
