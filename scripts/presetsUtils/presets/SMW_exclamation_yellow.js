import { BLOCKS, CELL_SELECTOR } from '../../constants.js';

const SMW_exclamation_yellow = {
    name: "SMW - exclamation yellow block",
    code: "SMW_exclamation_yellow",
    blocks: [
        {
            selector: CELL_SELECTOR.LINE_1,
            color: '#F8D820'
        },
        {
            selector: CELL_SELECTOR.LINE_2,
            image: BLOCKS.DASHLINE,
            color: '#F8D820'
        },
        {
            selector: CELL_SELECTOR.LINE_3,
            image: BLOCKS.SMW_EXCLAMATION_YELLOW,
            color: '#F8D820'
        },
        {
            selector: CELL_SELECTOR.LINE_4,
            image: BLOCKS.DASHLINE,
            color: '#F8D820'
        },
        {
            selector: CELL_SELECTOR.LINE_5,
            color: '#F8D820'
        }
    ]
}

export default SMW_exclamation_yellow;