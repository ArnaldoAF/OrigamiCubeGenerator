import { BLOCKS, CELL_SELECTOR } from '../../constants.js';

const SMW_clould = {
    name: "SMW - clould block",
    code: "SMW_clould",
    blocks: [
        {
            selector: CELL_SELECTOR.LINE_1,
            color: '#FFF'
        },
        {
            selector: CELL_SELECTOR.LINE_2,
            image: BLOCKS.DASHLINE,
            color: '#FFF'
        },
        {
            selector: CELL_SELECTOR.LINE_3,
            image: BLOCKS.SMW_CLOULD,
        },
        {
            selector: CELL_SELECTOR.LINE_4,
            image: BLOCKS.DASHLINE,
            color: '#FFF'
        },
        {
            selector: CELL_SELECTOR.LINE_5,
            color: '#FFF'
        }
    ]
}

export default SMW_clould;