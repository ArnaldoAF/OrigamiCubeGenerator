import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MtSlg_R = {
  name: "Metal Slug - R",
  code: "MtSlg_R",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      color: "#B0B090",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#B0B090",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.MTSLG_R,
      color: "#B0B090",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#B0B090",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      color: "#B0B090",
    },
  ],
};

export default MtSlg_R;
