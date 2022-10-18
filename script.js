const CELL_SELECTOR = {
    ALL: ".origami-cell",
    LINE_1: ".line-1",
    LINE_2: ".line-2",
    LINE_3: ".line-3",
    LINE_4: ".line-4",
    LINE_5: ".line-5",
}

const COLORPICKER_SELECTOR = {
    ALL: "#colorpicker-all",
    LINE_1: "#colorpicker-1",
    LINE_2: "#colorpicker-2",
    LINE_3: "#colorpicker-3",
    LINE_4: "#colorpicker-4",
    LINE_5: "#colorpicker-5",
}

const SIMPLE_COLORPICKER_SELECTOR = {
    ALL: "#simple-colorpicker-all",
    LINE_1: "#simple-colorpicker-1",
    LINE_2: "#simple-colorpicker-2",
    LINE_3: "#simple-colorpicker-3",
    LINE_4: "#simple-colorpicker-4",
    LINE_5: "#simple-colorpicker-5",
}

const COLORPICKER_CONTAINER = {
    ALL: "#color-container-all",
    LINE_1: "#color-container-1",
    LINE_2: "#color-container-2",
    LINE_3: "#color-container-3",
    LINE_4: "#color-container-4",
    LINE_5: "#color-container-5",
}

const COLORS = [
    {
        name: "White",
        code: "#FFFFFF"
    },
    {
        name: "Silver",
        code: "#C0C0C0"
    },
    {
        name: "Gray",
        code: "#808080"
    },
    {
        name: "Black",
        code: "#000000"
    },
    {
        name: "Red",
        code: "#FF0000"
    },
    {
        name: "Maroon",
        code: "#800000"
    },
    {
        name: "Yellow",
        code: "#FFFF00"
    },
    {
        name: "Olive",
        code: "#808000"
    },
    {
        name: "Lime",
        code: "#00FF00"
    },
    {
        name: "Green",
        code: "#008000"
    },
    {
        name: "Aqua",
        code: "#00FFFF"
    },
    {
        name: "Teal",
        code: "#008080"
    },
    {
        name: "Blue",
        code: "#0000FF"
    },
    {
        name: "Navy",
        code: "#000080"
    },
    {
        name: "Fuchsia",
        code: "#FF00FF"
    },
    {
        name: "Purple",
        code: "#800080"
    },
]

// Utils

function changeBackgroundColor(selector, color) {
    let allgrids = document.querySelectorAll(selector);
    allgrids.forEach((item) => {
        item.style.backgroundColor = color;
    })
}

function changeBackgroundColorList(selectorList, color) {
    selectorList.forEach((selector) => {
        changeBackgroundColor(selector, color);
    })
}

function getColorPickerColor(colorPickerId) {
    const colorpicker = document.querySelector(colorPickerId);

    return colorpicker.value;
}



function fillSelectOption(selectComponentId, optionList) {
    var select = document.querySelector(selectComponentId);
    select.innerHTML = "";
    optionList.forEach((color) => {
        console.log(color);
        var option = document.createElement("option");
        option.value = color.code;
        option.innerHTML = color.name;
        select.appendChild(option);
    });
}



const changeAllCellsColor1 = (e) => changeBackgroundColorList([CELL_SELECTOR.ALL, COLORPICKER_CONTAINER.ALL], e.value);

function changeCellsColorAll () {
    // get values from color picker
    const color1 = getColorPickerColor(SIMPLE_COLORPICKER_SELECTOR.ALL);
    const color2 = getColorPickerColor(COLORPICKER_SELECTOR.ALL);

    changeBackgroundColorList([CELL_SELECTOR.ALL, COLORPICKER_CONTAINER.ALL], color1);
}

function loadColorSelect() {
    fillSelectOption(SIMPLE_COLORPICKER_SELECTOR.ALL, COLORS);
}

function LoadAll() {
    loadColorSelect();
}

LoadAll();