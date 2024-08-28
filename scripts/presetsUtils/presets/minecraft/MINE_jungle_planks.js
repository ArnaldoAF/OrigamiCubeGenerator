import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_jungle_planks = {
  name: "MINE - jungle planks",
  code: "MINE_jungle_planks",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_JUNGLE_PLANKS,
      color: "#967634",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#967634",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_JUNGLE_PLANKS,
      color: "#967634",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#967634",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_JUNGLE_PLANKS,
      color: "#967634",
    },
  ],
};

export default MINE_jungle_planks;
