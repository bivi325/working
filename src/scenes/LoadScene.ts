import { CST } from "../CST";

export class LoadScene extends Phaser.Scene {
  constructor() {
    super({
      key: CST.SCENES.LOAD
    });
  }
  init() {}
  loadImages() {
    this.load.setPath("./assets/image");
    for (let name in CST.IMAGE) {
      //@ts-ignore
      this.load.image(CST.IMAGE[name], CST.IMAGE[name]);
    }
  }
  loadAudio() {
    this.load.setPath("./assets/audio");
    for (let name in CST.AUDIO) {
      //@ts-ignore
      this.load.audio(CST.AUDIO[name], CST.AUDIO[name]);
    }
  }
  loadSprite(frameConfig?: Phaser.Loader.FileTypes.ImageFrameConfig) {
    this.load.setPath("./assets/sprite");
    for (let name in CST.SPRITE) {
      //@ts-ignore
      this.load.spritesheet(CST.SPRITE[name], CST.SPRITE[name], frameConfig);
    }
  }
  preload() {
    this.loadAudio();
    const frameConfig = {
      frameHeight: 32,
      frameWidth: 32
    };
    this.loadSprite(frameConfig);
    this.loadImages();

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    const height_game = this.cameras.main.height / 2;
    const width_game = this.cameras.main.width / 2;
    progressBox.fillRect(width_game - 200, height_game, 400, 50);

    const loadingText = this.make.text({
      x: width_game,
      y: height_game - 50,
      text: "Loading...",
      style: {
        font: "34px monospace",
        fill: "#ffffff"
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width_game,
      y: height_game - 5,
      text: "0%",
      style: {
        font: "24px monospace",
        fill: "#ffffff"
      }
    });
    percentText.setOrigin(0.5, 0.5);

    this.load.on("progress", (percent: number) => {
      percentText.setText(Math.floor(percent * 100) + "%");
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(
        width_game - 200 + 10,
        height_game + 10,
        380 * percent,
        30
      );
    });

    this.load.on("complete", () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
    });
  }
  create() {
    this.scene.start(CST.SCENES.MENU);
  }
}
