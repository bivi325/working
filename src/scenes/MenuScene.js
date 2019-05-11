import { CST } from "../CST";
export class MenuScene extends Phaser.Scene {
  constructor() {
    super({
      key: CST.SCENES.MENU
    });
  }
  init(data) {
    console.log(data);
    console.log("got it");
  }
  preload() {}
  create() {
    this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height * 0.2,
        "title"
      )
      .setDepth(1);

    this.add
      .image(0, 0, "background")
      .setOrigin(0)
      .setDepth(0);

    const hoverCat = this.add.sprite(100, 100, "cat");
    hoverCat.setScale(2);

    this.anims.create({
        key: 'walk',
        frameRate: 4,
        repeat: -1,
        frames: this.anims.generateFrameNumbers('cat', {
            frames: [0, 1, 2, 3]
        })
    })

    const playButton = this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height * 0.4,
        "play"
      )
      .setDepth(1);

    const refuseButton = this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height * 0.5,
        "refuse"
      )
      .setDepth(1);

    const moreButton = this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height * 0.6,
        "more"
      )
      .setDepth(1);

    playButton.setInteractive();
    refuseButton.setInteractive();
    moreButton.setInteractive();

    playButton.on("pointerover", () => {
      hoverCat.setVisible(true);
      hoverCat.play('walk');
      hoverCat.x = playButton.x - playButton.width;
      hoverCat.y = playButton.y;
    });

    refuseButton.on("pointerover", () => {
      hoverCat.setVisible(true);
      hoverCat.play('walk');
      hoverCat.x = refuseButton.x - refuseButton.width;
      hoverCat.y = refuseButton.y;
    });

    moreButton.on("pointerover", () => {
      hoverCat.setVisible(true);
      hoverCat.play('walk');
      hoverCat.x = moreButton.x - moreButton.width;
      hoverCat.y = moreButton.y;
    });

    this.sound.pauseOnBlur = false;
    this.sound.play("music", {
      loop: true
    });
    this.input.addDownCallback(function() {
      if (game.sound.context.state === "suspended") {
        game.sound.context.resume();
      }
    });
  }
}
