import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const SMW_question_red = {
  name: "SMW - question red block",
  code: "SMW_question_red",
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
      image: BLOCKS.SMW_QUESTION_RED,
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

export default SMW_question_red;
