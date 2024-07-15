import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const SMB_ground = {
  name: "SMB - ground",
  code: "SMB_ground",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.SMB_GROUND,
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#9c4a00",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.SMB_GROUND,
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#9c4a00",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.SMB_GROUND,
    },
  ],
};

export default SMB_ground;
