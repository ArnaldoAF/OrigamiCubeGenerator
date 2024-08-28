import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_dark_oak_planks = {
  name: "MINE - dark oak planks",
  code: "MINE_dark_oak_planks",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_DARK_OAK_PLANKS,
      color: "#403320",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#403320",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_DARK_OAK_PLANKS,
      color: "#403320",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#403320",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_DARK_OAK_PLANKS,
      color: "#403320",
    },
  ],
};

export default MINE_dark_oak_planks;
