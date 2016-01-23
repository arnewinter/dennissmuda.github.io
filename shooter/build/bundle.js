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
	    _this.state.start('Play');
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
	          this.scale.minWidth = 480;
	          this.scale.minHeight = 260;
	          this.scale.maxWidth = 1024;
	          this.scale.maxHeight = 768;
	          this.scale.forceLandscape = true;
	          this.scale.pageAlignHorizontally = true;
	          this.scale.pageAlignHorizontally = false;
	          this.scale.setScreenSize(true);
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
	      console.log("Menu");
	      var titlepage = this.add.sprite(0, 0, 'titlepage');
	      titlepage.scale.setTo(0.32, 0.65);
	      this.loadingText = this.add.text(160, 400, "Press SPACE or tap/click to start", { font: "15px monospace", fill: "#fff" });
	      this.loadingText.anchor.setTo(0.5, 0.5);
	      this.add.text(160, 440, "image assets Copyright (c) 2002 Ari Feldman", { font: "12px monospace", fill: "#fff", align: "center" }).anchor.setTo(0.5, 0.5);
	      this.add.text(160, 460, "sound assets Copyright (c) 2012 - 2013 Devin Watson", { font: "10px monospace", fill: "#fff", align: "center" }).anchor.setTo(0.5, 0.5);
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
	      this.load.spritesheet('explosion', 'assets/explosion.png', 32, 32);
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
	      this.bossPool.forEach(function (enemy) {
	        enemy.animations.add('fly', [0, 1, 2], 20, true);
	        enemy.animations.add('hit', [3, 1, 3, 2], 20, false);
	        enemy.events.onAnimationComplete.add(function (e) {
	          e.play('fly');
	        }, this);
	      });
	
	      this.boss = this.bossPool.getTop();
	      this.bossApproaching = false;
	      this.bossInitialHealth = 500;
	
	      // Set animation
	      this.enemyPool.forEach(function (enemy) {
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
	      this.instructions = this.add.text(160, 400, 'Use Arrow Keys to Move, X to Fire\n' + 'Tapping/Clicking does both', {
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
	    value: function spawnEnemies() {
	      if (this.nextEnemyAt < this.time.now && this.enemyPool.countDead() > 0) {
	        this.nextEnemyAt = this.time.now + this.enemyDelay;
	
	        this.enemyDelay = this.rnd.integerInRange(300, 1000);
	        var enemy = this.enemyPool.getFirstExists(false);
	        // width = 320, enemy width 32, center is 32/2 = 16
	        enemy.reset(this.rnd.integerInRange(20, 304), 0, this.enemyInitialHealth);
	        enemy.body.velocity.y = this.rnd.integerInRange(30, 60);
	        enemy.play('fly');
	      }
	      var shooter = this.shooterPool.getFirstExists(false);
	      // Spawn at a random location at the top
	      shooter.reset(this.rnd.integerInRange(20, 448), 0, this.shooterInitialHealth);
	      // Choose a random target location at the bottom
	      var target = this.rnd.integerInRange(20, 448);
	      // Move to target and rotate the sprite accordingly
	      shooter.rotation = this.physics.arcade.moveToXY(shooter, target, 320, this.rnd.integerInRange(30, 80)) - Math.PI / 2;
	
	      shooter.play('fly');
	      shooter.nextShotAt = 0;
	    }
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
	    value: function enemyHit(bullet, enemy) {
	      console.log("enemyHIt");
	      // bullet.kill();
	      // this.damageEnemy(enemy, 1);
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
	      if (enemy.alive) {
	        enemy.play('hit');
	      } else {
	        this.explode(enemy);
	        this.spawnPowerUp(enemy);
	        this.addToScore(enemy.reward);
	
	        if (enemy.key === 'boss') {
	          this.enemyPool.destroy();
	          this.shooterPool.destroy();
	          this.bossPool.destroy();
	          this.enemyBulletPool.destroy();
	          this.displayEnd(true);
	        }
	      }
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
	      if (this.score >= 20000 && this.bossPool.countDead() == 1) {
	        /*      this.enemyPool.destroy();
	              this.shooterPool.destroy();
	              this.enemyBulletPool.destroy();
	              this.displayEnd(true);*/
	        this.spawnBoss();
	      }
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
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
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
	    _this.body.collideWorldBounds = true;
	    _this.body.setSize(20, 20, 0, -5);
	    // Create Bullets
	    _this.createBulletPool();
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
	    key: 'update',
	    value: function update() {
	      // this.shoot();
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
	  }]);
	
	  return Enemy;
	}(Phaser.Sprite);
	
	exports.default = Enemy;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTQ1OTcwZTZlZGVlOTQxMjJlNDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvQm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzL1ByZWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcy9NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvUGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0VuZW15LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NoQ00sSUFBSTthQUFKLElBQUk7O0FBRVIsWUFGSSxJQUFJLEdBRU07MkJBRlYsSUFBSTs7Ozt3RUFBSixJQUFJLGFBR0EsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJOztBQUc1QyxXQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxpQkFBTyxDQUFDO0FBQzdCLFdBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLG9CQUFVLENBQUM7QUFDbkMsV0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0saUJBQU8sQ0FBQztBQUM3QixXQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxpQkFBTzs7QUFFNUIsV0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztJQUMxQjs7VUFaRyxJ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LEdBQUcsQ0FBQyxDQUFDO0FBQzNELGdCQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztVQUMxRDtRQUNGLEVBQUUsSUFBSSxDQUFDLENBQUM7O0FBRVQsV0FBSSxJQUFJLENBQUMsZUFBZSxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUFFOztBQUV4QyxhQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7O0FBRTVDLGNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O0FBRTFCLGVBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVELHFCQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzlELGVBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdELHNCQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDOztBQUUvRCxlQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFB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QUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9DLGFBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsYUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztNQUM5Qjs7O1VBakRrQixLQUFLO0dBQVMsTUFBTSxDQUFDLE1BQU07O21CQUEzQixLQUFLLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA5NDU5NzBlNmVkZWU5NDEyMmU0MVxuICoqLyIsIlxuaW1wb3J0IEJvb3QgZnJvbSAnLi9zdGF0ZXMvQm9vdCc7XG5pbXBvcnQgUHJlbG9hZCBmcm9tICcuL3N0YXRlcy9QcmVsb2FkJztcbmltcG9ydCBNZW51IGZyb20gJy4vc3RhdGVzL01lbnUnO1xuaW1wb3J0IFBsYXkgZnJvbSAnLi9zdGF0ZXMvUGxheSc7XG5cbmNsYXNzIEdhbWUgZXh0ZW5kcyBQaGFzZXIuR2FtZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoMzIwLCA0ODAsIFBoYXNlci5BVVRPLCAnY29udGVudCcsIG51bGwpO1xuXG4gICAgLy8gQWRkIHN0YXRlc1xuICAgIHRoaXMuc3RhdGUuYWRkKCdCb290JywgQm9vdCk7XG4gICAgdGhpcy5zdGF0ZS5hZGQoJ1ByZWxvYWQnLCBQcmVsb2FkKTtcbiAgICB0aGlzLnN0YXRlLmFkZCgnTWVudScsIE1lbnUpO1xuICAgIHRoaXMuc3RhdGUuYWRkKCdQbGF5JywgUGxheSk7XG4gICAgLy8gU3RhcnQgdGhlIGdhbWUgc3RhdGUgJ2Jvb3QnIGZvciBwcm9kXG4gICAgdGhpcy5zdGF0ZS5zdGFydCgnUGxheScpO1xuICB9XG5cbn1cblxubmV3IEdhbWUoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb3QgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuICBcbiAgcHJlbG9hZCgpIHtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3ByZWxvYWRlckJhcicsICdhc3NldHMvcHJlbG9hZGVyLWJhci5wbmcnKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICAvLyBObyBtdWx0aXRvdWNoIHN1cHBvcnQgPSAxXG4gICAgdGhpcy5pbnB1dC5tYXhQb2ludGVycyA9IDE7XG4gICAgLy8gUGhhc2VyIHdpbGwgYXV0b21hdGljYWxseSBwYXVzZSBpZiB0aGUgYnJvd3NlciB0YWIgbG9zZXMgZm9jdXNcbiAgICB0aGlzLnN0YWdlLmRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmdhbWUuZGV2aWNlLmRlc2t0b3ApIHtcbiAgICAgIC8vIERlc2t0b3Agc3BlY2lmaWMgc2V0dGluZ3NcbiAgICAgIC8vIHRoaXMuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTW9iaWxlIHNwZWNpZmljIHNldHRpbmdzXG4gICAgICB0aGlzLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XG4gICAgICB0aGlzLnNjYWxlLm1pbldpZHRoICA9IDQ4MDtcbiAgICAgIHRoaXMuc2NhbGUubWluSGVpZ2h0ID0gMjYwO1xuICAgICAgdGhpcy5zY2FsZS5tYXhXaWR0aCAgPSAxMDI0O1xuICAgICAgdGhpcy5zY2FsZS5tYXhIZWlnaHQgPSA3Njg7XG4gICAgICB0aGlzLnNjYWxlLmZvcmNlTGFuZHNjYXBlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gZmFsc2U7XG4gICAgICB0aGlzLnNjYWxlLnNldFNjcmVlblNpemUodHJ1ZSk7XG4gICAgfSBcblxuICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1ByZWxvYWQnKTtcbiAgfVxuXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RhdGVzL0Jvb3QuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcbiAgXG4gIHByZWxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coXCJQcmVsb2FkXCIpO1xuICAgIC8vIFNob3cgdGhlIGxvYWRpbmcgcHJvZ3Jlc3MgYmFyIGFzc2V0IHdlIGxvYWRlZCBpbiBib290LmpzXG4gICAgdGhpcy5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJkMmQyZCc7XG5cbiAgICB0aGlzLnByZWxvYWRCYXIgPSB0aGlzLmFkZC5zcHJpdGUoNDEyLCA0MDAsICdwcmVsb2FkZXJCYXInKTtcbiAgICB0aGlzLmFkZC50ZXh0KDUxMCwgMzYwLCBcIkxvYWRpbmcuLi5cIiwge2ZvbnQ6IFwiMzJweCBtb25vc3BhY2VcIiwgZmlsbDogJyNmZmYnfSkuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcblxuICAgIC8vIFNldCBsb2FkZXIgc3ByaXRlXG4gICAgdGhpcy5sb2FkLnNldFByZWxvYWRTcHJpdGUodGhpcy5wcmVsb2FkQmFyKTtcblxuICAgIC8vIExvYWQgcmVzdCBvZiB0aGUgYXNzZXRzXG4gICAgdGhpcy5sb2FkLmltYWdlKCd0aXRsZXBhZ2UnLCAnYXNzZXRzL3RpdGxlcGFnZS5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NlYScsICdhc3NldHMvc2VhLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnYnVsbGV0JywgJ2Fzc2V0cy9idWxsZXQucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdlbmVteUJ1bGxldCcsICdhc3NldHMvZW5lbXktYnVsbGV0LnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgncG93ZXJ1cDEnLCAnYXNzZXRzL3Bvd2VydXAxLnBuZycpO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZ3JlZW5FbmVteScsICdhc3NldHMvZW5lbXkucG5nJywgMzIsIDMyKTtcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3doaXRlRW5lbXknLCAnYXNzZXRzL3Nob290aW5nLWVuZW15LnBuZycsIDMyLCAzMik7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdib3NzJywgJ2Fzc2V0cy9ib3NzLnBuZycsIDkzLCA3NSk7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdleHBsb3Npb24nLCAnYXNzZXRzL2V4cGxvc2lvbi5wbmcnLCAzMiwgMzIpO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncGxheWVyJywgJ2Fzc2V0cy9wbGF5ZXIucG5nJywgNjQsIDY0KTtcbiAgICB0aGlzLmxvYWQuYXVkaW8oJ2V4cGxvc2lvbicsIFsnYXNzZXRzL2V4cGxvc2lvbi53YXYnXSk7XG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdwbGF5ZXJFeHBsb3Npb24nLCBbJ2Fzc2V0cy9wbGF5ZXItZXhwbG9zaW9uLndhdiddKTtcbiAgICB0aGlzLmxvYWQuYXVkaW8oJ2VuZW15RmlyZScsIFsnYXNzZXRzL2VuZW15LWZpcmUud2F2J10pO1xuICAgIHRoaXMubG9hZC5hdWRpbygncGxheWVyRmlyZScsIFsnYXNzZXRzL3BsYXllci1maXJlLndhdiddKTtcbiAgICB0aGlzLmxvYWQuYXVkaW8oJ3Bvd2VyVXAnLCBbJ2Fzc2V0cy9wb3dlcnVwLndhdiddKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcblxuICAgIHRoaXMucHJlbG9hZEJhci5jcm9wRW5hYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuc3RhdGUuc3RhcnQoJ01lbnUnKTtcbiAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0YXRlcy9QcmVsb2FkLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG4gIHByZWxvYWQoKSB7XG4gICAgdGhpcy5sb2FkLmltYWdlKCd0aXRsZXBhZ2UnLCAnLi9hc3NldHMvdGl0bGVwYWdlLnBuZycpXG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgY29uc29sZS5sb2coXCJNZW51XCIpO1xuICAgIGxldCB0aXRsZXBhZ2UgPSB0aGlzLmFkZC5zcHJpdGUoMCwgMCwgJ3RpdGxlcGFnZScpO1xuICAgIHRpdGxlcGFnZS5zY2FsZS5zZXRUbygwLjMyLCAwLjY1KTtcbiAgICB0aGlzLmxvYWRpbmdUZXh0ID0gdGhpcy5hZGQudGV4dCgxNjAsIDQwMCwgXCJQcmVzcyBTUEFDRSBvciB0YXAvY2xpY2sgdG8gc3RhcnRcIiwgeyBmb250OiBcIjE1cHggbW9ub3NwYWNlXCIsIGZpbGw6IFwiI2ZmZlwiIH0pO1xuICAgIHRoaXMubG9hZGluZ1RleHQuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICB0aGlzLmFkZC50ZXh0KDE2MCwgNDQwLCBcImltYWdlIGFzc2V0cyBDb3B5cmlnaHQgKGMpIDIwMDIgQXJpIEZlbGRtYW5cIiwgeyBmb250OiBcIjEycHggbW9ub3NwYWNlXCIsIGZpbGw6IFwiI2ZmZlwiLCBhbGlnbjogXCJjZW50ZXJcIn0pLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgdGhpcy5hZGQudGV4dCgxNjAsIDQ2MCwgXCJzb3VuZCBhc3NldHMgQ29weXJpZ2h0IChjKSAyMDEyIC0gMjAxMyBEZXZpbiBXYXRzb25cIiwgeyBmb250OiBcIjEwcHggbW9ub3NwYWNlXCIsIGZpbGw6IFwiI2ZmZlwiLCBhbGlnbjogXCJjZW50ZXJcIn0pLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5TUEFDRUJBUikgfHzCoHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5pc0Rvd24pIHtcbiAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRHYW1lKCkge1xuICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1BsYXknKTtcbiAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0YXRlcy9NZW51LmpzXG4gKiovIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9tb2RlbHMvUGxheWVyJztcbmltcG9ydCBFbmVteSBmcm9tICcuLi9tb2RlbHMvRW5lbXknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBwcmVsb2FkKCkge1xuXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzZWEnLCAnYXNzZXRzL3NlYS5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2J1bGxldCcsICdhc3NldHMvYnVsbGV0LnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnZW5lbXlCdWxsZXQnLCAnYXNzZXRzL2VuZW15LWJ1bGxldC5wbmcnKTtcblxuICAgIC8vIExvYWQgcG93ZXJ1cFxuICAgIHRoaXMubG9hZC5pbWFnZSgncG93ZXJ1cDEnLCAnYXNzZXRzL3Bvd2VydXAxLnBuZycpO1xuICAgIC8vIExvYWQgc2hpdFxuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZ3JlZW5FbmVteScsICdhc3NldHMvZW5lbXkucG5nJywgMzIsIDMyKTtcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3doaXRlRW5lbXknLCAnYXNzZXRzL3Nob290aW5nLWVuZW15LnBuZycsIDMyLCAzMik7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdib3NzJywgJ2Fzc2V0cy9ib3NzLnBuZycsIDkzLCA3NSk7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdleHBsb3Npb24nLCAnYXNzZXRzL2V4cGxvc2lvbi5wbmcnLCAzMiwgMzIpO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncGxheWVyJywgJ2Fzc2V0cy9wbGF5ZXJfZnVsbC5wbmcnLCA2NCwgNjQsIDEyKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2ZpcmUnLCAnYXNzZXRzL2ZpcmUucG5nJyk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5zZWEgPSB0aGlzLmFkZC50aWxlU3ByaXRlKDAsIDAsIDMyMCwgNDgwLCAnc2VhJyk7XG4gICAgdGhpcy5zZXR1cFBsYXllcigpO1xuICAgIHRoaXMuZW5lbXkgPSBuZXcgRW5lbXkodGhpcy5nYW1lLCAxNjAsIDEwMCwgJ2dyZWVuRW5lbXknKTtcbiAgICAvLyB0aGlzLnNldHVwRW5lbWllcygpO1xuICAgIC8vIHRoaXMuc2V0dXBFeHBsb3Npb25zKCk7XG4gICAgdGhpcy5jdXJzb3JzID0gdGhpcy5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XG4gICAgdGhpcy53b3JsZFNwZWVkID0gMC4yNTtcblxuICAgIC8vIHRpaHMuc2V0dXBQbGF5ZXJJY29ucygpO1xuICAgIHRoaXMuc2V0dXBUZXh0KCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5wbGF5ZXIuaGFuZGxlSW5wdXQoKTtcbiAgICB0aGlzLnNlYS50aWxlUG9zaXRpb24ueSArPSB0aGlzLndvcmxkU3BlZWQ7XG4gICAgdGhpcy5jaGVja0NvbGxpc2lvbnMoKTtcbiAgICAvLyB0aGlzLnNwYXduRW5lbWllcygpO1xuICAgIC8vIHRoaXMuZW5lbXlGaXJlKCk7XG4gICAgdGhpcy5kZXRlY3RQbGF5ZXJJbnB1dCgpO1xuICAgIHRoaXMuZGVsYXlFZmZlY3QoKTtcbiAgfVxuXG4gIGRldGVjdFBsYXllcklucHV0KCkge1xuICAgIGlmICh0aGlzLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuUSkpIHRoaXMucXVpdEdhbWUoKTtcbiAgfVxuXG5cbiAgc2V0dXBFbmVtaWVzKCkge1xuICAgIHRoaXMuZW5lbXlCdWxsZXRQb29sID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLmVuZW15QnVsbGV0UG9vbC5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICB0aGlzLmVuZW15QnVsbGV0UG9vbC5waHlzaWNzQm9keVR5cGUgPSBQaGFzZXIuUGh5c2ljcy5BUkNBREU7XG4gICAgdGhpcy5lbmVteUJ1bGxldFBvb2wuY3JlYXRlTXVsdGlwbGUoMTAwLCAnZW5lbXlCdWxsZXQnKTtcbiAgICB0aGlzLmVuZW15QnVsbGV0UG9vbC5zY2FsZS5zZXRUbygwLjUsIDAuNSk7XG4gICAgdGhpcy5lbmVteUJ1bGxldFBvb2wuc2V0QWxsKCdvdXRPZkJvdW5kc0tpbGwnLCB0cnVlKTtcbiAgICB0aGlzLmVuZW15QnVsbGV0UG9vbC5zZXRBbGwoJ2NoZWNrV29ybGRCb3VuZHMnLCB0cnVlKTtcbiAgICB0aGlzLmVuZW15QnVsbGV0UG9vbC5zZXRBbGwoJ3Jld2FyZCcsIDAsIGZhbHNlLCBmYWxzZSwgMCwgdHJ1ZSk7XG5cbiAgICB0aGlzLmVuZW15UG9vbCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgdGhpcy5lbmVteVBvb2wuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5lbmVteVBvb2wucGh5c2ljc0JvZHlUeXBlID0gUGhhc2VyLlBoeXNpY3MuQVJDQURFO1xuICAgIHRoaXMuZW5lbXlQb29sLmNyZWF0ZU11bHRpcGxlKDUwLCAnZ3JlZW5FbmVteScpO1xuICAgIHRoaXMuZW5lbXlQb29sLnNldEFsbCgnYW5jaG9yLngnLCAwLjUpO1xuICAgIHRoaXMuZW5lbXlQb29sLnNldEFsbCgnYW5jaG9yLnknLCAwLjUpO1xuICAgIHRoaXMuZW5lbXlQb29sLnNldEFsbCgnb3V0T2ZCb3VuZHNLaWxsJywgdHJ1ZSk7XG4gICAgdGhpcy5lbmVteVBvb2wuc2V0QWxsKCdyZXdhcmQnLCAxMDAsIGZhbHNlLCBmYWxzZSwgMCwgdHJ1ZSk7XG5cbiAgICAvLyAxMCUgY2hhbmNlIGFmdGVyIGVuZW15IGRlYWQuXG4gICAgdGhpcy5lbmVteVBvb2wuc2V0QWxsKCdkcm9wUmF0ZScsIDAuMSwgZmFsc2UsIGZhbHNlLCAwLCB0cnVlKTtcblxuICAgIHRoaXMuYm9zc1Bvb2wgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgIHRoaXMuYm9zc1Bvb2wuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5ib3NzUG9vbC5waHlzaWNzQm9keVR5cGUgPSBQaGFzZXIuUGh5c2ljcy5BUkNBREU7XG4gICAgdGhpcy5ib3NzUG9vbC5jcmVhdGVNdWx0aXBsZSgxLCAnYm9zcycpO1xuICAgIHRoaXMuYm9zc1Bvb2wuc2V0QWxsKCdhbmNob3IueCcsIDAuNSk7XG4gICAgdGhpcy5ib3NzUG9vbC5zZXRBbGwoJ2FuY2hvci55JywgMC41KTtcbiAgICB0aGlzLmJvc3NQb29sLnNldEFsbCgnb3V0T2ZCb3VuZHNLaWxsJywgdHJ1ZSk7XG4gICAgdGhpcy5ib3NzUG9vbC5zZXRBbGwoJ2NoZWNrV29ybGRCb3VuZHMnLCB0cnVlKTtcbiAgICB0aGlzLmJvc3NQb29sLnNldEFsbCgncmV3YXJkJywgMTAwMDAsIGZhbHNlLCBmYWxzZSwgMCwgdHJ1ZSk7XG4gICAgdGhpcy5ib3NzUG9vbC5zZXRBbGwoJ2Ryb3BSYXRlJywgMCwgZmFsc2UsIGZhbHNlLCAwLCB0cnVlKTtcblxuICAgIC8vIFNldCBhbmltYXRpb24gZm9yIGVhY2ggc3ByaXRlXG4gICAgdGhpcy5ib3NzUG9vbC5mb3JFYWNoKGZ1bmN0aW9uKGVuZW15KSB7XG4gICAgICBlbmVteS5hbmltYXRpb25zLmFkZCgnZmx5JywgWzAsIDEsIDJdLCAyMCwgdHJ1ZSk7XG4gICAgICBlbmVteS5hbmltYXRpb25zLmFkZCgnaGl0JywgWzMsIDEsIDMsIDJdLCAyMCwgZmFsc2UpO1xuICAgICAgZW5lbXkuZXZlbnRzLm9uQW5pbWF0aW9uQ29tcGxldGUuYWRkKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wbGF5KCdmbHknKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ib3NzID0gdGhpcy5ib3NzUG9vbC5nZXRUb3AoKTtcbiAgICB0aGlzLmJvc3NBcHByb2FjaGluZyA9IGZhbHNlO1xuICAgIHRoaXMuYm9zc0luaXRpYWxIZWFsdGggPSA1MDA7XG5cbiAgICAvLyBTZXQgYW5pbWF0aW9uXG4gICAgdGhpcy5lbmVteVBvb2wuZm9yRWFjaChmdW5jdGlvbihlbmVteSkge1xuICAgICAgZW5lbXkuYW5pbWF0aW9ucy5hZGQoJ2ZseScsIFswLCAxLCAyXSwgMjAsIHRydWUpO1xuICAgICAgZW5lbXkuYW5pbWF0aW9ucy5hZGQoJ2hpdCcsIFszLCAxLCA0LCAyXSwgMjAsIGZhbHNlKTtcbiAgICAgIGVuZW15LmV2ZW50cy5vbkFuaW1hdGlvbkNvbXBsZXRlLmFkZChmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnBsYXkoJ2ZseScpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm5leHRFbmVteUF0ID0gMDtcbiAgICB0aGlzLmVuZW15RGVsYXkgPSAxMDAwO1xuICAgIHRoaXMuZW5lbXlJbml0aWFsSGVhbHRoID0gMjtcblxuICAgIHRoaXMuc2hvb3RlclBvb2wgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgIHRoaXMuc2hvb3RlclBvb2wuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5zaG9vdGVyUG9vbC5waHlzaWNzQm9keVR5cGUgPSBQaGFzZXIuUGh5c2ljcy5BUkNBREU7XG4gICAgdGhpcy5zaG9vdGVyUG9vbC5jcmVhdGVNdWx0aXBsZSgyMCwgJ3doaXRlRW5lbXknKTtcbiAgICB0aGlzLnNob290ZXJQb29sLnNldEFsbCgnYW5jaG9yLngnLCAwLjUpO1xuICAgIHRoaXMuc2hvb3RlclBvb2wuc2V0QWxsKCdhbmNob3IueScsIDAuNSk7XG4gICAgdGhpcy5zaG9vdGVyUG9vbC5zZXRBbGwoJ291dE9mQm91bmRzS2lsbCcsIHRydWUpO1xuICAgIHRoaXMuc2hvb3RlclBvb2wuc2V0QWxsKCdjaGVja1dvcmxkQm91bmRzJywgdHJ1ZSk7XG4gICAgdGhpcy5zaG9vdGVyUG9vbC5zZXRBbGwoJ3Jld2FyZCcsIDMwMCwgZmFsc2UsIGZhbHNlLCAwLCB0cnVlKTtcblxuICAgIC8vIDIwJSBBZnRlciBlbmVteVNob290ZXIgZGllLlxuICAgIHRoaXMuc2hvdGVyUG9vbC5zZXRBbGwoJ2Ryb3BSYXRlJywgMC4yLCBmYWxzZSwgZmFsc2UsIDAsIHRydWUpO1xuICAgIC8vIFNldCB0aGUgYW5pbWF0aW9uIGZvciBlYWNoIHNwcml0ZVxuICAgIHRoaXMuc2hvb3RlclBvb2wuZm9yRWFjaChmdW5jdGlvbiAoZW5lbXkpIHtcbiAgICAgIGVuZW15LmFuaW1hdGlvbnMuYWRkKCdmbHknLCBbMCwgMSwgMl0sIDIwLCB0cnVlKTtcbiAgICAgIGVuZW15LmFuaW1hdGlvbnMuYWRkKCdoaXQnLCBbMywgMSwgMywgMl0sIDIwLCBmYWxzZSk7XG4gICAgICBlbmVteS5ldmVudHMub25BbmltYXRpb25Db21wbGV0ZS5hZGQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wbGF5KCdmbHknKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0pO1xuXG4gICAgLy8gU3RhcnQgc3Bhd25pbmcgNSBzZWNvbmRzIGludG8gdGhlIGdhbWVcbiAgICB0aGlzLm5leHRTaG9vdGVyQXQgPSB0aGlzLnRpbWUubm93ICsgNTAwMDtcbiAgICB0aGlzLnNob290ZXJEZWxheSA9IDMwMDA7XG4gICAgdGhpcy5zaG9vdGVyU2hvdERlbGF5ID0gMTAwMDtcbiAgICB0aGlzLnNob290ZXJJbml0aWFsSGVhbHRoID0gNTtcbiAgfVxuXG5cbiAgc2V0dXBFeHBsb3Npb25zKCkge1xuICAgIHRoaXMuZXhwbG9zaW9uUG9vbCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgdGhpcy5leHBsb3Npb25Qb29sLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgIHRoaXMuZXhwbG9zaW9uUG9vbC5waHlzaWNzQm9keVR5cGUgPSBQaGFzZXIuUGh5c2ljcy5BUkNBREU7XG4gICAgdGhpcy5leHBsb3Npb25Qb29sLmNyZWF0ZU11bHRpcGxlKDEwMCwgJ2V4cGxvc2lvbicpO1xuICAgIHRoaXMuZXhwbG9zaW9uUG9vbC5zZXRBbGwoJ2FuY2hvci54JywgMC41KTtcbiAgICB0aGlzLmV4cGxvc2lvblBvb2wuc2V0QWxsKCdhbmNob3IueScsIDAuNSk7XG4gICAgLy8gU2V0IGV4cGxvc2lvbiBhbmltYXRpb25cbiAgICB0aGlzLmV4cGxvc2lvblBvb2wuZm9yRWFjaChmdW5jdGlvbiAoZXhwbG9zaW9uKSB7XG4gICAgICBleHBsb3Npb24uYW5pbWF0aW9ucy5hZGQoJ2Jvb20nKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldHVwUGxheWVySWNvbnMoKSB7XG4gICAgdGhpcy5wb3dlclVwUG9vbCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgdGhpcy5wb3dlclVwUG9vbC5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICB0aGlzLnBvd2VyVXBQb29sLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcbiAgICB0aGlzLnBvd2VyVXBQb29sLmNyZWF0ZU11bHRpcGxlKDUsICdwb3dlcnVwMScpO1xuICAgIHRoaXMucG93ZXJVcFBvb2wuc2V0QWxsKCdhbmNob3IueCcsIDAuNSk7XG4gICAgdGhpcy5wb3dlclVwUG9vbC5zZXRBbGwoJ2FuY2hvci55JywgMC41KTtcbiAgICB0aGlzLnBvd2VyVXBQb29sLnNldEFsbCgnb3V0T2ZCb3VuZHNLaWxsJywgdHJ1ZSk7XG4gICAgdGhpcy5wb3dlclVwUG9vbC5zZXRBbGwoJ2NoZWNrV29ybGRCb3VuZHMnLCB0cnVlKTtcbiAgICB0aGlzLnBvd2VyVXBQb29sLnNldEFsbCgncmV3YXJkJywgMTAwLCBmYWxzZSwgZmFsc2UsIDAsIHRydWUpO1xuXG4gICAgdGhpcy5saXZlcyA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGxldCBsaWZlID0gdGhpcy5saXZlcy5jcmVhdGUoMjQwICsgKDMwICogaSksIDMwLCAncGxheWVyJyk7XG4gICAgICBsaWZlLnNjYWxlLnNldFRvKDAuNCwgMC40KTtcbiAgICAgIGxpZmUuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICB9XG4gIH1cblxuICBzZXR1cFRleHQoKSB7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSB0aGlzLmFkZC50ZXh0KDE2MCwgNDAwLCAnVXNlIEFycm93IEtleXMgdG8gTW92ZSwgWCB0byBGaXJlXFxuJyArIFxuICAgICAgJ1RhcHBpbmcvQ2xpY2tpbmcgZG9lcyBib3RoJywge1xuICAgICAgICBmb250OiAnMTRweCBGaXJhIE1vbm8nLFxuICAgICAgICBmaWxsOiAnI2ZmZicsXG4gICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgfSk7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICB0aGlzLmluc3RFeHBpcmUgPSB0aGlzLnRpbWUubm93ICsgNTAwMDtcblxuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuc2NvcmVUZXh0ID0gdGhpcy5hZGQudGV4dChcbiAgICAgIDE2MCwgMzAsICdTY29yZTogJyArIHRoaXMuc2NvcmUsIHtcbiAgICAgICAgZm9udDogJzIwcHggRmlyYSBNb25vJyxcbiAgICAgICAgZmlsbDogJyNmZmYnLFxuICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgIH0pO1xuICAgIHRoaXMuc2NvcmVUZXh0LmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gIH1cblxuICBjaGVja0NvbGxpc2lvbnMoKSB7XG4gICAgdGhpcy5waHlzaWNzLmFyY2FkZS5vdmVybGFwKFxuICAgICAgdGhpcy5wbGF5ZXIuYnVsbGV0UG9vbCxcbiAgICAgIHRoaXMuZW5lbXksXG4gICAgICB0aGlzLmVuZW15SGl0LFxuICAgICAgbnVsbCxcbiAgICAgIHRoaXNcbiAgICApO1xuXG4gICAvLyAgdGhpcy5waHlzaWNzLmFyY2FkZS5vdmVybGFwKFxuICAgLy8gICAgdGhpcy5idWxsZXRQb29sLFxuICAgLy8gICAgdGhpcy5zaG9vdGVyUG9vbCxcbiAgIC8vICAgIHRoaXMuZW5lbXlIaXQsXG4gICAvLyAgICBudWxsLFxuICAgLy8gICAgdGhpc1xuICAgLy8gICk7XG5cbiAgIC8vICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAoXG4gICAvLyAgICB0aGlzLnBsYXllcixcbiAgIC8vICAgIHRoaXMuZW5lbXlQb29sLFxuICAgLy8gICAgdGhpcy5wbGF5ZXJIaXQsXG4gICAvLyAgICBudWxsLFxuICAgLy8gICAgdGhpc1xuICAgLy8gICk7XG5cbiAgIC8vIHRoaXMucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChcbiAgIC8vICAgIHRoaXMucGxheWVyLFxuICAgLy8gICAgdGhpcy5zaG9vdGVyUG9vbCxcbiAgIC8vICAgIHRoaXMucGxheWVySGl0LFxuICAgLy8gICAgbnVsbCxcbiAgIC8vICAgIHRoaXNcbiAgIC8vICApO1xuXG4gICAvLyAgIHRoaXMucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChcbiAgIC8vICAgIHRoaXMucGxheWVyLFxuICAgLy8gICAgdGhpcy5lbmVteUJ1bGxldFBvb2wsXG4gICAvLyAgICB0aGlzLnBsYXllckhpdCxcbiAgIC8vICAgIG51bGwsXG4gICAvLyAgICB0aGlzXG4gICAvLyAgKTtcblxuICAgLy8gICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAoXG4gICAvLyAgICB0aGlzLnBsYXllcixcbiAgIC8vICAgIHRoaXMucG93ZXJVcFBvb2wsXG4gICAvLyAgICB0aGlzLnBsYXllckhpdCxcbiAgIC8vICAgIG51bGwsXG4gICAvLyAgICB0aGlzXG4gICAvLyAgKTtcblxuICAgLy8gIGlmICh0aGlzLmJvc3NBcHByb2FjaGluZyA9PT0gZmFsc2UpIHtcbiAgIC8vICAgIHRoaXMucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChcbiAgIC8vICAgICAgdGhpcy5idWxsZXRQb29sLFxuICAgLy8gICAgICB0aGlzLmJvc3NQb29sLFxuICAgLy8gICAgICB0aGlzLmVuZW15SGl0LFxuICAgLy8gICAgICBudWxsLFxuICAgLy8gICAgICB0aGlzXG4gICAvLyAgICApO1xuXG4gICAvLyAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAoXG4gICAvLyAgICAgIHRoaXMucGxheWVyLFxuICAgLy8gICAgICB0aGlzLmJvc3NQb29sLFxuICAgLy8gICAgICB0aGlzLnBsYXllckhpdCxcbiAgIC8vICAgICAgbnVsbCxcbiAgIC8vICAgICAgdGhpc1xuICAgLy8gICAgKTtcbiAgIC8vICB9XG4gIH1cblxuICBzcGF3bkVuZW1pZXMoKSB7XG4gICAgaWYgKHRoaXMubmV4dEVuZW15QXQgPCB0aGlzLnRpbWUubm93ICYmIHRoaXMuZW5lbXlQb29sLmNvdW50RGVhZCgpID4gMCkge1xuICAgICAgdGhpcy5uZXh0RW5lbXlBdCA9IHRoaXMudGltZS5ub3cgKyB0aGlzLmVuZW15RGVsYXk7XG5cbiAgICAgIHRoaXMuZW5lbXlEZWxheSA9IHRoaXMucm5kLmludGVnZXJJblJhbmdlKDMwMCwgMTAwMCk7XG4gICAgICB2YXIgZW5lbXkgPSB0aGlzLmVuZW15UG9vbC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgICAvLyB3aWR0aCA9IDMyMCwgZW5lbXkgd2lkdGggMzIsIGNlbnRlciBpcyAzMi8yID0gMTZcbiAgICAgIGVuZW15LnJlc2V0KHRoaXMucm5kLmludGVnZXJJblJhbmdlKDIwLCAzMDQpLCAwLCB0aGlzLmVuZW15SW5pdGlhbEhlYWx0aCk7XG4gICAgICBlbmVteS5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLnJuZC5pbnRlZ2VySW5SYW5nZSgzMCwgNjApO1xuICAgICAgZW5lbXkucGxheSgnZmx5Jyk7XG4gICAgfVxuICAgIHZhciBzaG9vdGVyID0gdGhpcy5zaG9vdGVyUG9vbC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgLy8gU3Bhd24gYXQgYSByYW5kb20gbG9jYXRpb24gYXQgdGhlIHRvcFxuICAgIHNob290ZXIucmVzZXQodGhpcy5ybmQuaW50ZWdlckluUmFuZ2UoMjAsIDQ0OCksIDAsIHRoaXMuc2hvb3RlckluaXRpYWxIZWFsdGgpO1xuICAgIC8vIENob29zZSBhIHJhbmRvbSB0YXJnZXQgbG9jYXRpb24gYXQgdGhlIGJvdHRvbVxuICAgIHZhciB0YXJnZXQgPSB0aGlzLnJuZC5pbnRlZ2VySW5SYW5nZSgyMCwgNDQ4KTtcbiAgICAvLyBNb3ZlIHRvIHRhcmdldCBhbmQgcm90YXRlIHRoZSBzcHJpdGUgYWNjb3JkaW5nbHlcbiAgICBzaG9vdGVyLnJvdGF0aW9uID0gdGhpcy5waHlzaWNzLmFyY2FkZS5tb3ZlVG9YWShcbiAgICAgIHNob290ZXIsIHRhcmdldCwgMzIwLCB0aGlzLnJuZC5pbnRlZ2VySW5SYW5nZSgzMCwgODApXG4gICAgKSAtIE1hdGguUEkgLyAyO1xuXG4gICAgc2hvb3Rlci5wbGF5KCdmbHknKTtcbiAgICBzaG9vdGVyLm5leHRTaG90QXQgPSAwO1xuICB9XG5cbiAgZW5lbXlGaXJlKCkge1xuICAgIHRoaXMuc2hvb3RlclBvb2wuZm9yRWFjaEFsaXZlKGZ1bmN0aW9uKGVuZW15KSB7XG4gICAgICBpZiAodGhpcy50aW1lLm5vdyA+IGVuZW15Lm5leHRTaG90QXQgJiYgdGhpcy5lbmVteUJ1bGxldFBvb2wuY291bnREZWFkKCkgPiAwKSB7XG4gICAgICAgIHZhciBidWxsZXQgPSB0aGlzLmVuZW15QnVsbGV0UG9vbC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgICAgIGJ1bGxldC5yZXNldChlbmVteS54LCBlbmVteS55KTtcbiAgICAgICAgdGhpcy5waHlzaWNzLmFyY2FkZS5tb3ZlVG9PYmplY3QoYnVsbGV0LCB0aGlzLnBsYXllciwgMTUwKTtcbiAgICAgICAgZW5lbXkubmV4dFNob3RBdCA9IHRoaXMudGltZS5ub3cgKyB0aGlzLnNob290ZXJTaG90RGVsYXk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICBpZiAodGhpcy5ib3NzQXBwcm9hY2hpbmcgPT09IGZhbHNlICYmIHRoaXMuYm9zcy5hbGl2ZSAmJiBcbiAgICAgICAgdGhpcy5ib3NzLm5leHRTaG90QXQgPCB0aGlzLnRpbWUubm93ICYmXG4gICAgICAgIHRoaXMuZW5lbXlCdWxsZXRQb29sLmNvdW50RGVhZCgpID4gOSkge1xuXG4gICAgICB0aGlzLmJvc3MubmV4dFNob3RBdCA9IHRoaXMudGltZS5ub3cgKyAxMDAwO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAvLyBwcm9jZXNzIDIgYnVsbGV0cyBhdCBhIHRpbWVcbiAgICAgICAgdmFyIGxlZnRCdWxsZXQgPSB0aGlzLmVuZW15QnVsbGV0UG9vbC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgICAgIGxlZnRCdWxsZXQucmVzZXQodGhpcy5ib3NzLnggLSAxMCAtIGkgKiAxMCwgdGhpcy5ib3NzLnkgKyAyMCk7XG4gICAgICAgIHZhciByaWdodEJ1bGxldCA9IHRoaXMuZW5lbXlCdWxsZXRQb29sLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICAgICAgcmlnaHRCdWxsZXQucmVzZXQodGhpcy5ib3NzLnggKyAxMCArIGkgKiAxMCwgdGhpcy5ib3NzLnkgKyAyMCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYm9zcy5oZWFsdGggPiAyNTApIHtcbiAgICAgICAgICAvLyBhaW0gZGlyZWN0bHkgYXQgdGhlIHBsYXllclxuICAgICAgICAgIHRoaXMucGh5c2ljcy5hcmNhZGUubW92ZVRvT2JqZWN0KGxlZnRCdWxsZXQsIHRoaXMucGxheWVyLCAxNTApO1xuICAgICAgICAgIHRoaXMucGh5c2ljcy5hcmNhZGUubW92ZVRvT2JqZWN0KHJpZ2h0QnVsbGV0LCB0aGlzLnBsYXllciwgMTUwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBhaW0gc2xpZ2h0bHkgb2ZmIGNlbnRlciBvZiB0aGUgcGxheWVyXG4gICAgICAgICAgdGhpcy5waHlzaWNzLmFyY2FkZS5tb3ZlVG9YWShcbiAgICAgICAgICAgIGxlZnRCdWxsZXQsIHRoaXMucGxheWVyLnggLSBpICogMTAwLCB0aGlzLnBsYXllci55LCAxNTBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucGh5c2ljcy5hcmNhZGUubW92ZVRvWFkoXG4gICAgICAgICAgICByaWdodEJ1bGxldCwgdGhpcy5wbGF5ZXIueCArIGkgKiAxMDAsIHRoaXMucGxheWVyLnksIDE1MFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIGRlbGF5RWZmZWN0KCkge1xuXG4gICAgLy8gRmFkZSBvdXQgaW5zdHJ1Y3Rpb24gdGV4dFxuICAgIGlmICh0aGlzLmluc3RydWN0aW9ucy5leGlzdHMgJiYgdGhpcy50aW1lLm5vdyA+IHRoaXMuaW5zdEV4cGlyZSkge1xuICAgICAgLy8gdGhpcy5pbnN0cnVjdGlvbnMueCA9IHRoaXMuaW5zdHJ1Y3Rpb25zLnggLSAxMDtcbiAgICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5pbnN0cnVjdGlvbnMpLnRvKCB7IGFscGhhOiAwIH0sIDEwMCwgXCJMaW5lYXJcIiwgdHJ1ZSk7XG4gICAgICBpZiAodGhpcy5pbnN0cnVjdGlvbnMuYWxwaGEgPCAwLjAwMSkgdGhpcy5pbnN0cnVjdGlvbnMuZGVzdHJveSgpO1xuICAgIH1cbi8qXG4gICAgaWYgKHRoaXMuZ2hvc3RVbnRpbCAmJiB0aGlzLmdob3N0VW50aWwgPCB0aGlzLnRpbWUubm93KSB7XG4gICAgICB0aGlzLmdob3N0VW50aWwgPSBudWxsO1xuICAgICAgdGhpcy5wbGF5ZXIucGxheSgnZmx5Jyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2hvd1JldHVybiAmJiB0aGlzLnRpbWUubm93ID4gdGhpcy5zaG93UmV0dXJuKSB7XG4gICAgICB0aGlzLnJldHVyblRleHQgPSB0aGlzLmFkZC50ZXh0KDE2MCwgMzIwLCBcbiAgICAgICAgJ1ByZXNzIFogb3IgVGFwIEdhbWUgdG8gZ28gYmFjayB0byBNYWluIE1lbnUnLCB7XG4gICAgICAgICAgZm9udDogJzE2cHggc2VyaWYnLFxuICAgICAgICAgIGZpbGw6ICcjZmZmJ1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLnJldHVyblRleHQuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICAgIHRoaXMuc2hvd1JldHVybiA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJvc3NBcHByb2FjaGluZyAmJiB0aGlzLmJvc3MueSA+IDgwKSB7XG4gICAgICB0aGlzLmJvc3NBcHByb2FjaGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5ib3NzLmhlYWx0aCA9IDUwMDtcbiAgICAgIHRoaXMuYm9zcy5uZXh0U2hvdEF0ID0gMDtcblxuICAgICAgdGhpcy5ib3NzLmJvZHkudmVsb2NpdHkueSA9IDA7XG4gICAgICB0aGlzLmJvc3MuYm9keS52ZWxvY2l0eS54ID0gMjAwO1xuICAgICAgLy8gYWxsb3cgYm91bmNpbmcgb2ZmIHdvcmxkIGJvdW5kc1xuICAgICAgdGhpcy5ib3NzLmJvZHkuYm91bmNlLnggPSAxO1xuICAgICAgdGhpcy5ib3NzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcbiAgICB9XG4gICAgKi9cbiAgfVxuXG4gIGV4cGxvZGUoc3ByaXRlKSB7XG4gICAgaWYgKHRoaXMuZXhwbG9zaW9uUG9vbC5jb3VudERlYWQoKSA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXhwbG9zaW9uID0gdGhpcy5leHBsb3Npb25Qb29sLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICBleHBsb3Npb24ucmVzZXQoc3ByaXRlLngsIHNwcml0ZS55KTtcbiAgICBleHBsb3Npb24ucGxheSgnYm9vbScsIDE1LCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICBlbmVteUhpdChidWxsZXQsIGVuZW15KSB7XG4gICAgY29uc29sZS5sb2coXCJlbmVteUhJdFwiKTtcbiAgICAvLyBidWxsZXQua2lsbCgpO1xuICAgIC8vIHRoaXMuZGFtYWdlRW5lbXkoZW5lbXksIDEpO1xuICB9XG5cbiAgcGxheWVySGl0KHBsYXllciwgZW5lbXkpIHtcblxuICAgIGlmICh0aGlzLmdob3N0VW50aWwgJiYgdGhpcy5naG9zdFVudGlsID4gdGhpcy50aW1lLm5vdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGFtYWdlRW5lbXkoZW5lbXksIDUpO1xuICAgIHZhciBsaWZlID0gdGhpcy5saXZlcy5nZXRGaXJzdEFsaXZlKCk7XG4gICAgaWYgKGxpZmUpIHtcbiAgICAgIGxpZmUua2lsbCgpO1xuICAgICAgdGhpcy53ZWFwb25MZXZlbCA9IDA7XG4gICAgICB0aGlzLmdob3N0VW50aWwgPSB0aGlzLnRpbWUubm93ICsgMjAwMDtcbiAgICAgIHRoaXMucGxheWVyLnBsYXkoJ2dob3N0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXhwbG9kZShwbGF5ZXIpO1xuICAgICAgcGxheWVyLmtpbGwoKTtcbiAgICAgIHRoaXMuZGlzcGxheUVuZChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcGxheWVyUG93ZXJVcChwbGF5ZXIsIHBvd2VyVXApIHtcbiAgICB0aGlzLmFkZFRvU2NvcmUocG93ZXJVcC5yZXdhcmQpO1xuICAgIHBvd2VyVXAua2lsbCgpO1xuICAgIGlmICh0aGlzLndlYXBvbkxldmVsIDwgNSkge1xuICAgICAgdGhpcy53ZWFwb25MZXZlbCArPSAxO1xuICAgIH1cbiAgfVxuXG4gIGRhbWFnZUVuZW15KGVuZW15LCBkYW1hZ2UpIHtcbiAgICAvLyBkZXRhaWwgOiBodHRwOi8vZG9jcy5waGFzZXIuaW8vUGhhc2VyLlNwcml0ZS5odG1sI2RhbWFnZVxuICAgIGVuZW15LmRhbWFnZShkYW1hZ2UpO1xuICAgIGlmIChlbmVteS5hbGl2ZSkge1xuICAgICAgZW5lbXkucGxheSgnaGl0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXhwbG9kZShlbmVteSk7XG4gICAgICB0aGlzLnNwYXduUG93ZXJVcChlbmVteSk7XG4gICAgICB0aGlzLmFkZFRvU2NvcmUoZW5lbXkucmV3YXJkKTtcblxuICAgICAgaWYgKGVuZW15LmtleSA9PT0gJ2Jvc3MnKSB7XG4gICAgICAgIHRoaXMuZW5lbXlQb29sLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5zaG9vdGVyUG9vbC5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuYm9zc1Bvb2wuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmVuZW15QnVsbGV0UG9vbC5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuZGlzcGxheUVuZCh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzcGF3blBvd2VyVXAoZW5lbXkpIHtcbiAgICBpZiAodGhpcy5wb3dlclVwUG9vbC5jb3VudERlYWQoKSA9PT0gMCB8fCB0aGlzLndlYXBvbkxldmVsID09PSA1KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucm5kLmZyYWMoKSA8IGVuZW15LmRyb3BSYXRlKSB7XG4gICAgICAgdmFyIHBvd2VyVXAgPSB0aGlzLnBvd2VyVXBQb29sLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICAgICBwb3dlclVwLnJlc2V0KGVuZW15LngsIGVuZW15LnkpO1xuICAgICAgIHBvd2VyVXAuYm9keS52ZWxvY2l0eS55ID0gMTAwO1xuICAgICB9XG4gIH1cblxuICBzcGF3bkJvc3MoKSB7XG4gICAgdGhpcy5ib3NzQXBwcm9hY2hpbmcgPSB0cnVlO1xuICAgIHZhciBib3NzID0gdGhpcy5ib3NzUG9vbC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgdGhpcy5waHlzaWNzLmVuYWJsZShib3NzLCBQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgIGJvc3MucmVzZXQoMTYwLCAwLCB0aGlzLmJvc3NJbml0aWFsSGVhbHRoKTtcbiAgICBib3NzLmJvZHkudmVsb2NpdHkueSA9IDE1O1xuICAgIGJvc3MucGxheSgnZmx5Jyk7XG5cbiAgICB0aGlzLmVuZW15UG9vbC5kZXN0cm95KCk7XG4gICAgLy8gdGhpcy5zaG9vdGVyUG9vbC5kZXN0cm95KCk7XG4gIH1cblxuICBhZGRUb1Njb3JlKHNjb3JlKSB7XG4gICAgdGhpcy5zY29yZSArPSBzY29yZTtcbiAgICB0aGlzLnNjb3JlVGV4dC50ZXh0ID0gJ1Njb3JlIDogJyArIHRoaXMuc2NvcmU7XG4gICAgaWYgKHRoaXMuc2NvcmUgPj0gMjAwMDAgJiYgdGhpcy5ib3NzUG9vbC5jb3VudERlYWQoKSA9PSAxKSB7XG4vKiAgICAgIHRoaXMuZW5lbXlQb29sLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuc2hvb3RlclBvb2wuZGVzdHJveSgpO1xuICAgICAgdGhpcy5lbmVteUJ1bGxldFBvb2wuZGVzdHJveSgpO1xuICAgICAgdGhpcy5kaXNwbGF5RW5kKHRydWUpOyovXG4gICAgICB0aGlzLnNwYXduQm9zcygpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlFbmQod2luKSB7XG4gICAgaWYgKHRoaXMuZW5kVGV4dCAmJiB0aGlzLmVuZFRleHQuZXhpc3RzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1lc3NhZ2UgPSB3aW4gPyAnWW9vIFdpbiEhIScgOiAnR2FtZSBPdmVyISc7XG4gICAgdGhpcy5lbmRUZXh0ID0gdGhpcy5hZGQudGV4dCgxNjAsIDI0MCwgbWVzc2FnZSwge1xuICAgICAgZm9udDogJzQ4cHggc2VyaWYnLCBcbiAgICAgIGZpbGw6ICcjZjAwJ1xuICAgIH0pO1xuICAgIHRoaXMuZW5kVGV4dC5hbmNob3Iuc2V0VG8oMC41LCAwKTtcbiAgICB0aGlzLnNob3dSZXR1cm4gPSB0aGlzLnRpbWUubm93ICsgMjAwMDtcbiAgfVxuXG4gIHF1aXRHYW1lKHBvaW50ZXIpIHtcblxuICAgIC8vICBIZXJlIHlvdSBzaG91bGQgZGVzdHJveSBhbnl0aGluZyB5b3Ugbm8gbG9uZ2VyIG5lZWQuXG4gICAgLy8gIFN0b3AgbXVzaWMsIGRlbGV0ZSBzcHJpdGVzLCBwdXJnZSBjYWNoZXMsIGZyZWUgcmVzb3VyY2VzLCBhbGwgdGhhdCBnb29kIHN0dWZmLlxuICAgIHRoaXMuc2VhLmRlc3Ryb3koKTtcbiAgICB0aGlzLnBsYXllci5kZXN0cm95KCk7XG4gICAgLy8gdGhpcy5lbmVteVBvb2wuZGVzdHJveSgpO1xuICAgIC8vIHRoaXMuYnVsbGV0UG9vbC5kZXN0cm95KCk7XG4gICAgLy8gdGhpcy5leHBsb3Npb25Qb29sLmRlc3Ryb3koKTtcbiAgICB0aGlzLmluc3RydWN0aW9ucy5kZXN0cm95KCk7XG4gICAgdGhpcy5zY29yZVRleHQuZGVzdHJveSgpO1xuICAgIC8vIHRoaXMucmV0dXJuVGV4dC5kZXN0cm95KCk7XG5cbiAgICAvLyAgVGhlbiBsZXQncyBnbyBiYWNrIHRvIHRoZSBtYWluIG1lbnUuXG4gICAgdGhpcy5zdGF0ZS5zdGFydCgnTWVudScpO1xuICB9XG5cblxuICBzZXR1cFBsYXllcigpIHtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5nYW1lLCAxNjAsIDQ1MCwgJ3BsYXllcicpO1xuICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RhdGVzL1BsYXkuanNcbiAqKi8iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7XG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ3BsYXllcicpO1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5jdXJzb3JzID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG5cbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdmbHknLCBbMCwgMSwgMiwgM10sIDEwLCB0cnVlKTtcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdmbHktbGVmdCcsIFs0LCA1LCA2LCA3XSwgMTAsIHRydWUpO1xuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2ZseS1yaWdodCcsIFs4LCA5LCAxMCwgMTFdLCAxMCwgdHJ1ZSk7XG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnZ2hvc3QnLCBbMywgMCwgMywgMV0sIDIwLCB0cnVlKTtcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUodGhpcywgUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcbiAgICB0aGlzLnNwZWVkID0gMjUwO1xuICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgIHRoaXMuYm9keS5zZXRTaXplKDIwLCAyMCwgMCwgLTUpO1xuICAgIHRoaXMud2VhcG9uTGV2ZWwgPSAwO1xuICAgIHRoaXMuYnVsbGV0U3BlZWQgPSAyMDA7XG4gICAgdGhpcy5jcmVhdGVCdWxsZXRQb29sKCk7XG4gICAgdGhpcy5jcmVhdGlvblRpbWUgPSB0aGlzLmdhbWUudGltZS5ub3c7XG5cbiAgICAvLyB0aGlzLmVtaXR0ZXIgPSB0aGlzLmdhbWUuYWRkLmVtaXR0ZXIodGhpcy5ib2R5LngsIHRoaXMuYm9keS55LCAyMDApO1xuICAgIC8vIHRoaXMuZW1pdHRlci5tYWtlUGFydGljbGVzKCdmaXJlJyk7XG4gICAgLy8gdGhpcy5lbWl0dGVyLmdyYXZpdHkgPSAyMDA7XG4gICAgLy8gdGhpcy5lbWl0dGVyLnNldEFscGhhKDEsIDAsIDMwMDApO1xuICAgIC8vIHRoaXMuZW1pdHRlci5zZXRTY2FsZSgwLjgsIDAsIDAuOCwgMCwgMzAwMCk7XG4gICAgLy8gdGhpcy5lbWl0dGVyLndpZHRoID0gODtcbiAgICAvLyB0aGlzLmVtaXR0ZXIuc2V0WVNwZWVkKDEwMCwgMjAwKTtcbiAgICAvLyB0aGlzLmVtaXR0ZXIuc2V0WFNwZWVkKC0wLjEsIC4xKTtcbiAgICAvLyB0aGlzLmVtaXR0ZXIubWluUm90YXRpb24gPSAwO1xuICAgIC8vIHRoaXMuZW1pdHRlci5tYXhSb3RhdGlvbiA9IDA7XG5cbiAgICB0aGlzLmdhbWUuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XG4gICAgdGhpcy5wbGF5KCdmbHknKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1bGxldFBvb2woKSB7XG4gICAgdGhpcy5idWxsZXRQb29sID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuICAgIHRoaXMuYnVsbGV0UG9vbC5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICB0aGlzLmJ1bGxldFBvb2wucGh5c2ljc0JvZHlUeXBlID0gUGhhc2VyLlBoeXNpY3MuQVJDQURFO1xuICAgIHRoaXMuYnVsbGV0UG9vbC5jcmVhdGVNdWx0aXBsZSgxMDAsICdidWxsZXQnKTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuc2V0QWxsKCdhbmNob3IueCcsIDAuNSk7XG4gICAgdGhpcy5idWxsZXRQb29sLnNldEFsbCgnYW5jaG9yLnknLCAwLjUpO1xuXG4gICAgLy8gS2lsbCBidWxsZXQgd2hlbiBvb0JcbiAgICB0aGlzLmJ1bGxldFBvb2wuc2V0QWxsKCdvdXRPZkJvdW5kc0tpbGwnLCB0cnVlKTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuc2V0QWxsKCdjaGVja1dvcmxkQm91bmRzJywgdHJ1ZSk7XG5cbiAgICB0aGlzLm5leHRTaG90QXQgPSAwO1xuICAgIHRoaXMuc2hvdERlbGF5ID0gMjAwO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5oYW5kbGVJbnB1dCgpO1xuICB9XG5cbiAgc2hvb3QoZGlyZWN0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmFsaXZlIHx8IHRoaXMubmV4dFNob3RBdCA+IHRoaXMuZ2FtZS50aW1lLm5vdykge1xuICAgICAgcmV0dXJuOyAvLyByZXR1cm4gaWYgcGxheWVyIGlzIGRlYWQgb3IgZGVsYXkgaXMgaW4gcGxhY2VcbiAgICB9XG5cbiAgICB0aGlzLm5leHRTaG90QXQgPSB0aGlzLmdhbWUudGltZS5ub3cgKyB0aGlzLnNob3REZWxheTtcbiAgICBsZXQgYnVsbGV0O1xuXG4gICAgaWYgKHRoaXMud2VhcG9uTGV2ZWwgPT09IDApIHtcbiAgICAgIGlmICh0aGlzLmJ1bGxldFBvb2wuY291bnREZWFkKCkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBidWxsZXQgPSB0aGlzLmJ1bGxldFBvb2wuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgICAgYnVsbGV0LnJlc2V0KHRoaXMueCwgdGhpcy55KTtcbiAgICAgIGJ1bGxldC5ib2R5LnZlbG9jaXR5LnkgPSAtdGhpcy5idWxsZXRTcGVlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuYnVsbGV0UG9vbC5jb3VudERlYWQoKSA8IHRoaXMud2VhcG9uTGV2ZWwgKiAyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53ZWFwb25MZXZlbDsgaSsrKSB7XG4gICAgICAgIGJ1bGxldCA9IHRoaXMuYnVsbGV0UG9vbC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG5cbiAgICAgICAgLy8gU3Bhd24gbGVmdCBidWxsZXQgbGVmdCBvZmYgY2VudGVyXG4gICAgICAgIGJ1bGxldC5yZXNldCh0aGlzLnggLSAoMTAgKyBpICogNSksIHRoaXMueSAtIDE2KTtcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLnZlbG9jaXR5RnJvbUFuZ2xlKC05NSAtIGkgKiAxMCwgdGhpcy5idWxsZXRTcGVlZCwgYnVsbGV0LmJvZHkudmVsb2NpdHkpO1xuXG4gICAgICAgIGJ1bGxldCA9IHRoaXMuYnVsbGV0UG9vbC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgICAgIGJ1bGxldC5yZXNldCh0aGlzLnggKyAoMTAgKyBpICogNSksIHRoaXMueSAtIDE2KTtcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLnZlbG9jaXR5RnJvbUFuZ2xlKC04NSArIGkgKjEwLCB0aGlzLmJ1bGxldFNwZWVkLCBidWxsZXQuYm9keS52ZWxvY2l0eSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuXG4gIGhhbmRsZUlucHV0KCkge1xuICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gMDtcbiAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IDA7XG5cbiAgICBpZiAodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuWCkpIHRoaXMuc2hvb3QoXCJ1cFwiKTtcbiAgICBpZiAodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuWSkpIHRoaXMubGV2ZWxVcCgpO1xuXG5cbiAgICBpZiAodGhpcy5jdXJzb3JzLnVwLmlzRG93bikge1xuICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSAtdGhpcy5zcGVlZDtcbiAgICAgIC8vIHRoaXMuZmlyZVBhcnRpY2xlcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXJzb3JzLmRvd24uaXNEb3duKSB0aGlzLmJvZHkudmVsb2NpdHkueSA9IHRoaXMuc3BlZWQ7XG5cblxuICAgIGlmICh0aGlzLmN1cnNvcnMubGVmdC5pc0Rvd24pIHtcbiAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gLXRoaXMuc3BlZWQ7XG4gICAgICB0aGlzLnBsYXkoJ2ZseS1sZWZ0Jyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnNvcnMucmlnaHQuaXNEb3duKSB7XG4gICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9ICt0aGlzLnNwZWVkO1xuICAgICAgdGhpcy5wbGF5KCdmbHktcmlnaHQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wbGF5KCdmbHknKTtcbiAgICB9XG4gIH1cblxuICBmaXJlUGFydGljbGVzKCkge1xuICAgIHRoaXMuZW1pdHRlci54ID0gdGhpcy5ib2R5LmNlbnRlci54O1xuICAgIHRoaXMuZW1pdHRlci55ID0gdGhpcy5ib2R5LmNlbnRlci55O1xuICAgIHRoaXMuZW1pdHRlci5zdGFydCh0cnVlICwgMzAwLCAxLCAuMSk7XG5cbiAgfVxuXG4gIGxldmVsVXAoKSB7XG4gICAgdGhpcy53ZWFwb25MZXZlbCA9IDE7XG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbHMvUGxheWVyLmpzXG4gKiovIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuICBcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHtcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnZ3JlZW5FbmVteScpO1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2ZseScsIFswLCAxLCAyLCAzXSwgMTAsIHRydWUpO1xuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2dob3N0JywgWzMsIDAsIDMsIDJdLCAyMCwgdHJ1ZSk7XG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKHRoaXMsIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgdGhpcy5zcGVlZCA9IDIwMDtcbiAgICB0aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcbiAgICB0aGlzLmJvZHkuc2V0U2l6ZSgyMCwgMjAsIDAsIC01KTtcbiAgICAvLyBDcmVhdGUgQnVsbGV0c1xuICAgIHRoaXMuY3JlYXRlQnVsbGV0UG9vbCgpO1xuICAgIC8vIEFkZCB0byBzdGFnZVxuICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcbiAgICB0aGlzLnBsYXkoJ2ZseScpO1xuICB9XG5cbiAgY3JlYXRlQnVsbGV0UG9vbCgpIHtcbiAgICB0aGlzLmJ1bGxldFBvb2wgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG4gICAgdGhpcy5idWxsZXRQb29sLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgIHRoaXMuYnVsbGV0UG9vbC5waHlzaWNzQm9keVR5cGUgPSBQaGFzZXIuUGh5c2ljcy5BUkNBREU7XG4gICAgdGhpcy5idWxsZXRQb29sLmNyZWF0ZU11bHRpcGxlKDEwMCwgJ2VuZW15QnVsbGV0Jyk7XG4gICAgdGhpcy5idWxsZXRQb29sLnNldEFsbCgnYW5jaG9yLngnLCAwLjUpO1xuICAgIHRoaXMuYnVsbGV0UG9vbC5zZXRBbGwoJ2FuY2hvci55JywgMC41KTtcblxuICAgIC8vIEtpbGwgYnVsbGV0IHdoZW4gb29CXG4gICAgdGhpcy5idWxsZXRQb29sLnNldEFsbCgnb3V0T2ZCb3VuZHNLaWxsJywgdHJ1ZSk7XG4gICAgdGhpcy5idWxsZXRQb29sLnNldEFsbCgnY2hlY2tXb3JsZEJvdW5kcycsIHRydWUpO1xuXG4gICAgdGhpcy5uZXh0U2hvdEF0ID0gMDtcbiAgICB0aGlzLnNob3REZWxheSA9IDUwMDtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyB0aGlzLnNob290KCk7XG4gIH1cblxuICBzaG9vdCgpIHtcbiAgICBpZiAoIXRoaXMuYWxpdmUgfHwgdGhpcy5uZXh0U2hvdEF0ID4gdGhpcy5nYW1lLnRpbWUubm93KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5uZXh0U2hvdEF0ID0gdGhpcy5nYW1lLnRpbWUubm93ICsgdGhpcy5zaG90RGVsYXk7XG4gICAgbGV0IGJ1bGxldDtcbiAgICBidWxsZXQgPSB0aGlzLmJ1bGxldFBvb2wuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgIGJ1bGxldC5yZXNldCh0aGlzLngsIHRoaXMueSk7XG4gICAgYnVsbGV0LmJvZHkudmVsb2NpdHkueSA9IDE1MDtcbiAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVscy9FbmVteS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=