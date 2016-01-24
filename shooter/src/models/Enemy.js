import { getRandomInt, square } from '../util/helper';
export default class Enemy extends Phaser.Sprite {
  
  constructor(game, x, y, frame) {
    super(game, x, y, 'greenEnemy');
    this.game = game;
    this.anchor.setTo(0.5, 0.5);
    this.animations.add('fly', [0, 1, 2, 3], 10, true);
    this.animations.add('ghost', [3, 0, 3, 2], 20, true);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.speed = 200;
    this.health = 5;
    this.body.collideWorldBounds = true;
    this.body.setSize(20, 20, 0, -5);
    // Create Bullets
    this.createBulletPool();
    this.createExplosion();

    // Damage particle emitter
    this.emitter = this.game.add.emitter(this.body.x, this.body.y, 200);
    this.emitter.makeParticles('fire');
    this.emitter.gravity = 200;
    this.emitter.setAlpha(1, 0, 3000);
    this.emitter.setScale(0.8, 0, 0.8, 0, 3000);
    this.emitter.width = 8;
    this.emitter.setYSpeed(-100, -200);
    this.emitter.setXSpeed(-100, 100);
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

  createExplosion() {
    this.explosionPool = this.game.add.group();
    this.explosionPool.enableBody = true;
    this.explosionPool.physicsBodyType = Phaser.Physics.ARCADE;
    this.explosionPool.createMultiple(100, 'explosion');
    this.explosionPool.setAll('anchor.x', 0.5);
    this.explosionPool.setAll('anchor.y', 0.25);
    // Set explosion animation
    this.explosionPool.forEach(function (explosion) {
      explosion.animations.add('boom');
    });
  }

  explode(sprite) {
    if (this.explosionPool.countDead() === 0) {
      console.log("no expl");
      return;
    }
    var explosion = this.explosionPool.getFirstExists(false);
    let impactX = getRandomInt(-3, 3);
    let impactY = getRandomInt(-3, 3);
    console.log(this.body.center.x);
    explosion.reset(this.body.center.x + impactX, this.body.center.y + impactY);
    explosion.play('boom', 15, false, true);
  }

  update() {
    // this.shoot();
  }

  damage() {
    console.log("enemy damage");
    this.fireParticles();
    // this.health--;
    // if (this.health === 0) {
    //   this.explode();
    //   this.destroy();
    // }
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
    this.emitter.start(true , 300, 10, 10);

  }
}