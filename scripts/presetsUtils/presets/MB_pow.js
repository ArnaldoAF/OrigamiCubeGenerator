import { BLOCKS, CELL_SELECTOR } from '../../constants.js';

const MB_pow = {
    name: "MB - pow block",
    code: "MB_pow",
    blocks: [
        {
            selector: CELL_SELECTOR.LINE_1,
            color: '#03018A'
        },
        {
            selector: CELL_SELECTOR.LINE_2,
            image: BLOCKS.DASHLINE,
            color: '#03018A'
        },
        {
            selector: CELL_SELECTOR.LINE_3,
            image: BLOCKS.MB_POW,
        },
        {
            selector: CELL_SELECTOR.LINE_4,
            image: BLOCKS.DASHLINE,
            color: '#03018A'
        },
        {
            selector: CELL_SELECTOR.LINE_5,
            color: '#03018A'
        }
    ]
}

export default MB_pow;