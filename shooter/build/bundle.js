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
	    _this.emitter.setYSpeed(-100, -200);
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
	  }, {
	    key: 'explode',
	    value: function explode(sprite) {
	      if (this.explosionPool.countDead() === 0) {
	        console.log("no expl");
	        return;
	      }
	      var explosion = this.explosionPool.getFirstExists(false);
	      var impactX = (0, _helper.getRandomInt)(-3, 3);
	      var impactY = (0, _helper.getRandomInt)(-3, 3);
	      console.log(this.body.center.x);
	      explosion.reset(this.body.center.x + impactX, this.body.center.y + impactY);
	      explosion.play('boom', 15, false, true);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      // this.shoot();
	    }
	  }, {
	    key: 'damage',
	    value: function damage() {
	      console.log("enemy damage");
	      this.fireParticles();
	      // this.health--;
	      // if (this.health === 0) {
	      //   this.explode();
	      //   this.destroy();
	      // }
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
	    key: 'fireParticles',
	    value: function fireParticles() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGU1YTNjOTFjM2YxNTk1NWZjODQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvQm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzL1ByZWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcy9NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvUGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2hlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDaENNLElBQUk7YUFBSixJQUFJOztBQUVSLFlBRkksSUFBSSxHQUVNOzJCQUZWLElBQUk7Ozs7d0VBQUosSUFBSSxhQUdBLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSTs7QUFHNUMsV0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0saUJBQU8sQ0FBQztBQUM3QixXQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxvQkFBVSxDQUFDO0FBQ25DLFdBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLGlCQUFPLENBQUM7QUFDN0IsV0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0saUJBQU87O0FBRTVCLFdBQUssS0FBSyxDQUFDLEtBQUss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RSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUVqRyxpQkFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9DLGlCQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ2pELGVBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztVQUNqRztRQUNGO01BRUY7OzttQ0FHYTtBQUNaLFdBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsV0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFekIsV0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pILFdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7QUFHdkUsV0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsYUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7O0FBQUMsUUFFcEM7QUFDRCxXQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzs7QUFHaEUsV0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDNUIsYUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNuQyxhQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDcEMsYUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNuQyxhQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hCLE1BQU07QUFDTCxhQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCOzs7QUFJRCxXQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtBQUNqRyxhQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekQsYUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDckQsYUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckQ7TUFFRjs7O3FDQUVlO0FBQ2QsV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLFdBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNwQyxXQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUV2Qzs7OytCQUVTO0FBQ1IsV0FBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7TUFDdEI7OztVQXpJa0IsTUFBTTtHQUFTLE1BQU0sQ0FBQyxNQUFNOzttQkFBNUIsTUFBTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDQU4sS0FBSzthQUFMLEtBQUs7O0FBRXhCLFlBRm1CLEtBQUssQ0FFWixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUU7MkJBRlosS0FBSzs7d0VBQUwsS0FBSyxhQUdoQixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZOztBQUM5QixXQUFLLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsV0FBSyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM1QixXQUFLLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ25ELFdBQUssVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDckQsV0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sUUFBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RELFdBQUssS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNqQixXQUFLLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDaEIsV0FBSyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0FBQ3BDLFdBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFFaEMsV0FBSyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3hCLFdBQUssZUFBZSxFQUFFOzs7QUFHdEIsV0FBSyxPQUFPLEdBQUcsTUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFLLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBSyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3BFLFdBQUssT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQyxXQUFLLE9BQU8sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBQzNCLFdBQUssT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2xDLFdBQUssT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUMsV0FBSyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUN2QixXQUFLLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQyxXQUFLLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbEMsV0FBSyxPQUFPLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztBQUM3QixXQUFLLE9BQU8sQ0FBQyxXQUFXLEdBQUcsQ0FBQzs7QUFFNUIsV0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsT0FBTSxDQUFDO0FBQy9CLFdBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7SUFFbEI7O2dCQWhDa0IsS0FBSzs7d0NBa0NMO0FBQ2pCLFdBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDeEMsV0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ2xDLFdBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQ3hELFdBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNuRCxXQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDeEMsV0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQzs7O0FBR3ZDLFdBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hELFdBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDOztBQUVqRCxXQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNwQixXQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztNQUN0Qjs7O3VDQUVpQjtBQUNoQixXQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzNDLFdBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUNyQyxXQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztBQUMzRCxXQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDcEQsV0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzNDLFdBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7O0FBRTNDLFdBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsU0FBUyxFQUFFO0FBQzlDLGtCQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUM7TUFDSjs7OzZCQUVPLE1BQU0sRUFBRTtBQUNkLFdBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUU7QUFDeEMsZ0JBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkIsZ0JBQU87UUFDUjtBQUNELFdBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pELFdBQUksT0FBTyxHQUFHLFlBdEVULFlBQVksRUFzRVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEMsV0FBSSxPQUFPLEdBQUcsWUF2RVQsWUFBWSxFQXVFVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsQyxjQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLGdCQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQzVFLGdCQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO01BQ3pDOzs7OEJBRVE7O01BRVI7Ozs4QkFFUTtBQUNQLGNBQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDNUIsV0FBSSxDQUFDLGFBQWEsRUFBRTs7Ozs7O0FBQUMsTUFNdEI7Ozs2QkFFTztBQUNOLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO0FBQ3ZELGdCQUFPO1FBQ1I7O0FBRUQsV0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUN0RCxXQUFJLE1BQU0sYUFBQztBQUNYLGFBQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQyxhQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLGFBQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7TUFDOUI7OztxQ0FHZTtBQUNkLFdBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNwQyxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDcEMsV0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFHLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFFeEM7OztVQTVHa0IsS0FBSztHQUFTLE1BQU0sQ0FBQyxNQUFNOzttQkFBM0IsS0FBSyxDOzs7Ozs7Ozs7Ozs7U0NEVixZQUFZLEdBQVosWUFBWTtTQUlaLE1BQU0sR0FBTixNQUFNO0FBSmYsVUFBUyxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUNyQyxVQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7RUFDMUQ7O0FBRU0sVUFBUyxNQUFNLENBQUMsQ0FBQyxFQUFFO0FBQ2xCLFVBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGRlNWEzYzkxYzNmMTU5NTVmYzg0XG4gKiovIiwiXG5pbXBvcnQgQm9vdCBmcm9tICcuL3N0YXRlcy9Cb290JztcbmltcG9ydCBQcmVsb2FkIGZyb20gJy4vc3RhdGVzL1ByZWxvYWQnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9zdGF0ZXMvTWVudSc7XG5pbXBvcnQgUGxheSBmcm9tICcuL3N0YXRlcy9QbGF5JztcblxuY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5HYW1lIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigzMjAsIDQ4MCwgUGhhc2VyLkFVVE8sICdjb250ZW50JywgbnVsbCk7XG5cbiAgICAvLyBBZGQgc3RhdGVzXG4gICAgdGhpcy5zdGF0ZS5hZGQoJ0Jvb3QnLCBCb290KTtcbiAgICB0aGlzLnN0YXRlLmFkZCgnUHJlbG9hZCcsIFByZWxvYWQpO1xuICAgIHRoaXMuc3RhdGUuYWRkKCdNZW51JywgTWVudSk7XG4gICAgdGhpcy5zdGF0ZS5hZGQoJ1BsYXknLCBQbGF5KTtcbiAgICAvLyBTdGFydCB0aGUgZ2FtZSBzdGF0ZSAnYm9vdCcgZm9yIHByb2RcbiAgICB0aGlzLnN0YXRlLnN0YXJ0KCdCb290Jyk7XG4gIH1cblxufVxuXG5uZXcgR2FtZSgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vdCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG4gIFxuICBwcmVsb2FkKCkge1xuICAgIHRoaXMubG9hZC5pbWFnZSgncHJlbG9hZGVyQmFyJywgJ2Fzc2V0cy9wcmVsb2FkZXItYmFyLnBuZycpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIC8vIE5vIG11bHRpdG91Y2ggc3VwcG9ydCA9IDFcbiAgICB0aGlzLmlucHV0Lm1heFBvaW50ZXJzID0gMTtcbiAgICAvLyBQaGFzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHBhdXNlIGlmIHRoZSBicm93c2VyIHRhYiBsb3NlcyBmb2N1c1xuICAgIHRoaXMuc3RhZ2UuZGlzYWJsZVZpc2liaWxpdHlDaGFuZ2UgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuZ2FtZS5kZXZpY2UuZGVza3RvcCkge1xuICAgICAgLy8gRGVza3RvcCBzcGVjaWZpYyBzZXR0aW5nc1xuICAgICAgLy8gdGhpcy5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNb2JpbGUgc3BlY2lmaWMgc2V0dGluZ3NcbiAgICAgIHRoaXMuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcbiAgICAgIHRoaXMuc2NhbGUubWluV2lkdGggID0gMzIwO1xuICAgICAgdGhpcy5zY2FsZS5taW5IZWlnaHQgPSA0ODA7XG4gICAgICB0aGlzLnNjYWxlLm1heFdpZHRoICA9IDEwMjQ7XG4gICAgICB0aGlzLnNjYWxlLm1heEhlaWdodCA9IDc2ODtcbiAgICAgIC8vIHRoaXMuc2NhbGUuZm9yY2VMYW5kc2NhcGUgPSB0cnVlO1xuICAgICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xuICAgICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSBmYWxzZTtcbiAgICAgIC8vIHRoaXMuc2NhbGUuc2V0U2NyZWVuU2l6ZSh0cnVlKTtcbiAgICB9IFxuXG4gICAgdGhpcy5zdGF0ZS5zdGFydCgnUHJlbG9hZCcpO1xuICB9XG5cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdGF0ZXMvQm9vdC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWQgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuICBcbiAgcHJlbG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIlByZWxvYWRcIik7XG4gICAgLy8gU2hvdyB0aGUgbG9hZGluZyBwcm9ncmVzcyBiYXIgYXNzZXQgd2UgbG9hZGVkIGluIGJvb3QuanNcbiAgICB0aGlzLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjMmQyZDJkJztcblxuICAgIHRoaXMucHJlbG9hZEJhciA9IHRoaXMuYWRkLnNwcml0ZSg0MTIsIDQwMCwgJ3ByZWxvYWRlckJhcicpO1xuICAgIHRoaXMuYWRkLnRleHQoNTEwLCAzNjAsIFwiTG9hZGluZy4uLlwiLCB7Zm9udDogXCIzMnB4IG1vbm9zcGFjZVwiLCBmaWxsOiAnI2ZmZid9KS5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuXG4gICAgLy8gU2V0IGxvYWRlciBzcHJpdGVcbiAgICB0aGlzLmxvYWQuc2V0UHJlbG9hZFNwcml0ZSh0aGlzLnByZWxvYWRCYXIpO1xuXG4gICAgLy8gTG9hZCByZXN0IG9mIHRoZSBhc3NldHNcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3RpdGxlcGFnZScsICdhc3NldHMvdGl0bGVwYWdlLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnc2VhJywgJ2Fzc2V0cy9zZWEucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdidWxsZXQnLCAnYXNzZXRzL2J1bGxldC5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2VuZW15QnVsbGV0JywgJ2Fzc2V0cy9lbmVteS1idWxsZXQucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdwb3dlcnVwMScsICdhc3NldHMvcG93ZXJ1cDEucG5nJyk7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdncmVlbkVuZW15JywgJ2Fzc2V0cy9lbmVteS5wbmcnLCAzMiwgMzIpO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnd2hpdGVFbmVteScsICdhc3NldHMvc2hvb3RpbmctZW5lbXkucG5nJywgMzIsIDMyKTtcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2Jvc3MnLCAnYXNzZXRzL2Jvc3MucG5nJywgOTMsIDc1KTtcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2V4cGxvc2lvbicsICdhc3NldHMvZXhwbG9zaW9uLnBuZycsIDMyLCAzMik7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdwbGF5ZXInLCAnYXNzZXRzL3BsYXllci5wbmcnLCA2NCwgNjQpO1xuICAgIHRoaXMubG9hZC5hdWRpbygnZXhwbG9zaW9uJywgWydhc3NldHMvZXhwbG9zaW9uLndhdiddKTtcbiAgICB0aGlzLmxvYWQuYXVkaW8oJ3BsYXllckV4cGxvc2lvbicsIFsnYXNzZXRzL3BsYXllci1leHBsb3Npb24ud2F2J10pO1xuICAgIHRoaXMubG9hZC5hdWRpbygnZW5lbXlGaXJlJywgWydhc3NldHMvZW5lbXktZmlyZS53YXYnXSk7XG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdwbGF5ZXJGaXJlJywgWydhc3NldHMvcGxheWVyLWZpcmUud2F2J10pO1xuICAgIHRoaXMubG9hZC5hdWRpbygncG93ZXJVcCcsIFsnYXNzZXRzL3Bvd2VydXAud2F2J10pO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuXG4gICAgdGhpcy5wcmVsb2FkQmFyLmNyb3BFbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5zdGF0ZS5zdGFydCgnTWVudScpO1xuICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RhdGVzL1ByZWxvYWQuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcbiAgcHJlbG9hZCgpIHtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3RpdGxlcGFnZScsICcuL2Fzc2V0cy90aXRsZXBhZ2UucG5nJylcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIk1lbnVcIik7XG4gICAgbGV0IHRpdGxlcGFnZSA9IHRoaXMuYWRkLnNwcml0ZSgwLCAwLCAndGl0bGVwYWdlJyk7XG5cbiAgICB0aGlzLnRpdGxlVGV4dCAgID0gdGhpcy5hZGQudGV4dCgxNjAsIDEwMCwgXCJTaW1wbGUgU2hvb3RlclwiLCB7Zm9udDogXCIzMnB4IEZpcmEgTW9ub1wiLCBmaWxsOiBcIiNmZmZcIiwgYWxpZ246ICdjZW50ZXInfSkuYW5jaG9yLnNldFRvKC41LCAuNSk7XG4gICAgdGhpcy5sb2FkaW5nVGV4dCA9IHRoaXMuYWRkLnRleHQoMTYwLCA0MDAsIFwiQ2xpY2sgdG8gc3RhcnRcIiwgeyBmb250OiBcIjE1cHggRmlyYSBNb25vXCIsIGZpbGw6IFwiI2ZmZlwiIH0pO1xuICAgIHRoaXMubG9hZGluZ1RleHQuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlNQQUNFQkFSKSB8fMKgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmlzRG93bikge1xuICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICB9XG4gIH1cblxuICBzdGFydEdhbWUoKSB7XG4gICAgdGhpcy5zdGF0ZS5zdGFydCgnUGxheScpO1xuICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RhdGVzL01lbnUuanNcbiAqKi8iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4uL21vZGVscy9QbGF5ZXInO1xuaW1wb3J0IEVuZW15IGZyb20gJy4uL21vZGVscy9FbmVteSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXkgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIHByZWxvYWQoKSB7XG5cbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NlYScsICdhc3NldHMvc2VhLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnYnVsbGV0JywgJ2Fzc2V0cy9idWxsZXQucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdlbmVteUJ1bGxldCcsICdhc3NldHMvZW5lbXktYnVsbGV0LnBuZycpO1xuXG4gICAgLy8gTG9hZCBwb3dlcnVwXG4gICAgdGhpcy5sb2FkLmltYWdlKCdwb3dlcnVwMScsICdhc3NldHMvcG93ZXJ1cDEucG5nJyk7XG4gICAgLy8gTG9hZCBzaGl0XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdncmVlbkVuZW15JywgJ2Fzc2V0cy9lbmVteS5wbmcnLCAzMiwgMzIpO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnd2hpdGVFbmVteScsICdhc3NldHMvc2hvb3RpbmctZW5lbXkucG5nJywgMzIsIDMyKTtcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2Jvc3MnLCAnYXNzZXRzL2Jvc3MucG5nJywgOTMsIDc1KTtcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2V4cGxvc2lvbicsICdhc3NldHMvZXhwbG9zaW9uLnBuZycsIDY0LCA2NCk7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdwbGF5ZXInLCAnYXNzZXRzL3BsYXllcl9mdWxsLnBuZycsIDY0LCA2NCwgMTIpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnZmlyZScsICdhc3NldHMvZmlyZS5wbmcnKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLnNlYSA9IHRoaXMuYWRkLnRpbGVTcHJpdGUoMCwgMCwgMzIwLCA0ODAsICdzZWEnKTtcbiAgICB0aGlzLnNldHVwUGxheWVyKCk7XG4gICAgdGhpcy5lbmVteSA9IG5ldyBFbmVteSh0aGlzLmdhbWUsIDE2MCwgMTAwLCAnZ3JlZW5FbmVteScpO1xuXG4gICAgLy8gdGhpcy5zZXR1cEVuZW1pZXMoKTtcbiAgICAvLyB0aGlzLnNldHVwRXhwbG9zaW9ucygpO1xuICAgIHRoaXMuY3Vyc29ycyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuICAgIHRoaXMud29ybGRTcGVlZCA9IDAuMjU7XG5cbiAgICAvLyB0aWhzLnNldHVwUGxheWVySWNvbnMoKTtcbiAgICB0aGlzLnNldHVwVGV4dCgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMucGxheWVyLmhhbmRsZUlucHV0KCk7XG4gICAgdGhpcy5zZWEudGlsZVBvc2l0aW9uLnkgKz0gdGhpcy53b3JsZFNwZWVkO1xuICAgIHRoaXMuY2hlY2tDb2xsaXNpb25zKCk7XG4gICAgLy8gdGhpcy5zcGF3bkVuZW1pZXMoKTtcbiAgICAvLyB0aGlzLmVuZW15RmlyZSgpO1xuICAgIHRoaXMuZGV0ZWN0UGxheWVySW5wdXQoKTtcbiAgICB0aGlzLmRlbGF5RWZmZWN0KCk7XG4gIH1cblxuICBkZXRlY3RQbGF5ZXJJbnB1dCgpIHtcbiAgICBpZiAodGhpcy5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlEpKSB0aGlzLnF1aXRHYW1lKCk7XG4gIH1cblxuXG4gIHNldHVwRW5lbWllcygpIHtcblxuICAgIFxuXG4gICAgdGhpcy5lbmVteVBvb2wgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgIHRoaXMuZW5lbXlQb29sLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgIHRoaXMuZW5lbXlQb29sLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcbiAgICB0aGlzLmVuZW15UG9vbC5jcmVhdGVNdWx0aXBsZSg1MCwgJ2dyZWVuRW5lbXknKTtcbiAgICB0aGlzLmVuZW15UG9vbC5zZXRBbGwoJ2FuY2hvci54JywgMC41KTtcbiAgICB0aGlzLmVuZW15UG9vbC5zZXRBbGwoJ2FuY2hvci55JywgMC41KTtcbiAgICB0aGlzLmVuZW15UG9vbC5zZXRBbGwoJ291dE9mQm91bmRzS2lsbCcsIHRydWUpO1xuICAgIHRoaXMuZW5lbXlQb29sLnNldEFsbCgncmV3YXJkJywgMTAwLCBmYWxzZSwgZmFsc2UsIDAsIHRydWUpO1xuXG4gIH1cblxuXG4gIHNldHVwRXhwbG9zaW9ucygpIHtcbiAgICB0aGlzLmV4cGxvc2lvblBvb2wgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgIHRoaXMuZXhwbG9zaW9uUG9vbC5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICB0aGlzLmV4cGxvc2lvblBvb2wucGh5c2ljc0JvZHlUeXBlID0gUGhhc2VyLlBoeXNpY3MuQVJDQURFO1xuICAgIHRoaXMuZXhwbG9zaW9uUG9vbC5jcmVhdGVNdWx0aXBsZSgxMDAsICdleHBsb3Npb24nKTtcbiAgICB0aGlzLmV4cGxvc2lvblBvb2wuc2V0QWxsKCdhbmNob3IueCcsIDAuNSk7XG4gICAgdGhpcy5leHBsb3Npb25Qb29sLnNldEFsbCgnYW5jaG9yLnknLCAwLjUpO1xuICAgIC8vIFNldCBleHBsb3Npb24gYW5pbWF0aW9uXG4gICAgdGhpcy5leHBsb3Npb25Qb29sLmZvckVhY2goZnVuY3Rpb24gKGV4cGxvc2lvbikge1xuICAgICAgZXhwbG9zaW9uLmFuaW1hdGlvbnMuYWRkKCdib29tJyk7XG4gICAgfSk7XG4gIH1cblxuICBzZXR1cFBsYXllckljb25zKCkge1xuICAgIHRoaXMucG93ZXJVcFBvb2wgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgIHRoaXMucG93ZXJVcFBvb2wuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5wb3dlclVwUG9vbC5waHlzaWNzQm9keVR5cGUgPSBQaGFzZXIuUGh5c2ljcy5BUkNBREU7XG4gICAgdGhpcy5wb3dlclVwUG9vbC5jcmVhdGVNdWx0aXBsZSg1LCAncG93ZXJ1cDEnKTtcbiAgICB0aGlzLnBvd2VyVXBQb29sLnNldEFsbCgnYW5jaG9yLngnLCAwLjUpO1xuICAgIHRoaXMucG93ZXJVcFBvb2wuc2V0QWxsKCdhbmNob3IueScsIDAuNSk7XG4gICAgdGhpcy5wb3dlclVwUG9vbC5zZXRBbGwoJ291dE9mQm91bmRzS2lsbCcsIHRydWUpO1xuICAgIHRoaXMucG93ZXJVcFBvb2wuc2V0QWxsKCdjaGVja1dvcmxkQm91bmRzJywgdHJ1ZSk7XG4gICAgdGhpcy5wb3dlclVwUG9vbC5zZXRBbGwoJ3Jld2FyZCcsIDEwMCwgZmFsc2UsIGZhbHNlLCAwLCB0cnVlKTtcblxuICAgIHRoaXMubGl2ZXMgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBsZXQgbGlmZSA9IHRoaXMubGl2ZXMuY3JlYXRlKDI0MCArICgzMCAqIGkpLCAzMCwgJ3BsYXllcicpO1xuICAgICAgbGlmZS5zY2FsZS5zZXRUbygwLjQsIDAuNCk7XG4gICAgICBsaWZlLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgfVxuICB9XG5cbiAgc2V0dXBUZXh0KCkge1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gdGhpcy5hZGQudGV4dCgxNjAsIDQwMCwgJ1VzZSBBcnJvdyBLZXlzIHRvIE1vdmUsIFggdG8gRmlyZVxcbicsIHtcbiAgICAgICAgZm9udDogJzE0cHggRmlyYSBNb25vJyxcbiAgICAgICAgZmlsbDogJyNmZmYnLFxuICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgIH0pO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgdGhpcy5pbnN0RXhwaXJlID0gdGhpcy50aW1lLm5vdyArIDUwMDA7XG5cbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnNjb3JlVGV4dCA9IHRoaXMuYWRkLnRleHQoXG4gICAgICAxNjAsIDMwLCAnU2NvcmU6ICcgKyB0aGlzLnNjb3JlLCB7XG4gICAgICAgIGZvbnQ6ICcyMHB4IEZpcmEgTW9ubycsXG4gICAgICAgIGZpbGw6ICcjZmZmJyxcbiAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICB9KTtcbiAgICB0aGlzLnNjb3JlVGV4dC5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICB9XG5cbiAgY2hlY2tDb2xsaXNpb25zKCkge1xuICAgIHRoaXMucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChcbiAgICAgIHRoaXMucGxheWVyLmJ1bGxldFBvb2wsXG4gICAgICB0aGlzLmVuZW15LFxuICAgICAgdGhpcy5lbmVteUhpdCxcbiAgICAgIG51bGwsXG4gICAgICB0aGlzXG4gICAgKTtcblxuICAgLy8gIHRoaXMucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChcbiAgIC8vICAgIHRoaXMuYnVsbGV0UG9vbCxcbiAgIC8vICAgIHRoaXMuc2hvb3RlclBvb2wsXG4gICAvLyAgICB0aGlzLmVuZW15SGl0LFxuICAgLy8gICAgbnVsbCxcbiAgIC8vICAgIHRoaXNcbiAgIC8vICApO1xuXG4gICAvLyAgdGhpcy5waHlzaWNzLmFyY2FkZS5vdmVybGFwKFxuICAgLy8gICAgdGhpcy5wbGF5ZXIsXG4gICAvLyAgICB0aGlzLmVuZW15UG9vbCxcbiAgIC8vICAgIHRoaXMucGxheWVySGl0LFxuICAgLy8gICAgbnVsbCxcbiAgIC8vICAgIHRoaXNcbiAgIC8vICApO1xuXG4gICAvLyB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAoXG4gICAvLyAgICB0aGlzLnBsYXllcixcbiAgIC8vICAgIHRoaXMuc2hvb3RlclBvb2wsXG4gICAvLyAgICB0aGlzLnBsYXllckhpdCxcbiAgIC8vICAgIG51bGwsXG4gICAvLyAgICB0aGlzXG4gICAvLyAgKTtcblxuICAgLy8gICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAoXG4gICAvLyAgICB0aGlzLnBsYXllcixcbiAgIC8vICAgIHRoaXMuZW5lbXlCdWxsZXRQb29sLFxuICAgLy8gICAgdGhpcy5wbGF5ZXJIaXQsXG4gICAvLyAgICBudWxsLFxuICAgLy8gICAgdGhpc1xuICAgLy8gICk7XG5cbiAgIC8vICAgdGhpcy5waHlzaWNzLmFyY2FkZS5vdmVybGFwKFxuICAgLy8gICAgdGhpcy5wbGF5ZXIsXG4gICAvLyAgICB0aGlzLnBvd2VyVXBQb29sLFxuICAgLy8gICAgdGhpcy5wbGF5ZXJIaXQsXG4gICAvLyAgICBudWxsLFxuICAgLy8gICAgdGhpc1xuICAgLy8gICk7XG5cbiAgIC8vICBpZiAodGhpcy5ib3NzQXBwcm9hY2hpbmcgPT09IGZhbHNlKSB7XG4gICAvLyAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAoXG4gICAvLyAgICAgIHRoaXMuYnVsbGV0UG9vbCxcbiAgIC8vICAgICAgdGhpcy5ib3NzUG9vbCxcbiAgIC8vICAgICAgdGhpcy5lbmVteUhpdCxcbiAgIC8vICAgICAgbnVsbCxcbiAgIC8vICAgICAgdGhpc1xuICAgLy8gICAgKTtcblxuICAgLy8gICAgdGhpcy5waHlzaWNzLmFyY2FkZS5vdmVybGFwKFxuICAgLy8gICAgICB0aGlzLnBsYXllcixcbiAgIC8vICAgICAgdGhpcy5ib3NzUG9vbCxcbiAgIC8vICAgICAgdGhpcy5wbGF5ZXJIaXQsXG4gICAvLyAgICAgIG51bGwsXG4gICAvLyAgICAgIHRoaXNcbiAgIC8vICAgICk7XG4gICAvLyAgfVxuICB9XG5cbiAgc3Bhd25FbmVtaWVzKCkge1xuICAgIFxuICB9XG5cbiAgZW5lbXlGaXJlKCkge1xuICAgIHRoaXMuc2hvb3RlclBvb2wuZm9yRWFjaEFsaXZlKGZ1bmN0aW9uKGVuZW15KSB7XG4gICAgICBpZiAodGhpcy50aW1lLm5vdyA+IGVuZW15Lm5leHRTaG90QXQgJiYgdGhpcy5lbmVteUJ1bGxldFBvb2wuY291bnREZWFkKCkgPiAwKSB7XG4gICAgICAgIHZhciBidWxsZXQgPSB0aGlzLmVuZW15QnVsbGV0UG9vbC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgICAgIGJ1bGxldC5yZXNldChlbmVteS54LCBlbmVteS55KTtcbiAgICAgICAgdGhpcy5waHlzaWNzLmFyY2FkZS5tb3ZlVG9PYmplY3QoYnVsbGV0LCB0aGlzLnBsYXllciwgMTUwKTtcbiAgICAgICAgZW5lbXkubmV4dFNob3RBdCA9IHRoaXMudGltZS5ub3cgKyB0aGlzLnNob290ZXJTaG90RGVsYXk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICBpZiAodGhpcy5ib3NzQXBwcm9hY2hpbmcgPT09IGZhbHNlICYmIHRoaXMuYm9zcy5hbGl2ZSAmJiBcbiAgICAgICAgdGhpcy5ib3NzLm5leHRTaG90QXQgPCB0aGlzLnRpbWUubm93ICYmXG4gICAgICAgIHRoaXMuZW5lbXlCdWxsZXRQb29sLmNvdW50RGVhZCgpID4gOSkge1xuXG4gICAgICB0aGlzLmJvc3MubmV4dFNob3RBdCA9IHRoaXMudGltZS5ub3cgKyAxMDAwO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAvLyBwcm9jZXNzIDIgYnVsbGV0cyBhdCBhIHRpbWVcbiAgICAgICAgdmFyIGxlZnRCdWxsZXQgPSB0aGlzLmVuZW15QnVsbGV0UG9vbC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgICAgIGxlZnRCdWxsZXQucmVzZXQodGhpcy5ib3NzLnggLSAxMCAtIGkgKiAxMCwgdGhpcy5ib3NzLnkgKyAyMCk7XG4gICAgICAgIHZhciByaWdodEJ1bGxldCA9IHRoaXMuZW5lbXlCdWxsZXRQb29sLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICAgICAgcmlnaHRCdWxsZXQucmVzZXQodGhpcy5ib3NzLnggKyAxMCArIGkgKiAxMCwgdGhpcy5ib3NzLnkgKyAyMCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYm9zcy5oZWFsdGggPiAyNTApIHtcbiAgICAgICAgICAvLyBhaW0gZGlyZWN0bHkgYXQgdGhlIHBsYXllclxuICAgICAgICAgIHRoaXMucGh5c2ljcy5hcmNhZGUubW92ZVRvT2JqZWN0KGxlZnRCdWxsZXQsIHRoaXMucGxheWVyLCAxNTApO1xuICAgICAgICAgIHRoaXMucGh5c2ljcy5hcmNhZGUubW92ZVRvT2JqZWN0KHJpZ2h0QnVsbGV0LCB0aGlzLnBsYXllciwgMTUwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBhaW0gc2xpZ2h0bHkgb2ZmIGNlbnRlciBvZiB0aGUgcGxheWVyXG4gICAgICAgICAgdGhpcy5waHlzaWNzLmFyY2FkZS5tb3ZlVG9YWShcbiAgICAgICAgICAgIGxlZnRCdWxsZXQsIHRoaXMucGxheWVyLnggLSBpICogMTAwLCB0aGlzLnBsYXllci55LCAxNTBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucGh5c2ljcy5hcmNhZGUubW92ZVRvWFkoXG4gICAgICAgICAgICByaWdodEJ1bGxldCwgdGhpcy5wbGF5ZXIueCArIGkgKiAxMDAsIHRoaXMucGxheWVyLnksIDE1MFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIGRlbGF5RWZmZWN0KCkge1xuXG4gICAgLy8gRmFkZSBvdXQgaW5zdHJ1Y3Rpb24gdGV4dFxuICAgIGlmICh0aGlzLmluc3RydWN0aW9ucy5leGlzdHMgJiYgdGhpcy50aW1lLm5vdyA+IHRoaXMuaW5zdEV4cGlyZSkge1xuICAgICAgLy8gdGhpcy5pbnN0cnVjdGlvbnMueCA9IHRoaXMuaW5zdHJ1Y3Rpb25zLnggLSAxMDtcbiAgICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5pbnN0cnVjdGlvbnMpLnRvKCB7IGFscGhhOiAwIH0sIDEwMCwgXCJMaW5lYXJcIiwgdHJ1ZSk7XG4gICAgICBpZiAodGhpcy5pbnN0cnVjdGlvbnMuYWxwaGEgPCAwLjAwMSkgdGhpcy5pbnN0cnVjdGlvbnMuZGVzdHJveSgpO1xuICAgIH1cbi8qXG4gICAgaWYgKHRoaXMuZ2hvc3RVbnRpbCAmJiB0aGlzLmdob3N0VW50aWwgPCB0aGlzLnRpbWUubm93KSB7XG4gICAgICB0aGlzLmdob3N0VW50aWwgPSBudWxsO1xuICAgICAgdGhpcy5wbGF5ZXIucGxheSgnZmx5Jyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2hvd1JldHVybiAmJiB0aGlzLnRpbWUubm93ID4gdGhpcy5zaG93UmV0dXJuKSB7XG4gICAgICB0aGlzLnJldHVyblRleHQgPSB0aGlzLmFkZC50ZXh0KDE2MCwgMzIwLCBcbiAgICAgICAgJ1ByZXNzIFogb3IgVGFwIEdhbWUgdG8gZ28gYmFjayB0byBNYWluIE1lbnUnLCB7XG4gICAgICAgICAgZm9udDogJzE2cHggc2VyaWYnLFxuICAgICAgICAgIGZpbGw6ICcjZmZmJ1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLnJldHVyblRleHQuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICAgIHRoaXMuc2hvd1JldHVybiA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJvc3NBcHByb2FjaGluZyAmJiB0aGlzLmJvc3MueSA+IDgwKSB7XG4gICAgICB0aGlzLmJvc3NBcHByb2FjaGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5ib3NzLmhlYWx0aCA9IDUwMDtcbiAgICAgIHRoaXMuYm9zcy5uZXh0U2hvdEF0ID0gMDtcblxuICAgICAgdGhpcy5ib3NzLmJvZHkudmVsb2NpdHkueSA9IDA7XG4gICAgICB0aGlzLmJvc3MuYm9keS52ZWxvY2l0eS54ID0gMjAwO1xuICAgICAgLy8gYWxsb3cgYm91bmNpbmcgb2ZmIHdvcmxkIGJvdW5kc1xuICAgICAgdGhpcy5ib3NzLmJvZHkuYm91bmNlLnggPSAxO1xuICAgICAgdGhpcy5ib3NzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcbiAgICB9XG4gICAgKi9cbiAgfVxuXG4gIGV4cGxvZGUoc3ByaXRlKSB7XG4gICAgaWYgKHRoaXMuZXhwbG9zaW9uUG9vbC5jb3VudERlYWQoKSA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXhwbG9zaW9uID0gdGhpcy5leHBsb3Npb25Qb29sLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICBleHBsb3Npb24ucmVzZXQoc3ByaXRlLngsIHNwcml0ZS55KTtcbiAgICBleHBsb3Npb24ucGxheSgnYm9vbScsIDE1LCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICBlbmVteUhpdChlbmVteSwgYnVsbGV0KSB7XG4gICAgY29uc29sZS5sb2coXCJlbmVteUhJdFwiKTtcbiAgICBidWxsZXQua2lsbCgpO1xuICAgIHRoaXMuYWRkVG9TY29yZSgxMCk7XG4gICAgdGhpcy5kYW1hZ2VFbmVteShlbmVteSwgMSk7XG4gIH1cblxuICBwbGF5ZXJIaXQocGxheWVyLCBlbmVteSkge1xuXG4gICAgaWYgKHRoaXMuZ2hvc3RVbnRpbCAmJiB0aGlzLmdob3N0VW50aWwgPiB0aGlzLnRpbWUubm93KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kYW1hZ2VFbmVteShlbmVteSwgNSk7XG4gICAgdmFyIGxpZmUgPSB0aGlzLmxpdmVzLmdldEZpcnN0QWxpdmUoKTtcbiAgICBpZiAobGlmZSkge1xuICAgICAgbGlmZS5raWxsKCk7XG4gICAgICB0aGlzLndlYXBvbkxldmVsID0gMDtcbiAgICAgIHRoaXMuZ2hvc3RVbnRpbCA9IHRoaXMudGltZS5ub3cgKyAyMDAwO1xuICAgICAgdGhpcy5wbGF5ZXIucGxheSgnZ2hvc3QnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5leHBsb2RlKHBsYXllcik7XG4gICAgICBwbGF5ZXIua2lsbCgpO1xuICAgICAgdGhpcy5kaXNwbGF5RW5kKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwbGF5ZXJQb3dlclVwKHBsYXllciwgcG93ZXJVcCkge1xuICAgIHRoaXMuYWRkVG9TY29yZShwb3dlclVwLnJld2FyZCk7XG4gICAgcG93ZXJVcC5raWxsKCk7XG4gICAgaWYgKHRoaXMud2VhcG9uTGV2ZWwgPCA1KSB7XG4gICAgICB0aGlzLndlYXBvbkxldmVsICs9IDE7XG4gICAgfVxuICB9XG5cbiAgZGFtYWdlRW5lbXkoZW5lbXksIGRhbWFnZSkge1xuICAgIC8vIGRldGFpbCA6IGh0dHA6Ly9kb2NzLnBoYXNlci5pby9QaGFzZXIuU3ByaXRlLmh0bWwjZGFtYWdlXG4gICAgZW5lbXkuZGFtYWdlKGRhbWFnZSk7XG4gICAgLy8gaWYgKGVuZW15LmFsaXZlKSB7XG4gICAgLy8gICBlbmVteS5wbGF5KCdoaXQnKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgdGhpcy5leHBsb2RlKGVuZW15KTtcbiAgICAvLyAgIHRoaXMuc3Bhd25Qb3dlclVwKGVuZW15KTtcbiAgICAvLyAgIHRoaXMuYWRkVG9TY29yZShlbmVteS5yZXdhcmQpO1xuXG4gICAgLy8gICBpZiAoZW5lbXkua2V5ID09PSAnYm9zcycpIHtcbiAgICAvLyAgICAgdGhpcy5lbmVteVBvb2wuZGVzdHJveSgpO1xuICAgIC8vICAgICB0aGlzLnNob290ZXJQb29sLmRlc3Ryb3koKTtcbiAgICAvLyAgICAgdGhpcy5ib3NzUG9vbC5kZXN0cm95KCk7XG4gICAgLy8gICAgIHRoaXMuZW5lbXlCdWxsZXRQb29sLmRlc3Ryb3koKTtcbiAgICAvLyAgICAgdGhpcy5kaXNwbGF5RW5kKHRydWUpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgfVxuXG4gIHNwYXduUG93ZXJVcChlbmVteSkge1xuICAgIGlmICh0aGlzLnBvd2VyVXBQb29sLmNvdW50RGVhZCgpID09PSAwIHx8IHRoaXMud2VhcG9uTGV2ZWwgPT09IDUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ybmQuZnJhYygpIDwgZW5lbXkuZHJvcFJhdGUpIHtcbiAgICAgICB2YXIgcG93ZXJVcCA9IHRoaXMucG93ZXJVcFBvb2wuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgICAgIHBvd2VyVXAucmVzZXQoZW5lbXkueCwgZW5lbXkueSk7XG4gICAgICAgcG93ZXJVcC5ib2R5LnZlbG9jaXR5LnkgPSAxMDA7XG4gICAgIH1cbiAgfVxuXG4gIHNwYXduQm9zcygpIHtcbiAgICB0aGlzLmJvc3NBcHByb2FjaGluZyA9IHRydWU7XG4gICAgdmFyIGJvc3MgPSB0aGlzLmJvc3NQb29sLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICB0aGlzLnBoeXNpY3MuZW5hYmxlKGJvc3MsIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgYm9zcy5yZXNldCgxNjAsIDAsIHRoaXMuYm9zc0luaXRpYWxIZWFsdGgpO1xuICAgIGJvc3MuYm9keS52ZWxvY2l0eS55ID0gMTU7XG4gICAgYm9zcy5wbGF5KCdmbHknKTtcblxuICAgIHRoaXMuZW5lbXlQb29sLmRlc3Ryb3koKTtcbiAgICAvLyB0aGlzLnNob290ZXJQb29sLmRlc3Ryb3koKTtcbiAgfVxuXG4gIGFkZFRvU2NvcmUoc2NvcmUpIHtcbiAgICB0aGlzLnNjb3JlICs9IHNjb3JlO1xuICAgIHRoaXMuc2NvcmVUZXh0LnRleHQgPSAnU2NvcmUgOiAnICsgdGhpcy5zY29yZTtcbiAgICAvLyBpZiAodGhpcy5zY29yZSA+PSAyMDAwMCAmJiB0aGlzLmJvc3NQb29sLmNvdW50RGVhZCgpID09IDEpIHtcbiAgICAvLyAgIHRoaXMuZW5lbXlQb29sLmRlc3Ryb3koKTtcbiAgICAvLyAgIHRoaXMuc2hvb3RlclBvb2wuZGVzdHJveSgpO1xuICAgIC8vICAgdGhpcy5lbmVteUJ1bGxldFBvb2wuZGVzdHJveSgpO1xuICAgIC8vICAgdGhpcy5kaXNwbGF5RW5kKHRydWUpO1xuICAgIC8vICAgdGhpcy5zcGF3bkJvc3MoKTtcbiAgICAvLyB9XG4gIH1cblxuICBkaXNwbGF5RW5kKHdpbikge1xuICAgIGlmICh0aGlzLmVuZFRleHQgJiYgdGhpcy5lbmRUZXh0LmV4aXN0cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtZXNzYWdlID0gd2luID8gJ1lvbyBXaW4hISEnIDogJ0dhbWUgT3ZlciEnO1xuICAgIHRoaXMuZW5kVGV4dCA9IHRoaXMuYWRkLnRleHQoMTYwLCAyNDAsIG1lc3NhZ2UsIHtcbiAgICAgIGZvbnQ6ICc0OHB4IHNlcmlmJywgXG4gICAgICBmaWxsOiAnI2YwMCdcbiAgICB9KTtcbiAgICB0aGlzLmVuZFRleHQuYW5jaG9yLnNldFRvKDAuNSwgMCk7XG4gICAgdGhpcy5zaG93UmV0dXJuID0gdGhpcy50aW1lLm5vdyArIDIwMDA7XG4gIH1cblxuICBxdWl0R2FtZShwb2ludGVyKSB7XG5cbiAgICAvLyAgSGVyZSB5b3Ugc2hvdWxkIGRlc3Ryb3kgYW55dGhpbmcgeW91IG5vIGxvbmdlciBuZWVkLlxuICAgIC8vICBTdG9wIG11c2ljLCBkZWxldGUgc3ByaXRlcywgcHVyZ2UgY2FjaGVzLCBmcmVlIHJlc291cmNlcywgYWxsIHRoYXQgZ29vZCBzdHVmZi5cbiAgICB0aGlzLnNlYS5kZXN0cm95KCk7XG4gICAgdGhpcy5wbGF5ZXIuZGVzdHJveSgpO1xuICAgIC8vIHRoaXMuZW5lbXlQb29sLmRlc3Ryb3koKTtcbiAgICAvLyB0aGlzLmJ1bGxldFBvb2wuZGVzdHJveSgpO1xuICAgIC8vIHRoaXMuZXhwbG9zaW9uUG9vbC5kZXN0cm95KCk7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMuZGVzdHJveSgpO1xuICAgIHRoaXMuc2NvcmVUZXh0LmRlc3Ryb3koKTtcbiAgICAvLyB0aGlzLnJldHVyblRleHQuZGVzdHJveSgpO1xuXG4gICAgLy8gIFRoZW4gbGV0J3MgZ28gYmFjayB0byB0aGUgbWFpbiBtZW51LlxuICAgIHRoaXMuc3RhdGUuc3RhcnQoJ01lbnUnKTtcbiAgfVxuXG5cbiAgc2V0dXBQbGF5ZXIoKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZ2FtZSwgMTYwLCA0NTAsICdwbGF5ZXInKTtcbiAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0YXRlcy9QbGF5LmpzXG4gKiovIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkge1xuICAgIHN1cGVyKGdhbWUsIHgsIHksICdwbGF5ZXInKTtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMuY3Vyc29ycyA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnZmx5JywgWzAsIDEsIDIsIDNdLCAxMCwgdHJ1ZSk7XG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnZmx5LWxlZnQnLCBbNCwgNSwgNiwgN10sIDEwLCB0cnVlKTtcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdmbHktcmlnaHQnLCBbOCwgOSwgMTAsIDExXSwgMTAsIHRydWUpO1xuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2dob3N0JywgWzMsIDAsIDMsIDFdLCAyMCwgdHJ1ZSk7XG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKHRoaXMsIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgdGhpcy5zcGVlZCA9IDI1MDtcbiAgICB0aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcbiAgICB0aGlzLmJvZHkuc2V0U2l6ZSgyMCwgMjAsIDAsIC01KTtcbiAgICB0aGlzLndlYXBvbkxldmVsID0gMDtcbiAgICB0aGlzLmJ1bGxldFNwZWVkID0gMjAwO1xuICAgIHRoaXMuY3JlYXRlQnVsbGV0UG9vbCgpO1xuICAgIHRoaXMuY3JlYXRpb25UaW1lID0gdGhpcy5nYW1lLnRpbWUubm93O1xuXG4gICAgLy8gdGhpcy5lbWl0dGVyID0gdGhpcy5nYW1lLmFkZC5lbWl0dGVyKHRoaXMuYm9keS54LCB0aGlzLmJvZHkueSwgMjAwKTtcbiAgICAvLyB0aGlzLmVtaXR0ZXIubWFrZVBhcnRpY2xlcygnZmlyZScpO1xuICAgIC8vIHRoaXMuZW1pdHRlci5ncmF2aXR5ID0gMjAwO1xuICAgIC8vIHRoaXMuZW1pdHRlci5zZXRBbHBoYSgxLCAwLCAzMDAwKTtcbiAgICAvLyB0aGlzLmVtaXR0ZXIuc2V0U2NhbGUoMC44LCAwLCAwLjgsIDAsIDMwMDApO1xuICAgIC8vIHRoaXMuZW1pdHRlci53aWR0aCA9IDg7XG4gICAgLy8gdGhpcy5lbWl0dGVyLnNldFlTcGVlZCgxMDAsIDIwMCk7XG4gICAgLy8gdGhpcy5lbWl0dGVyLnNldFhTcGVlZCgtMC4xLCAuMSk7XG4gICAgLy8gdGhpcy5lbWl0dGVyLm1pblJvdGF0aW9uID0gMDtcbiAgICAvLyB0aGlzLmVtaXR0ZXIubWF4Um90YXRpb24gPSAwO1xuXG4gICAgdGhpcy5nYW1lLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xuICAgIHRoaXMucGxheSgnZmx5Jyk7XG4gIH1cblxuICBjcmVhdGVCdWxsZXRQb29sKCkge1xuICAgIHRoaXMuYnVsbGV0UG9vbCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5idWxsZXRQb29sLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuY3JlYXRlTXVsdGlwbGUoMTAwLCAnYnVsbGV0Jyk7XG4gICAgdGhpcy5idWxsZXRQb29sLnNldEFsbCgnYW5jaG9yLngnLCAwLjUpO1xuICAgIHRoaXMuYnVsbGV0UG9vbC5zZXRBbGwoJ2FuY2hvci55JywgMC41KTtcblxuICAgIC8vIEtpbGwgYnVsbGV0IHdoZW4gb29CXG4gICAgdGhpcy5idWxsZXRQb29sLnNldEFsbCgnb3V0T2ZCb3VuZHNLaWxsJywgdHJ1ZSk7XG4gICAgdGhpcy5idWxsZXRQb29sLnNldEFsbCgnY2hlY2tXb3JsZEJvdW5kcycsIHRydWUpO1xuXG4gICAgdGhpcy5uZXh0U2hvdEF0ID0gMDtcbiAgICB0aGlzLnNob3REZWxheSA9IDIwMDtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuaGFuZGxlSW5wdXQoKTtcbiAgfVxuXG4gIHNob290KGRpcmVjdGlvbikge1xuICAgIGlmICghdGhpcy5hbGl2ZSB8fCB0aGlzLm5leHRTaG90QXQgPiB0aGlzLmdhbWUudGltZS5ub3cpIHtcbiAgICAgIHJldHVybjsgLy8gcmV0dXJuIGlmIHBsYXllciBpcyBkZWFkIG9yIGRlbGF5IGlzIGluIHBsYWNlXG4gICAgfVxuXG4gICAgdGhpcy5uZXh0U2hvdEF0ID0gdGhpcy5nYW1lLnRpbWUubm93ICsgdGhpcy5zaG90RGVsYXk7XG4gICAgbGV0IGJ1bGxldDtcblxuICAgIGlmICh0aGlzLndlYXBvbkxldmVsID09PSAwKSB7XG4gICAgICBpZiAodGhpcy5idWxsZXRQb29sLmNvdW50RGVhZCgpID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYnVsbGV0ID0gdGhpcy5idWxsZXRQb29sLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICAgIGJ1bGxldC5yZXNldCh0aGlzLngsIHRoaXMueSk7XG4gICAgICBidWxsZXQuYm9keS52ZWxvY2l0eS55ID0gLXRoaXMuYnVsbGV0U3BlZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmJ1bGxldFBvb2wuY291bnREZWFkKCkgPCB0aGlzLndlYXBvbkxldmVsICogMikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud2VhcG9uTGV2ZWw7IGkrKykge1xuICAgICAgICBidWxsZXQgPSB0aGlzLmJ1bGxldFBvb2wuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuXG4gICAgICAgIC8vIFNwYXduIGxlZnQgYnVsbGV0IGxlZnQgb2ZmIGNlbnRlclxuICAgICAgICBidWxsZXQucmVzZXQodGhpcy54IC0gKDEwICsgaSAqIDUpLCB0aGlzLnkgLSAxNik7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS52ZWxvY2l0eUZyb21BbmdsZSgtOTUgLSBpICogMTAsIHRoaXMuYnVsbGV0U3BlZWQsIGJ1bGxldC5ib2R5LnZlbG9jaXR5KTtcblxuICAgICAgICBidWxsZXQgPSB0aGlzLmJ1bGxldFBvb2wuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgICAgICBidWxsZXQucmVzZXQodGhpcy54ICsgKDEwICsgaSAqIDUpLCB0aGlzLnkgLSAxNik7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS52ZWxvY2l0eUZyb21BbmdsZSgtODUgKyBpICoxMCwgdGhpcy5idWxsZXRTcGVlZCwgYnVsbGV0LmJvZHkudmVsb2NpdHkpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cblxuICBoYW5kbGVJbnB1dCgpIHtcbiAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IDA7XG4gICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSAwO1xuXG4gICAgaWYgKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlgpIHx8IHRoaXMuZ2FtZS5pbnB1dC5hY3RpdmVQb2ludGVyLmlzRG93bikgdGhpcy5zaG9vdChcInVwXCIpO1xuICAgIGlmICh0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5ZKSkgdGhpcy5sZXZlbFVwKCk7XG5cblxuICAgIGlmICh0aGlzLmN1cnNvcnMudXAuaXNEb3duKSB7XG4gICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IC10aGlzLnNwZWVkO1xuICAgICAgLy8gdGhpcy5maXJlUGFydGljbGVzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnNvcnMuZG93bi5pc0Rvd24pIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gdGhpcy5zcGVlZDtcblxuXG4gICAgaWYgKHRoaXMuY3Vyc29ycy5sZWZ0LmlzRG93bikge1xuICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSAtdGhpcy5zcGVlZDtcbiAgICAgIHRoaXMucGxheSgnZmx5LWxlZnQnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3Vyc29ycy5yaWdodC5pc0Rvd24pIHtcbiAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gK3RoaXMuc3BlZWQ7XG4gICAgICB0aGlzLnBsYXkoJ2ZseS1yaWdodCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYXkoJ2ZseScpO1xuICAgIH1cblxuXG4gICAgLy8gSGFuZGxlciBNb3VzZSBDbGljayAmIFRvdWNoXG4gICAgaWYgKHRoaXMuZ2FtZS5pbnB1dC5hY3RpdmVQb2ludGVyLmlzRG93biAmJiB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZGlzdGFuY2VUb1BvaW50ZXIodGhpcykgPiAxNSkge1xuICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm1vdmVUb1BvaW50ZXIodGhpcywgdGhpcy5zcGVlZCk7XG4gICAgICBpZiAodGhpcy5ib2R5LnZlbG9jaXR5LnggPiAwKSB0aGlzLnBsYXkoJ2ZseS1yaWdodCcpO1xuICAgICAgaWYgKHRoaXMuYm9keS52ZWxvY2l0eS54IDwgMCkgdGhpcy5wbGF5KCdmbHktbGVmdCcpO1xuICAgIH1cblxuICB9XG5cbiAgZmlyZVBhcnRpY2xlcygpIHtcbiAgICB0aGlzLmVtaXR0ZXIueCA9IHRoaXMuYm9keS5jZW50ZXIueDtcbiAgICB0aGlzLmVtaXR0ZXIueSA9IHRoaXMuYm9keS5jZW50ZXIueTtcbiAgICB0aGlzLmVtaXR0ZXIuc3RhcnQodHJ1ZSAsIDMwMCwgMSwgLjEpO1xuXG4gIH1cblxuICBsZXZlbFVwKCkge1xuICAgIHRoaXMud2VhcG9uTGV2ZWwgPSAxO1xuICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWxzL1BsYXllci5qc1xuICoqLyIsImltcG9ydCB7IGdldFJhbmRvbUludCwgc3F1YXJlIH0gZnJvbSAnLi4vdXRpbC9oZWxwZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcbiAgXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7XG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2dyZWVuRW5lbXknKTtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdmbHknLCBbMCwgMSwgMiwgM10sIDEwLCB0cnVlKTtcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdnaG9zdCcsIFszLCAwLCAzLCAyXSwgMjAsIHRydWUpO1xuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZSh0aGlzLCBQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgIHRoaXMuc3BlZWQgPSAyMDA7XG4gICAgdGhpcy5oZWFsdGggPSA1O1xuICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgIHRoaXMuYm9keS5zZXRTaXplKDIwLCAyMCwgMCwgLTUpO1xuICAgIC8vIENyZWF0ZSBCdWxsZXRzXG4gICAgdGhpcy5jcmVhdGVCdWxsZXRQb29sKCk7XG4gICAgdGhpcy5jcmVhdGVFeHBsb3Npb24oKTtcblxuICAgIC8vIERhbWFnZSBwYXJ0aWNsZSBlbWl0dGVyXG4gICAgdGhpcy5lbWl0dGVyID0gdGhpcy5nYW1lLmFkZC5lbWl0dGVyKHRoaXMuYm9keS54LCB0aGlzLmJvZHkueSwgMjAwKTtcbiAgICB0aGlzLmVtaXR0ZXIubWFrZVBhcnRpY2xlcygnZmlyZScpO1xuICAgIHRoaXMuZW1pdHRlci5ncmF2aXR5ID0gMjAwO1xuICAgIHRoaXMuZW1pdHRlci5zZXRBbHBoYSgxLCAwLCAzMDAwKTtcbiAgICB0aGlzLmVtaXR0ZXIuc2V0U2NhbGUoMC44LCAwLCAwLjgsIDAsIDMwMDApO1xuICAgIHRoaXMuZW1pdHRlci53aWR0aCA9IDg7XG4gICAgdGhpcy5lbWl0dGVyLnNldFlTcGVlZCgtMTAwLCAtMjAwKTtcbiAgICB0aGlzLmVtaXR0ZXIuc2V0WFNwZWVkKC0xMDAsIDEwMCk7XG4gICAgdGhpcy5lbWl0dGVyLm1pblJvdGF0aW9uID0gMDtcbiAgICB0aGlzLmVtaXR0ZXIubWF4Um90YXRpb24gPSAwO1xuICAgIC8vIEFkZCB0byBzdGFnZVxuICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcbiAgICB0aGlzLnBsYXkoJ2ZseScpO1xuXG4gIH1cblxuICBjcmVhdGVCdWxsZXRQb29sKCkge1xuICAgIHRoaXMuYnVsbGV0UG9vbCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5idWxsZXRQb29sLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuY3JlYXRlTXVsdGlwbGUoMTAwLCAnZW5lbXlCdWxsZXQnKTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuc2V0QWxsKCdhbmNob3IueCcsIDAuNSk7XG4gICAgdGhpcy5idWxsZXRQb29sLnNldEFsbCgnYW5jaG9yLnknLCAwLjUpO1xuXG4gICAgLy8gS2lsbCBidWxsZXQgd2hlbiBvb0JcbiAgICB0aGlzLmJ1bGxldFBvb2wuc2V0QWxsKCdvdXRPZkJvdW5kc0tpbGwnLCB0cnVlKTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuc2V0QWxsKCdjaGVja1dvcmxkQm91bmRzJywgdHJ1ZSk7XG5cbiAgICB0aGlzLm5leHRTaG90QXQgPSAwO1xuICAgIHRoaXMuc2hvdERlbGF5ID0gNTAwO1xuICB9XG5cbiAgY3JlYXRlRXhwbG9zaW9uKCkge1xuICAgIHRoaXMuZXhwbG9zaW9uUG9vbCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLmV4cGxvc2lvblBvb2wuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5leHBsb3Npb25Qb29sLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcbiAgICB0aGlzLmV4cGxvc2lvblBvb2wuY3JlYXRlTXVsdGlwbGUoMTAwLCAnZXhwbG9zaW9uJyk7XG4gICAgdGhpcy5leHBsb3Npb25Qb29sLnNldEFsbCgnYW5jaG9yLngnLCAwLjUpO1xuICAgIHRoaXMuZXhwbG9zaW9uUG9vbC5zZXRBbGwoJ2FuY2hvci55JywgMC4yNSk7XG4gICAgLy8gU2V0IGV4cGxvc2lvbiBhbmltYXRpb25cbiAgICB0aGlzLmV4cGxvc2lvblBvb2wuZm9yRWFjaChmdW5jdGlvbiAoZXhwbG9zaW9uKSB7XG4gICAgICBleHBsb3Npb24uYW5pbWF0aW9ucy5hZGQoJ2Jvb20nKTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cGxvZGUoc3ByaXRlKSB7XG4gICAgaWYgKHRoaXMuZXhwbG9zaW9uUG9vbC5jb3VudERlYWQoKSA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coXCJubyBleHBsXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXhwbG9zaW9uID0gdGhpcy5leHBsb3Npb25Qb29sLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICBsZXQgaW1wYWN0WCA9IGdldFJhbmRvbUludCgtMywgMyk7XG4gICAgbGV0IGltcGFjdFkgPSBnZXRSYW5kb21JbnQoLTMsIDMpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYm9keS5jZW50ZXIueCk7XG4gICAgZXhwbG9zaW9uLnJlc2V0KHRoaXMuYm9keS5jZW50ZXIueCArIGltcGFjdFgsIHRoaXMuYm9keS5jZW50ZXIueSArIGltcGFjdFkpO1xuICAgIGV4cGxvc2lvbi5wbGF5KCdib29tJywgMTUsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyB0aGlzLnNob290KCk7XG4gIH1cblxuICBkYW1hZ2UoKSB7XG4gICAgY29uc29sZS5sb2coXCJlbmVteSBkYW1hZ2VcIik7XG4gICAgdGhpcy5maXJlUGFydGljbGVzKCk7XG4gICAgLy8gdGhpcy5oZWFsdGgtLTtcbiAgICAvLyBpZiAodGhpcy5oZWFsdGggPT09IDApIHtcbiAgICAvLyAgIHRoaXMuZXhwbG9kZSgpO1xuICAgIC8vICAgdGhpcy5kZXN0cm95KCk7XG4gICAgLy8gfVxuICB9XG5cbiAgc2hvb3QoKSB7XG4gICAgaWYgKCF0aGlzLmFsaXZlIHx8IHRoaXMubmV4dFNob3RBdCA+IHRoaXMuZ2FtZS50aW1lLm5vdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubmV4dFNob3RBdCA9IHRoaXMuZ2FtZS50aW1lLm5vdyArIHRoaXMuc2hvdERlbGF5O1xuICAgIGxldCBidWxsZXQ7XG4gICAgYnVsbGV0ID0gdGhpcy5idWxsZXRQb29sLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICBidWxsZXQucmVzZXQodGhpcy54LCB0aGlzLnkpO1xuICAgIGJ1bGxldC5ib2R5LnZlbG9jaXR5LnkgPSAxNTA7XG4gIH1cblxuXG4gIGZpcmVQYXJ0aWNsZXMoKSB7XG4gICAgdGhpcy5lbWl0dGVyLnggPSB0aGlzLmJvZHkuY2VudGVyLng7XG4gICAgdGhpcy5lbWl0dGVyLnkgPSB0aGlzLmJvZHkuY2VudGVyLnk7XG4gICAgdGhpcy5lbWl0dGVyLnN0YXJ0KHRydWUgLCAzMDAsIDEwLCAxMCk7XG5cbiAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVscy9FbmVteS5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmUoeCkge1xuICAgICAgICByZXR1cm4geCAqIHg7XG4gICAgfVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvaGVscGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==