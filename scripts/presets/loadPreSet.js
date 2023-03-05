import { changeBackgroundImage, changeBackgroundColor } from '../cellChangeUtils/cellsChangeUtils.js';

export function loadPreSet(preset) {
    console.log('loadPreSet')
    const blocks = preset.blocks;
    blocks.forEach((block) => {
        console.log(block);
        const { selector, image, color } = block;
        if (image) changeBackgroundImage(selector, image);
        if (color) changeBackgroundColor(selector, color);
    })
}