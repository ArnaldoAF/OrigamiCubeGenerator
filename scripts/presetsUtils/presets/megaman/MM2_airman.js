import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MM2_airman = {
  name: "MegaMan 2 - Airman",
  code: "MM2_airman",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MM2_AIRMAN,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MM2_AIRMAN,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#155FD9",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MM2_AIRMAN,
      color: "#155FD9",
    },
  ],
};

export default MM2_airman;
