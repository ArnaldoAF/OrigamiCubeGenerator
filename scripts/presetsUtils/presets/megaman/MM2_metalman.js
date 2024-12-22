import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MM2_metalman = {
  name: "MegaMan 2 - MetalMan",
  code: "MM2_metalman",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MM2_METALMAN,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MM2_METALMAN,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MM2_METALMAN,
      color: "#155FD9",
    },
  ],
};

export default MM2_metalman;
