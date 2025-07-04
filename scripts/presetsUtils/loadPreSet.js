import { changeBackgroundImage, changeBackgroundColor } from '../cellChangeUtils/cellsChangeUtils.js';
import presetList from './presets.js';
import { PRESET_LIST_SELECTOR, CELL_SELECTOR } from '../constants.js';

import { resetCells } from '../cellsChange.js';

/**
 * Load a PRESET and apply to the grid
 *
 * @param {Object} preset a preset object
 */
export function loadPreSet(preset) {
    const blocks = preset.blocks;
    blocks.forEach((block) => {
        const { selector, image, color } = block;
        if (image) changeBackgroundImage(selector, image);
        if (color) changeBackgroundColor(selector, color);
    })
}

/**
 * Load a PRESET and apply to the Isometric cube preview
 *
 * @param {Object} preset a preset object
 */
export function loadPreSetOnCube(preset) {
    const blocks = preset.blocks;
    blocks.forEach((block) => {
        const { selector, image, color } = block;
        // load cube

        if ([
            CELL_SELECTOR.CELL_1,
            CELL_SELECTOR.CELL_2,
            CELL_SELECTOR.CELL_3,
            CELL_SELECTOR.CELL_4,
            CELL_SELECTOR.CELL_5,
            CELL_SELECTOR.LINE_1,
            CELL_SELECTOR.ALL
        ].includes(selector)) {
            const cubeTop = document.querySelector("#cube-face-top");
            cubeTop.setAttribute("src", "");
            cubeTop.style.backgroundColor = "white"

            if (image) cubeTop.setAttribute("src", image);
            if (color) cubeTop.style.backgroundColor = color;


        }

        if ([
            CELL_SELECTOR.CELL_13,
            CELL_SELECTOR.LINE_3,
            CELL_SELECTOR.ALL
        ].includes(selector)) {
            const cubeFront = document.querySelector("#cube-face-front");
            cubeFront.setAttribute("src", "");
            cubeFront.style.backgroundColor = "white"

            if (image) cubeFront.setAttribute("src", image);
            if (color) cubeFront.style.backgroundColor = color;


        }

        if ([
            CELL_SELECTOR.CELL_11,
            CELL_SELECTOR.CELL_12,
            CELL_SELECTOR.CELL_14,
            CELL_SELECTOR.CELL_15,
            CELL_SELECTOR.LINE_3,
            CELL_SELECTOR.ALL
        ].includes(selector)) {
            const cubeSide = document.querySelector("#cube-face-side");
            cubeSide.setAttribute("src", "");
            cubeSide.style.backgroundColor = "white"

            if (image) cubeSide.setAttribute("src", image);
            if (color) cubeSide.style.backgroundColor = color;


        }
    })
}

/**
 * Apply the selected preset to the grid
 *
 */
export function ApplyPreset() {
    const presetElement = document.querySelector(PRESET_LIST_SELECTOR);
    const presetValue = presetElement.value;

    resetCells(CELL_SELECTOR.ALL);

    const selectedPreset = presetList.find(preset => preset.code == presetValue);

    if (selectedPreset) {
        loadPreSet(selectedPreset);
        loadPreSetOnCube(selectedPreset);
    }
}