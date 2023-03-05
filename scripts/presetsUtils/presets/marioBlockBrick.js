import { BLOCKS, CELL_SELECTOR } from '../../constants.js';

const marioBlockBrick = {
    name: "mario block - brick",
    code: "marioBlockBrick",
    blocks: [
        {
            selector: CELL_SELECTOR.LINE_1,
            image: BLOCKS.MARIOBLOCK_BRICK,
        },
        {
            selector: CELL_SELECTOR.LINE_2,
            image: BLOCKS.DASHLINE,
            color: '#9c4a00'
        },
        {
            selector: CELL_SELECTOR.LINE_3,
            image: BLOCKS.MARIOBLOCK_BRICK,
        },
        {
            selector: CELL_SELECTOR.LINE_4,
            image: BLOCKS.DASHLINE,
            color: '#9c4a00'
        },
        {
            selector: CELL_SELECTOR.LINE_5,
            image: BLOCKS.MARIOBLOCK_BRICK,
        }
    ]
}

export default marioBlockBrick;