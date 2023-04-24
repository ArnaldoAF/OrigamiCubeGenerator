import { BLOCKS, CELL_SELECTOR } from '../../constants.js';

const SMW_exclamation_blue = {
    name: "SMW - exclamation blue block",
    code: "SMW_exclamation_blue",
    blocks: [
        {
            selector: CELL_SELECTOR.LINE_1,
            color: '#6868B0'
        },
        {
            selector: CELL_SELECTOR.LINE_2,
            image: BLOCKS.DASHLINE,
            color: '#6868B0'
        },
        {
            selector: CELL_SELECTOR.LINE_3,
            image: BLOCKS.SMW_EXCLAMATION_BLUE,
        },
        {
            selector: CELL_SELECTOR.LINE_4,
            image: BLOCKS.DASHLINE,
            color: '#6868B0'
        },
        {
            selector: CELL_SELECTOR.LINE_5,
            color: '#6868B0'
        }
    ]
}

export default SMW_exclamation_blue;