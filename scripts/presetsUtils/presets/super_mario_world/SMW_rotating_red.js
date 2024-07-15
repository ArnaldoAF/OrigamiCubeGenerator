import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const SMW_rotating_red = {
  name: "SMW - rotating red block",
  code: "SMW_rotating_red",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      color: "#F80000",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#F80000",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.SMW_ROTATING_RED,
      color: "#F80000",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#F80000",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      color: "#F80000",
    },
  ],
};

export default SMW_rotating_red;
