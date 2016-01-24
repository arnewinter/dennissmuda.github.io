export default class Menu extends Phaser.State {
  preload() {
    this.load.image('titlepage', './assets/titlepage.png')
  }

  create() {
    // console.log("Menu");
    let titlepage = this.add.sprite(0, 0, 'titlepage');

    this.titleText   = this.add.text(160, 100, "Simple Shooter", {font: "32px Fira Mono", fill: "#fff", align: 'center'}).anchor.setTo(.5, .5);
    this.loadingText = this.add.text(160, 400, "Click to start", { font: "15px Fira Mono", fill: "#fff" });
    this.loadingText.anchor.setTo(0.5, 0.5);
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