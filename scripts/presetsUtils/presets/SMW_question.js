import { BLOCKS, CELL_SELECTOR } from '../../constants.js';

const SMW_question = {
    name: "SMW - question",
    code: "SMW_question",
    blocks: [
        {
            selector: CELL_SELECTOR.LINE_1,
            color: '#F8D820'
        },
        {
            selector: CELL_SELECTOR.LINE_2,
            image: BLOCKS.DASHLINE,
            color: '#F8D820'
        },
        {
            selector: CELL_SELECTOR.LINE_3,
            image: BLOCKS.SMW_QUESTION,
            color: '#F8D820'
        },
        {
            selector: CELL_SELECTOR.LINE_4,
            image: BLOCKS.DASHLINE,
            color: '#F8D820'
        },
        {
            selector: CELL_SELECTOR.LINE_5,
            color: '#F8D820'
        }
    ]
}

export default SMW_question;