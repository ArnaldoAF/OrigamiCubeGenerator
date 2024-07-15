import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const SMW_ice = {
  name: "SMW - ice",
  code: "SMW_ice",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      color: "#A8E0F8",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#A8E0F8",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.SMW_ICE,
      color: "#A8E0F8",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#A8E0F8",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      color: "#A8E0F8",
    },
  ],
};

export default SMW_ice;
