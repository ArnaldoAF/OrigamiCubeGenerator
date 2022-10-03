const CELL_SELECTOR = {
    ALL: ".origami-cell",
    LINE_1: ".line-1",
    LINE_2: ".line-2",
    LINE_3: ".line-3",
    LINE_4: ".line-4",
    LINE_5: ".line-5",
}

function changeColor(e) {
    console.log("changeColor");
    console.log(e.value);
    const colorSelected = e.value;

    let allgrids = document.querySelectorAll(CELL_SELECTOR.ALL);
    allgrids.forEach((item) => {
        item.style.backgroundColor = e.value;
    })
}

