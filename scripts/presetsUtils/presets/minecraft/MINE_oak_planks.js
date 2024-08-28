import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_oak_planks = {
  name: "MINE - oak planks",
  code: "MINE_oak_planks",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_OAK_PLANKS,
      color: "#947B48",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#947B48",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_OAK_PLANKS,
      color: "#947B48",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#947B48",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_OAK_PLANKS,
      color: "#947B48",
    },
  ],
};

export default MINE_oak_planks;
