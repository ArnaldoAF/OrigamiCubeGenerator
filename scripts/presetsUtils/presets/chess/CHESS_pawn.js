import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const CHESS_pawn = {
  name: "CHESS - white Pawn",
  code: "CHESS_pawn",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.CHESS_PAWN,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.CHESS_PAWN,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.CHESS_PAWN,
      color: "#FFFFFF",
    },
  ],
};

export default CHESS_pawn;
