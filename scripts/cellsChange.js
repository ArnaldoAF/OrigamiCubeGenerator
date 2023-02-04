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
    changeBackgroundColorList,
    getColorPickerColor,
    getColorPickerList,
    getColorPickerColorList,
    changeBackgroundImage,
    getImagePickerImage,
    changeColorSquare,
    changeImageSquare,
} from './cellsChangeUtils.js';


export function changeCellsColorAll() {
    changeColorSquare(
        [SIMPLE_COLORPICKER_SELECTOR.ALL, COLORPICKER_SELECTOR.ALL],
        CELL_SELECTOR.ALL
    );
}

export const changeCellsImageAll = () => changeImageSquare(IMAGEPICKER_SELECTOR.ALL, CELL_SELECTOR.ALL)

export function changeColorContainerAll() {
    changeColorSquare(
        [SIMPLE_COLORPICKER_SELECTOR.ALL, COLORPICKER_SELECTOR.ALL],
        COLORPICKER_CONTAINER.ALL
    );

}


export function changeCellsAll() {
    changeCellsImageAll();
    changeCellsColorAll();
}

export const resetCellsColorAll = () => changeBackgroundColor(CELL_SELECTOR.ALL, DEAFAULT_COLOR);

export const resetCellsImageAll = () => changeBackgroundImage(CELL_SELECTOR.ALL, null);

export function resetCellsAll() {
    resetCellsColorAll();
    resetCellsImageAll();
}