import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const CHESS_bishop = {
  name: "CHESS - white Bishop",
  code: "CHESS_bishop",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.CHESS_BISHOP,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.CHESS_BISHOP,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#FFFFFF",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.CHESS_BISHOP,
      color: "#FFFFFF",
    },
  ],
};

export default CHESS_bishop;
