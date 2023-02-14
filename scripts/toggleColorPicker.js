import { getColorPickerList } from './cellChangeUtils/getColorPicker.js';

/**
 * Alternates the colorPickers showing and hiding
 *
 * @param {array<string>} selectorColorPickerList List of the colorPicker's selectors that will be toggled
 */
export default function toggleColorPicker(selectorColorPickerList) {
    const [colorpicker1, colorpicker2] = getColorPickerList(selectorColorPickerList);

    colorpicker1.classList.toggle("show");
    colorpicker2.classList.toggle("show");

    colorpicker1.classList.toggle("hide");
    colorpicker2.classList.toggle("hide");

}