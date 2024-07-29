const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

//SM64_FONT_0: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_0`,

const fs = require("fs");
const path = require("path");

const fontFolder = "super_mario64_font"; // <-- Modify the folder's name

const root = process.cwd();
const fontPath = path.join(
  root,
  "scripts",
  "presetsUtils",
  "presets",
  fontFolder
);

console.log(root);

// MODIFY THE 3 VARIABLES BELLOW:

const fontPrefix = "SM64_font"; // Object's Name
const fontPrefixConst = "SM64_FONT"; // variable's name from the constants.js file | its the same prefix as the images
const fontPrefixName = "SM64 Font"; // Name that will appear on the UI(the select on the HTML) | Use a User friendy name

// cont variable generator
// This function will create variable declarations to put on the constants.js file
const constantVariables = alphabet
  .map((letter) => {
    return `${fontPrefixConst}_${letter}: \`\${BLOCKS_PATH}/\${${fontPrefixConst}_BLOCKS_PATH}/${fontPrefix}_${letter}\``;
  })
  .join(", \n");

console.log("-------------------------------------------------");
console.log(
  "Constants: (put this variables on the constant.js file, on the BLOCKS variable)"
);
console.log("");
console.log(constantVariables);

// import generator
// This function will create variable import to put on the presets.js file
const importToPresetsLine = alphabet
  .map((letter) => {
    return `import ${fontPrefix}_${letter} from "./presets/${fontFolder}/${fontPrefix}_${letter}.js"`;
  })
  .join("; \n");

console.log("-------------------------------------------------");
console.log(
  "Imports: (put this lines on the presets.js file, with the other imports)"
);
console.log("");
console.log(importToPresetsLine);
console.log("-------------------------------------------------");

// variable presets generator
// This function will create variable list to put on the presets.js file
const presetList = alphabet
  .map((letter) => {
    return `${fontPrefix}_${letter}`;
  })
  .join(", \n");

const presetListDeclaration = `
const ${fontPrefix}_Blocks = [
  ${presetList}
]
`;

console.log("-------------------------------------------------");
console.log(
  "Preset List: (put this lines on the presets.js file, wiht the other array declation. Dont forget to include it on the presetList variable)"
);
console.log("");
console.log(presetListDeclaration);
console.log("-------------------------------------------------");

// Create all preSet files for fonts
alphabet.forEach((letter) => {
  const backgroundColor = "#B0B090";

  const indexContent = `import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

  const ${fontPrefix}_${letter} = {
    name: "${fontPrefixName} - ${letter}",
    code: "${fontPrefix}_${letter}",
    blocks: [
      {
        selector: CELL_SELECTOR.LINE_1,
        image: BLOCKS.${fontPrefixConst}_${letter},
        color: ${backgroundColor},
      },
      {
        selector: CELL_SELECTOR.LINE_2,
        image: BLOCKS.DASHLINE,
        color: ${backgroundColor},
      },
      {
        selector: CELL_SELECTOR.LINE_3,
        image: BLOCKS.${fontPrefixConst}_${letter},
        color: ${backgroundColor},
      },
      {
        selector: CELL_SELECTOR.LINE_4,
        image: BLOCKS.DASHLINE,
        color: ${backgroundColor},
      },
      {
        selector: CELL_SELECTOR.LINE_5,
        image: BLOCKS.${fontPrefixConst}_${letter},
        color: ${backgroundColor},
      },
    ],
};

export default ${fontPrefix}_${letter};

`;
  const indexPath = path.join(fontPath, `${fontPrefix}_${letter}.js`);

  fs.writeFile(indexPath, indexContent, (error) => {
    if (error) {
      return console.error(
        `Error creating ${fontPrefix}_${letter}.js: ${error}`
      );
    }
    console.log(`${fontPrefix}_${letter}.js created! `);
  });
});
