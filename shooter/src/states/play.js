import Player from '../models/Player';
import Enemy from '../models/Enemy';

export default class Play extends Phaser.State {

  preload() {

    this.load.image('sea', 'assets/sea.png');
    this.load.image('bullet', 'assets/bullet.png');
    this.load.image('enemyBullet', 'assets/enemy-bullet.png');

    // Load powerup
    this.load.image('powerup1', 'assets/powerup1.png');
    // Load shit
    this.load.spritesheet('greenEnemy', 'assets/enemy.png', 32, 32);
    this.load.spritesheet('whiteEnemy', 'assets/shooting-enemy.png', 32, 32);
    this.load.spritesheet('boss', 'assets/boss.png', 93, 75);
    this.load.spritesheet('explosion', 'assets/explosion.png', 32, 32);
    this.load.spritesheet('player', 'assets/player_full.png', 64, 64, 12);
    this.load.image('fire', 'assets/fire.png');
  }

  create() {
    this.sea = this.add.tileSprite(0, 0, 320, 480, 'sea');
    this.setupPlayer();
    this.enemy = new Enemy(this.game, 160, 100, 'greenEnemy');

    // this.setupEnemies();
    // this.setupExplosions();
    this.cursors = this.input.keyboard.createCursorKeys();
    this.worldSpeed = 0.25;

    // tihs.setupPlayerIcons();
    this.setupText();
  }

  update() {
    this.player.handleInput();
    this.sea.tilePosition.y += this.worldSpeed;
    this.checkCollisions();
    // this.spawnEnemies();
    // this.enemyFire();
    this.detectPlayerInput();
    this.delayEffect();
  }

  detectPlayerInput() {
    if (this.input.keyboard.isDown(Phaser.Keyboard.Q)) this.quitGame();
  }


  setupEnemies() {
    this.enemyBulletPool = this.add.group();
    this.enemyBulletPool.enableBody = true;
    this.enemyBulletPool.physicsBodyType = Phaser.Physics.ARCADE;
    this.enemyBulletPool.createMultiple(100, 'enemyBullet');
    this.enemyBulletPool.scale.setTo(0.5, 0.5);
    this.enemyBulletPool.setAll('outOfBoundsKill', true);
    this.enemyBulletPool.setAll('checkWorldBounds', true);
    this.enemyBulletPool.setAll('reward', 0, false, false, 0, true);

    this.enemyPool = this.add.group();
    this.enemyPool.enableBody = true;
    this.enemyPool.physicsBodyType = Phaser.Physics.ARCADE;
    this.enemyPool.createMultiple(50, 'greenEnemy');
    this.enemyPool.setAll('anchor.x', 0.5);
    this.enemyPool.setAll('anchor.y', 0.5);
    this.enemyPool.setAll('outOfBoundsKill', true);
    this.enemyPool.setAll('reward', 100, false, false, 0, true);

    // 10% chance after enemy dead.
    this.enemyPool.setAll('dropRate', 0.1, false, false, 0, true);

    this.bossPool = this.add.group();
    this.bossPool.enableBody = true;
    this.bossPool.physicsBodyType = Phaser.Physics.ARCADE;
    this.bossPool.createMultiple(1, 'boss');
    this.bossPool.setAll('anchor.x', 0.5);
    this.bossPool.setAll('anchor.y', 0.5);
    this.bossPool.setAll('outOfBoundsKill', true);
    this.bossPool.setAll('checkWorldBounds', true);
    this.bossPool.setAll('reward', 10000, false, false, 0, true);
    this.bossPool.setAll('dropRate', 0, false, false, 0, true);

    // Set animation for each sprite
    this.bossPool.forEach(function(enemy) {
      enemy.animations.add('fly', [0, 1, 2], 20, true);
      enemy.animations.add('hit', [3, 1, 3, 2], 20, false);
      enemy.events.onAnimationComplete.add(function(e) {
        e.play('fly');
      }, this);
    });

    this.boss = this.bossPool.getTop();
    this.bossApproaching = false;
    this.bossInitialHealth = 500;

    // Set animation
    this.enemyPool.forEach(function(enemy) {
      enemy.animations.add('fly', [0, 1, 2], 20, true);
      enemy.animations.add('hit', [3, 1, 4, 2], 20, false);
      enemy.events.onAnimationComplete.add(function (e) {
        e.play('fly');
      }, this);
    });

    this.nextEnemyAt = 0;
    this.enemyDelay = 1000;
    this.enemyInitialHealth = 2;

    this.shooterPool = this.add.group();
    this.shooterPool.enableBody = true;
    this.shooterPool.physicsBodyType = Phaser.Physics.ARCADE;
    this.shooterPool.createMultiple(20, 'whiteEnemy');
    this.shooterPool.setAll('anchor.x', 0.5);
    this.shooterPool.setAll('anchor.y', 0.5);
    this.shooterPool.setAll('outOfBoundsKill', true);
    this.shooterPool.setAll('checkWorldBounds', true);
    this.shooterPool.setAll('reward', 300, false, false, 0, true);

    // 20% After enemyShooter die.
    this.shoterPool.setAll('dropRate', 0.2, false, false, 0, true);
    // Set the animation for each sprite
    this.shooterPool.forEach(function (enemy) {
      enemy.animations.add('fly', [0, 1, 2], 20, true);
      enemy.animations.add('hit', [3, 1, 3, 2], 20, false);
      enemy.events.onAnimationComplete.add(function (e) {
        e.play('fly');
      }, this);
    });

    // Start spawning 5 seconds into the game
    this.nextShooterAt = this.time.now + 5000;
    this.shooterDelay = 3000;
    this.shooterShotDelay = 1000;
    this.shooterInitialHealth = 5;
  }


