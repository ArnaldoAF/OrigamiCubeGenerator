const CELL_SELECTOR = {
    ALL: ".origami-cell",
    LINE_1: ".line-1",
    LINE_2: ".line-2",
    LINE_3: ".line-3",
    LINE_4: ".line-4",
    LINE_5: ".line-5",
}

const COLORS = [
    {
        name: "White",
        code: "#FFFFFF"
    },
    {
        name: "Silver",
        code: "#C0C0C0"
    },
    {
        name: "Gray",
        code: "#808080"
    },
    {
        name: "Black",
        code: "#000000"
    },
    {
        name: "Red",
        code: "#FF0000"
    },
    {
        name: "Maroon",
        code: "#800000"
    },
    {
        name: "Yellow",
        code: "#FFFF00"
    },
    {
        name: "Olive",
        code: "#808000"
    },
    {
        name: "Lime",
        code: "#00FF00"
    },
    {
        name: "Green",
        code: "#008000"
    },
    {
        name: "Aqua",
        code: "#00FFFF"
    },
    {
        name: "Teal",
        code: "#008080"
    },
    {
        name: "Blue",
        code: "#0000FF"
    },
    {
        name: "Navy",
        code: "#000080"
    },
    {
        name: "Fuchsia",
        code: "#FF00FF"
    },
    {
        name: "Purple",
        code: "#800080"
    },
]

// Utils

function changeBackgroundColor(selector, color) {
    let allgrids = document.querySelectorAll(selector);
    allgrids.forEach((item) => {
        item.style.backgroundColor = color;
    })
}

function changeBackgroundColorList(selectorList, color) {
    selectorList.forEach((selector) => {
        changeBackgroundColor(selector, color);
    })
}



function fillSelectOption(selectComponentId, optionList) {
    var select = document.getElementById(selectComponentId);
    select.innerHTML = "";
    optionList.forEach((color) => {
        console.log(color);
        var option = document.createElement("option");
        option.value = color.code;
        option.innerHTML = color.name;
        select.appendChild(option);
    });
}


const changeAllCellsColor = (e) => changeBackgroundColorList([CELL_SELECTOR.ALL, '.color-all-container'], e.value);

function loadColorSelect() {
    fillSelectOption("color-all", COLORS);
}

loadColorSelect();