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
    const presetElement = document.querySelector(PRESET_LIST_SELECTOR);
    const presetValue = presetElement.value;
    
    const selectedPreset = presetList.find(preset => preset.code == presetValue);
    
    if (selectedPreset) loadPreSet(selectedPreset);
}