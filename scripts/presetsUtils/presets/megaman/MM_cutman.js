import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MM_cutman = {
  name: "MegaMan 1 - Cutman",
  code: "MM_cutman",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MM_CUTMAN,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MM_CUTMAN,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MM_CUTMAN,
      color: "#155FD9",
    },
  ],
};

export default MM_cutman;
