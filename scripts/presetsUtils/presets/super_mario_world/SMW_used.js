import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const SMW_used = {
  name: "SMW - used block",
  code: "SMW_used",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.SMW_USED,
      color: "#885818",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#885818",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.SMW_USED,
      color: "#885818",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#885818",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.SMW_USED,
      color: "#885818",
    },
  ],
};

export default SMW_used;
