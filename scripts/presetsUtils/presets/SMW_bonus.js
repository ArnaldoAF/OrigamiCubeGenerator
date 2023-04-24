import { BLOCKS, CELL_SELECTOR } from '../../constants.js';

const SMW_bonus = {
    name: "SMW - bonus block",
    code: "SMW_bonus",
    blocks: [
        {
            selector: CELL_SELECTOR.LINE_1,
            color: '#00C800'
        },
        {
            selector: CELL_SELECTOR.LINE_2,
            image: BLOCKS.DASHLINE,
            color: '#00C800'
        },
        {
            selector: CELL_SELECTOR.LINE_3,
            image: BLOCKS.SMW_BONUS,
        },
        {
            selector: CELL_SELECTOR.LINE_4,
            image: BLOCKS.DASHLINE,
            color: '#00C800'
        },
        {
            selector: CELL_SELECTOR.LINE_5,
            color: '#00C800'
        }
    ]
}

export default SMW_bonus;