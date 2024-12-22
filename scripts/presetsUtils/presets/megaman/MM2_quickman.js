import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MM2_quickman = {
  name: "MegaMan 2 - QuickMan",
  code: "MM2_quickman",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MM2_QUICKMAN,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MM2_QUICKMAN,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MM2_QUICKMAN,
      color: "#155FD9",
    },
  ],
};

export default MM2_quickman;
