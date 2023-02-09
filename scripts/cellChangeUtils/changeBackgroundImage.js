import { getImagePickerImage } from './getImagePicker.js'

/**
 * Change the BackgroundImage of given ELEMENT to an IMAGE in base64
 *
 * @param {string} selector element's selector
 * @param {image64} image64 image in base64
 */
export function changeBackgroundImage(selector, image64) {
    let allgrids = document.querySelectorAll(selector);
    allgrids.forEach((item) => {
        item.setAttribute("style", `background: center / contain no-repeat url('${image64}'); `);
    })
}

/**
 * Change the BackgroundImage of given SQUARE and to an image in a fiven IMAGESELECTOR 
 *
 * @param {string} selectorImage imagePicker's selector
 * @param {string} squareSelector squareSelector
 */
export function changeImageSquare(selectorImage, squareSelector) {
    const image = getImagePickerImage(selectorImage);
    changeBackgroundImage(squareSelector, image);
}