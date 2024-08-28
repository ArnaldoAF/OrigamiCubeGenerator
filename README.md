# OrigamiCubeGenerator
Generator for origami cube sheet.

This page will customize a 5x5 grid to print and make a origami cube

Cube origami by Jo Nakashima - https://www.youtube.com/watch?v=0oMf8L9ekys

[Web Site Preview](https://arnaldoaf.github.io/OrigamiCubeGenerator/)

## TechStack 

Made with:

- HTML
- Javascript
- [Tailwind css](https://tailwindcss.com/)
- [Flowbite](https://flowbite.com/)
- [Html2Canvas](https://html2canvas.hertzen.com/) (to convert the HTML content to an image)
- [JsPdf](https://parall.ax/products/jspdf) (to convert the HTML content to PDF)

## Create your own pre-sets


To create a pre-set, you will have to:

- create a preset file on the `scripts/presetsUtils/presets/` folder (You can put there directly or create a sub folder)
- import the pre-set and add to the `scripts/presetsUtils/presets.js` file

### 1. Create a preset file:

create a JS file in the `scripts/presetsUtils/presets/` folder folowing the structure:

```js
// the BLOCKS variable contains the path to images
// the CELL_SELECTOR variable contains the selectors to the grid, it's pretty intuitive, you can give a look at the file to more details
import { BLOCKS, CELL_SELECTOR } from '../../constants.js';


// Give a simple name to the preset, that name also will be the CODE
const marioBlockBrick = {
    name: "mario block - brick", // the displayName of the pre-set
    code: "marioBlockBrick",

    // here's the definition of the preset, its a list of objects
    blocks: [
        {
            selector: CELL_SELECTOR.LINE_1,
            image: BLOCKS.MARIOBLOCK_BRICK,
        },
        {
            selector: CELL_SELECTOR.LINE_2,
            image: BLOCKS.DASHLINE,
            color: '#9c4a00'
        },
        {
            selector: CELL_SELECTOR.LINE_3,
            image: BLOCKS.MARIOBLOCK_BRICK,
        },
        {
            selector: CELL_SELECTOR.LINE_4,
            image: BLOCKS.DASHLINE,
            color: '#9c4a00'
        },
        {
            selector: CELL_SELECTOR.LINE_5,
            image: BLOCKS.MARIOBLOCK_BRICK,
        }
    ]
}

export default marioBlockBrick;
```

Block Object definition:

```js
{
    // Use the CELL_SELECTOR const
    // you can select all cells, a specific line or cell
    // Obrigatory
    selector: CELL_SELECTOR.LINE_1,

    // use the BLOCKS const, it contains the file's path
    // If you want to add a new image, you'll have to change the constants.js file
    // Optional
    image: BLOCKS.MARIOBLOCK_BRICK,

    // Use HEX colors
    // If you don't know the colors, use any tool online to convert color to HEX
    // can be used with images, if an image has transparent background, the color will appear behind
    // Optional
    color: '#9c4a00'
}

```

### 1.5 Add a new image if is needed

If you want to add an image to you preset that is not include on the project, do the folowing:

- add the image in the `assets/blocks/` folder (put there directly or create a sub-folder)
- create a path to the image in the `scripts/constants.js` file, on the `BLOCKS` variable:

`scripts/constants.js` :
```js
export const BLOCKS_PATH = './assets/blocks/';

export const BLOCKS = {
    DASHLINE: `${BLOCKS_PATH}dashline.png`,
    MARIOBLOCK_BRICK: `${BLOCKS_PATH}marioBlock-brick.png`,
    MARIOBLOCK_GROUND: `${BLOCKS_PATH}marioBlock-ground.png`,

    // add your image at the end like this:
    MY_IMAGE: `${BLOCKS_PATH}my-image.png`,
}
```

⚠ **Tips for choosing an image:**
- Use squares images
- Choose a big size, like 512px x 512px
- A good site is: [game-icons.net](https://game-icons.net)
- You can find sprites too in :  [spriters-resource.com](https://www.spriters-resource.com/) and  [opengameart.org](https://opengameart.org/)

### 2. Import the file

import the pre-set and add to the `scripts/presetsUtils/presets.js` file:

```js
import marioBlockBrick from "./presets/marioBlockBrick.js";
import marioBlockGround from "./presets/marioBlockGround.js";

// import your pre-set file
import myPreset from "./presets/myPreset.js";

const presetList = [
    marioBlockBrick,
    marioBlockGround,

    // add to this list
    myPreset
];

export default presetList;
```

And done!

### Aditional: Creating Fonts

To create Alphabet blocks, there's a helper to assist on that

#### 1. Added your assets on a folder

Create images with the same prefix and put them on a seperate folder inside the `assets/blocks/` (yes, its a very manual and boring work). Like this:

```
assets/
├─ blocks/
│  ├─ [...]
│  ├─ super_mario64_font/
│  │  ├─ SM64_font_0.png
│  │  ├─ SM64_font_1.png
│  |  ├─ [... other files]

```

#### 2. Use the `fontGenerator.js`

The `scripts/presetsUtils/fontGenerator.js` file it's gonna help to create the other things

You need to modify it on the following parts:

```js
[...]

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

[...]
```

#### 3. Execute the file

Using a node terminal or anything similar, execute the script:

```
node scripts\presetsUtils\fontGenerator.js
```

The script will do the following:

- Create a folder for your font on the `scripts/presetsUtils/presets/`
- Log on the console:
    - Constants declarations with the image path for the `constants.js` file
    - Imports to the `presets.js` file
    - List of the presets to the `presets.js` file
- Create all the pre-sets files for each letter/Number and put them on the folder created earlier


Create a Pull Request with those changes and **Done!**


## Change log 

- 2023/04/24 
    - add 43 new pre sets
- 2024/07/15 
    - add Minecraft blocks
    - organized pre sets and assests in folders
- 2024/07/29
    - SuperMario 64 font pre-sets added
    - fontGenerator helper added - a script that help create block for letters and numbers
- 2024/08/28
  - more minecraft blocks:
    - logs
    - planks
    - ores
    - melon & pumpkin
    - hay block
    - end stone
    - cobblestones
    - barrel
    - iron, emerald, lapis blocks
