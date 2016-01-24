/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Boot = __webpack_require__(1);
	
	var _Boot2 = _interopRequireDefault(_Boot);
	
	var _Preload = __webpack_require__(2);
	
	var _Preload2 = _interopRequireDefault(_Preload);
	
	var _Menu = __webpack_require__(3);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _Play = __webpack_require__(4);
	
	var _Play2 = _interopRequireDefault(_Play);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Game = function (_Phaser$Game) {
	  _inherits(Game, _Phaser$Game);
	
	  function Game() {
	    _classCallCheck(this, Game);
	
	    // Add states
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Game).call(this, 320, 480, Phaser.AUTO, 'content', null));
	
	    _this.state.add('Boot', _Boot2.default);
	    _this.state.add('Preload', _Preload2.default);
	    _this.state.add('Menu', _Menu2.default);
	    _this.state.add('Play', _Play2.default);
	    // Start the game state 'boot' for prod
	    _this.state.start('Boot');
	    return _this;
	  }
	
	  return Game;
	}(Phaser.Game);
	
	new Game();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Boot = function (_Phaser$State) {
	  _inherits(Boot, _Phaser$State);
	
	  function Boot() {
	    _classCallCheck(this, Boot);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Boot).apply(this, arguments));
	  }
	
	  _createClass(Boot, [{
	    key: 'preload',
	    value: function preload() {
	      this.load.image('preloaderBar', 'assets/preloader-bar.png');
	    }
	  }, {
	    key: 'create',
	    value: function create() {
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
	          this.scale.minWidth = 320;
	          this.scale.minHeight = 480;
	          this.scale.maxWidth = 1024;
	          this.scale.maxHeight = 768;
	          // this.scale.forceLandscape = true;
	          this.scale.pageAlignHorizontally = true;
	          this.scale.pageAlignHorizontally = false;
	          // this.scale.setScreenSize(true);
	        }
	
	      this.state.start('Preload');
	    }
	  }]);
	
	  return Boot;
	}(Phaser.State);
	
	exports.default = Boot;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Preload = function (_Phaser$State) {
	  _inherits(Preload, _Phaser$State);
	
	  function Preload() {
	    _classCallCheck(this, Preload);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Preload).apply(this, arguments));
	  }
	
	  _createClass(Preload, [{
	    key: 'preload',
	    value: function preload() {
	      console.log("Preload");
	      // Show the loading progress bar asset we loaded in boot.js
	      this.stage.backgroundColor = '#2d2d2d';
	
	      this.preloadBar = this.add.sprite(412, 400, 'preloaderBar');
	      this.add.text(510, 360, "Loading...", { font: "32px monospace", fill: '#fff' }).anchor.setTo(0.5, 0.5);
	
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
	  }, {
	    key: 'create',
	    value: function create() {
	
	      this.preloadBar.cropEnabled = false;
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.state.start('Menu');
	    }
	  }]);
	
	  return Preload;
	}(Phaser.State);
	
	exports.default = Preload;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Menu = function (_Phaser$State) {
	  _inherits(Menu, _Phaser$State);
	
	  function Menu() {
	    _classCallCheck(this, Menu);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).apply(this, arguments));
	  }
	
	  _createClass(Menu, [{
	    key: 'preload',
	    value: function preload() {
	      this.load.image('titlepage', './assets/titlepage.png');
	    }
	  }, {
	    key: 'create',
	    value: function create() {
	      // console.log("Menu");
	      var titlepage = this.add.sprite(0, 0, 'titlepage');
	
	      this.titleText = this.add.text(160, 100, "Simple Shooter", { font: "32px Fira Mono", fill: "#fff", align: 'center' }).anchor.setTo(.5, .5);
	      this.loadingText = this.add.text(160, 400, "Click to start", { font: "15px Fira Mono", fill: "#fff" });
	      this.loadingText.anchor.setTo(0.5, 0.5);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) || this.input.activePointer.isDown) {
	        this.startGame();
	      }
	    }
	  }, {
	    key: 'startGame',
	    value: function startGame() {
	      this.state.start('Play');
	    }
	  }]);
	
	  return Menu;
	}(Phaser.State);
	
	exports.default = Menu;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Player = __webpack_require__(5);
	
	var _Player2 = _interopRequireDefault(_Player);
	
	var _Enemy = __webpack_require__(6);
	
	var _Enemy2 = _interopRequireDefault(_Enemy);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Play = function (_Phaser$State) {
	  _inherits(Play, _Phaser$State);
	
	  function Play() {
	    _classCallCheck(this, Play);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Play).apply(this, arguments));
	  }
	
	  _createClass(Play, [{
	    key: 'preload',
	    value: function preload() {
	
	      this.load.image('sea', 'assets/sea.png');
	      this.load.image('bullet', 'assets/bullet.png');
	      this.load.image('enemyBullet', 'assets/enemy-bullet.png');
	
	      // Load powerup
	      this.load.image('powerup1', 'assets/powerup1.png');
	      // Load shit
	      this.load.spritesheet('greenEnemy', 'assets/enemy.png', 32, 32);
	      this.load.spritesheet('whiteEnemy', 'assets/shooting-enemy.png', 32, 32);
	      this.load.spritesheet('boss', 'assets/boss.png', 93, 75);
	      this.load.spritesheet('explosion', 'assets/explosion.png', 64, 64);
	      this.load.spritesheet('player', 'assets/player_full.png', 64, 64, 12);
	      this.load.image('fire', 'assets/fire.png');
	    }
	  }, {
	    key: 'create',
	    value: function create() {
	      this.sea = this.add.tileSprite(0, 0, 320, 480, 'sea');
	      this.setupPlayer();
	      this.enemy = new _Enemy2.default(this.game, 160, 100, 'greenEnemy');
	
	      // this.setupEnemies();
	      // this.setupExplosions();
	      this.cursors = this.input.keyboard.createCursorKeys();
	      this.worldSpeed = 0.25;
	
	      // tihs.setupPlayerIcons();
	      this.setupText();
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.player.handleInput();
	      this.sea.tilePosition.y += this.worldSpeed;
	      this.checkCollisions();
	      // this.spawnEnemies();
	      // this.enemyFire();
	      this.detectPlayerInput();
	      this.delayEffect();
	    }
	  }, {
	    key: 'detectPlayerInput',
	    value: function detectPlayerInput() {
	      if (this.input.keyboard.isDown(Phaser.Keyboard.Q)) this.quitGame();
	    }
	  }, {
	    key: 'setupEnemies',
	    value: function setupEnemies() {
	
	      this.enemyPool = this.add.group();
	      this.enemyPool.enableBody = true;
	      this.enemyPool.physicsBodyType = Phaser.Physics.ARCADE;
	      this.enemyPool.createMultiple(50, 'greenEnemy');
	      this.enemyPool.setAll('anchor.x', 0.5);
	      this.enemyPool.setAll('anchor.y', 0.5);
	      this.enemyPool.setAll('outOfBoundsKill', true);
	      this.enemyPool.setAll('reward', 100, false, false, 0, true);
	    }
	  }, {
	    key: 'setupExplosions',
	    value: function setupExplosions() {
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
	  }, {
	    key: 'setupPlayerIcons',
	    value: function setupPlayerIcons() {
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
	      for (var i = 0; i < 3; i++) {
	        var life = this.lives.create(240 + 30 * i, 30, 'player');
	        life.scale.setTo(0.4, 0.4);
	        life.anchor.setTo(0.5, 0.5);
	      }
	    }
	  }, {
	    key: 'setupText',
	    value: function setupText() {
	      this.instructions = this.add.text(160, 400, 'Use Arrow Keys to Move, X to Fire\n', {
	        font: '14px Fira Mono',
	        fill: '#fff',
	        align: 'center'
	      });
	      this.instructions.anchor.setTo(0.5, 0.5);
	      this.instExpire = this.time.now + 5000;
	
	      this.score = 0;
	      this.scoreText = this.add.text(160, 30, 'Score: ' + this.score, {
	        font: '20px Fira Mono',
	        fill: '#fff',
	        align: 'center'
	      });
	      this.scoreText.anchor.setTo(0.5, 0.5);
	    }
	  }, {
	    key: 'checkCollisions',
	    value: function checkCollisions() {
	      this.physics.arcade.overlap(this.player.bulletPool, this.enemy, this.enemyHit, null, this);
	
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
	  }, {
	    key: 'spawnEnemies',
	    value: function spawnEnemies() {}
	  }, {
	    key: 'enemyFire',
	    value: function enemyFire() {
	      this.shooterPool.forEachAlive(function (enemy) {
	        if (this.time.now > enemy.nextShotAt && this.enemyBulletPool.countDead() > 0) {
	          var bullet = this.enemyBulletPool.getFirstExists(false);
	          bullet.reset(enemy.x, enemy.y);
	          this.physics.arcade.moveToObject(bullet, this.player, 150);
	          enemy.nextShotAt = this.time.now + this.shooterShotDelay;
	        }
	      }, this);
	
	      if (this.bossApproaching === false && this.boss.alive && this.boss.nextShotAt < this.time.now && this.enemyBulletPool.countDead() > 9) {
	
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
	            this.physics.arcade.moveToXY(leftBullet, this.player.x - i * 100, this.player.y, 150);
	            this.physics.arcade.moveToXY(rightBullet, this.player.x + i * 100, this.player.y, 150);
	          }
	        }
	      }
	    }
	  }, {
	    key: 'delayEffect',
	    value: function delayEffect() {
	
	      // Fade out instruction text
	      if (this.instructions.exists && this.time.now > this.instExpire) {
	        // this.instructions.x = this.instructions.x - 10;
	        this.game.add.tween(this.instructions).to({ alpha: 0 }, 100, "Linear", true);
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
	  }, {
	    key: 'explode',
	    value: function explode(sprite) {
	      if (this.explosionPool.countDead() === 0) {
	        return;
	      }
	      var explosion = this.explosionPool.getFirstExists(false);
	      explosion.reset(sprite.x, sprite.y);
	      explosion.play('boom', 15, false, true);
	    }
	  }, {
	    key: 'enemyHit',
	    value: function enemyHit(enemy, bullet) {
	      console.log("enemyHIt");
	      bullet.kill();
	      this.addToScore(10);
	      this.damageEnemy(enemy, 1);
	    }
	  }, {
	    key: 'playerHit',
	    value: function playerHit(player, enemy) {
	
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
	  }, {
	    key: 'playerPowerUp',
	    value: function playerPowerUp(player, powerUp) {
	      this.addToScore(powerUp.reward);
	      powerUp.kill();
	      if (this.weaponLevel < 5) {
	        this.weaponLevel += 1;
	      }
	    }
	  }, {
	    key: 'damageEnemy',
	    value: function damageEnemy(enemy, damage) {
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
	  }, {
	    key: 'spawnPowerUp',
	    value: function spawnPowerUp(enemy) {
	      if (this.powerUpPool.countDead() === 0 || this.weaponLevel === 5) {
	        return;
	      }
	
	      if (this.rnd.frac() < enemy.dropRate) {
	        var powerUp = this.powerUpPool.getFirstExists(false);
	        powerUp.reset(enemy.x, enemy.y);
	        powerUp.body.velocity.y = 100;
	      }
	    }
	  }, {
	    key: 'spawnBoss',
	    value: function spawnBoss() {
	      this.bossApproaching = true;
	      var boss = this.bossPool.getFirstExists(false);
	      this.physics.enable(boss, Phaser.Physics.ARCADE);
	      boss.reset(160, 0, this.bossInitialHealth);
	      boss.body.velocity.y = 15;
	      boss.play('fly');
	
	      this.enemyPool.destroy();
	      // this.shooterPool.destroy();
	    }
	  }, {
	    key: 'addToScore',
	    value: function addToScore(score) {
	      this.score += score;
	      this.scoreText.text = 'Score : ' + this.score;
	      // if (this.score >= 20000 && this.bossPool.countDead() == 1) {
	      //   this.enemyPool.destroy();
	      //   this.shooterPool.destroy();
	      //   this.enemyBulletPool.destroy();
	      //   this.displayEnd(true);
	      //   this.spawnBoss();
	      // }
	    }
	  }, {
	    key: 'displayEnd',
	    value: function displayEnd(win) {
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
	  }, {
	    key: 'quitGame',
	    value: function quitGame(pointer) {
	
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
	  }, {
	    key: 'setupPlayer',
	    value: function setupPlayer() {
	      this.player = new _Player2.default(this.game, 160, 450, 'player');
	    }
	  }]);
	
	  return Play;
	}(Phaser.State);
	
	exports.default = Play;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Player = function (_Phaser$Sprite) {
	  _inherits(Player, _Phaser$Sprite);
	
	  function Player(game, x, y, frame) {
	    _classCallCheck(this, Player);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, game, x, y, 'player'));
	
	    _this.game = game;
	    _this.cursors = _this.game.input.keyboard.createCursorKeys();
	    _this.anchor.setTo(0.5, 0.5);
	
	    _this.animations.add('fly', [0, 1, 2, 3], 10, true);
	    _this.animations.add('fly-left', [4, 5, 6, 7], 10, true);
	    _this.animations.add('fly-right', [8, 9, 10, 11], 10, true);
	    _this.animations.add('ghost', [3, 0, 3, 1], 20, true);
	    _this.game.physics.enable(_this, Phaser.Physics.ARCADE);
	    _this.speed = 250;
	    _this.body.collideWorldBounds = true;
	    _this.body.setSize(20, 20, 0, -5);
	    _this.weaponLevel = 0;
	    _this.bulletSpeed = 200;
	    _this.createBulletPool();
	    _this.creationTime = _this.game.time.now;
	
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
	
	    _this.game.stage.addChild(_this);
	    _this.play('fly');
	    return _this;
	  }
	
	  _createClass(Player, [{
	    key: 'createBulletPool',
	    value: function createBulletPool() {
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
	  }, {
	    key: 'update',
	    value: function update() {
	      this.handleInput();
	    }
	  }, {
	    key: 'shoot',
	    value: function shoot(direction) {
	      if (!this.alive || this.nextShotAt > this.game.time.now) {
	        return; // return if player is dead or delay is in place
	      }
	
	      this.nextShotAt = this.game.time.now + this.shotDelay;
	      var bullet = undefined;
	
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
	        for (var i = 0; i < this.weaponLevel; i++) {
	          bullet = this.bulletPool.getFirstExists(false);
	
	          // Spawn left bullet left off center
	          bullet.reset(this.x - (10 + i * 5), this.y - 16);
	          this.game.physics.arcade.velocityFromAngle(-95 - i * 10, this.bulletSpeed, bullet.body.velocity);
	
	          bullet = this.bulletPool.getFirstExists(false);
	          bullet.reset(this.x + (10 + i * 5), this.y - 16);
	          this.game.physics.arcade.velocityFromAngle(-85 + i * 10, this.bulletSpeed, bullet.body.velocity);
	        }
	      }
	    }
	  }, {
	    key: 'handleInput',
	    value: function handleInput() {
	      this.body.velocity.x = 0;
	      this.body.velocity.y = 0;
	
	      if (this.game.input.keyboard.isDown(Phaser.Keyboard.X) || this.game.input.activePointer.isDown) this.shoot("up");
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
	
	      // Handler Mouse Click & Touch
	      if (this.game.input.activePointer.isDown && this.game.physics.arcade.distanceToPointer(this) > 15) {
	        this.game.physics.arcade.moveToPointer(this, this.speed);
	        if (this.body.velocity.x > 0) this.play('fly-right');
	        if (this.body.velocity.x < 0) this.play('fly-left');
	      }
	    }
	  }, {
	    key: 'fireParticles',
	    value: function fireParticles() {
	      this.emitter.x = this.body.center.x;
	      this.emitter.y = this.body.center.y;
	      this.emitter.start(true, 300, 1, .1);
	    }
	  }, {
	    key: 'levelUp',
	    value: function levelUp() {
	      this.weaponLevel = 1;
	    }
	  }]);
	
	  return Player;
	}(Phaser.Sprite);
	
	exports.default = Player;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helper = __webpack_require__(8);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Enemy = function (_Phaser$Sprite) {
	  _inherits(Enemy, _Phaser$Sprite);
	
	  function Enemy(game, x, y, frame) {
	    _classCallCheck(this, Enemy);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Enemy).call(this, game, x, y, 'greenEnemy'));
	
	    _this.game = game;
	    _this.anchor.setTo(0.5, 0.5);
	    _this.animations.add('fly', [0, 1, 2, 3], 10, true);
	    _this.animations.add('ghost', [3, 0, 3, 2], 20, true);
	    _this.game.physics.enable(_this, Phaser.Physics.ARCADE);
	    _this.speed = 200;
	    _this.health = 5;
	    _this.body.collideWorldBounds = true;
	    _this.body.setSize(20, 20, 0, -5);
	    // Create Bullets
	    _this.createBulletPool();
	    _this.createExplosion();
	
	    // Damage particle emitter
	    _this.emitter = _this.game.add.emitter(_this.body.x, _this.body.y, 200);
	    _this.emitter.makeParticles('fire');
	    _this.emitter.gravity = 200;
	    _this.emitter.setAlpha(1, 0, 3000);
	    _this.emitter.setScale(0.8, 0, 0.8, 0, 3000);
	    _this.emitter.width = 8;
	    _this.emitter.setYSpeed(100, 200);
	    _this.emitter.setXSpeed(-100, 100);
	    _this.emitter.minRotation = 0;
	    _this.emitter.maxRotation = 0;
	    // Add to stage
	    _this.game.stage.addChild(_this);
	    _this.play('fly');
	
	    return _this;
	  }
	
	  _createClass(Enemy, [{
	    key: 'createBulletPool',
	    value: function createBulletPool() {
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
	  }, {
	    key: 'createExplosion',
	    value: function createExplosion() {
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
	
	    // explode(sprite) {
	    //   if (this.explosionPool.countDead() === 0) {
	    //     console.log("no expl");
	    //     return;
	    //   }
	    //   var explosion = this.explosionPool.getFirstExists(false);
	    //   let impactX = getRandomInt(-3, 3);
	    //   let impactY = getRandomInt(-3, 3);
	    //   console.log(this.body.center.x);
	    //   explosion.reset(this.body.center.x + impactX, this.body.center.y + impactY);
	    //   explosion.play('boom', 15, false, true);
	    // }
	
	  }, {
	    key: 'update',
	    value: function update() {
	      // this.shoot();
	    }
	  }, {
	    key: 'damage',
	    value: function damage() {
	      console.log("enemy damage" + this.health);
	      this.fireParticles();
	      this.health--;
	      if (this.health === 0) {
	        this.explode();
	        this.destroy();
	      }
	    }
	  }, {
	    key: 'shoot',
	    value: function shoot() {
	      if (!this.alive || this.nextShotAt > this.game.time.now) {
	        return;
	      }
	
	      this.nextShotAt = this.game.time.now + this.shotDelay;
	      var bullet = undefined;
	      bullet = this.bulletPool.getFirstExists(false);
	      bullet.reset(this.x, this.y);
	      bullet.body.velocity.y = 150;
	    }
	  }, {
	    key: 'explode',
	    value: function explode() {
	      this.emitter.setYSpeed(-200, 200);
	      this.emitter.setXSpeed(-100, 100);
	      this.emitter.x = this.body.center.x;
	      this.emitter.y = this.body.center.y;
	      this.emitter.start(true, 1000, 10, 25);
	    }
	  }, {
	    key: 'fireParticles',
	    value: function fireParticles() {
	      this.emitter.setYSpeed(100, 200);
	      this.emitter.setXSpeed(-100, 100);
	      this.emitter.x = this.body.center.x;
	      this.emitter.y = this.body.center.y;
	      this.emitter.start(true, 300, 10, 10);
	    }
	  }]);
	
	  return Enemy;
	}(Phaser.Sprite);
	
	exports.default = Enemy;

/***/ },
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRandomInt = getRandomInt;
	exports.square = square;
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	function square(x) {
	  return x * x;
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2YwOGRhZjA1OTM3M2JhYmFlMTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvQm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzL1ByZWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcy9NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvUGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2hlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDaENNLElBQUk7YUFBSixJQUFJOztBQUVSLFlBRkksSUFBSSxHQUVNOzJCQUZWLElBQUk7Ozs7d0VBQUosSUFBSSxhQUdBLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSTs7QUFHNUMsV0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0saUJBQU8sQ0FBQztBQUM3QixXQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxvQkFBVSxDQUFDO0FBQ25DLFdBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLGlCQUFPLENBQUM7QUFDN0IsV0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0saUJBQU87O0FBRTVCLFdBQUssS0FBSyxDQUFDLEtBQUss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RSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUVqRyxpQkFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9DLGlCQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ2pELGVBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztVQUNqRztRQUNGO01BRUY7OzttQ0FHYTtBQUNaLFdBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsV0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFekIsV0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pILFdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7QUFHdkUsV0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsYUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFH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SVosTUFBTSxHQUFOLE1BQU07QUFKZixVQUFTLFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLFVBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztFQUMxRDs7QUFFTSxVQUFTLE1BQU0sQ0FBQyxDQUFDLEVBQUU7QUFDbEIsVUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgY2YwOGRhZjA1OTM3M2JhYmFlMTZcbiAqKi8iLCJcbmltcG9ydCBCb290IGZyb20gJy4vc3RhdGVzL0Jvb3QnO1xuaW1wb3J0IFByZWxvYWQgZnJvbSAnLi9zdGF0ZXMvUHJlbG9hZCc7XG5pbXBvcnQgTWVudSBmcm9tICcuL3N0YXRlcy9NZW51JztcbmltcG9ydCBQbGF5IGZyb20gJy4vc3RhdGVzL1BsYXknO1xuXG5jbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLkdhbWUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKDMyMCwgNDgwLCBQaGFzZXIuQVVUTywgJ2NvbnRlbnQnLCBudWxsKTtcblxuICAgIC8vIEFkZCBzdGF0ZXNcbiAgICB0aGlzLnN0YXRlLmFkZCgnQm9vdCcsIEJvb3QpO1xuICAgIHRoaXMuc3RhdGUuYWRkKCdQcmVsb2FkJywgUHJlbG9hZCk7XG4gICAgdGhpcy5zdGF0ZS5hZGQoJ01lbnUnLCBNZW51KTtcbiAgICB0aGlzLnN0YXRlLmFkZCgnUGxheScsIFBsYXkpO1xuICAgIC8vIFN0YXJ0IHRoZSBnYW1lIHN0YXRlICdib290JyBmb3IgcHJvZFxuICAgIHRoaXMuc3RhdGUuc3RhcnQoJ0Jvb3QnKTtcbiAgfVxuXG59XG5cbm5ldyBHYW1lKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCb290IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcbiAgXG4gIHByZWxvYWQoKSB7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdwcmVsb2FkZXJCYXInLCAnYXNzZXRzL3ByZWxvYWRlci1iYXIucG5nJyk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgLy8gTm8gbXVsdGl0b3VjaCBzdXBwb3J0ID0gMVxuICAgIHRoaXMuaW5wdXQubWF4UG9pbnRlcnMgPSAxO1xuICAgIC8vIFBoYXNlciB3aWxsIGF1dG9tYXRpY2FsbHkgcGF1c2UgaWYgdGhlIGJyb3dzZXIgdGFiIGxvc2VzIGZvY3VzXG4gICAgdGhpcy5zdGFnZS5kaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5nYW1lLmRldmljZS5kZXNrdG9wKSB7XG4gICAgICAvLyBEZXNrdG9wIHNwZWNpZmljIHNldHRpbmdzXG4gICAgICAvLyB0aGlzLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE1vYmlsZSBzcGVjaWZpYyBzZXR0aW5nc1xuICAgICAgdGhpcy5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMO1xuICAgICAgdGhpcy5zY2FsZS5taW5XaWR0aCAgPSAzMjA7XG4gICAgICB0aGlzLnNjYWxlLm1pbkhlaWdodCA9IDQ4MDtcbiAgICAgIHRoaXMuc2NhbGUubWF4V2lkdGggID0gMTAyNDtcbiAgICAgIHRoaXMuc2NhbGUubWF4SGVpZ2h0ID0gNzY4O1xuICAgICAgLy8gdGhpcy5zY2FsZS5mb3JjZUxhbmRzY2FwZSA9IHRydWU7XG4gICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XG4gICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IGZhbHNlO1xuICAgICAgLy8gdGhpcy5zY2FsZS5zZXRTY3JlZW5TaXplKHRydWUpO1xuICAgIH0gXG5cbiAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQcmVsb2FkJyk7XG4gIH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0YXRlcy9Cb290LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG4gIFxuICBwcmVsb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKFwiUHJlbG9hZFwiKTtcbiAgICAvLyBTaG93IHRoZSBsb2FkaW5nIHByb2dyZXNzIGJhciBhc3NldCB3ZSBsb2FkZWQgaW4gYm9vdC5qc1xuICAgIHRoaXMuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyMyZDJkMmQnO1xuXG4gICAgdGhpcy5wcmVsb2FkQmFyID0gdGhpcy5hZGQuc3ByaXRlKDQxMiwgNDAwLCAncHJlbG9hZGVyQmFyJyk7XG4gICAgdGhpcy5hZGQudGV4dCg1MTAsIDM2MCwgXCJMb2FkaW5nLi4uXCIsIHtmb250OiBcIjMycHggbW9ub3NwYWNlXCIsIGZpbGw6ICcjZmZmJ30pLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG5cbiAgICAvLyBTZXQgbG9hZGVyIHNwcml0ZVxuICAgIHRoaXMubG9hZC5zZXRQcmVsb2FkU3ByaXRlKHRoaXMucHJlbG9hZEJhcik7XG5cbiAgICAvLyBMb2FkIHJlc3Qgb2YgdGhlIGFzc2V0c1xuICAgIHRoaXMubG9hZC5pbWFnZSgndGl0bGVwYWdlJywgJ2Fzc2V0cy90aXRsZXBhZ2UucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdzZWEnLCAnYXNzZXRzL3NlYS5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2J1bGxldCcsICdhc3NldHMvYnVsbGV0LnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnZW5lbXlCdWxsZXQnLCAnYXNzZXRzL2VuZW15LWJ1bGxldC5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3Bvd2VydXAxJywgJ2Fzc2V0cy9wb3dlcnVwMS5wbmcnKTtcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2dyZWVuRW5lbXknLCAnYXNzZXRzL2VuZW15LnBuZycsIDMyLCAzMik7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd3aGl0ZUVuZW15JywgJ2Fzc2V0cy9zaG9vdGluZy1lbmVteS5wbmcnLCAzMiwgMzIpO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnYm9zcycsICdhc3NldHMvYm9zcy5wbmcnLCA5MywgNzUpO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZXhwbG9zaW9uJywgJ2Fzc2V0cy9leHBsb3Npb24ucG5nJywgMzIsIDMyKTtcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3BsYXllcicsICdhc3NldHMvcGxheWVyLnBuZycsIDY0LCA2NCk7XG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdleHBsb3Npb24nLCBbJ2Fzc2V0cy9leHBsb3Npb24ud2F2J10pO1xuICAgIHRoaXMubG9hZC5hdWRpbygncGxheWVyRXhwbG9zaW9uJywgWydhc3NldHMvcGxheWVyLWV4cGxvc2lvbi53YXYnXSk7XG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdlbmVteUZpcmUnLCBbJ2Fzc2V0cy9lbmVteS1maXJlLndhdiddKTtcbiAgICB0aGlzLmxvYWQuYXVkaW8oJ3BsYXllckZpcmUnLCBbJ2Fzc2V0cy9wbGF5ZXItZmlyZS53YXYnXSk7XG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdwb3dlclVwJywgWydhc3NldHMvcG93ZXJ1cC53YXYnXSk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG5cbiAgICB0aGlzLnByZWxvYWRCYXIuY3JvcEVuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnN0YXRlLnN0YXJ0KCdNZW51Jyk7XG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdGF0ZXMvUHJlbG9hZC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuICBwcmVsb2FkKCkge1xuICAgIHRoaXMubG9hZC5pbWFnZSgndGl0bGVwYWdlJywgJy4vYXNzZXRzL3RpdGxlcGFnZS5wbmcnKVxuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiTWVudVwiKTtcbiAgICBsZXQgdGl0bGVwYWdlID0gdGhpcy5hZGQuc3ByaXRlKDAsIDAsICd0aXRsZXBhZ2UnKTtcblxuICAgIHRoaXMudGl0bGVUZXh0ICAgPSB0aGlzLmFkZC50ZXh0KDE2MCwgMTAwLCBcIlNpbXBsZSBTaG9vdGVyXCIsIHtmb250OiBcIjMycHggRmlyYSBNb25vXCIsIGZpbGw6IFwiI2ZmZlwiLCBhbGlnbjogJ2NlbnRlcid9KS5hbmNob3Iuc2V0VG8oLjUsIC41KTtcbiAgICB0aGlzLmxvYWRpbmdUZXh0ID0gdGhpcy5hZGQudGV4dCgxNjAsIDQwMCwgXCJDbGljayB0byBzdGFydFwiLCB7IGZvbnQ6IFwiMTVweCBGaXJhIE1vbm9cIiwgZmlsbDogXCIjZmZmXCIgfSk7XG4gICAgdGhpcy5sb2FkaW5nVGV4dC5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuU1BBQ0VCQVIpIHx8wqB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuaXNEb3duKSB7XG4gICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0R2FtZSgpIHtcbiAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQbGF5Jyk7XG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdGF0ZXMvTWVudS5qc1xuICoqLyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vbW9kZWxzL1BsYXllcic7XG5pbXBvcnQgRW5lbXkgZnJvbSAnLi4vbW9kZWxzL0VuZW15JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgcHJlbG9hZCgpIHtcblxuICAgIHRoaXMubG9hZC5pbWFnZSgnc2VhJywgJ2Fzc2V0cy9zZWEucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdidWxsZXQnLCAnYXNzZXRzL2J1bGxldC5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2VuZW15QnVsbGV0JywgJ2Fzc2V0cy9lbmVteS1idWxsZXQucG5nJyk7XG5cbiAgICAvLyBMb2FkIHBvd2VydXBcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3Bvd2VydXAxJywgJ2Fzc2V0cy9wb3dlcnVwMS5wbmcnKTtcbiAgICAvLyBMb2FkIHNoaXRcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2dyZWVuRW5lbXknLCAnYXNzZXRzL2VuZW15LnBuZycsIDMyLCAzMik7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd3aGl0ZUVuZW15JywgJ2Fzc2V0cy9zaG9vdGluZy1lbmVteS5wbmcnLCAzMiwgMzIpO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnYm9zcycsICdhc3NldHMvYm9zcy5wbmcnLCA5MywgNzUpO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZXhwbG9zaW9uJywgJ2Fzc2V0cy9leHBsb3Npb24ucG5nJywgNjQsIDY0KTtcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3BsYXllcicsICdhc3NldHMvcGxheWVyX2Z1bGwucG5nJywgNjQsIDY0LCAxMik7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdmaXJlJywgJ2Fzc2V0cy9maXJlLnBuZycpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuc2VhID0gdGhpcy5hZGQudGlsZVNwcml0ZSgwLCAwLCAzMjAsIDQ4MCwgJ3NlYScpO1xuICAgIHRoaXMuc2V0dXBQbGF5ZXIoKTtcbiAgICB0aGlzLmVuZW15ID0gbmV3IEVuZW15KHRoaXMuZ2FtZSwgMTYwLCAxMDAsICdncmVlbkVuZW15Jyk7XG5cbiAgICAvLyB0aGlzLnNldHVwRW5lbWllcygpO1xuICAgIC8vIHRoaXMuc2V0dXBFeHBsb3Npb25zKCk7XG4gICAgdGhpcy5jdXJzb3JzID0gdGhpcy5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XG4gICAgdGhpcy53b3JsZFNwZWVkID0gMC4yNTtcblxuICAgIC8vIHRpaHMuc2V0dXBQbGF5ZXJJY29ucygpO1xuICAgIHRoaXMuc2V0dXBUZXh0KCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5wbGF5ZXIuaGFuZGxlSW5wdXQoKTtcbiAgICB0aGlzLnNlYS50aWxlUG9zaXRpb24ueSArPSB0aGlzLndvcmxkU3BlZWQ7XG4gICAgdGhpcy5jaGVja0NvbGxpc2lvbnMoKTtcbiAgICAvLyB0aGlzLnNwYXduRW5lbWllcygpO1xuICAgIC8vIHRoaXMuZW5lbXlGaXJlKCk7XG4gICAgdGhpcy5kZXRlY3RQbGF5ZXJJbnB1dCgpO1xuICAgIHRoaXMuZGVsYXlFZmZlY3QoKTtcbiAgfVxuXG4gIGRldGVjdFBsYXllcklucHV0KCkge1xuICAgIGlmICh0aGlzLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuUSkpIHRoaXMucXVpdEdhbWUoKTtcbiAgfVxuXG5cbiAgc2V0dXBFbmVtaWVzKCkge1xuXG4gICAgXG5cbiAgICB0aGlzLmVuZW15UG9vbCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgdGhpcy5lbmVteVBvb2wuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5lbmVteVBvb2wucGh5c2ljc0JvZHlUeXBlID0gUGhhc2VyLlBoeXNpY3MuQVJDQURFO1xuICAgIHRoaXMuZW5lbXlQb29sLmNyZWF0ZU11bHRpcGxlKDUwLCAnZ3JlZW5FbmVteScpO1xuICAgIHRoaXMuZW5lbXlQb29sLnNldEFsbCgnYW5jaG9yLngnLCAwLjUpO1xuICAgIHRoaXMuZW5lbXlQb29sLnNldEFsbCgnYW5jaG9yLnknLCAwLjUpO1xuICAgIHRoaXMuZW5lbXlQb29sLnNldEFsbCgnb3V0T2ZCb3VuZHNLaWxsJywgdHJ1ZSk7XG4gICAgdGhpcy5lbmVteVBvb2wuc2V0QWxsKCdyZXdhcmQnLCAxMDAsIGZhbHNlLCBmYWxzZSwgMCwgdHJ1ZSk7XG5cbiAgfVxuXG5cbiAgc2V0dXBFeHBsb3Npb25zKCkge1xuICAgIHRoaXMuZXhwbG9zaW9uUG9vbCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgdGhpcy5leHBsb3Npb25Qb29sLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgIHRoaXMuZXhwbG9zaW9uUG9vbC5waHlzaWNzQm9keVR5cGUgPSBQaGFzZXIuUGh5c2ljcy5BUkNBREU7XG4gICAgdGhpcy5leHBsb3Npb25Qb29sLmNyZWF0ZU11bHRpcGxlKDEwMCwgJ2V4cGxvc2lvbicpO1xuICAgIHRoaXMuZXhwbG9zaW9uUG9vbC5zZXRBbGwoJ2FuY2hvci54JywgMC41KTtcbiAgICB0aGlzLmV4cGxvc2lvblBvb2wuc2V0QWxsKCdhbmNob3IueScsIDAuNSk7XG4gICAgLy8gU2V0IGV4cGxvc2lvbiBhbmltYXRpb25cbiAgICB0aGlzLmV4cGxvc2lvblBvb2wuZm9yRWFjaChmdW5jdGlvbiAoZXhwbG9zaW9uKSB7XG4gICAgICBleHBsb3Npb24uYW5pbWF0aW9ucy5hZGQoJ2Jvb20nKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldHVwUGxheWVySWNvbnMoKSB7XG4gICAgdGhpcy5wb3dlclVwUG9vbCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgdGhpcy5wb3dlclVwUG9vbC5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICB0aGlzLnBvd2VyVXBQb29sLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcbiAgICB0aGlzLnBvd2VyVXBQb29sLmNyZWF0ZU11bHRpcGxlKDUsICdwb3dlcnVwMScpO1xuICAgIHRoaXMucG93ZXJVcFBvb2wuc2V0QWxsKCdhbmNob3IueCcsIDAuNSk7XG4gICAgdGhpcy5wb3dlclVwUG9vbC5zZXRBbGwoJ2FuY2hvci55JywgMC41KTtcbiAgICB0aGlzLnBvd2VyVXBQb29sLnNldEFsbCgnb3V0T2ZCb3VuZHNLaWxsJywgdHJ1ZSk7XG4gICAgdGhpcy5wb3dlclVwUG9vbC5zZXRBbGwoJ2NoZWNrV29ybGRCb3VuZHMnLCB0cnVlKTtcbiAgICB0aGlzLnBvd2VyVXBQb29sLnNldEFsbCgncmV3YXJkJywgMTAwLCBmYWxzZSwgZmFsc2UsIDAsIHRydWUpO1xuXG4gICAgdGhpcy5saXZlcyA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGxldCBsaWZlID0gdGhpcy5saXZlcy5jcmVhdGUoMjQwICsgKDMwICogaSksIDMwLCAncGxheWVyJyk7XG4gICAgICBsaWZlLnNjYWxlLnNldFRvKDAuNCwgMC40KTtcbiAgICAgIGxpZmUuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICB9XG4gIH1cblxuICBzZXR1cFRleHQoKSB7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSB0aGlzLmFkZC50ZXh0KDE2MCwgNDAwLCAnVXNlIEFycm93IEtleXMgdG8gTW92ZSwgWCB0byBGaXJlXFxuJywge1xuICAgICAgICBmb250OiAnMTRweCBGaXJhIE1vbm8nLFxuICAgICAgICBmaWxsOiAnI2ZmZicsXG4gICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgfSk7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICB0aGlzLmluc3RFeHBpcmUgPSB0aGlzLnRpbWUubm93ICsgNTAwMDtcblxuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuc2NvcmVUZXh0ID0gdGhpcy5hZGQudGV4dChcbiAgICAgIDE2MCwgMzAsICdTY29yZTogJyArIHRoaXMuc2NvcmUsIHtcbiAgICAgICAgZm9udDogJzIwcHggRmlyYSBNb25vJyxcbiAgICAgICAgZmlsbDogJyNmZmYnLFxuICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgIH0pO1xuICAgIHRoaXMuc2NvcmVUZXh0LmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gIH1cblxuICBjaGVja0NvbGxpc2lvbnMoKSB7XG4gICAgdGhpcy5waHlzaWNzLmFyY2FkZS5vdmVybGFwKFxuICAgICAgdGhpcy5wbGF5ZXIuYnVsbGV0UG9vbCxcbiAgICAgIHRoaXMuZW5lbXksXG4gICAgICB0aGlzLmVuZW15SGl0LFxuICAgICAgbnVsbCxcbiAgICAgIHRoaXNcbiAgICApO1xuXG4gICAvLyAgdGhpcy5waHlzaWNzLmFyY2FkZS5vdmVybGFwKFxuICAgLy8gICAgdGhpcy5idWxsZXRQb29sLFxuICAgLy8gICAgdGhpcy5zaG9vdGVyUG9vbCxcbiAgIC8vICAgIHRoaXMuZW5lbXlIaXQsXG4gICAvLyAgICBudWxsLFxuICAgLy8gICAgdGhpc1xuICAgLy8gICk7XG5cbiAgIC8vICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAoXG4gICAvLyAgICB0aGlzLnBsYXllcixcbiAgIC8vICAgIHRoaXMuZW5lbXlQb29sLFxuICAgLy8gICAgdGhpcy5wbGF5ZXJIaXQsXG4gICAvLyAgICBudWxsLFxuICAgLy8gICAgdGhpc1xuICAgLy8gICk7XG5cbiAgIC8vIHRoaXMucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChcbiAgIC8vICAgIHRoaXMucGxheWVyLFxuICAgLy8gICAgdGhpcy5zaG9vdGVyUG9vbCxcbiAgIC8vICAgIHRoaXMucGxheWVySGl0LFxuICAgLy8gICAgbnVsbCxcbiAgIC8vICAgIHRoaXNcbiAgIC8vICApO1xuXG4gICAvLyAgIHRoaXMucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChcbiAgIC8vICAgIHRoaXMucGxheWVyLFxuICAgLy8gICAgdGhpcy5lbmVteUJ1bGxldFBvb2wsXG4gICAvLyAgICB0aGlzLnBsYXllckhpdCxcbiAgIC8vICAgIG51bGwsXG4gICAvLyAgICB0aGlzXG4gICAvLyAgKTtcblxuICAgLy8gICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAoXG4gICAvLyAgICB0aGlzLnBsYXllcixcbiAgIC8vICAgIHRoaXMucG93ZXJVcFBvb2wsXG4gICAvLyAgICB0aGlzLnBsYXllckhpdCxcbiAgIC8vICAgIG51bGwsXG4gICAvLyAgICB0aGlzXG4gICAvLyAgKTtcblxuICAgLy8gIGlmICh0aGlzLmJvc3NBcHByb2FjaGluZyA9PT0gZmFsc2UpIHtcbiAgIC8vICAgIHRoaXMucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChcbiAgIC8vICAgICAgdGhpcy5idWxsZXRQb29sLFxuICAgLy8gICAgICB0aGlzLmJvc3NQb29sLFxuICAgLy8gICAgICB0aGlzLmVuZW15SGl0LFxuICAgLy8gICAgICBudWxsLFxuICAgLy8gICAgICB0aGlzXG4gICAvLyAgICApO1xuXG4gICAvLyAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAoXG4gICAvLyAgICAgIHRoaXMucGxheWVyLFxuICAgLy8gICAgICB0aGlzLmJvc3NQb29sLFxuICAgLy8gICAgICB0aGlzLnBsYXllckhpdCxcbiAgIC8vICAgICAgbnVsbCxcbiAgIC8vICAgICAgdGhpc1xuICAgLy8gICAgKTtcbiAgIC8vICB9XG4gIH1cblxuICBzcGF3bkVuZW1pZXMoKSB7XG4gICAgXG4gIH1cblxuICBlbmVteUZpcmUoKSB7XG4gICAgdGhpcy5zaG9vdGVyUG9vbC5mb3JFYWNoQWxpdmUoZnVuY3Rpb24oZW5lbXkpIHtcbiAgICAgIGlmICh0aGlzLnRpbWUubm93ID4gZW5lbXkubmV4dFNob3RBdCAmJiB0aGlzLmVuZW15QnVsbGV0UG9vbC5jb3VudERlYWQoKSA+IDApIHtcbiAgICAgICAgdmFyIGJ1bGxldCA9IHRoaXMuZW5lbXlCdWxsZXRQb29sLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICAgICAgYnVsbGV0LnJlc2V0KGVuZW15LngsIGVuZW15LnkpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm1vdmVUb09iamVjdChidWxsZXQsIHRoaXMucGxheWVyLCAxNTApO1xuICAgICAgICBlbmVteS5uZXh0U2hvdEF0ID0gdGhpcy50aW1lLm5vdyArIHRoaXMuc2hvb3RlclNob3REZWxheTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIGlmICh0aGlzLmJvc3NBcHByb2FjaGluZyA9PT0gZmFsc2UgJiYgdGhpcy5ib3NzLmFsaXZlICYmIFxuICAgICAgICB0aGlzLmJvc3MubmV4dFNob3RBdCA8IHRoaXMudGltZS5ub3cgJiZcbiAgICAgICAgdGhpcy5lbmVteUJ1bGxldFBvb2wuY291bnREZWFkKCkgPiA5KSB7XG5cbiAgICAgIHRoaXMuYm9zcy5uZXh0U2hvdEF0ID0gdGhpcy50aW1lLm5vdyArIDEwMDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIC8vIHByb2Nlc3MgMiBidWxsZXRzIGF0IGEgdGltZVxuICAgICAgICB2YXIgbGVmdEJ1bGxldCA9IHRoaXMuZW5lbXlCdWxsZXRQb29sLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICAgICAgbGVmdEJ1bGxldC5yZXNldCh0aGlzLmJvc3MueCAtIDEwIC0gaSAqIDEwLCB0aGlzLmJvc3MueSArIDIwKTtcbiAgICAgICAgdmFyIHJpZ2h0QnVsbGV0ID0gdGhpcy5lbmVteUJ1bGxldFBvb2wuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgICAgICByaWdodEJ1bGxldC5yZXNldCh0aGlzLmJvc3MueCArIDEwICsgaSAqIDEwLCB0aGlzLmJvc3MueSArIDIwKTtcblxuICAgICAgICBpZiAodGhpcy5ib3NzLmhlYWx0aCA+IDI1MCkge1xuICAgICAgICAgIC8vIGFpbSBkaXJlY3RseSBhdCB0aGUgcGxheWVyXG4gICAgICAgICAgdGhpcy5waHlzaWNzLmFyY2FkZS5tb3ZlVG9PYmplY3QobGVmdEJ1bGxldCwgdGhpcy5wbGF5ZXIsIDE1MCk7XG4gICAgICAgICAgdGhpcy5waHlzaWNzLmFyY2FkZS5tb3ZlVG9PYmplY3QocmlnaHRCdWxsZXQsIHRoaXMucGxheWVyLCAxNTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGFpbSBzbGlnaHRseSBvZmYgY2VudGVyIG9mIHRoZSBwbGF5ZXJcbiAgICAgICAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm1vdmVUb1hZKFxuICAgICAgICAgICAgbGVmdEJ1bGxldCwgdGhpcy5wbGF5ZXIueCAtIGkgKiAxMDAsIHRoaXMucGxheWVyLnksIDE1MFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5waHlzaWNzLmFyY2FkZS5tb3ZlVG9YWShcbiAgICAgICAgICAgIHJpZ2h0QnVsbGV0LCB0aGlzLnBsYXllci54ICsgaSAqIDEwMCwgdGhpcy5wbGF5ZXIueSwgMTUwXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgZGVsYXlFZmZlY3QoKSB7XG5cbiAgICAvLyBGYWRlIG91dCBpbnN0cnVjdGlvbiB0ZXh0XG4gICAgaWYgKHRoaXMuaW5zdHJ1Y3Rpb25zLmV4aXN0cyAmJiB0aGlzLnRpbWUubm93ID4gdGhpcy5pbnN0RXhwaXJlKSB7XG4gICAgICAvLyB0aGlzLmluc3RydWN0aW9ucy54ID0gdGhpcy5pbnN0cnVjdGlvbnMueCAtIDEwO1xuICAgICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLmluc3RydWN0aW9ucykudG8oIHsgYWxwaGE6IDAgfSwgMTAwLCBcIkxpbmVhclwiLCB0cnVlKTtcbiAgICAgIGlmICh0aGlzLmluc3RydWN0aW9ucy5hbHBoYSA8IDAuMDAxKSB0aGlzLmluc3RydWN0aW9ucy5kZXN0cm95KCk7XG4gICAgfVxuLypcbiAgICBpZiAodGhpcy5naG9zdFVudGlsICYmIHRoaXMuZ2hvc3RVbnRpbCA8IHRoaXMudGltZS5ub3cpIHtcbiAgICAgIHRoaXMuZ2hvc3RVbnRpbCA9IG51bGw7XG4gICAgICB0aGlzLnBsYXllci5wbGF5KCdmbHknKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaG93UmV0dXJuICYmIHRoaXMudGltZS5ub3cgPiB0aGlzLnNob3dSZXR1cm4pIHtcbiAgICAgIHRoaXMucmV0dXJuVGV4dCA9IHRoaXMuYWRkLnRleHQoMTYwLCAzMjAsIFxuICAgICAgICAnUHJlc3MgWiBvciBUYXAgR2FtZSB0byBnbyBiYWNrIHRvIE1haW4gTWVudScsIHtcbiAgICAgICAgICBmb250OiAnMTZweCBzZXJpZicsXG4gICAgICAgICAgZmlsbDogJyNmZmYnXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHRoaXMucmV0dXJuVGV4dC5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgICAgdGhpcy5zaG93UmV0dXJuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYm9zc0FwcHJvYWNoaW5nICYmIHRoaXMuYm9zcy55ID4gODApIHtcbiAgICAgIHRoaXMuYm9zc0FwcHJvYWNoaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmJvc3MuaGVhbHRoID0gNTAwO1xuICAgICAgdGhpcy5ib3NzLm5leHRTaG90QXQgPSAwO1xuXG4gICAgICB0aGlzLmJvc3MuYm9keS52ZWxvY2l0eS55ID0gMDtcbiAgICAgIHRoaXMuYm9zcy5ib2R5LnZlbG9jaXR5LnggPSAyMDA7XG4gICAgICAvLyBhbGxvdyBib3VuY2luZyBvZmYgd29ybGQgYm91bmRzXG4gICAgICB0aGlzLmJvc3MuYm9keS5ib3VuY2UueCA9IDE7XG4gICAgICB0aGlzLmJvc3MuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgIH1cbiAgICAqL1xuICB9XG5cbiAgZXhwbG9kZShzcHJpdGUpIHtcbiAgICBpZiAodGhpcy5leHBsb3Npb25Qb29sLmNvdW50RGVhZCgpID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBleHBsb3Npb24gPSB0aGlzLmV4cGxvc2lvblBvb2wuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgIGV4cGxvc2lvbi5yZXNldChzcHJpdGUueCwgc3ByaXRlLnkpO1xuICAgIGV4cGxvc2lvbi5wbGF5KCdib29tJywgMTUsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIGVuZW15SGl0KGVuZW15LCBidWxsZXQpIHtcbiAgICBjb25zb2xlLmxvZyhcImVuZW15SEl0XCIpO1xuICAgIGJ1bGxldC5raWxsKCk7XG4gICAgdGhpcy5hZGRUb1Njb3JlKDEwKTtcbiAgICB0aGlzLmRhbWFnZUVuZW15KGVuZW15LCAxKTtcbiAgfVxuXG4gIHBsYXllckhpdChwbGF5ZXIsIGVuZW15KSB7XG5cbiAgICBpZiAodGhpcy5naG9zdFVudGlsICYmIHRoaXMuZ2hvc3RVbnRpbCA+IHRoaXMudGltZS5ub3cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRhbWFnZUVuZW15KGVuZW15LCA1KTtcbiAgICB2YXIgbGlmZSA9IHRoaXMubGl2ZXMuZ2V0Rmlyc3RBbGl2ZSgpO1xuICAgIGlmIChsaWZlKSB7XG4gICAgICBsaWZlLmtpbGwoKTtcbiAgICAgIHRoaXMud2VhcG9uTGV2ZWwgPSAwO1xuICAgICAgdGhpcy5naG9zdFVudGlsID0gdGhpcy50aW1lLm5vdyArIDIwMDA7XG4gICAgICB0aGlzLnBsYXllci5wbGF5KCdnaG9zdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV4cGxvZGUocGxheWVyKTtcbiAgICAgIHBsYXllci5raWxsKCk7XG4gICAgICB0aGlzLmRpc3BsYXlFbmQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHBsYXllclBvd2VyVXAocGxheWVyLCBwb3dlclVwKSB7XG4gICAgdGhpcy5hZGRUb1Njb3JlKHBvd2VyVXAucmV3YXJkKTtcbiAgICBwb3dlclVwLmtpbGwoKTtcbiAgICBpZiAodGhpcy53ZWFwb25MZXZlbCA8IDUpIHtcbiAgICAgIHRoaXMud2VhcG9uTGV2ZWwgKz0gMTtcbiAgICB9XG4gIH1cblxuICBkYW1hZ2VFbmVteShlbmVteSwgZGFtYWdlKSB7XG4gICAgLy8gZGV0YWlsIDogaHR0cDovL2RvY3MucGhhc2VyLmlvL1BoYXNlci5TcHJpdGUuaHRtbCNkYW1hZ2VcbiAgICBlbmVteS5kYW1hZ2UoZGFtYWdlKTtcbiAgICAvLyBpZiAoZW5lbXkuYWxpdmUpIHtcbiAgICAvLyAgIGVuZW15LnBsYXkoJ2hpdCcpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB0aGlzLmV4cGxvZGUoZW5lbXkpO1xuICAgIC8vICAgdGhpcy5zcGF3blBvd2VyVXAoZW5lbXkpO1xuICAgIC8vICAgdGhpcy5hZGRUb1Njb3JlKGVuZW15LnJld2FyZCk7XG5cbiAgICAvLyAgIGlmIChlbmVteS5rZXkgPT09ICdib3NzJykge1xuICAgIC8vICAgICB0aGlzLmVuZW15UG9vbC5kZXN0cm95KCk7XG4gICAgLy8gICAgIHRoaXMuc2hvb3RlclBvb2wuZGVzdHJveSgpO1xuICAgIC8vICAgICB0aGlzLmJvc3NQb29sLmRlc3Ryb3koKTtcbiAgICAvLyAgICAgdGhpcy5lbmVteUJ1bGxldFBvb2wuZGVzdHJveSgpO1xuICAgIC8vICAgICB0aGlzLmRpc3BsYXlFbmQodHJ1ZSk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG5cbiAgc3Bhd25Qb3dlclVwKGVuZW15KSB7XG4gICAgaWYgKHRoaXMucG93ZXJVcFBvb2wuY291bnREZWFkKCkgPT09IDAgfHwgdGhpcy53ZWFwb25MZXZlbCA9PT0gNSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJuZC5mcmFjKCkgPCBlbmVteS5kcm9wUmF0ZSkge1xuICAgICAgIHZhciBwb3dlclVwID0gdGhpcy5wb3dlclVwUG9vbC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgICAgcG93ZXJVcC5yZXNldChlbmVteS54LCBlbmVteS55KTtcbiAgICAgICBwb3dlclVwLmJvZHkudmVsb2NpdHkueSA9IDEwMDtcbiAgICAgfVxuICB9XG5cbiAgc3Bhd25Cb3NzKCkge1xuICAgIHRoaXMuYm9zc0FwcHJvYWNoaW5nID0gdHJ1ZTtcbiAgICB2YXIgYm9zcyA9IHRoaXMuYm9zc1Bvb2wuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgIHRoaXMucGh5c2ljcy5lbmFibGUoYm9zcywgUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcbiAgICBib3NzLnJlc2V0KDE2MCwgMCwgdGhpcy5ib3NzSW5pdGlhbEhlYWx0aCk7XG4gICAgYm9zcy5ib2R5LnZlbG9jaXR5LnkgPSAxNTtcbiAgICBib3NzLnBsYXkoJ2ZseScpO1xuXG4gICAgdGhpcy5lbmVteVBvb2wuZGVzdHJveSgpO1xuICAgIC8vIHRoaXMuc2hvb3RlclBvb2wuZGVzdHJveSgpO1xuICB9XG5cbiAgYWRkVG9TY29yZShzY29yZSkge1xuICAgIHRoaXMuc2NvcmUgKz0gc2NvcmU7XG4gICAgdGhpcy5zY29yZVRleHQudGV4dCA9ICdTY29yZSA6ICcgKyB0aGlzLnNjb3JlO1xuICAgIC8vIGlmICh0aGlzLnNjb3JlID49IDIwMDAwICYmIHRoaXMuYm9zc1Bvb2wuY291bnREZWFkKCkgPT0gMSkge1xuICAgIC8vICAgdGhpcy5lbmVteVBvb2wuZGVzdHJveSgpO1xuICAgIC8vICAgdGhpcy5zaG9vdGVyUG9vbC5kZXN0cm95KCk7XG4gICAgLy8gICB0aGlzLmVuZW15QnVsbGV0UG9vbC5kZXN0cm95KCk7XG4gICAgLy8gICB0aGlzLmRpc3BsYXlFbmQodHJ1ZSk7XG4gICAgLy8gICB0aGlzLnNwYXduQm9zcygpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGRpc3BsYXlFbmQod2luKSB7XG4gICAgaWYgKHRoaXMuZW5kVGV4dCAmJiB0aGlzLmVuZFRleHQuZXhpc3RzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1lc3NhZ2UgPSB3aW4gPyAnWW9vIFdpbiEhIScgOiAnR2FtZSBPdmVyISc7XG4gICAgdGhpcy5lbmRUZXh0ID0gdGhpcy5hZGQudGV4dCgxNjAsIDI0MCwgbWVzc2FnZSwge1xuICAgICAgZm9udDogJzQ4cHggc2VyaWYnLCBcbiAgICAgIGZpbGw6ICcjZjAwJ1xuICAgIH0pO1xuICAgIHRoaXMuZW5kVGV4dC5hbmNob3Iuc2V0VG8oMC41LCAwKTtcbiAgICB0aGlzLnNob3dSZXR1cm4gPSB0aGlzLnRpbWUubm93ICsgMjAwMDtcbiAgfVxuXG4gIHF1aXRHYW1lKHBvaW50ZXIpIHtcblxuICAgIC8vICBIZXJlIHlvdSBzaG91bGQgZGVzdHJveSBhbnl0aGluZyB5b3Ugbm8gbG9uZ2VyIG5lZWQuXG4gICAgLy8gIFN0b3AgbXVzaWMsIGRlbGV0ZSBzcHJpdGVzLCBwdXJnZSBjYWNoZXMsIGZyZWUgcmVzb3VyY2VzLCBhbGwgdGhhdCBnb29kIHN0dWZmLlxuICAgIHRoaXMuc2VhLmRlc3Ryb3koKTtcbiAgICB0aGlzLnBsYXllci5kZXN0cm95KCk7XG4gICAgLy8gdGhpcy5lbmVteVBvb2wuZGVzdHJveSgpO1xuICAgIC8vIHRoaXMuYnVsbGV0UG9vbC5kZXN0cm95KCk7XG4gICAgLy8gdGhpcy5leHBsb3Npb25Qb29sLmRlc3Ryb3koKTtcbiAgICB0aGlzLmluc3RydWN0aW9ucy5kZXN0cm95KCk7XG4gICAgdGhpcy5zY29yZVRleHQuZGVzdHJveSgpO1xuICAgIC8vIHRoaXMucmV0dXJuVGV4dC5kZXN0cm95KCk7XG5cbiAgICAvLyAgVGhlbiBsZXQncyBnbyBiYWNrIHRvIHRoZSBtYWluIG1lbnUuXG4gICAgdGhpcy5zdGF0ZS5zdGFydCgnTWVudScpO1xuICB9XG5cblxuICBzZXR1cFBsYXllcigpIHtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5nYW1lLCAxNjAsIDQ1MCwgJ3BsYXllcicpO1xuICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RhdGVzL1BsYXkuanNcbiAqKi8iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7XG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ3BsYXllcicpO1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5jdXJzb3JzID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG5cbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdmbHknLCBbMCwgMSwgMiwgM10sIDEwLCB0cnVlKTtcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdmbHktbGVmdCcsIFs0LCA1LCA2LCA3XSwgMTAsIHRydWUpO1xuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2ZseS1yaWdodCcsIFs4LCA5LCAxMCwgMTFdLCAxMCwgdHJ1ZSk7XG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnZ2hvc3QnLCBbMywgMCwgMywgMV0sIDIwLCB0cnVlKTtcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUodGhpcywgUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcbiAgICB0aGlzLnNwZWVkID0gMjUwO1xuICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgIHRoaXMuYm9keS5zZXRTaXplKDIwLCAyMCwgMCwgLTUpO1xuICAgIHRoaXMud2VhcG9uTGV2ZWwgPSAwO1xuICAgIHRoaXMuYnVsbGV0U3BlZWQgPSAyMDA7XG4gICAgdGhpcy5jcmVhdGVCdWxsZXRQb29sKCk7XG4gICAgdGhpcy5jcmVhdGlvblRpbWUgPSB0aGlzLmdhbWUudGltZS5ub3c7XG5cbiAgICAvLyB0aGlzLmVtaXR0ZXIgPSB0aGlzLmdhbWUuYWRkLmVtaXR0ZXIodGhpcy5ib2R5LngsIHRoaXMuYm9keS55LCAyMDApO1xuICAgIC8vIHRoaXMuZW1pdHRlci5tYWtlUGFydGljbGVzKCdmaXJlJyk7XG4gICAgLy8gdGhpcy5lbWl0dGVyLmdyYXZpdHkgPSAyMDA7XG4gICAgLy8gdGhpcy5lbWl0dGVyLnNldEFscGhhKDEsIDAsIDMwMDApO1xuICAgIC8vIHRoaXMuZW1pdHRlci5zZXRTY2FsZSgwLjgsIDAsIDAuOCwgMCwgMzAwMCk7XG4gICAgLy8gdGhpcy5lbWl0dGVyLndpZHRoID0gODtcbiAgICAvLyB0aGlzLmVtaXR0ZXIuc2V0WVNwZWVkKDEwMCwgMjAwKTtcbiAgICAvLyB0aGlzLmVtaXR0ZXIuc2V0WFNwZWVkKC0wLjEsIC4xKTtcbiAgICAvLyB0aGlzLmVtaXR0ZXIubWluUm90YXRpb24gPSAwO1xuICAgIC8vIHRoaXMuZW1pdHRlci5tYXhSb3RhdGlvbiA9IDA7XG5cbiAgICB0aGlzLmdhbWUuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XG4gICAgdGhpcy5wbGF5KCdmbHknKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1bGxldFBvb2woKSB7XG4gICAgdGhpcy5idWxsZXRQb29sID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuICAgIHRoaXMuYnVsbGV0UG9vbC5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICB0aGlzLmJ1bGxldFBvb2wucGh5c2ljc0JvZHlUeXBlID0gUGhhc2VyLlBoeXNpY3MuQVJDQURFO1xuICAgIHRoaXMuYnVsbGV0UG9vbC5jcmVhdGVNdWx0aXBsZSgxMDAsICdidWxsZXQnKTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuc2V0QWxsKCdhbmNob3IueCcsIDAuNSk7XG4gICAgdGhpcy5idWxsZXRQb29sLnNldEFsbCgnYW5jaG9yLnknLCAwLjUpO1xuXG4gICAgLy8gS2lsbCBidWxsZXQgd2hlbiBvb0JcbiAgICB0aGlzLmJ1bGxldFBvb2wuc2V0QWxsKCdvdXRPZkJvdW5kc0tpbGwnLCB0cnVlKTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuc2V0QWxsKCdjaGVja1dvcmxkQm91bmRzJywgdHJ1ZSk7XG5cbiAgICB0aGlzLm5leHRTaG90QXQgPSAwO1xuICAgIHRoaXMuc2hvdERlbGF5ID0gMjAwO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5oYW5kbGVJbnB1dCgpO1xuICB9XG5cbiAgc2hvb3QoZGlyZWN0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmFsaXZlIHx8IHRoaXMubmV4dFNob3RBdCA+IHRoaXMuZ2FtZS50aW1lLm5vdykge1xuICAgICAgcmV0dXJuOyAvLyByZXR1cm4gaWYgcGxheWVyIGlzIGRlYWQgb3IgZGVsYXkgaXMgaW4gcGxhY2VcbiAgICB9XG5cbiAgICB0aGlzLm5leHRTaG90QXQgPSB0aGlzLmdhbWUudGltZS5ub3cgKyB0aGlzLnNob3REZWxheTtcbiAgICBsZXQgYnVsbGV0O1xuXG4gICAgaWYgKHRoaXMud2VhcG9uTGV2ZWwgPT09IDApIHtcbiAgICAgIGlmICh0aGlzLmJ1bGxldFBvb2wuY291bnREZWFkKCkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBidWxsZXQgPSB0aGlzLmJ1bGxldFBvb2wuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgICAgYnVsbGV0LnJlc2V0KHRoaXMueCwgdGhpcy55KTtcbiAgICAgIGJ1bGxldC5ib2R5LnZlbG9jaXR5LnkgPSAtdGhpcy5idWxsZXRTcGVlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuYnVsbGV0UG9vbC5jb3VudERlYWQoKSA8IHRoaXMud2VhcG9uTGV2ZWwgKiAyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53ZWFwb25MZXZlbDsgaSsrKSB7XG4gICAgICAgIGJ1bGxldCA9IHRoaXMuYnVsbGV0UG9vbC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG5cbiAgICAgICAgLy8gU3Bhd24gbGVmdCBidWxsZXQgbGVmdCBvZmYgY2VudGVyXG4gICAgICAgIGJ1bGxldC5yZXNldCh0aGlzLnggLSAoMTAgKyBpICogNSksIHRoaXMueSAtIDE2KTtcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLnZlbG9jaXR5RnJvbUFuZ2xlKC05NSAtIGkgKiAxMCwgdGhpcy5idWxsZXRTcGVlZCwgYnVsbGV0LmJvZHkudmVsb2NpdHkpO1xuXG4gICAgICAgIGJ1bGxldCA9IHRoaXMuYnVsbGV0UG9vbC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgICAgIGJ1bGxldC5yZXNldCh0aGlzLnggKyAoMTAgKyBpICogNSksIHRoaXMueSAtIDE2KTtcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLnZlbG9jaXR5RnJvbUFuZ2xlKC04NSArIGkgKjEwLCB0aGlzLmJ1bGxldFNwZWVkLCBidWxsZXQuYm9keS52ZWxvY2l0eSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuXG4gIGhhbmRsZUlucHV0KCkge1xuICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gMDtcbiAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IDA7XG5cbiAgICBpZiAodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuWCkgfHwgdGhpcy5nYW1lLmlucHV0LmFjdGl2ZVBvaW50ZXIuaXNEb3duKSB0aGlzLnNob290KFwidXBcIik7XG4gICAgaWYgKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlkpKSB0aGlzLmxldmVsVXAoKTtcblxuXG4gICAgaWYgKHRoaXMuY3Vyc29ycy51cC5pc0Rvd24pIHtcbiAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gLXRoaXMuc3BlZWQ7XG4gICAgICAvLyB0aGlzLmZpcmVQYXJ0aWNsZXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3Vyc29ycy5kb3duLmlzRG93bikgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLnNwZWVkO1xuXG5cbiAgICBpZiAodGhpcy5jdXJzb3JzLmxlZnQuaXNEb3duKSB7XG4gICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IC10aGlzLnNwZWVkO1xuICAgICAgdGhpcy5wbGF5KCdmbHktbGVmdCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJzb3JzLnJpZ2h0LmlzRG93bikge1xuICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSArdGhpcy5zcGVlZDtcbiAgICAgIHRoaXMucGxheSgnZmx5LXJpZ2h0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxheSgnZmx5Jyk7XG4gICAgfVxuXG5cbiAgICAvLyBIYW5kbGVyIE1vdXNlIENsaWNrICYgVG91Y2hcbiAgICBpZiAodGhpcy5nYW1lLmlucHV0LmFjdGl2ZVBvaW50ZXIuaXNEb3duICYmIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5kaXN0YW5jZVRvUG9pbnRlcih0aGlzKSA+IDE1KSB7XG4gICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUubW92ZVRvUG9pbnRlcih0aGlzLCB0aGlzLnNwZWVkKTtcbiAgICAgIGlmICh0aGlzLmJvZHkudmVsb2NpdHkueCA+IDApIHRoaXMucGxheSgnZmx5LXJpZ2h0Jyk7XG4gICAgICBpZiAodGhpcy5ib2R5LnZlbG9jaXR5LnggPCAwKSB0aGlzLnBsYXkoJ2ZseS1sZWZ0Jyk7XG4gICAgfVxuXG4gIH1cblxuICBmaXJlUGFydGljbGVzKCkge1xuICAgIHRoaXMuZW1pdHRlci54ID0gdGhpcy5ib2R5LmNlbnRlci54O1xuICAgIHRoaXMuZW1pdHRlci55ID0gdGhpcy5ib2R5LmNlbnRlci55O1xuICAgIHRoaXMuZW1pdHRlci5zdGFydCh0cnVlICwgMzAwLCAxLCAuMSk7XG5cbiAgfVxuXG4gIGxldmVsVXAoKSB7XG4gICAgdGhpcy53ZWFwb25MZXZlbCA9IDE7XG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbHMvUGxheWVyLmpzXG4gKiovIiwiaW1wb3J0IHsgZ2V0UmFuZG9tSW50LCBzcXVhcmUgfSBmcm9tICcuLi91dGlsL2hlbHBlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuICBcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHtcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnZ3JlZW5FbmVteScpO1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2ZseScsIFswLCAxLCAyLCAzXSwgMTAsIHRydWUpO1xuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2dob3N0JywgWzMsIDAsIDMsIDJdLCAyMCwgdHJ1ZSk7XG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKHRoaXMsIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgdGhpcy5zcGVlZCA9IDIwMDtcbiAgICB0aGlzLmhlYWx0aCA9IDU7XG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgdGhpcy5ib2R5LnNldFNpemUoMjAsIDIwLCAwLCAtNSk7XG4gICAgLy8gQ3JlYXRlIEJ1bGxldHNcbiAgICB0aGlzLmNyZWF0ZUJ1bGxldFBvb2woKTtcbiAgICB0aGlzLmNyZWF0ZUV4cGxvc2lvbigpO1xuXG4gICAgLy8gRGFtYWdlIHBhcnRpY2xlIGVtaXR0ZXJcbiAgICB0aGlzLmVtaXR0ZXIgPSB0aGlzLmdhbWUuYWRkLmVtaXR0ZXIodGhpcy5ib2R5LngsIHRoaXMuYm9keS55LCAyMDApO1xuICAgIHRoaXMuZW1pdHRlci5tYWtlUGFydGljbGVzKCdmaXJlJyk7XG4gICAgdGhpcy5lbWl0dGVyLmdyYXZpdHkgPSAyMDA7XG4gICAgdGhpcy5lbWl0dGVyLnNldEFscGhhKDEsIDAsIDMwMDApO1xuICAgIHRoaXMuZW1pdHRlci5zZXRTY2FsZSgwLjgsIDAsIDAuOCwgMCwgMzAwMCk7XG4gICAgdGhpcy5lbWl0dGVyLndpZHRoID0gODtcbiAgICB0aGlzLmVtaXR0ZXIuc2V0WVNwZWVkKDEwMCwgMjAwKTtcbiAgICB0aGlzLmVtaXR0ZXIuc2V0WFNwZWVkKC0xMDAsIDEwMCk7XG4gICAgdGhpcy5lbWl0dGVyLm1pblJvdGF0aW9uID0gMDtcbiAgICB0aGlzLmVtaXR0ZXIubWF4Um90YXRpb24gPSAwO1xuICAgIC8vIEFkZCB0byBzdGFnZVxuICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcbiAgICB0aGlzLnBsYXkoJ2ZseScpO1xuXG4gIH1cblxuICBjcmVhdGVCdWxsZXRQb29sKCkge1xuICAgIHRoaXMuYnVsbGV0UG9vbCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5idWxsZXRQb29sLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuY3JlYXRlTXVsdGlwbGUoMTAwLCAnZW5lbXlCdWxsZXQnKTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuc2V0QWxsKCdhbmNob3IueCcsIDAuNSk7XG4gICAgdGhpcy5idWxsZXRQb29sLnNldEFsbCgnYW5jaG9yLnknLCAwLjUpO1xuXG4gICAgLy8gS2lsbCBidWxsZXQgd2hlbiBvb0JcbiAgICB0aGlzLmJ1bGxldFBvb2wuc2V0QWxsKCdvdXRPZkJvdW5kc0tpbGwnLCB0cnVlKTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuc2V0QWxsKCdjaGVja1dvcmxkQm91bmRzJywgdHJ1ZSk7XG5cbiAgICB0aGlzLm5leHRTaG90QXQgPSAwO1xuICAgIHRoaXMuc2hvdERlbGF5ID0gNTAwO1xuICB9XG5cbiAgY3JlYXRlRXhwbG9zaW9uKCkge1xuICAgIHRoaXMuZXhwbG9zaW9uUG9vbCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLmV4cGxvc2lvblBvb2wuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5leHBsb3Npb25Qb29sLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcbiAgICB0aGlzLmV4cGxvc2lvblBvb2wuY3JlYXRlTXVsdGlwbGUoMTAwLCAnZXhwbG9zaW9uJyk7XG4gICAgdGhpcy5leHBsb3Npb25Qb29sLnNldEFsbCgnYW5jaG9yLngnLCAwLjUpO1xuICAgIHRoaXMuZXhwbG9zaW9uUG9vbC5zZXRBbGwoJ2FuY2hvci55JywgMC4yNSk7XG4gICAgLy8gU2V0IGV4cGxvc2lvbiBhbmltYXRpb25cbiAgICB0aGlzLmV4cGxvc2lvblBvb2wuZm9yRWFjaChmdW5jdGlvbiAoZXhwbG9zaW9uKSB7XG4gICAgICBleHBsb3Npb24uYW5pbWF0aW9ucy5hZGQoJ2Jvb20nKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGV4cGxvZGUoc3ByaXRlKSB7XG4gIC8vICAgaWYgKHRoaXMuZXhwbG9zaW9uUG9vbC5jb3VudERlYWQoKSA9PT0gMCkge1xuICAvLyAgICAgY29uc29sZS5sb2coXCJubyBleHBsXCIpO1xuICAvLyAgICAgcmV0dXJuO1xuICAvLyAgIH1cbiAgLy8gICB2YXIgZXhwbG9zaW9uID0gdGhpcy5leHBsb3Npb25Qb29sLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgLy8gICBsZXQgaW1wYWN0WCA9IGdldFJhbmRvbUludCgtMywgMyk7XG4gIC8vICAgbGV0IGltcGFjdFkgPSBnZXRSYW5kb21JbnQoLTMsIDMpO1xuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuYm9keS5jZW50ZXIueCk7XG4gIC8vICAgZXhwbG9zaW9uLnJlc2V0KHRoaXMuYm9keS5jZW50ZXIueCArIGltcGFjdFgsIHRoaXMuYm9keS5jZW50ZXIueSArIGltcGFjdFkpO1xuICAvLyAgIGV4cGxvc2lvbi5wbGF5KCdib29tJywgMTUsIGZhbHNlLCB0cnVlKTtcbiAgLy8gfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyB0aGlzLnNob290KCk7XG4gIH1cblxuICBkYW1hZ2UoKSB7XG4gICAgY29uc29sZS5sb2coXCJlbmVteSBkYW1hZ2VcIiArIHRoaXMuaGVhbHRoKTtcbiAgICB0aGlzLmZpcmVQYXJ0aWNsZXMoKTtcbiAgICB0aGlzLmhlYWx0aC0tO1xuICAgIGlmICh0aGlzLmhlYWx0aCA9PT0gMCkge1xuICAgICAgdGhpcy5leHBsb2RlKCk7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBzaG9vdCgpIHtcbiAgICBpZiAoIXRoaXMuYWxpdmUgfHwgdGhpcy5uZXh0U2hvdEF0ID4gdGhpcy5nYW1lLnRpbWUubm93KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5uZXh0U2hvdEF0ID0gdGhpcy5nYW1lLnRpbWUubm93ICsgdGhpcy5zaG90RGVsYXk7XG4gICAgbGV0IGJ1bGxldDtcbiAgICBidWxsZXQgPSB0aGlzLmJ1bGxldFBvb2wuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgIGJ1bGxldC5yZXNldCh0aGlzLngsIHRoaXMueSk7XG4gICAgYnVsbGV0LmJvZHkudmVsb2NpdHkueSA9IDE1MDtcbiAgfVxuXG4gIGV4cGxvZGUoKSB7XG4gICAgdGhpcy5lbWl0dGVyLnNldFlTcGVlZCgtMjAwLCAyMDApO1xuICAgIHRoaXMuZW1pdHRlci5zZXRYU3BlZWQoLTEwMCwgMTAwKTtcbiAgICB0aGlzLmVtaXR0ZXIueCA9IHRoaXMuYm9keS5jZW50ZXIueDtcbiAgICB0aGlzLmVtaXR0ZXIueSA9IHRoaXMuYm9keS5jZW50ZXIueTtcbiAgICB0aGlzLmVtaXR0ZXIuc3RhcnQodHJ1ZSAsIDEwMDAsIDEwLCAyNSk7XG4gIH1cblxuXG4gIGZpcmVQYXJ0aWNsZXMoKSB7XG4gICAgdGhpcy5lbWl0dGVyLnNldFlTcGVlZCgxMDAsIDIwMCk7XG4gICAgdGhpcy5lbWl0dGVyLnNldFhTcGVlZCgtMTAwLCAxMDApO1xuICAgIHRoaXMuZW1pdHRlci54ID0gdGhpcy5ib2R5LmNlbnRlci54O1xuICAgIHRoaXMuZW1pdHRlci55ID0gdGhpcy5ib2R5LmNlbnRlci55O1xuICAgIHRoaXMuZW1pdHRlci5zdGFydCh0cnVlICwgMzAwLCAxMCwgMTApO1xuICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWxzL0VuZW15LmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZSh4KSB7XG4gICAgICAgIHJldHVybiB4ICogeDtcbiAgICB9XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9oZWxwZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9