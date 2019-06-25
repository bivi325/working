import { CST } from "../CST";
export class MenuScene extends Phaser.Scene {
  constructor() {
    super({
      key: CST.SCENES.MENU
    });
  }
  init() {}
  preload() {}
  create() {
    this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height * 0.2,
        CST.IMAGE.LOGO
      )
      .setDepth(1);

    this.add
      .image(0, 0, CST.IMAGE.BACKGROUND)
      .setOrigin(0)
      .setDepth(0);

    const hoverCat: Phaser.GameObjects.Sprite = this.add.sprite(
      100,
      100,
      CST.SPRITE.CAT
    );
    hoverCat.setScale(2);

    this.anims.create({
      key: "walk",
      frameRate: 4,
      repeat: -1,
      frames: this.anims.generateFrameNumbers(CST.SPRITE.CAT, {
        frames: [0, 1, 2, 3]
      })
    });

    const playButton = this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height * 0.4,
        CST.IMAGE.PLAY
      )
      .setDepth(1);

    const refuseButton = this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height * 0.5,
        CST.IMAGE.REFUSE
      )
      .setDepth(1);

    const moreButton = this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height * 0.6,
        CST.IMAGE.MORE
      )
      .setDepth(1);

    playButton.setInteractive();
    refuseButton.setInteractive();
    moreButton.setInteractive();

    playButton.on("pointerover", () => {
      hoverCat.setVisible(true);
      hoverCat.play("walk");
      hoverCat.x = playButton.x - playButton.width;
      hoverCat.y = playButton.y;
    });

    refuseButton.on("pointerover", () => {
      hoverCat.setVisible(true);
      hoverCat.play("walk");
      hoverCat.x = refuseButton.x - refuseButton.width;
      hoverCat.y = refuseButton.y;
    });

    moreButton.on("pointerover", () => {
      hoverCat.setVisible(true);
      hoverCat.play("walk");
      hoverCat.x = moreButton.x - moreButton.width;
      hoverCat.y = moreButton.y;
    });

    this.sound.pauseOnBlur = false;
    this.sound.play(CST.AUDIO.TITLE, {
      loop: true
    });
    this.input.addDownCallback(function() {
      // @ts-ignore
      if (game.sound.context.state === "suspended") {
        // @ts-ignore
        game.sound.context.resume();
      }
    });
  }
}
