import { BLOCKS, CELL_SELECTOR } from '../../constants.js';

const marioBlockGround = {
    name: "mario block - ground",
    code: "marioBlockGround",
    blocks: [
        {
            selector: CELL_SELECTOR.LINE_1,
            image: BLOCKS.MARIOBLOCK_GROUND,
        },
        {
            selector: CELL_SELECTOR.LINE_2,
            image: BLOCKS.DASHLINE,
            color: '#9c4a00'
        },
        {
            selector: CELL_SELECTOR.LINE_3,
            image: BLOCKS.MARIOBLOCK_GROUND,
        },
        {
            selector: CELL_SELECTOR.LINE_4,
            image: BLOCKS.DASHLINE,
            color: '#9c4a00'
        },
        {
            selector: CELL_SELECTOR.LINE_5,
            image: BLOCKS.MARIOBLOCK_GROUND,
        }
    ]
}

export default marioBlockGround;