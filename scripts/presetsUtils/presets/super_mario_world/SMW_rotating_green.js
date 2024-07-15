import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const SMW_rotating_green = {
  name: "SMW - rotating green block",
  code: "SMW_rotating_green",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      color: "#00F800",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#00F800",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.SMW_ROTATING_GREEN,
      color: "#00F800",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#00F800",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      color: "#00F800",
    },
  ],
};

export default SMW_rotating_green;
