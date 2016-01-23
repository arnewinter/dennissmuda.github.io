
export default class Player extends Phaser.Sprite {

  constructor(game, x, y, frame) {
    super(game, x, y, 'player');
    this.game = game;
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.anchor.setTo(0.5, 0.5);

    this.animations.add('fly', [0, 1, 2, 3], 10, true);
    this.animations.add('fly-left', [4, 5, 6, 7], 10, true);
    this.animations.add('fly-right', [8, 9, 10, 11], 10, true);
    this.animations.add('ghost', [3, 0, 3, 1], 20, true);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.speed = 250;
    this.body.collideWorldBounds = true;
    this.body.setSize(20, 20, 0, -5);
    this.weaponLevel = 0;
    this.bulletSpeed = 200;
    this.createBulletPool();
    this.creationTime = this.game.time.now;

    // this.emitter = this.game.add.emitter(this.body.x, this.body.y, 200);
    // this.emitter.makeParticles('fire');
    // this.emitter.gravity = 200;
    // this.emitter.setAlpha(1, 0, 3000);
    // this.emitter.setScale(0.8, 0, 0.8, 0, 3000);
    // this.emitter.width = 8;
    // this.emitter.setYSpeed(100, 200);
    // this.emitter.setXSpeed(-0.1, .1);
    // this.emitter.minRotation = 0;
    // this.emitter.maxRotation = 0;

    this.game.stage.addChild(this);
    this.play('fly');
  }

  createBulletPool() {
    this.bulletPool = this.game.add.group();
    this.bulletPool.enableBody = true;
    this.bulletPool.physicsBodyType = Phaser.Physics.ARCADE;
    this.bulletPool.createMultiple(100, 'bullet');
    this.bulletPool.setAll('anchor.x', 0.5);
    this.bulletPool.setAll('anchor.y', 0.5);

    // Kill bullet when ooB
    this.bulletPool.setAll('outOfBoundsKill', true);
    this.bulletPool.setAll('checkWorldBounds', true);

    this.nextShotAt = 0;
    this.shotDelay = 200;

  }

  update() {
    this.handleInput();
  }

  shoot(direction) {
    if (!this.alive || this.nextShotAt > this.game.time.now) {
      return; // return if player is dead or delay is in place
    }

    this.nextShotAt = this.game.time.now + this.shotDelay;
    let bullet;

    if (this.weaponLevel === 0) {
      if (this.bulletPool.countDead() === 0) {
        return;
      }

      bullet = this.bulletPool.getFirstExists(false);
      bullet.reset(this.x, this.y);
      bullet.body.velocity.y = -this.bulletSpeed;
    } else {
      if (this.bulletPool.countDead() < this.weaponLevel * 2) {
        return;
      }
      for (let i = 0; i < this.weaponLevel; i++) {
        bullet = this.bulletPool.getFirstExists(false);

        // Spawn left bullet left off center
        bullet.reset(this.x - (10 + i * 5), this.y - 16);
        this.game.physics.arcade.velocityFromAngle(-95 - i * 10, this.bulletSpeed, bullet.body.velocity);

        bullet = this.bulletPool.getFirstExists(false);
        bullet.reset(this.x + (10 + i * 5), this.y - 16);
        this.game.physics.arcade.velocityFromAngle(-85 + i *10, this.bulletSpeed, bullet.body.velocity);
      }
    }

  }


  handleInput() {
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.X)) this.shoot("up");
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.Y)) this.levelUp();


    if (this.cursors.up.isDown) {
      this.body.velocity.y = -this.speed;
      // this.fireParticles();
    }
    if (this.cursors.down.isDown) this.body.velocity.y = this.speed;


    if (this.cursors.left.isDown) {
      this.body.velocity.x = -this.speed;
      this.play('fly-left');
    } else if (this.cursors.right.isDown) {
      this.body.velocity.x = +this.speed;
      this.play('fly-right');
    } else {
      this.play('fly');
    }
  }

  fireParticles() {
    this.emitter.x = this.body.center.x;
    this.emitter.y = this.body.center.y;
    this.emitter.start(true , 300, 1, .1);

  }

  levelUp() {
    this.weaponLevel = 1;
  }
}