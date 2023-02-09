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
    let colorPickerList = [];
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