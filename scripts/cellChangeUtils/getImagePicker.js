/**
 * Gets the selected image of given imagePicker Selector
 *
 * @param {string} imagePickerSelector imagePicker's selector
 * @return {string} imagePicker's image
 */
export function getImagePickerImage(imagePickerSelector) {
    const imagePicker = document.querySelector(imagePickerSelector);

    return imagePicker.src;
}
