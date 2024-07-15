import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const SMB_question = {
  name: "SMB - question block",
  code: "SMB_question",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      color: "#E69C21",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#E69C21",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.SMB_QUESTION,
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#E69C21",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      color: "#E69C21",
    },
  ],
};

export default SMB_question;
