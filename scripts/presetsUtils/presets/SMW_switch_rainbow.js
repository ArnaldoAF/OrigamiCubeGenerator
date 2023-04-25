import { BLOCKS, CELL_SELECTOR } from '../../constants.js';

const SMW_switch_rainbow = {
    name: "SMW - switch rainbow block",
    code: "SMW_switch_rainbow",
    blocks: [
        {
            selector: CELL_SELECTOR.LINE_1,
            image: BLOCKS.SMW_SWITCH_ON,
        },
        {
            selector: CELL_SELECTOR.LINE_2,
            image: BLOCKS.DASHLINE,
            color: '#F80080'
        },

        {
            selector: CELL_SELECTOR.CELL_11,
            image: BLOCKS.SMW_SWITCH_OFF,
        },
        {
            selector: CELL_SELECTOR.CELL_12,
            image: BLOCKS.SMW_SWITCH_ON,
        },
        {
            selector: CELL_SELECTOR.CELL_13,
            image: BLOCKS.SMW_SWITCH_OFF,
        },
        {
            selector: CELL_SELECTOR.CELL_14,
            image: BLOCKS.SMW_SWITCH_ON,
        },
        {
            selector: CELL_SELECTOR.CELL_15,
            image: BLOCKS.SMW_SWITCH_OFF,
        },

        {
            selector: CELL_SELECTOR.LINE_4,
            image: BLOCKS.DASHLINE,
            color: '#8080C8'
        },
        {
            selector: CELL_SELECTOR.LINE_5,
            image: BLOCKS.SMW_SWITCH_OFF,
        }
    ]
}

export default SMW_switch_rainbow;