import { BLOCKS, CELL_SELECTOR } from '../../constants.js';

const SMW_rotating_blue = {
    name: "SMW - rotating blue block",
    code: "SMW_rotating_blue",
    blocks: [
        {
            selector: CELL_SELECTOR.LINE_1,
            color: '#8888F8'
        },
        {
            selector: CELL_SELECTOR.LINE_2,
            image: BLOCKS.DASHLINE,
            color: '#8888F8'
        },
        {
            selector: CELL_SELECTOR.LINE_3,
            image: BLOCKS.SMW_ROTATING_BLUE,
            color: '#8888F8'
        },
        {
            selector: CELL_SELECTOR.LINE_4,
            image: BLOCKS.DASHLINE,
            color: '#8888F8'
        },
        {
            selector: CELL_SELECTOR.LINE_5,
            color: '#8888F8'
        }
    ]
}

export default SMW_rotating_blue;