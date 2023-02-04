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
 * Gets the selected color of given colorPicker
 *
 * @param {string} colorPickerSelector colorPicker's selector
 * @return {string} colorPicker's color
 */
export function getColorPickerColor(colorPickerSelector) {
    const colorpicker = document.querySelector(colorPickerSelector);

    return colorpicker.value;
}

/**
 * Gets the colorPicker Elements of given colorPicker's selectors
 *
 * @param {array<string>} colorPickerSelectorList colorPicker's selector list
 * @return {array} colorPickers element list
 */
export function getColorPickerList(colorPickerSelectorList) {
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
export function getColorPickerColorList(colorPickerSelectorList) {
    let colorPickerColorList = []
    colorPickerSelectorList.forEach((colorPickerSelector) => {
        const colorPickerColor = getColorPickerColor((colorPickerSelector));
        colorPickerColorList.push(colorPickerColor);
    });

    return colorPickerColorList;
}

export function changeBackgroundImage(selector, image64) {
    let allgrids = document.querySelectorAll(selector);
    allgrids.forEach((item) => {
        item.setAttribute("style", `background: center / contain no-repeat url('${image64}'); `);
    })
}

export function getImagePickerImage(imagePickerSelector) {
    const imagePicker = document.querySelector(imagePickerSelector);

    return imagePicker.src;
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

export function changeImageSquare(selectorImage, squareSelector) {
    const image = getImagePickerImage(selectorImage);
    changeBackgroundImage(squareSelector, image);
}