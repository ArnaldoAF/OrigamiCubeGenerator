import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const SMB_door = {
  name: "SMB - door",
  code: "SMB_door",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.SMB_BRICK,
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#9c4a00",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.SMB_DOOR,
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#9c4a00",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.SMB_BRICK,
    },
  ],
};

export default SMB_door;
