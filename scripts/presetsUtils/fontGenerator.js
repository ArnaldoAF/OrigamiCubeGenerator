const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

//SM64_FONT_0: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_0`,

const fs = require("fs");
const path = require("path");

const fontFolder = "super_mario64_font";

const root = process.cwd();
const fontPath = path.join(
  root,
  "scripts",
  "presetsUtils",
  "presets",
  fontFolder
);

console.log(root);

const fontPrefix = "SM64_font"; // Object's Name
const fontPrefixConst = "SM64_FONT"; // variable's name from the constants.js file
const fontPrefixName = "SM64 Font"; // Name that will appear on the UI

// cont variable generator
// This function will create variable declarations to put on the constants.js file
let final_lines = alphabet
  .map((letter) => {
    const vName = `${fontPrefixConst}_${letter}: `;
    const vValue =
      "`${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_" + letter + "`\n";

    vName.concat("`${BLOCKS_PATH}/", "");

    const a = `${fontPrefixConst}_${letter}: \`\${BLOCKS_PATH}/\${${fontPrefixConst}_BLOCKS_PATH}/${fontPrefix}_${letter}\``;
    return a;
  })
  .join();

console.log(
  "Constants: (put this variables on the constant.js file, on the BLOCKS variable)"
);
console.log(final_lines);

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
