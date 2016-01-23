export default class Preload extends Phaser.State {
  
  preload() {
    console.log("Preload");
    // Show the loading progress bar asset we loaded in boot.js
    this.stage.backgroundColor = '#2d2d2d';

    this.preloadBar = this.add.sprite(412, 400, 'preloaderBar');
    this.add.text(510, 360, "Loading...", {font: "32px monospace", fill: '#fff'}).anchor.setTo(0.5, 0.5);

    // Set loader sprite
    this.load.setPreloadSprite(this.preloadBar);

    // Load rest of the assets
    this.load.image('titlepage', 'assets/titlepage.png');
    this.load.image('sea', 'assets/sea.png');
    this.load.image('bullet', 'assets/bullet.png');
    this.load.image('enemyBullet', 'assets/enemy-bullet.png');
    this.load.image('powerup1', 'assets/powerup1.png');
    this.load.spritesheet('greenEnemy', 'assets/enemy.png', 32, 32);
    this.load.spritesheet('whiteEnemy', 'assets/shooting-enemy.png', 32, 32);
    this.load.spritesheet('boss', 'assets/boss.png', 93, 75);
    this.load.spritesheet('explosion', 'assets/explosion.png', 32, 32);
    this.load.spritesheet('player', 'assets/player.png', 64, 64);
    this.load.audio('explosion', ['assets/explosion.wav']);
    this.load.audio('playerExplosion', ['assets/player-explosion.wav']);
    this.load.audio('enemyFire', ['assets/enemy-fire.wav']);
    this.load.audio('playerFire', ['assets/player-fire.wav']);
    this.load.audio('powerUp', ['assets/powerup.wav']);
  }

  create() {

    this.preloadBar.cropEnabled = false;
  }

  update() {
    this.state.start('Menu');
  }
}