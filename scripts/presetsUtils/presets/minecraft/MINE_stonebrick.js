import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_stonebrick = {
  name: "MINE - stonebrick",
  code: "MINE_stonebrick",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_STONEBRICK,
      color: "#757575",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#757575",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_STONEBRICK,
      color: "#757575",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#757575",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_STONEBRICK,
      color: "#757575",
    },
  ],
};

export default MINE_stonebrick;