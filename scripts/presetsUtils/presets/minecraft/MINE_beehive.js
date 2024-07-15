import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_beehive = {
  name: "MINE - beehive block",
  code: "MINE_beehive",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_BEEHIVE_END,
      color: "#C19C61",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#C19C61",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_BEEHIVE_SIDE,
      color: "#C19C61",
    },
    {
      selector: CELL_SELECTOR.CELL_13,
      image: BLOCKS.MINE_BEEHIVE_FRONT_HONEY,
      color: "#C19C61",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#C19C61",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_BEEHIVE_END,
      color: "#C19C61",
    },
  ],
};

export default MINE_beehive;
