/** @type {import("../typings/phaser")} */

import { LoadScene } from './scenes/LoadScene';
import { MenuScene } from './scenes/MenuScene';

const config = {
    width: 1400,
    height: 600,
    parent: 'game',
    scene: [
        LoadScene, MenuScene
    ],
}

let game = new Phaser.Game(config);
