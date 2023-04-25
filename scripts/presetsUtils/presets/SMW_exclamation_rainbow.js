import { BLOCKS, CELL_SELECTOR } from '../../constants.js';

const SMW_exclamation_rainbow = {
    name: "SMW - exclamation rainbow block",
    code: "SMW_exclamation_rainbow",
    blocks: [
        {
            selector: CELL_SELECTOR.LINE_1,
            color: '#6868B0'
        },
        {
            selector: CELL_SELECTOR.LINE_2,
            image: BLOCKS.DASHLINE,
            color: '#F80080'
        },

        {
            selector: CELL_SELECTOR.CELL_11,
            image: BLOCKS.SMW_EXCLAMATION_BLUE,
            color: '#6868B0'
        },
        {
            selector: CELL_SELECTOR.CELL_12,
            image: BLOCKS.SMW_EXCLAMATION_GREEN,
            color: '#00C800'
        },
        {
            selector: CELL_SELECTOR.CELL_13,
            image: BLOCKS.SMW_EXCLAMATION_RED,
            color: '#F80080'
        },
        {
            selector: CELL_SELECTOR.CELL_14,
            image: BLOCKS.SMW_EXCLAMATION_YELLOW,
            color: '#F8D820'
        },
        {
            selector: CELL_SELECTOR.CELL_15,
            image: BLOCKS.SMW_EXCLAMATION_BLUE,
            color: '#6868B0'
        },

        {
            selector: CELL_SELECTOR.LINE_4,
            image: BLOCKS.DASHLINE,
            color: '#00C800'
        },
        {
            selector: CELL_SELECTOR.LINE_5,
            color: '#F8D820'
        }
    ]
}

export default SMW_exclamation_rainbow;