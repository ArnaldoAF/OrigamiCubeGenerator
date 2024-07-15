import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const SMW_message = {
  name: "SMW - message",
  code: "SMW_message",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.SMW_MESSAGE_SIDE,
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#6868d8",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.SMW_MESSAGE,
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#6868d8",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.SMW_MESSAGE_SIDE,
    },
  ],
};

export default SMW_message;
