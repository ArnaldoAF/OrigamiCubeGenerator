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

const DEAFAULT_COLOR = "#FFFFFF";

// Utils

/**
 * Change an element's background with a color
 *
 * @param {string} selector element's selector
 * @param {string} color color
 */
function changeBackgroundColor(selector, color) {
    let allgrids = document.querySelectorAll(selector);
    allgrids.forEach((item) => {
        item.style.backgroundColor = color;
    })
}

/**
 * Change the background of a list of elements with a color
 *
 * @param {array<string>} selectorList element's selector list
 * @param {string} color color
 */
function changeBackgroundColorList(selectorList, color) {
    selectorList.forEach((selector) => {
        changeBackgroundColor(selector, color);
    })
}

/**
 * Gets the selected color of given colorPicker
 *
 * @param {string} colorPickerSelector colorPicker's selector
 * @return {string} colorPicker's color
 */
function getColorPickerColor(colorPickerSelector) {
    const colorpicker = document.querySelector(colorPickerSelector);

    return colorpicker.value;
}

/**
 * Gets the colorPicker Elements of given colorPicker's selectors
 *
 * @param {array<string>} colorPickerSelectorList colorPicker's selector list
 * @return {array} colorPickers element list
 */
function getColorPickerList(colorPickerSelectorList) {
    let colorPickerList = []
    colorPickerSelectorList.forEach((colorPickerSelector) => {
        const colorPicker = document.querySelector(colorPickerSelector);
        colorPickerList.push(colorPicker);
    });

    return colorPickerList;
}

/**
 * Gets the colorPickers selected colors of given colorPicker's selectors
 *
 * @param {array<string>} colorPickerSelectorList colorPicker's selector list
 * @return {array<string>} colorPickers's selected colors
 */
function getColorPickerColorList(colorPickerSelectorList) {
    let colorPickerColorList = []
    colorPickerSelectorList.forEach((colorPickerSelector) => {
        const colorPickerColor = getColorPickerColor((colorPickerSelector));
        colorPickerColorList.push(colorPickerColor);
    });

    return colorPickerColorList;
}


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


// Change Color Functions

/**
 * Change any Square's color given the colorPicker selectors and the square Selectors
 *
 * @param {array<string>} selectorColorPickerList List of the colorPicker's selectors, this colorPickers will return the collors
 * @param {string} squareSelector The selector of the squares that will have thier color changed
 */
function changeColorSquare(selectorColorPickerList, squareSelector) {
    const [colorpicker1Color, colorpicker2Color] = getColorPickerColorList(selectorColorPickerList)
    const [colorpicker1] = getColorPickerList(selectorColorPickerList);

    if (colorpicker1.className.includes("show"))
        changeBackgroundColor(squareSelector, colorpicker1Color);
    else
        changeBackgroundColor(squareSelector, colorpicker2Color);
}


// Cells
function changeCellsColorAll() {
    changeColorSquare(
        [SIMPLE_COLORPICKER_SELECTOR.ALL, COLORPICKER_SELECTOR.ALL],
        CELL_SELECTOR.ALL
    );

}

const resetCellsColorAll = () => changeBackgroundColor(CELL_SELECTOR.ALL, DEAFAULT_COLOR);


// Container
function changeColorContainerAll() {
    changeColorSquare(
        [SIMPLE_COLORPICKER_SELECTOR.ALL, COLORPICKER_SELECTOR.ALL],
        COLORPICKER_CONTAINER.ALL
    );
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

function LoadAll() {
    loadColorSelect();
}

LoadAll();