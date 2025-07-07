import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_rail_turned = {
  name: "MINE - rail turned block",
  code: "MINE_rail_turned",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_RAIL_TURNED,
      color: "#36B61E",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#36B61E",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_GRASS_BLOCK_SIDE,
      color: "#79553A",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#79553A",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_GRASS_BLOCK_BOTTOM,
      color: "#79553A",
    },
  ],
};

export default MINE_rail_turned;
