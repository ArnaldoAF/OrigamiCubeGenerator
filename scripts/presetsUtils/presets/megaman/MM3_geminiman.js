import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

const MM3_geminiman = {
    name: "MegaMan 3 - GeminiMan",
    code: "MM3_geminiman",
    blocks: [
        {
            selector: CELL_SELECTOR.LINE_1,
            image: BLOCKS.MM3_GEMINIMAN,
            color: "#155FD9",
        },
        {
            selector: CELL_SELECTOR.LINE_2,
            image: BLOCKS.DASHLINE,
            color: "#155FD9",
        },
        {
            selector: CELL_SELECTOR.LINE_3,
            image: BLOCKS.MM3_GEMINIMAN,
            color: "#155FD9",
        },
        {
            selector: CELL_SELECTOR.LINE_4,
            image: BLOCKS.DASHLINE,
            color: "#155FD9",
        },
        {
            selector: CELL_SELECTOR.LINE_5,
            image: BLOCKS.MM3_GEMINIMAN,
            color: "#155FD9",
        },
    ],
};

export default MM3_geminiman;