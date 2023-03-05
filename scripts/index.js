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
    BLOCKS,
    PRESET_LIST_SELECTOR
} from './constants.js'

import {
    getColorPickerList,
    changeColorSquare,
    changeBackgroundImage,
    changeBackgroundColor
} from './cellChangeUtils/cellsChangeUtils.js';

import {
    resetCells,
    changeColorContainer,
    changeCells
} from './cellsChange.js';

import {
    downloadImage,
    downloadPdfBig,
    downloadPdfMedium,
    downloadPdfSmall
} from './canvasDownload.js';

import presetList from './presetsUtils/presets.js';

import marioBlockBrick from './presetsUtils/presets/marioBlockBrick.js';
import { loadPreSet, ApplyPreset } from './presetsUtils/loadPreSet.js';

import fillSelectOption from './fillSelectOption.js';

import { setImagePreviewEvent, deletePreviewImage } from './imagePreview.js';

import toggleColorPicker from './toggleColorPicker.js';

const { jsPDF } = window.jspdf


const toggleColorPickerAll = () => toggleColorPicker([SIMPLE_COLORPICKER_SELECTOR, COLORPICKER_SELECTOR]);

const loadColorSelect = () => fillSelectOption(SIMPLE_COLORPICKER_SELECTOR, COLORS);
const loadPresetList = () => fillSelectOption(PRESET_LIST_SELECTOR, presetList);

const setImagePreviewEventAll = () => setImagePreviewEvent(IMAGEPICKER_SELECTOR, IMAGE_PREVIEW_SELECTOR, IMAGEPICKER_CONTAINER);

const deleteImagePreviewAll = () => deletePreviewImage(IMAGE_PREVIEW_SELECTOR, IMAGEPICKER_CONTAINER);


var changeType = null;
const changeModalType = (selector) => changeType = selector;

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

    document.querySelector("#apply-preset").addEventListener('click', ApplyPreset);

    document.querySelector("#download-image").addEventListener('click', downloadImage);
    document.querySelector("#download-pdf").addEventListener('click', downloadPdfBig);
    document.querySelector("#download-pdf-medium").addEventListener('click', downloadPdfMedium);
    document.querySelector("#download-pdf-small").addEventListener('click', downloadPdfSmall);

    document.querySelector(OPEN_MODAL_SELECTORS.ALL).addEventListener('click', () => changeModalType(CELL_SELECTOR.ALL));

    document.querySelector(OPEN_MODAL_SELECTORS.LINE_1).addEventListener('click', () => changeModalType(CELL_SELECTOR.LINE_1));
    document.querySelector(OPEN_MODAL_SELECTORS.LINE_2).addEventListener('click', () => changeModalType(CELL_SELECTOR.LINE_2));
    document.querySelector(OPEN_MODAL_SELECTORS.LINE_3).addEventListener('click', () => changeModalType(CELL_SELECTOR.LINE_3));
    document.querySelector(OPEN_MODAL_SELECTORS.LINE_4).addEventListener('click', () => changeModalType(CELL_SELECTOR.LINE_4));
    document.querySelector(OPEN_MODAL_SELECTORS.LINE_5).addEventListener('click', () => changeModalType(CELL_SELECTOR.LINE_5));


    document.querySelector(OPEN_MODAL_SELECTORS.CELL_1).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_1));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_2).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_2));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_3).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_3));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_4).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_4));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_5).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_5));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_6).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_6));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_7).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_7));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_8).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_8));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_9).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_9));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_10).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_10));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_11).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_11));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_12).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_12));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_13).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_13));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_14).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_14));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_15).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_15));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_16).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_16));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_17).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_17));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_18).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_18));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_19).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_19));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_20).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_20));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_21).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_21));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_22).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_22));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_23).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_23));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_24).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_24));
    document.querySelector(OPEN_MODAL_SELECTORS.CELL_25).addEventListener('click', () => changeModalType(CELL_SELECTOR.CELL_25));


}

function loadDefaultImages() {
    // changeBackgroundImage(CELL_SELECTOR.LINE_2, BLOCKS.DASHLINE);
    // changeBackgroundImage(CELL_SELECTOR.LINE_4, BLOCKS.DASHLINE);

    // loadPreSet(marioBlockBrick);
}


function LoadAll() {
    loadColorSelect();
    loadPresetList();
    addEventFunctions();
    setImagePreviewEventAll();
    loadDefaultImages();
}

LoadAll();