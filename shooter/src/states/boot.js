export default class Boot extends Phaser.State {
  
  preload() {
    this.load.image('preloaderBar', 'assets/preloader-bar.png');
  }

  create() {
    // No multitouch support = 1
    this.input.maxPointers = 1;
    // Phaser will automatically pause if the browser tab loses focus
    this.stage.disableVisibilityChange = true;

    if (this.game.device.desktop) {
      // Desktop specific settings
      // this.scale.pageAlignHorizontally = true;
    } else {
      // Mobile specific settings
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.minWidth  = 320;
      this.scale.minHeight = 480;
      this.scale.maxWidth  = 1024;
      this.scale.maxHeight = 768;
      // this.scale.forceLandscape = true;
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignHorizontally = false;
      // this.scale.setScreenSize(true);
    } 

    this.state.start('Preload');
  }

}