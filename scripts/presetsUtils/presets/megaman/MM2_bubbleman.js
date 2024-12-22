import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MM2_bubbleman = {
  name: "MegaMan 2 - Bubbleman",
  code: "MM2_bubbleman",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MM2_BUBBLEMAN,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MM2_BUBBLEMAN,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MM2_BUBBLEMAN,
      color: "#155FD9",
    },
  ],
};

export default MM2_bubbleman;
