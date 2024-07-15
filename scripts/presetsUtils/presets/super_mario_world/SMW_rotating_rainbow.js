import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const SMW_rotating_rainbow = {
  name: "SMW - rotating rainbow block",
  code: "SMW_rotating_rainbow",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      color: "#8888F8",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#F80000",
    },

    {
      selector: CELL_SELECTOR.CELL_11,
      image: BLOCKS.SMW_ROTATING_BLUE,
      color: "#8888F8",
    },
    {
      selector: CELL_SELECTOR.CELL_12,
      image: BLOCKS.SMW_ROTATING_GREEN,
      color: "#00F800",
    },
    {
      selector: CELL_SELECTOR.CELL_13,
      image: BLOCKS.SMW_ROTATING_RED,
      color: "#F80000",
    },
    {
      selector: CELL_SELECTOR.CELL_14,
      image: BLOCKS.SMW_ROTATING_YELLOW,
      color: "#F8F800",
    },
    {
      selector: CELL_SELECTOR.CELL_15,
      image: BLOCKS.SMW_ROTATING_BLUE,
      color: "#8888F8",
    },

    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#00F800",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      color: "#F8F800",
    },
  ],
};

export default SMW_rotating_rainbow;
