import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MM_fireman = {
  name: "MegaMan 1 - Fireman",
  code: "MM_fireman",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MM_FIREMAN,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MM_FIREMAN,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MM_FIREMAN,
      color: "#155FD9",
    },
  ],
};

export default MM_fireman;
