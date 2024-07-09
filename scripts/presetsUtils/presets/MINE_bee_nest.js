import { BLOCKS, CELL_SELECTOR } from "../../constants.js";

const MINE_bee_nest = {
  name: "MINE - bee nest",
  code: "MINE_bee_nest",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_BEE_NEST_TOP,
      color: "#D09A46",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#D09A46",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_BEE_NEST_SIDE,
      color: "#D09A46",
    },
    {
      selector: CELL_SELECTOR.CELL_13,
      image: BLOCKS.MINE_BEE_NEST_FRONT_HONEY,
      color: "#D09A46",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#D09A46",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_BEE_NEST_BOTTOM,
      color: "#D09A46",
    },
  ],
};

export default MINE_bee_nest;
