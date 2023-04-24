import { BLOCKS, CELL_SELECTOR } from '../../constants.js';

const SMB_castle_1 = {
    name: "SMB - castle block 1",
    code: "SMB_castle_1",
    blocks: [
        {
            selector: CELL_SELECTOR.LINE_1,
            color: '#9c4a00'
        },
        {
            selector: CELL_SELECTOR.LINE_2,
            image: BLOCKS.DASHLINE,
            color: '#9c4a00'
        },
        {
            selector: CELL_SELECTOR.LINE_3,
            image: BLOCKS.SMB_CASTLE_1,
        },
        {
            selector: CELL_SELECTOR.LINE_4,
            image: BLOCKS.DASHLINE,
            color: '#9c4a00'
        },
        {
            selector: CELL_SELECTOR.LINE_5,
            color: '#9c4a00'
        }
    ]
}

export default SMB_castle_1;