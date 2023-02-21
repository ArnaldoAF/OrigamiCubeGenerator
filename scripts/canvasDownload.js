import { 
    FILE_NAME,
    PDF_OPTIONS_BIG,
    PDF_OPTIONS_MEDIUM,
} from './constants.js';

const { jsPDF } = window.jspdf;

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

export const downloadPdfBig = () => htmlToCanvas(canvasToPdfBig);

export const downloadPdfMedium = () => htmlToCanvas(canvasToPdfMedium);
