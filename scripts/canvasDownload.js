import { PDF_OPTIONS_BIG } from './constants.js';

const { jsPDF } = window.jspdf;

export const canvasToPNG = (canvas) => {
    let image = canvas.toDataURL();
    // Create a link
    let aDownloadLink = document.createElement('a');
    // Add the name of the file to the link
    aDownloadLink.download = 'origami-grid.png';
    // Attach the data to the link
    aDownloadLink.href = image;
    // Get the code to click the download link
    aDownloadLink.click();
}

export const canvasToPfdBig = (canvas) => {
    const image = canvas.toDataURL();

    const doc = new jsPDF();
    doc.addImage(image, 'PNG', PDF_OPTIONS_BIG.X, PDF_OPTIONS_BIG.Y, PDF_OPTIONS_BIG.WIDTH, PDF_OPTIONS_BIG.HEIGHT);
    doc.save("origami-grid.pdf");
}

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

export const downloadImage = () => htmlToCanvas(canvasToPNG);

export const downloadPdfBig = () => htmlToCanvas(canvasToPfdBig);
