import { BLOCKS, CELL_SELECTOR } from '../../constants.js';

const SMW_rotating_yellow = {
    name: "SMW - rotating yellow block",
    code: "SMW_rotating_yellow",
    blocks: [
        {
            selector: CELL_SELECTOR.LINE_1,
            color: '#F8F800'
        },
        {
            selector: CELL_SELECTOR.LINE_2,
            image: BLOCKS.DASHLINE,
            color: '#F8F800'
        },
        {
            selector: CELL_SELECTOR.LINE_3,
            image: BLOCKS.SMW_ROTATING_YELLOW,
            color: '#F8F800'
        },
        {
            selector: CELL_SELECTOR.LINE_4,
            image: BLOCKS.DASHLINE,
            color: '#F8F800'
        },
        {
            selector: CELL_SELECTOR.LINE_5,
            color: '#F8F800'
        }
    ]
}

export default SMW_rotating_yellow;