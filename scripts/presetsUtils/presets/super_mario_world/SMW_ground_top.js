import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const SMW_ground_top = {
  name: "SMW - ground top",
  code: "SMW_ground_top",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      color: "#00C800",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#00C800",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.SMW_GROUND_TOP,
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#D8A038",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.SMW_GROUND,
    },
  ],
};

export default SMW_ground_top;
