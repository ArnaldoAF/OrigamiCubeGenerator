import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MM2_woodman = {
  name: "MegaMan 2 - WoodMan",
  code: "MM2_woodman",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MM2_WOODMAN,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MM2_WOODMAN,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MM2_WOODMAN,
      color: "#155FD9",
    },
  ],
};

export default MM2_woodman;
