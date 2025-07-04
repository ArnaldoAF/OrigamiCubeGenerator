import { BLOCKS, CELL_SELECTOR } from '../../../constants.js';

const MM3_topman = {
    name: "MegaMan 3 - TopMan",
    code: "MM3_topman",
    blocks: [
        {
            selector: CELL_SELECTOR.LINE_1,
            image: BLOCKS.MM3_TOPMAN,
            color: "#155FD9",
        },
        {
            selector: CELL_SELECTOR.LINE_2,
            image: BLOCKS.DASHLINE,
            color: "#155FD9",
        },
        {
            selector: CELL_SELECTOR.LINE_3,
            image: BLOCKS.MM3_TOPMAN,
            color: "#155FD9",
        },
        {
            selector: CELL_SELECTOR.LINE_4,
            image: BLOCKS.DASHLINE,
            color: "#155FD9",
        },
        {
            selector: CELL_SELECTOR.LINE_5,
            image: BLOCKS.MM3_TOPMAN,
            color: "#155FD9",
        },
    ],
};

export default MM3_topman;