  setupExplosions() {
    this.explosionPool = this.add.group();
    this.explosionPool.enableBody = true;
    this.explosionPool.physicsBodyType = Phaser.Physics.ARCADE;
    this.explosionPool.createMultiple(100, 'explosion');
    this.explosionPool.setAll('anchor.x', 0.5);
    this.explosionPool.setAll('anchor.y', 0.5);
    // Set explosion animation
    this.explosionPool.forEach(function (explosion) {
      explosion.animations.add('boom');
    });
  }

  setupPlayerIcons() {
    this.powerUpPool = this.add.group();
    this.powerUpPool.enableBody = true;
    this.powerUpPool.physicsBodyType = Phaser.Physics.ARCADE;
    this.powerUpPool.createMultiple(5, 'powerup1');
    this.powerUpPool.setAll('anchor.x', 0.5);
    this.powerUpPool.setAll('anchor.y', 0.5);
    this.powerUpPool.setAll('outOfBoundsKill', true);
    this.powerUpPool.setAll('checkWorldBounds', true);
    this.powerUpPool.setAll('reward', 100, false, false, 0, true);

    this.lives = this.add.group();
    for (let i = 0; i < 3; i++) {
      let life = this.lives.create(240 + (30 * i), 30, 'player');
      life.scale.setTo(0.4, 0.4);
      life.anchor.setTo(0.5, 0.5);
    }
  }

  setupText() {
    this.instructions = this.add.text(160, 400, 'Use Arrow Keys to Move, X to Fire\n', {
        font: '14px Fira Mono',
        fill: '#fff',
        align: 'center'
      });
    this.instructions.anchor.setTo(0.5, 0.5);
    this.instExpire = this.time.now + 5000;

    this.score = 0;
    this.scoreText = this.add.text(
      160, 30, 'Score: ' + this.score, {
        font: '20px Fira Mono',
        fill: '#fff',
        align: 'center'
      });
    this.scoreText.anchor.setTo(0.5, 0.5);
  }

