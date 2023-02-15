import {
    CELL_SELECTOR,
    COLORPICKER_SELECTOR,
    SIMPLE_COLORPICKER_SELECTOR,
    COLORPICKER_CONTAINER,
    COLORS,
    DEAFAULT_COLOR,
    IMAGEPICKER_SELECTOR,
    IMAGEPICKER_CONTAINER,
    IMAGE_PREVIEW_SELECTOR,
} from './constants.js';

import {
    changeBackgroundColor,
    changeBackgroundImage,
    changeColorSquare,
    changeImageSquare

} from './cellChangeUtils/cellsChangeUtils.js';


export function changeColorContainer() {
    changeColorSquare(
        [SIMPLE_COLORPICKER_SELECTOR, COLORPICKER_SELECTOR],
        COLORPICKER_CONTAINER
    );

}

export function changeCellsColor(cellSelector) {
    changeColorSquare(
        [SIMPLE_COLORPICKER_SELECTOR, COLORPICKER_SELECTOR],
        cellSelector
    );
}

export const changeCellsImage = (cellSelector) => changeImageSquare(IMAGE_PREVIEW_SELECTOR, cellSelector)

export function changeCells(cellSelector) {
    changeCellsImage(cellSelector);
    changeCellsColor(cellSelector);
}

export const resetCellsColor = (cellSelector) => changeBackgroundColor(cellSelector, DEAFAULT_COLOR);

export const resetCellsImage = (cellSelector) => changeBackgroundImage(cellSelector, null);

export function resetCells(cellSelector) {
    resetCellsColor(cellSelector);
    resetCellsImage(cellSelector);
}