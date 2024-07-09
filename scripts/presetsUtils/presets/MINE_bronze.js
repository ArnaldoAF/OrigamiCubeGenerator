import { BLOCKS, CELL_SELECTOR } from "../../constants.js";

const MINE_bronze = {
  name: "MINE - bronze block",
  code: "MINE_bronze",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.MINE_BRONZE_BLOCK,
      color: "#C46E4F",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#C46E4F",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MINE_BRONZE_BLOCK,
      color: "#C46E4F",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#C46E4F",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.MINE_BRONZE_BLOCK,
      color: "#C46E4F",
    },
  ],
};

export default MINE_bronze;
