
export default class Enemy extends Phaser.Sprite {
  
  constructor(game, x, y, frame) {
    super(game, x, y, 'greenEnemy');
    this.game = game;
    this.anchor.setTo(0.5, 0.5);
    this.animations.add('fly', [0, 1, 2, 3], 10, true);
    this.animations.add('ghost', [3, 0, 3, 2], 20, true);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.speed = 200;
    this.body.collideWorldBounds = true;
    this.body.setSize(20, 20, 0, -5);
    // Create Bullets
    this.createBulletPool();

    this.emitter = this.game.add.emitter(this.body.x, this.body.y, 200);
    this.emitter.makeParticles('fire');
    this.emitter.gravity = 200;
    this.emitter.setAlpha(1, 0, 3000);
    this.emitter.setScale(0.8, 0, 0.8, 0, 3000);
    this.emitter.width = 8;
    this.emitter.setYSpeed(100, 200);
    this.emitter.setXSpeed(-0.1, .1);
    this.emitter.minRotation = 0;
    this.emitter.maxRotation = 0;
    // Add to stage
    this.game.stage.addChild(this);
    this.play('fly');
  }

  createBulletPool() {
    this.bulletPool = this.game.add.group();
    this.bulletPool.enableBody = true;
    this.bulletPool.physicsBodyType = Phaser.Physics.ARCADE;
    this.bulletPool.createMultiple(100, 'enemyBullet');
    this.bulletPool.setAll('anchor.x', 0.5);
    this.bulletPool.setAll('anchor.y', 0.5);

    // Kill bullet when ooB
    this.bulletPool.setAll('outOfBoundsKill', true);
    this.bulletPool.setAll('checkWorldBounds', true);

    this.nextShotAt = 0;
    this.shotDelay = 500;
  }

  update() {
    // this.shoot();
  }

  damage() {
    console.log("enemy damage");
    this.fireParticles();
  }

  shoot() {
    if (!this.alive || this.nextShotAt > this.game.time.now) {
      return;
    }

    this.nextShotAt = this.game.time.now + this.shotDelay;
    let bullet;
    bullet = this.bulletPool.getFirstExists(false);
    bullet.reset(this.x, this.y);
    bullet.body.velocity.y = 150;
  }


  fireParticles() {
    this.emitter.x = this.body.center.x;
    this.emitter.y = this.body.center.y;
    this.emitter.start(true , 300, 1, 1);

  }
}