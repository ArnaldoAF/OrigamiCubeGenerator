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

/**
 * Fill a select input with a list of option
 *
 * @param {string} selectComponentId Id of the select input
 * @param {array<string>} optionList list of options
 */
function fillSelectOption(selectComponentId, optionList) {
    let select = document.querySelector(selectComponentId);
    select.innerHTML = "";
    optionList.forEach((color) => {
        let option = document.createElement("option");
        option.value = color.code;
        option.innerHTML = color.name;
        select.appendChild(option);
    });
}


// toggle ColorPicker

/**
 * Alternates the colorPickers showing and hiding
 *
 * @param {array<string>} selectorColorPickerList List of the colorPicker's selectors that will be toggled
 */
function toggleColorPicker(selectorColorPickerList) {
    const [colorpicker1, colorpicker2] = getColorPickerList(selectorColorPickerList);

    colorpicker1.classList.toggle("show");
    colorpicker2.classList.toggle("show");

    colorpicker1.classList.toggle("hide");
    colorpicker2.classList.toggle("hide");

}

function toggleColorPickerAll() {
    toggleColorPicker([SIMPLE_COLORPICKER_SELECTOR.ALL, COLORPICKER_SELECTOR.ALL]);
}

function loadColorSelect() {
    fillSelectOption(SIMPLE_COLORPICKER_SELECTOR.ALL, COLORS);
}


// ImagePicker 

var input = document.getElementById("imageUploadAll");
input.onchange = function () {
    let file = input.files[0];
    let reader = new FileReader();
    const previewDiv = document.getElementById("imagePreviewContainerAll");
    previewDiv.classList.remove("hide");

    reader.onloadend = function (e) {
        let b64 = reader.result.replace(/^data:.+;base64,/, "");
        let previewImg = document.getElementById("imagePreviewAll");
        previewImg.setAttribute("src", "data:image/jpeg;base64," + b64);
    };

    reader.readAsDataURL(file);
};

function deleteImage() {
    const previewDiv = document.getElementById("imagePreviewContainerAll");
    previewDiv.classList.add("hide");
    let previewImg = document.getElementById("imagePreviewAll");
    previewImg.setAttribute("src", "");
}

// Events 
function addEventFunctions() {
    console.log("add events");
    document.querySelector(SIMPLE_COLORPICKER_SELECTOR.ALL).addEventListener('change', changeColorContainerAll);
    document.querySelector(COLORPICKER_SELECTOR.ALL).addEventListener('change', changeColorContainerAll);
    document.querySelector("#advanced-colorpicker-all").addEventListener('click', toggleColorPickerAll);

    document.querySelector("#delete-image-all").addEventListener('click', deleteImage);
    document.querySelector("#reset-all").addEventListener('click', resetCellsAll);
    document.querySelector("#apply-all").addEventListener('click', changeCellsAll);

}


function LoadAll() {
    loadColorSelect();
    addEventFunctions();
}

LoadAll();