  checkCollisions() {
    this.physics.arcade.overlap(
      this.player.bulletPool,
      this.enemy,
      this.enemyHit,
      null,
      this
    );

   //  this.physics.arcade.overlap(
   //    this.bulletPool,
   //    this.shooterPool,
   //    this.enemyHit,
   //    null,
   //    this
   //  );

   //  this.physics.arcade.overlap(
   //    this.player,
   //    this.enemyPool,
   //    this.playerHit,
   //    null,
   //    this
   //  );

   // this.physics.arcade.overlap(
   //    this.player,
   //    this.shooterPool,
   //    this.playerHit,
   //    null,
   //    this
   //  );

   //   this.physics.arcade.overlap(
   //    this.player,
   //    this.enemyBulletPool,
   //    this.playerHit,
   //    null,
   //    this
   //  );

   //   this.physics.arcade.overlap(
   //    this.player,
   //    this.powerUpPool,
   //    this.playerHit,
   //    null,
   //    this
   //  );

   //  if (this.bossApproaching === false) {
   //    this.physics.arcade.overlap(
   //      this.bulletPool,
   //      this.bossPool,
   //      this.enemyHit,
   //      null,
   //      this
   //    );

   //    this.physics.arcade.overlap(
   //      this.player,
   //      this.bossPool,
   //      this.playerHit,
   //      null,
   //      this
   //    );
   //  }
  }

  spawnEnemies() {
    
  }

  enemyFire() {
    this.shooterPool.forEachAlive(function(enemy) {
      if (this.time.now > enemy.nextShotAt && this.enemyBulletPool.countDead() > 0) {
        var bullet = this.enemyBulletPool.getFirstExists(false);
        bullet.reset(enemy.x, enemy.y);
        this.physics.arcade.moveToObject(bullet, this.player, 150);
        enemy.nextShotAt = this.time.now + this.shooterShotDelay;
      }
    }, this);

    if (this.bossApproaching === false && this.boss.alive && 
        this.boss.nextShotAt < this.time.now &&
        this.enemyBulletPool.countDead() > 9) {

      this.boss.nextShotAt = this.time.now + 1000;

      for (var i = 0; i < 5; i++) {
        // process 2 bullets at a time
        var leftBullet = this.enemyBulletPool.getFirstExists(false);
        leftBullet.reset(this.boss.x - 10 - i * 10, this.boss.y + 20);
        var rightBullet = this.enemyBulletPool.getFirstExists(false);
        rightBullet.reset(this.boss.x + 10 + i * 10, this.boss.y + 20);

        if (this.boss.health > 250) {
          // aim directly at the player
          this.physics.arcade.moveToObject(leftBullet, this.player, 150);
          this.physics.arcade.moveToObject(rightBullet, this.player, 150);
        } else {
          // aim slightly off center of the player
          this.physics.arcade.moveToXY(
            leftBullet, this.player.x - i * 100, this.player.y, 150
          );
          this.physics.arcade.moveToXY(
            rightBullet, this.player.x + i * 100, this.player.y, 150
          );
        }
      }
    }
  }


  delayEffect() {

    // Fade out instruction text
    if (this.instructions.exists && this.time.now > this.instExpire) {
      // this.instructions.x = this.instructions.x - 10;
      this.game.add.tween(this.instructions).to( { alpha: 0 }, 100, "Linear", true);
      if (this.instructions.alpha < 0.001) this.instructions.destroy();
    }
/*
    if (this.ghostUntil && this.ghostUntil < this.time.now) {
      this.ghostUntil = null;
      this.player.play('fly');
    }

    if (this.showReturn && this.time.now > this.showReturn) {
      this.returnText = this.add.text(160, 320, 
        'Press Z or Tap Game to go back to Main Menu', {
          font: '16px serif',
          fill: '#fff'
        }
      );

      this.returnText.anchor.setTo(0.5, 0.5);
      this.showReturn = false;
    }

    if (this.bossApproaching && this.boss.y > 80) {
      this.bossApproaching = false;
      this.boss.health = 500;
      this.boss.nextShotAt = 0;

      this.boss.body.velocity.y = 0;
      this.boss.body.velocity.x = 200;
      // allow bouncing off world bounds
      this.boss.body.bounce.x = 1;
      this.boss.body.collideWorldBounds = true;
    }
    */
  }

