import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_acacia_planks = {
  name: "MINE - acacia planks",
  code: "MINE_acacia_planks",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_ACACIA_PLANKS,
      color: "#974F2A",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#974F2A",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_ACACIA_PLANKS,
      color: "#974F2A",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#974F2A",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_ACACIA_PLANKS,
      color: "#974F2A",
    },
  ],
};

export default MINE_acacia_planks;
