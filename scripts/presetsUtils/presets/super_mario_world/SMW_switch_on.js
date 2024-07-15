import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const SMW_switch_on = {
  name: "SMW - switch ON",
  code: "SMW_switch_on",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.SMW_SWITCH_ON,
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#F80080",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.SMW_SWITCH_ON,
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#F80080",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.SMW_SWITCH_ON,
    },
  ],
};

export default SMW_switch_on;
