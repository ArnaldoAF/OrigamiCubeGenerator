import {
    FILE_NAME,
    PDF_OPTIONS_BIG,
    PDF_OPTIONS_MEDIUM,
    PDF_OPTIONS_SMALL,
} from './constants.js';

const { jsPDF } = window.jspdf;

/**
 * Callback function to convert the canvas to PNG
 *
 * @param {Object} canvas the return of the canvas download function
 */
export const canvasToPNG = (canvas) => {
    let image = canvas.toDataURL();
    // Create a link
    let aDownloadLink = document.createElement('a');
    // Add the name of the file to the link
    aDownloadLink.download = `${FILE_NAME}.png`;
    // Attach the data to the link
    aDownloadLink.href = image;
    // Get the code to click the download link
    aDownloadLink.click();
}

/**
 * Callback function to convert the canvas to PDF, in big size
 *
 * @param {Object} canvas the return of the canvas download function
 */
export const canvasToPdfBig = (canvas) => {
    const image = canvas.toDataURL();

    const doc = new jsPDF();

    doc.addImage(
        image,
        'PNG',
        PDF_OPTIONS_BIG.X,
        PDF_OPTIONS_BIG.Y,
        PDF_OPTIONS_BIG.WIDTH,
        PDF_OPTIONS_BIG.HEIGHT
    );
    doc.save(`${FILE_NAME}.pdf`);
}

/**
 * Callback function to convert the canvas to PDF, in medium size
 *
 * @param {Object} canvas the return of the canvas download function
 */
export const canvasToPdfMedium = (canvas) => {
    const image = canvas.toDataURL();

    const doc = new jsPDF();

    doc.addImage(
        image,
        'PNG',
        PDF_OPTIONS_MEDIUM.SQUARE1.X,
        PDF_OPTIONS_MEDIUM.SQUARE1.Y,
        PDF_OPTIONS_MEDIUM.WIDTH,
        PDF_OPTIONS_MEDIUM.HEIGHT
    );

    doc.addImage(
        image,
        'PNG',
        PDF_OPTIONS_MEDIUM.SQUARE2.X,
        PDF_OPTIONS_MEDIUM.SQUARE2.Y,
        PDF_OPTIONS_MEDIUM.WIDTH,
        PDF_OPTIONS_MEDIUM.HEIGHT
    );

    doc.save(`${FILE_NAME}.pdf`);
}

/**
 * Callback function to convert the canvas to PDF, in small size
 *
 * @param {Object} canvas the return of the canvas download function
 */
export const canvasToPdfSmall = (canvas) => {
    const image = canvas.toDataURL();

    const doc = new jsPDF();

    doc.addImage(
        image,
        'PNG',
        PDF_OPTIONS_SMALL.SQUARE1.X,
        PDF_OPTIONS_SMALL.SQUARE1.Y,
        PDF_OPTIONS_SMALL.WIDTH,
        PDF_OPTIONS_SMALL.HEIGHT
    );

    doc.addImage(
        image,
        'PNG',
        PDF_OPTIONS_SMALL.SQUARE2.X,
        PDF_OPTIONS_SMALL.SQUARE2.Y,
        PDF_OPTIONS_SMALL.WIDTH,
        PDF_OPTIONS_SMALL.HEIGHT
    );

    doc.addImage(
        image,
        'PNG',
        PDF_OPTIONS_SMALL.SQUARE3.X,
        PDF_OPTIONS_SMALL.SQUARE3.Y,
        PDF_OPTIONS_SMALL.WIDTH,
        PDF_OPTIONS_SMALL.HEIGHT
    );

    doc.addImage(
        image,
        'PNG',
        PDF_OPTIONS_SMALL.SQUARE4.X,
        PDF_OPTIONS_SMALL.SQUARE4.Y,
        PDF_OPTIONS_SMALL.WIDTH,
        PDF_OPTIONS_SMALL.HEIGHT
    );

    doc.save(`${FILE_NAME}.pdf`);
}

/**
 * Convert the html to canvas
 *
 * @param {Function} callbackFunction function that will get the canvas and convert to some format
 */
export const htmlToCanvas = (callbackFunction) => {
    const grid = document.querySelector("#origami-grid");

    html2canvas(grid, {
        onclone: (cloneDoc) => {
            const cloneGrid = cloneDoc.querySelector("#origami-grid")

            cloneGrid.classList.remove("origami-grid-normal");
            cloneGrid.classList.add("origami-grid-big");
        }
    }).then(callbackFunction);
}

export const htmlToCanvasCube = (callbackFunction) => {
    const grid = document.querySelector("#cube-footer");

    html2canvas(grid, {
        onclone: (cloneDoc) => {
            const cloneGrid = cloneDoc.querySelector("#cube-out")

            // cloneGrid.classList.remove("origami-grid-normal");
            // cloneGrid.classList.add("origami-grid-big");
        },
        backgroundColor: null,
    }).then(callbackFunction);
}

export const downloadCube = () => htmlToCanvasCube(canvasToPNG);

export const downloadImage = () => htmlToCanvas(canvasToPNG);

export const downloadPdfBig = () => htmlToCanvas(canvasToPdfBig);

export const downloadPdfMedium = () => htmlToCanvas(canvasToPdfMedium);

export const downloadPdfSmall = () => htmlToCanvas(canvasToPdfSmall);
