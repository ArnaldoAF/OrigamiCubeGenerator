/**
 * Add the event to a ImagePicker. This event will load the image and display on a preview div
 *
 * @param {string} inputId Id of the image input
 * @param {string} imagePreviewId Id of the preview div which the image will be displayed
 * @param {string} imagePreviewContainerId Id of the container that will includes the preview div
 */
export function setImagePreviewEvent(inputId, imagePreviewId, imagePreviewContainerId) {
    let input = document.querySelector(inputId);

    input.onchange = function () {
        let file = input.files[0];
        let reader = new FileReader();
        const previewDiv = document.querySelector(imagePreviewContainerId);
        previewDiv.classList.remove("hide");

        reader.onloadend = function (e) {
            let b64 = reader.result.replace(/^data:.+;base64,/, "");
            let previewImg = document.querySelector(imagePreviewId);
            previewImg.setAttribute("src", "data:image/jpeg;base64," + b64);
        };

        reader.readAsDataURL(file);
    };
}

/**
 * Event that will delete the preview image
 *
 * @param {string} imagePreviewId Id of the preview div which the image will be displayed
 * @param {string} imagePreviewContainerId Id of the container that will includes the preview div
 */
export function deletePreviewImage(imagePreviewId, imagePreviewContainerId) {
    const previewDiv = document.querySelector(imagePreviewContainerId);
    previewDiv.classList.add("hide");
    let previewImg = document.querySelector(imagePreviewId);
    previewImg.setAttribute("src", "");
}