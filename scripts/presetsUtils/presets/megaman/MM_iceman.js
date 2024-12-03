import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MM_iceman = {
  name: "MegaMan 1 - Iceman",
  code: "MM_iceman",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MM_ICEMAN,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MM_ICEMAN,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MM_ICEMAN,
      color: "#155FD9",
    },
  ],
};

export default MM_iceman;
