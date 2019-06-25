/** @type {import("../typings/phaser")} */
import { LoadScene } from './scenes/LoadScene';
import { MenuScene } from './scenes/MenuScene';
const config = {
    width: 1366,
    height: 768,
    parent: 'game',
    scene: [
        LoadScene, MenuScene
    ],
    render: {
        pixelArt: true
    }
};
let game = new Phaser.Game(config);
