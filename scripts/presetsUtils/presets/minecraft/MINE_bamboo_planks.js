import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_bamboo_planks = {
  name: "MINE - bamboo planks",
  code: "MINE_bamboo_planks",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_BAMBOO_PLANKS,
      color: "#D2BA4E",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#D2BA4E",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_BAMBOO_PLANKS,
      color: "#D2BA4E",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#D2BA4E",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_BAMBOO_PLANKS,
      color: "#D2BA4E",
    },
  ],
};

export default MINE_bamboo_planks;
