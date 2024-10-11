import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_lava = {
  name: "MINE - lava block",
  code: "MINE_lava",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_LAVA,
      color: "#DA6817",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#DA6817",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_LAVA,
      color: "#DA6817",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#DA6817",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_LAVA,
      color: "#DA6817",
    },
  ],
};

export default MINE_lava;
