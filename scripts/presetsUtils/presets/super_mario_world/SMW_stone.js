import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const SMW_stone = {
  name: "SMW - stone",
  code: "SMW_stone",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.SMW_STONE,
      color: "#C0C0C0",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#C0C0C0",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.SMW_STONE,
      color: "#C0C0C0",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#C0C0C0",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.SMW_STONE,
      color: "#C0C0C0",
    },
  ],
};

export default SMW_stone;