  explode(sprite) {
    if (this.explosionPool.countDead() === 0) {
      return;
    }
    var explosion = this.explosionPool.getFirstExists(false);
    explosion.reset(sprite.x, sprite.y);
    explosion.play('boom', 15, false, true);
  }

  enemyHit(enemy, bullet) {
    console.log("enemyHIt");
    bullet.kill();
    this.addToScore(10);
    this.damageEnemy(enemy, 1);
  }

  playerHit(player, enemy) {

    if (this.ghostUntil && this.ghostUntil > this.time.now) {
      return;
    }

    this.damageEnemy(enemy, 5);
    var life = this.lives.getFirstAlive();
    if (life) {
      life.kill();
      this.weaponLevel = 0;
      this.ghostUntil = this.time.now + 2000;
      this.player.play('ghost');
    } else {
      this.explode(player);
      player.kill();
      this.displayEnd(false);
    }
  }

  playerPowerUp(player, powerUp) {
    this.addToScore(powerUp.reward);
    powerUp.kill();
    if (this.weaponLevel < 5) {
      this.weaponLevel += 1;
    }
  }

  damageEnemy(enemy, damage) {
    // detail : http://docs.phaser.io/Phaser.Sprite.html#damage
    enemy.damage(damage);
    // if (enemy.alive) {
    //   enemy.play('hit');
    // } else {
    //   this.explode(enemy);
    //   this.spawnPowerUp(enemy);
    //   this.addToScore(enemy.reward);

    //   if (enemy.key === 'boss') {
    //     this.enemyPool.destroy();
    //     this.shooterPool.destroy();
    //     this.bossPool.destroy();
    //     this.enemyBulletPool.destroy();
    //     this.displayEnd(true);
    //   }
    // }
  }

  spawnPowerUp(enemy) {
    if (this.powerUpPool.countDead() === 0 || this.weaponLevel === 5) {
      return;
    }

    if (this.rnd.frac() < enemy.dropRate) {
       var powerUp = this.powerUpPool.getFirstExists(false);
       powerUp.reset(enemy.x, enemy.y);
       powerUp.body.velocity.y = 100;
     }
  }

  spawnBoss() {
    this.bossApproaching = true;
    var boss = this.bossPool.getFirstExists(false);
    this.physics.enable(boss, Phaser.Physics.ARCADE);
    boss.reset(160, 0, this.bossInitialHealth);
    boss.body.velocity.y = 15;
    boss.play('fly');

    this.enemyPool.destroy();
    // this.shooterPool.destroy();
  }

  addToScore(score) {
    this.score += score;
    this.scoreText.text = 'Score : ' + this.score;
    if (this.score >= 20000 && this.bossPool.countDead() == 1) {
/*      this.enemyPool.destroy();
      this.shooterPool.destroy();
      this.enemyBulletPool.destroy();
      this.displayEnd(true);*/
      this.spawnBoss();
    }
  }

  displayEnd(win) {
    if (this.endText && this.endText.exists) {
      return;
    }

    var message = win ? 'Yoo Win!!!' : 'Game Over!';
    this.endText = this.add.text(160, 240, message, {
      font: '48px serif', 
      fill: '#f00'
    });
    this.endText.anchor.setTo(0.5, 0);
    this.showReturn = this.time.now + 2000;
  }

  quitGame(pointer) {

    //  Here you should destroy anything you no longer need.
    //  Stop music, delete sprites, purge caches, free resources, all that good stuff.
    this.sea.destroy();
    this.player.destroy();
    // this.enemyPool.destroy();
    // this.bulletPool.destroy();
    // this.explosionPool.destroy();
    this.instructions.destroy();
    this.scoreText.destroy();
    // this.returnText.destroy();

    //  Then let's go back to the main menu.
    this.state.start('Menu');
  }


  setupPlayer() {
    this.player = new Player(this.game, 160, 450, 'player');
  }
}