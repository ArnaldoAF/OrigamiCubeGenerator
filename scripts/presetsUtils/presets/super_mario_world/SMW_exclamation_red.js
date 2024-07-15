import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const SMW_exclamation_red = {
  name: "SMW - exclamation red block",
  code: "SMW_exclamation_red",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      color: "#F80080",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#F80080",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.SMW_EXCLAMATION_RED,
      color: "#F80080",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#F80080",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      color: "#F80080",
    },
  ],
};

export default SMW_exclamation_red;
