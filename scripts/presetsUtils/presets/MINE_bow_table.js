import { BLOCKS, CELL_SELECTOR } from "../../constants.js";

const MINE_bow_table = {
  name: "MINE - bow table",
  code: "MINE_bow_table",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_BOW_TABLE_TOP,
      color: "#D7C185",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#D7C185",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_BOW_TABLE_SIDE,
      color: "#D7C185",
    },
    {
      selector: CELL_SELECTOR.CELL_13,
      image: BLOCKS.MINE_BOW_TABLE_FRONT,
      color: "#D7C185",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#D7C185",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_BOW_TABLE_TOP,
      color: "#D7C185",
    },
  ],
};

export default MINE_bow_table;
