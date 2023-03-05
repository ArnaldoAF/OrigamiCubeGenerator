import { changeBackgroundImage, changeBackgroundColor } from '../cellChangeUtils/cellsChangeUtils.js';
import presetList from './presets.js';
import { PRESET_LIST_SELECTOR } from '../constants.js';

export function loadPreSet(preset) {
    const blocks = preset.blocks;
    blocks.forEach((block) => {
        const { selector, image, color } = block;
        if (image) changeBackgroundImage(selector, image);
        if (color) changeBackgroundColor(selector, color);
    })
}

export function ApplyPreset() {
    // pegar valor do select
    const presetElement = document.querySelector(PRESET_LIST_SELECTOR);
    const presetValue = presetElement.value;
    // achar na lista de presets
    const selectedPreset = presetList.find(preset => preset.code == presetValue);
    // aplicar preset
    if (selectedPreset) loadPreSet(selectedPreset);
}