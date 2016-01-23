export default class Menu extends Phaser.State {
  preload() {
    this.load.image('titlepage', './assets/titlepage.png')
  }

  create() {
    console.log("Menu");
    let titlepage = this.add.sprite(0, 0, 'titlepage');
    titlepage.scale.setTo(0.32, 0.65);
    this.loadingText = this.add.text(160, 400, "Press SPACE or tap/click to start", { font: "15px monospace", fill: "#fff" });
    this.loadingText.anchor.setTo(0.5, 0.5);
    this.add.text(160, 440, "image assets Copyright (c) 2002 Ari Feldman", { font: "12px monospace", fill: "#fff", align: "center"}).anchor.setTo(0.5, 0.5);
    this.add.text(160, 460, "sound assets Copyright (c) 2012 - 2013 Devin Watson", { font: "10px monospace", fill: "#fff", align: "center"}).anchor.setTo(0.5, 0.5);
  }

  update() {
    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) || this.input.activePointer.isDown) {
      this.startGame();
    }
  }

  startGame() {
    this.state.start('Play');
  }
}