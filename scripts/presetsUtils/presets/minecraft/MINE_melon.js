import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_melon = {
  name: "MINE - melon",
  code: "MINE_melon",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_MELON_TOP,
      color: "#BDB728",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#BDB728",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_MELON_SIDE,
      color: "#BDB728",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#BDB728",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_MELON_TOP,
      color: "#BDB728",
    },
  ],
};

export default MINE_melon;
