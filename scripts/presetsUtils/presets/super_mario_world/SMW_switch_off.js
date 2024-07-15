import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const SMW_switch_off = {
  name: "SMW - switch OFF",
  code: "SMW_switch_off",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.SMW_SWITCH_OFF,
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#8080C8",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.SMW_SWITCH_OFF,
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#8080C8",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.SMW_SWITCH_OFF,
    },
  ],
};

export default SMW_switch_off;
