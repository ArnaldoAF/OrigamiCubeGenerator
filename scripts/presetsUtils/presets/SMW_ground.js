import { BLOCKS, CELL_SELECTOR } from '../../constants.js';

const SMW_ground = {
    name: "SMW - ground",
    code: "SMW_ground",
    blocks: [
        {
            selector: CELL_SELECTOR.LINE_1,
            image: BLOCKS.SMW_GROUND,
        },
        {
            selector: CELL_SELECTOR.LINE_2,
            image: BLOCKS.DASHLINE,
            color: '#D8A038'
        },
        {
            selector: CELL_SELECTOR.LINE_3,
            image: BLOCKS.SMW_GROUND,
        },
        {
            selector: CELL_SELECTOR.LINE_4,
            image: BLOCKS.DASHLINE,
            color: '#D8A038'
        },
        {
            selector: CELL_SELECTOR.LINE_5,
            image: BLOCKS.SMW_GROUND,
        }
    ]
}

export default SMW_ground;