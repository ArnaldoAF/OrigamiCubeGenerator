import { BLOCKS, CELL_SELECTOR } from '../../constants.js';

const SMB_empty_block = {
    name: "SMB - empty block",
    code: "SMB_empty_block",
    blocks: [
        {
            selector: CELL_SELECTOR.LINE_1,
            image: BLOCKS.SMB_EMPTY,
        },
        {
            selector: CELL_SELECTOR.LINE_2,
            image: BLOCKS.DASHLINE,
            color: '#9c4a00'
        },
        {
            selector: CELL_SELECTOR.LINE_3,
            image: BLOCKS.SMB_EMPTY,
        },
        {
            selector: CELL_SELECTOR.LINE_4,
            image: BLOCKS.DASHLINE,
            color: '#9c4a00'
        },
        {
            selector: CELL_SELECTOR.LINE_5,
            image: BLOCKS.SMB_EMPTY,
        }
    ]
}

export default SMB_empty_block;