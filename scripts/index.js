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
    OPEN_MODAL_SELECTORS,
} from './constants.js'

import {
    getColorPickerList,
    changeColorSquare,
} from './cellChangeUtils/cellsChangeUtils.js';

import {
    resetCells,
    changeColorContainer,
    changeCells
} from './cellsChange.js'

import fillSelectOption from './fillSelectOption.js';

import { setImagePreviewEvent, deletePreviewImage } from './imagePreview.js';

import toggleColorPicker from './toggleColorPicker.js';



const toggleColorPickerAll = () => toggleColorPicker(SIMPLE_COLORPICKER_SELECTOR, COLORPICKER_SELECTOR);

const loadColorSelect = () => fillSelectOption(SIMPLE_COLORPICKER_SELECTOR, COLORS);

const setImagePreviewEventAll = () =>  setImagePreviewEvent(IMAGEPICKER_SELECTOR, IMAGE_PREVIEW_SELECTOR, IMAGEPICKER_CONTAINER);

const deleteImagePreviewAll = () => deletePreviewImage(IMAGE_PREVIEW_SELECTOR, IMAGEPICKER_CONTAINER);


var changeType = null;
const changeModalType = (selector) => changeType  = selector;

const ApplyChangeCells = () => changeCells(changeType);

const ApplyResetCells = () => resetCells(changeType);

// Events 
function addEventFunctions() {
    document.querySelector(SIMPLE_COLORPICKER_SELECTOR).addEventListener('change', changeColorContainer);
    document.querySelector(COLORPICKER_SELECTOR).addEventListener('change', changeColorContainer);
    document.querySelector("#advanced-colorpicker-all").addEventListener('click', toggleColorPickerAll);
    
    document.querySelector("#delete-image-all").addEventListener('click', deleteImagePreviewAll);
    document.querySelector("#reset-all").addEventListener('click', ApplyResetCells);
    document.querySelector("#apply-all").addEventListener('click', ApplyChangeCells);
    
    document.querySelector(OPEN_MODAL_SELECTORS.ALL).addEventListener('click', () => changeModalType(CELL_SELECTOR.ALL));
    document.querySelector(OPEN_MODAL_SELECTORS.LINE_1).addEventListener('click', () => changeModalType(CELL_SELECTOR.LINE_1));
    document.querySelector(OPEN_MODAL_SELECTORS.LINE_2).addEventListener('click', () => changeModalType(CELL_SELECTOR.LINE_2));
    document.querySelector(OPEN_MODAL_SELECTORS.LINE_3).addEventListener('click', () => changeModalType(CELL_SELECTOR.LINE_3));
    document.querySelector(OPEN_MODAL_SELECTORS.LINE_4).addEventListener('click', () => changeModalType(CELL_SELECTOR.LINE_4));
    document.querySelector(OPEN_MODAL_SELECTORS.LINE_5).addEventListener('click', () => changeModalType(CELL_SELECTOR.LINE_5));

}


function LoadAll() {
    loadColorSelect();
    addEventFunctions();
    setImagePreviewEventAll();
}

LoadAll();