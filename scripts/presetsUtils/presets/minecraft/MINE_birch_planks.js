import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_birch_planks = {
  name: "MINE - birch planks",
  code: "MINE_birch_planks",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_BIRCH_PLANKS,
      color: "#BDAA67",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#BDAA67",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_BIRCH_PLANKS,
      color: "#BDAA67",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#BDAA67",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_BIRCH_PLANKS,
      color: "#BDAA67",
    },
  ],
};

export default MINE_birch_planks;
