import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MINE_stonebrick_cracked = {
  name: "MINE - stonebrick cracked",
  code: "MINE_stonebrick_cracked",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_STONEBRICK_CRACKED,
      color: "#757575",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#757575",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_STONEBRICK_CRACKED,
      color: "#757575",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#757575",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_STONEBRICK_CRACKED,
      color: "#757575",
    },
  ],
};

export default MINE_stonebrick_cracked;
