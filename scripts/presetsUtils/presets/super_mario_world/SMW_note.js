import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const SMW_note = {
  name: "SMW - note block",
  code: "SMW_note",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.SMW_NOTE_SIDE,
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#FFF",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.SMW_NOTE,
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#FFF",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.SMW_NOTE_SIDE,
    },
  ],
};

export default SMW_note;
