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
} from './constants.js'

import {
    getColorPickerList,
    changeColorSquare,
} from './cellChangeUtils/cellsChangeUtils.js';

import {
    changeCellsColorAll,
    changeCellsImageAll,
    changeCellsAll,
    resetCellsColorAll,
    resetCellsImageAll,
    resetCellsAll,
    changeColorContainerAll,
} from './cellsChange.js'

import fillSelectOption from './fillSelectOption.js';

import { setImagePreviewEvent, deletePreviewImage } from './imagePreview.js';

import toggleColorPicker from './toggleColorPicker.js';


function toggleColorPickerAll() {
    toggleColorPicker([SIMPLE_COLORPICKER_SELECTOR.ALL, COLORPICKER_SELECTOR.ALL]);
}

function loadColorSelect() {
    fillSelectOption(SIMPLE_COLORPICKER_SELECTOR.ALL, COLORS);
}

function setImagePreviewEventAll() {
    setImagePreviewEvent(IMAGEPICKER_SELECTOR.ALL, IMAGE_PREVIEW_SELECTOR.ALL, IMAGEPICKER_CONTAINER.ALL);
}

function deleteImagePreviewAll() {
    deletePreviewImage(IMAGE_PREVIEW_SELECTOR.ALL, IMAGEPICKER_CONTAINER.ALL);
}



// Events 
function addEventFunctions() {
    console.log("add events");
    document.querySelector(SIMPLE_COLORPICKER_SELECTOR.ALL).addEventListener('change', changeColorContainerAll);
    document.querySelector(COLORPICKER_SELECTOR.ALL).addEventListener('change', changeColorContainerAll);
    document.querySelector("#advanced-colorpicker-all").addEventListener('click', toggleColorPickerAll);

    document.querySelector("#delete-image-all").addEventListener('click', deleteImagePreviewAll);
    document.querySelector("#reset-all").addEventListener('click', resetCellsAll);
    document.querySelector("#apply-all").addEventListener('click', changeCellsAll);

}


function LoadAll() {
    loadColorSelect();
    addEventFunctions();
    setImagePreviewEventAll();
}

LoadAll();