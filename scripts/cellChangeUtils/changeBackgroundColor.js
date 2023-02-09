import {
    getColorPickerList,
    getColorPickerColorList,
} from './getColorPicker.js';


/**
 * Change an element's background with a color
 *
 * @param {string} selector element's selector
 * @param {string} color color
 */
export function changeBackgroundColor(selector, color) {
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
export function changeBackgroundColorList(selectorList, color) {
    selectorList.forEach((selector) => {
        changeBackgroundColor(selector, color);
    })
}


/**
 * Change any Square's color given the colorPicker selectors and the square Selectors
 *
 * @param {array<string>} selectorColorPickerList List of the colorPicker's selectors, this colorPickers will return the collors
 * @param {string} squareSelector The selector of the squares that will have thier color changed
 */
export function changeColorSquare(selectorColorPickerList, squareSelector) {
    const [colorpicker1Color, colorpicker2Color] = getColorPickerColorList(selectorColorPickerList)
    const [colorpicker1] = getColorPickerList(selectorColorPickerList);

    if (colorpicker1.className.includes("show"))
        changeBackgroundColor(squareSelector, colorpicker1Color);
    else
        changeBackgroundColor(squareSelector, colorpicker2Color);
}