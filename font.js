const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

//SM64_FONT_0: `${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_0`,

let final_lines = alphabet
  .map((letter) => {
    const vName = `SM64_FONT_${letter}: `;
    const vValue =
      "`${BLOCKS_PATH}/${SM64_FONT_BLOCKS_PATH}/SM64_font_" + letter + "`\n";
    return vName.concat(vValue);
  })
  .join();

console.log(final_lines);

const fs = require("fs");
const path = require("path");

const root = process.cwd();
const fontPath = path.join(
  root,
  "scripts",
  "presetsUtils",
  "presets",
  "super_mario64_font"
);

console.log(root);

alphabet.forEach((letter) => {
  const indexContent = `import { BLOCKS, CELL_SELECTOR } from "../../../constants.js";

  const SM64_font_${letter} = {
  name: "SM64 Font - ${letter}",
  code: "SM64_font_${letter}",
  blocks: [
    {
      selector: CELL_SELECTOR.LINE_1,
      image: BLOCKS.SM64_FONT_${letter},
      color: "#B0B090",
    },
    {
      selector: CELL_SELECTOR.LINE_2,
      image: BLOCKS.DASHLINE,
      color: "#B0B090",
    },
    {
      selector: CELL_SELECTOR.LINE_3,
      image: BLOCKS.SM64_FONT_${letter},
      color: "#B0B090",
    },
    {
      selector: CELL_SELECTOR.LINE_4,
      image: BLOCKS.DASHLINE,
      color: "#B0B090",
    },
    {
      selector: CELL_SELECTOR.LINE_5,
      image: BLOCKS.SM64_FONT_${letter},
      color: "#B0B090",
    },
  ],
};

export default SM64_font_${letter};

`;
  const indexPath = path.join(fontPath, `SM64_font_${letter}.js`);

  fs.writeFile(indexPath, indexContent, (error) => {
    if (error) {
      return console.error(`Error creating SM64_font_${letter}.js: ${error}`);
    }
    console.log(`SM64_font_${letter}.js created.`);
  });
});
