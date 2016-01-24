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
	
	    _this.emitter = _this.game.add.emitter(_this.body.x, _this.body.y, 200);
	    _this.emitter.makeParticles('fire');
	    _this.emitter.gravity = 200;
	    _this.emitter.setAlpha(1, 0, 3000);
	    _this.emitter.setScale(0.8, 0, 0.8, 0, 3000);
	    _this.emitter.width = 8;
	    _this.emitter.setYSpeed(100, 200);
	    _this.emitter.setXSpeed(-0.1, .1);
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
	    key: 'update',
	    value: function update() {
	      // this.shoot();
	    }
	  }, {
	    key: 'damage',
	    value: function damage() {
	      console.log("enemy damage");
	      this.fireParticles();
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
	      this.emitter.start(true, 300, 1, 1);
	    }
	  }]);
	
	  return Enemy;
	}(Phaser.Sprite);
	
	exports.default = Enemy;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjZkYzgzY2ZhZWQyNTY3MDVmMzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvQm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzL1ByZWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcy9NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvUGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0VuZW15LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NoQ00sSUFBSTthQUFKLElBQUk7O0FBRVIsWUFGSSxJQUFJLEdBRU07MkJBRlYsSUFBSTs7Ozt3RUFBSixJQUFJLGFBR0EsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJOztBQUc1QyxXQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxpQkFBTyxDQUFDO0FBQzdCLFdBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLG9CQUFVLENBQUM7QUFDbkMsV0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0saUJBQU8sQ0FBQztBQUM3QixXQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxpQkFBTzs7QUFFNUIsV0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztJQUMxQjs7VUFaRyxJ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QkFFTztBQUNOLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO0FBQ3ZELGdCQUFPO1FBQ1I7O0FBRUQsV0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUN0RCxXQUFJLE1BQU0sYUFBQztBQUNYLGFBQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQyxhQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLGFBQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7TUFDOUI7OztxQ0FHZTtBQUNkLFdBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNwQyxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDcEMsV0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFFdEM7OztVQXpFa0IsS0FBSztHQUFTLE1BQU0sQ0FBQyxNQUFNOzttQkFBM0IsS0FBSyxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYjZkYzgzY2ZhZWQyNTY3MDVmMzlcbiAqKi8iLCJcbmltcG9ydCBCb290IGZyb20gJy4vc3RhdGVzL0Jvb3QnO1xuaW1wb3J0IFByZWxvYWQgZnJvbSAnLi9zdGF0ZXMvUHJlbG9hZCc7XG5pbXBvcnQgTWVudSBmcm9tICcuL3N0YXRlcy9NZW51JztcbmltcG9ydCBQbGF5IGZyb20gJy4vc3RhdGVzL1BsYXknO1xuXG5jbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLkdhbWUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKDMyMCwgNDgwLCBQaGFzZXIuQVVUTywgJ2NvbnRlbnQnLCBudWxsKTtcblxuICAgIC8vIEFkZCBzdGF0ZXNcbiAgICB0aGlzLnN0YXRlLmFkZCgnQm9vdCcsIEJvb3QpO1xuICAgIHRoaXMuc3RhdGUuYWRkKCdQcmVsb2FkJywgUHJlbG9hZCk7XG4gICAgdGhpcy5zdGF0ZS5hZGQoJ01lbnUnLCBNZW51KTtcbiAgICB0aGlzLnN0YXRlLmFkZCgnUGxheScsIFBsYXkpO1xuICAgIC8vIFN0YXJ0IHRoZSBnYW1lIHN0YXRlICdib290JyBmb3IgcHJvZFxuICAgIHRoaXMuc3RhdGUuc3RhcnQoJ0Jvb3QnKTtcbiAgfVxuXG59XG5cbm5ldyBHYW1lKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCb290IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcbiAgXG4gIHByZWxvYWQoKSB7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdwcmVsb2FkZXJCYXInLCAnYXNzZXRzL3ByZWxvYWRlci1iYXIucG5nJyk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgLy8gTm8gbXVsdGl0b3VjaCBzdXBwb3J0ID0gMVxuICAgIHRoaXMuaW5wdXQubWF4UG9pbnRlcnMgPSAxO1xuICAgIC8vIFBoYXNlciB3aWxsIGF1dG9tYXRpY2FsbHkgcGF1c2UgaWYgdGhlIGJyb3dzZXIgdGFiIGxvc2VzIGZvY3VzXG4gICAgdGhpcy5zdGFnZS5kaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5nYW1lLmRldmljZS5kZXNrdG9wKSB7XG4gICAgICAvLyBEZXNrdG9wIHNwZWNpZmljIHNldHRpbmdzXG4gICAgICAvLyB0aGlzLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE1vYmlsZSBzcGVjaWZpYyBzZXR0aW5nc1xuICAgICAgdGhpcy5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMO1xuICAgICAgdGhpcy5zY2FsZS5taW5XaWR0aCAgPSAzMjA7XG4gICAgICB0aGlzLnNjYWxlLm1pbkhlaWdodCA9IDQ4MDtcbiAgICAgIHRoaXMuc2NhbGUubWF4V2lkdGggID0gMTAyNDtcbiAgICAgIHRoaXMuc2NhbGUubWF4SGVpZ2h0ID0gNzY4O1xuICAgICAgLy8gdGhpcy5zY2FsZS5mb3JjZUxhbmRzY2FwZSA9IHRydWU7XG4gICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XG4gICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IGZhbHNlO1xuICAgICAgLy8gdGhpcy5zY2FsZS5zZXRTY3JlZW5TaXplKHRydWUpO1xuICAgIH0gXG5cbiAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQcmVsb2FkJyk7XG4gIH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0YXRlcy9Cb290LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG4gIFxuICBwcmVsb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKFwiUHJlbG9hZFwiKTtcbiAgICAvLyBTaG93IHRoZSBsb2FkaW5nIHByb2dyZXNzIGJhciBhc3NldCB3ZSBsb2FkZWQgaW4gYm9vdC5qc1xuICAgIHRoaXMuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyMyZDJkMmQnO1xuXG4gICAgdGhpcy5wcmVsb2FkQmFyID0gdGhpcy5hZGQuc3ByaXRlKDQxMiwgNDAwLCAncHJlbG9hZGVyQmFyJyk7XG4gICAgdGhpcy5hZGQudGV4dCg1MTAsIDM2MCwgXCJMb2FkaW5nLi4uXCIsIHtmb250OiBcIjMycHggbW9ub3NwYWNlXCIsIGZpbGw6ICcjZmZmJ30pLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG5cbiAgICAvLyBTZXQgbG9hZGVyIHNwcml0ZVxuICAgIHRoaXMubG9hZC5zZXRQcmVsb2FkU3ByaXRlKHRoaXMucHJlbG9hZEJhcik7XG5cbiAgICAvLyBMb2FkIHJlc3Qgb2YgdGhlIGFzc2V0c1xuICAgIHRoaXMubG9hZC5pbWFnZSgndGl0bGVwYWdlJywgJ2Fzc2V0cy90aXRsZXBhZ2UucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdzZWEnLCAnYXNzZXRzL3NlYS5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2J1bGxldCcsICdhc3NldHMvYnVsbGV0LnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnZW5lbXlCdWxsZXQnLCAnYXNzZXRzL2VuZW15LWJ1bGxldC5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3Bvd2VydXAxJywgJ2Fzc2V0cy9wb3dlcnVwMS5wbmcnKTtcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2dyZWVuRW5lbXknLCAnYXNzZXRzL2VuZW15LnBuZycsIDMyLCAzMik7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd3aGl0ZUVuZW15JywgJ2Fzc2V0cy9zaG9vdGluZy1lbmVteS5wbmcnLCAzMiwgMzIpO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnYm9zcycsICdhc3NldHMvYm9zcy5wbmcnLCA5MywgNzUpO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZXhwbG9zaW9uJywgJ2Fzc2V0cy9leHBsb3Npb24ucG5nJywgMzIsIDMyKTtcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3BsYXllcicsICdhc3NldHMvcGxheWVyLnBuZycsIDY0LCA2NCk7XG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdleHBsb3Npb24nLCBbJ2Fzc2V0cy9leHBsb3Npb24ud2F2J10pO1xuICAgIHRoaXMubG9hZC5hdWRpbygncGxheWVyRXhwbG9zaW9uJywgWydhc3NldHMvcGxheWVyLWV4cGxvc2lvbi53YXYnXSk7XG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdlbmVteUZpcmUnLCBbJ2Fzc2V0cy9lbmVteS1maXJlLndhdiddKTtcbiAgICB0aGlzLmxvYWQuYXVkaW8oJ3BsYXllckZpcmUnLCBbJ2Fzc2V0cy9wbGF5ZXItZmlyZS53YXYnXSk7XG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdwb3dlclVwJywgWydhc3NldHMvcG93ZXJ1cC53YXYnXSk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG5cbiAgICB0aGlzLnByZWxvYWRCYXIuY3JvcEVuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnN0YXRlLnN0YXJ0KCdNZW51Jyk7XG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdGF0ZXMvUHJlbG9hZC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuICBwcmVsb2FkKCkge1xuICAgIHRoaXMubG9hZC5pbWFnZSgndGl0bGVwYWdlJywgJy4vYXNzZXRzL3RpdGxlcGFnZS5wbmcnKVxuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiTWVudVwiKTtcbiAgICBsZXQgdGl0bGVwYWdlID0gdGhpcy5hZGQuc3ByaXRlKDAsIDAsICd0aXRsZXBhZ2UnKTtcblxuICAgIHRoaXMudGl0bGVUZXh0ICAgPSB0aGlzLmFkZC50ZXh0KDE2MCwgMTAwLCBcIlNpbXBsZSBTaG9vdGVyXCIsIHtmb250OiBcIjMycHggRmlyYSBNb25vXCIsIGZpbGw6IFwiI2ZmZlwiLCBhbGlnbjogJ2NlbnRlcid9KS5hbmNob3Iuc2V0VG8oLjUsIC41KTtcbiAgICB0aGlzLmxvYWRpbmdUZXh0ID0gdGhpcy5hZGQudGV4dCgxNjAsIDQwMCwgXCJDbGljayB0byBzdGFydFwiLCB7IGZvbnQ6IFwiMTVweCBGaXJhIE1vbm9cIiwgZmlsbDogXCIjZmZmXCIgfSk7XG4gICAgdGhpcy5sb2FkaW5nVGV4dC5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuU1BBQ0VCQVIpIHx8wqB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuaXNEb3duKSB7XG4gICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0R2FtZSgpIHtcbiAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQbGF5Jyk7XG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdGF0ZXMvTWVudS5qc1xuICoqLyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vbW9kZWxzL1BsYXllcic7XG5pbXBvcnQgRW5lbXkgZnJvbSAnLi4vbW9kZWxzL0VuZW15JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgcHJlbG9hZCgpIHtcblxuICAgIHRoaXMubG9hZC5pbWFnZSgnc2VhJywgJ2Fzc2V0cy9zZWEucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdidWxsZXQnLCAnYXNzZXRzL2J1bGxldC5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2VuZW15QnVsbGV0JywgJ2Fzc2V0cy9lbmVteS1idWxsZXQucG5nJyk7XG5cbiAgICAvLyBMb2FkIHBvd2VydXBcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3Bvd2VydXAxJywgJ2Fzc2V0cy9wb3dlcnVwMS5wbmcnKTtcbiAgICAvLyBMb2FkIHNoaXRcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2dyZWVuRW5lbXknLCAnYXNzZXRzL2VuZW15LnBuZycsIDMyLCAzMik7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd3aGl0ZUVuZW15JywgJ2Fzc2V0cy9zaG9vdGluZy1lbmVteS5wbmcnLCAzMiwgMzIpO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnYm9zcycsICdhc3NldHMvYm9zcy5wbmcnLCA5MywgNzUpO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZXhwbG9zaW9uJywgJ2Fzc2V0cy9leHBsb3Npb24ucG5nJywgMzIsIDMyKTtcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3BsYXllcicsICdhc3NldHMvcGxheWVyX2Z1bGwucG5nJywgNjQsIDY0LCAxMik7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdmaXJlJywgJ2Fzc2V0cy9maXJlLnBuZycpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuc2VhID0gdGhpcy5hZGQudGlsZVNwcml0ZSgwLCAwLCAzMjAsIDQ4MCwgJ3NlYScpO1xuICAgIHRoaXMuc2V0dXBQbGF5ZXIoKTtcbiAgICB0aGlzLmVuZW15ID0gbmV3IEVuZW15KHRoaXMuZ2FtZSwgMTYwLCAxMDAsICdncmVlbkVuZW15Jyk7XG5cbiAgICAvLyB0aGlzLnNldHVwRW5lbWllcygpO1xuICAgIC8vIHRoaXMuc2V0dXBFeHBsb3Npb25zKCk7XG4gICAgdGhpcy5jdXJzb3JzID0gdGhpcy5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XG4gICAgdGhpcy53b3JsZFNwZWVkID0gMC4yNTtcblxuICAgIC8vIHRpaHMuc2V0dXBQbGF5ZXJJY29ucygpO1xuICAgIHRoaXMuc2V0dXBUZXh0KCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5wbGF5ZXIuaGFuZGxlSW5wdXQoKTtcbiAgICB0aGlzLnNlYS50aWxlUG9zaXRpb24ueSArPSB0aGlzLndvcmxkU3BlZWQ7XG4gICAgdGhpcy5jaGVja0NvbGxpc2lvbnMoKTtcbiAgICAvLyB0aGlzLnNwYXduRW5lbWllcygpO1xuICAgIC8vIHRoaXMuZW5lbXlGaXJlKCk7XG4gICAgdGhpcy5kZXRlY3RQbGF5ZXJJbnB1dCgpO1xuICAgIHRoaXMuZGVsYXlFZmZlY3QoKTtcbiAgfVxuXG4gIGRldGVjdFBsYXllcklucHV0KCkge1xuICAgIGlmICh0aGlzLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuUSkpIHRoaXMucXVpdEdhbWUoKTtcbiAgfVxuXG5cbiAgc2V0dXBFbmVtaWVzKCkge1xuICAgIHRoaXMuZW5lbXlCdWxsZXRQb29sID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLmVuZW15QnVsbGV0UG9vbC5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICB0aGlzLmVuZW15QnVsbGV0UG9vbC5waHlzaWNzQm9keVR5cGUgPSBQaGFzZXIuUGh5c2ljcy5BUkNBREU7XG4gICAgdGhpcy5lbmVteUJ1bGxldFBvb2wuY3JlYXRlTXVsdGlwbGUoMTAwLCAnZW5lbXlCdWxsZXQnKTtcbiAgICB0aGlzLmVuZW15QnVsbGV0UG9vbC5zY2FsZS5zZXRUbygwLjUsIDAuNSk7XG4gICAgdGhpcy5lbmVteUJ1bGxldFBvb2wuc2V0QWxsKCdvdXRPZkJvdW5kc0tpbGwnLCB0cnVlKTtcbiAgICB0aGlzLmVuZW15QnVsbGV0UG9vbC5zZXRBbGwoJ2NoZWNrV29ybGRCb3VuZHMnLCB0cnVlKTtcbiAgICB0aGlzLmVuZW15QnVsbGV0UG9vbC5zZXRBbGwoJ3Jld2FyZCcsIDAsIGZhbHNlLCBmYWxzZSwgMCwgdHJ1ZSk7XG5cbiAgICB0aGlzLmVuZW15UG9vbCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgdGhpcy5lbmVteVBvb2wuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5lbmVteVBvb2wucGh5c2ljc0JvZHlUeXBlID0gUGhhc2VyLlBoeXNpY3MuQVJDQURFO1xuICAgIHRoaXMuZW5lbXlQb29sLmNyZWF0ZU11bHRpcGxlKDUwLCAnZ3JlZW5FbmVteScpO1xuICAgIHRoaXMuZW5lbXlQb29sLnNldEFsbCgnYW5jaG9yLngnLCAwLjUpO1xuICAgIHRoaXMuZW5lbXlQb29sLnNldEFsbCgnYW5jaG9yLnknLCAwLjUpO1xuICAgIHRoaXMuZW5lbXlQb29sLnNldEFsbCgnb3V0T2ZCb3VuZHNLaWxsJywgdHJ1ZSk7XG4gICAgdGhpcy5lbmVteVBvb2wuc2V0QWxsKCdyZXdhcmQnLCAxMDAsIGZhbHNlLCBmYWxzZSwgMCwgdHJ1ZSk7XG5cbiAgICAvLyAxMCUgY2hhbmNlIGFmdGVyIGVuZW15IGRlYWQuXG4gICAgdGhpcy5lbmVteVBvb2wuc2V0QWxsKCdkcm9wUmF0ZScsIDAuMSwgZmFsc2UsIGZhbHNlLCAwLCB0cnVlKTtcblxuICAgIHRoaXMuYm9zc1Bvb2wgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgIHRoaXMuYm9zc1Bvb2wuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5ib3NzUG9vbC5waHlzaWNzQm9keVR5cGUgPSBQaGFzZXIuUGh5c2ljcy5BUkNBREU7XG4gICAgdGhpcy5ib3NzUG9vbC5jcmVhdGVNdWx0aXBsZSgxLCAnYm9zcycpO1xuICAgIHRoaXMuYm9zc1Bvb2wuc2V0QWxsKCdhbmNob3IueCcsIDAuNSk7XG4gICAgdGhpcy5ib3NzUG9vbC5zZXRBbGwoJ2FuY2hvci55JywgMC41KTtcbiAgICB0aGlzLmJvc3NQb29sLnNldEFsbCgnb3V0T2ZCb3VuZHNLaWxsJywgdHJ1ZSk7XG4gICAgdGhpcy5ib3NzUG9vbC5zZXRBbGwoJ2NoZWNrV29ybGRCb3VuZHMnLCB0cnVlKTtcbiAgICB0aGlzLmJvc3NQb29sLnNldEFsbCgncmV3YXJkJywgMTAwMDAsIGZhbHNlLCBmYWxzZSwgMCwgdHJ1ZSk7XG4gICAgdGhpcy5ib3NzUG9vbC5zZXRBbGwoJ2Ryb3BSYXRlJywgMCwgZmFsc2UsIGZhbHNlLCAwLCB0cnVlKTtcblxuICAgIC8vIFNldCBhbmltYXRpb24gZm9yIGVhY2ggc3ByaXRlXG4gICAgdGhpcy5ib3NzUG9vbC5mb3JFYWNoKGZ1bmN0aW9uKGVuZW15KSB7XG4gICAgICBlbmVteS5hbmltYXRpb25zLmFkZCgnZmx5JywgWzAsIDEsIDJdLCAyMCwgdHJ1ZSk7XG4gICAgICBlbmVteS5hbmltYXRpb25zLmFkZCgnaGl0JywgWzMsIDEsIDMsIDJdLCAyMCwgZmFsc2UpO1xuICAgICAgZW5lbXkuZXZlbnRzLm9uQW5pbWF0aW9uQ29tcGxldGUuYWRkKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wbGF5KCdmbHknKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ib3NzID0gdGhpcy5ib3NzUG9vbC5nZXRUb3AoKTtcbiAgICB0aGlzLmJvc3NBcHByb2FjaGluZyA9IGZhbHNlO1xuICAgIHRoaXMuYm9zc0luaXRpYWxIZWFsdGggPSA1MDA7XG5cbiAgICAvLyBTZXQgYW5pbWF0aW9uXG4gICAgdGhpcy5lbmVteVBvb2wuZm9yRWFjaChmdW5jdGlvbihlbmVteSkge1xuICAgICAgZW5lbXkuYW5pbWF0aW9ucy5hZGQoJ2ZseScsIFswLCAxLCAyXSwgMjAsIHRydWUpO1xuICAgICAgZW5lbXkuYW5pbWF0aW9ucy5hZGQoJ2hpdCcsIFszLCAxLCA0LCAyXSwgMjAsIGZhbHNlKTtcbiAgICAgIGVuZW15LmV2ZW50cy5vbkFuaW1hdGlvbkNvbXBsZXRlLmFkZChmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnBsYXkoJ2ZseScpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm5leHRFbmVteUF0ID0gMDtcbiAgICB0aGlzLmVuZW15RGVsYXkgPSAxMDAwO1xuICAgIHRoaXMuZW5lbXlJbml0aWFsSGVhbHRoID0gMjtcblxuICAgIHRoaXMuc2hvb3RlclBvb2wgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgIHRoaXMuc2hvb3RlclBvb2wuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5zaG9vdGVyUG9vbC5waHlzaWNzQm9keVR5cGUgPSBQaGFzZXIuUGh5c2ljcy5BUkNBREU7XG4gICAgdGhpcy5zaG9vdGVyUG9vbC5jcmVhdGVNdWx0aXBsZSgyMCwgJ3doaXRlRW5lbXknKTtcbiAgICB0aGlzLnNob290ZXJQb29sLnNldEFsbCgnYW5jaG9yLngnLCAwLjUpO1xuICAgIHRoaXMuc2hvb3RlclBvb2wuc2V0QWxsKCdhbmNob3IueScsIDAuNSk7XG4gICAgdGhpcy5zaG9vdGVyUG9vbC5zZXRBbGwoJ291dE9mQm91bmRzS2lsbCcsIHRydWUpO1xuICAgIHRoaXMuc2hvb3RlclBvb2wuc2V0QWxsKCdjaGVja1dvcmxkQm91bmRzJywgdHJ1ZSk7XG4gICAgdGhpcy5zaG9vdGVyUG9vbC5zZXRBbGwoJ3Jld2FyZCcsIDMwMCwgZmFsc2UsIGZhbHNlLCAwLCB0cnVlKTtcblxuICAgIC8vIDIwJSBBZnRlciBlbmVteVNob290ZXIgZGllLlxuICAgIHRoaXMuc2hvdGVyUG9vbC5zZXRBbGwoJ2Ryb3BSYXRlJywgMC4yLCBmYWxzZSwgZmFsc2UsIDAsIHRydWUpO1xuICAgIC8vIFNldCB0aGUgYW5pbWF0aW9uIGZvciBlYWNoIHNwcml0ZVxuICAgIHRoaXMuc2hvb3RlclBvb2wuZm9yRWFjaChmdW5jdGlvbiAoZW5lbXkpIHtcbiAgICAgIGVuZW15LmFuaW1hdGlvbnMuYWRkKCdmbHknLCBbMCwgMSwgMl0sIDIwLCB0cnVlKTtcbiAgICAgIGVuZW15LmFuaW1hdGlvbnMuYWRkKCdoaXQnLCBbMywgMSwgMywgMl0sIDIwLCBmYWxzZSk7XG4gICAgICBlbmVteS5ldmVudHMub25BbmltYXRpb25Db21wbGV0ZS5hZGQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wbGF5KCdmbHknKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0pO1xuXG4gICAgLy8gU3RhcnQgc3Bhd25pbmcgNSBzZWNvbmRzIGludG8gdGhlIGdhbWVcbiAgICB0aGlzLm5leHRTaG9vdGVyQXQgPSB0aGlzLnRpbWUubm93ICsgNTAwMDtcbiAgICB0aGlzLnNob290ZXJEZWxheSA9IDMwMDA7XG4gICAgdGhpcy5zaG9vdGVyU2hvdERlbGF5ID0gMTAwMDtcbiAgICB0aGlzLnNob290ZXJJbml0aWFsSGVhbHRoID0gNTtcbiAgfVxuXG5cbiAgc2V0dXBFeHBsb3Npb25zKCkge1xuICAgIHRoaXMuZXhwbG9zaW9uUG9vbCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgdGhpcy5leHBsb3Npb25Qb29sLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgIHRoaXMuZXhwbG9zaW9uUG9vbC5waHlzaWNzQm9keVR5cGUgPSBQaGFzZXIuUGh5c2ljcy5BUkNBREU7XG4gICAgdGhpcy5leHBsb3Npb25Qb29sLmNyZWF0ZU11bHRpcGxlKDEwMCwgJ2V4cGxvc2lvbicpO1xuICAgIHRoaXMuZXhwbG9zaW9uUG9vbC5zZXRBbGwoJ2FuY2hvci54JywgMC41KTtcbiAgICB0aGlzLmV4cGxvc2lvblBvb2wuc2V0QWxsKCdhbmNob3IueScsIDAuNSk7XG4gICAgLy8gU2V0IGV4cGxvc2lvbiBhbmltYXRpb25cbiAgICB0aGlzLmV4cGxvc2lvblBvb2wuZm9yRWFjaChmdW5jdGlvbiAoZXhwbG9zaW9uKSB7XG4gICAgICBleHBsb3Npb24uYW5pbWF0aW9ucy5hZGQoJ2Jvb20nKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldHVwUGxheWVySWNvbnMoKSB7XG4gICAgdGhpcy5wb3dlclVwUG9vbCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgdGhpcy5wb3dlclVwUG9vbC5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICB0aGlzLnBvd2VyVXBQb29sLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcbiAgICB0aGlzLnBvd2VyVXBQb29sLmNyZWF0ZU11bHRpcGxlKDUsICdwb3dlcnVwMScpO1xuICAgIHRoaXMucG93ZXJVcFBvb2wuc2V0QWxsKCdhbmNob3IueCcsIDAuNSk7XG4gICAgdGhpcy5wb3dlclVwUG9vbC5zZXRBbGwoJ2FuY2hvci55JywgMC41KTtcbiAgICB0aGlzLnBvd2VyVXBQb29sLnNldEFsbCgnb3V0T2ZCb3VuZHNLaWxsJywgdHJ1ZSk7XG4gICAgdGhpcy5wb3dlclVwUG9vbC5zZXRBbGwoJ2NoZWNrV29ybGRCb3VuZHMnLCB0cnVlKTtcbiAgICB0aGlzLnBvd2VyVXBQb29sLnNldEFsbCgncmV3YXJkJywgMTAwLCBmYWxzZSwgZmFsc2UsIDAsIHRydWUpO1xuXG4gICAgdGhpcy5saXZlcyA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGxldCBsaWZlID0gdGhpcy5saXZlcy5jcmVhdGUoMjQwICsgKDMwICogaSksIDMwLCAncGxheWVyJyk7XG4gICAgICBsaWZlLnNjYWxlLnNldFRvKDAuNCwgMC40KTtcbiAgICAgIGxpZmUuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICB9XG4gIH1cblxuICBzZXR1cFRleHQoKSB7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSB0aGlzLmFkZC50ZXh0KDE2MCwgNDAwLCAnVXNlIEFycm93IEtleXMgdG8gTW92ZSwgWCB0byBGaXJlXFxuJywge1xuICAgICAgICBmb250OiAnMTRweCBGaXJhIE1vbm8nLFxuICAgICAgICBmaWxsOiAnI2ZmZicsXG4gICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgfSk7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICB0aGlzLmluc3RFeHBpcmUgPSB0aGlzLnRpbWUubm93ICsgNTAwMDtcblxuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuc2NvcmVUZXh0ID0gdGhpcy5hZGQudGV4dChcbiAgICAgIDE2MCwgMzAsICdTY29yZTogJyArIHRoaXMuc2NvcmUsIHtcbiAgICAgICAgZm9udDogJzIwcHggRmlyYSBNb25vJyxcbiAgICAgICAgZmlsbDogJyNmZmYnLFxuICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgIH0pO1xuICAgIHRoaXMuc2NvcmVUZXh0LmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gIH1cblxuICBjaGVja0NvbGxpc2lvbnMoKSB7XG4gICAgdGhpcy5waHlzaWNzLmFyY2FkZS5vdmVybGFwKFxuICAgICAgdGhpcy5wbGF5ZXIuYnVsbGV0UG9vbCxcbiAgICAgIHRoaXMuZW5lbXksXG4gICAgICB0aGlzLmVuZW15SGl0LFxuICAgICAgbnVsbCxcbiAgICAgIHRoaXNcbiAgICApO1xuXG4gICAvLyAgdGhpcy5waHlzaWNzLmFyY2FkZS5vdmVybGFwKFxuICAgLy8gICAgdGhpcy5idWxsZXRQb29sLFxuICAgLy8gICAgdGhpcy5zaG9vdGVyUG9vbCxcbiAgIC8vICAgIHRoaXMuZW5lbXlIaXQsXG4gICAvLyAgICBudWxsLFxuICAgLy8gICAgdGhpc1xuICAgLy8gICk7XG5cbiAgIC8vICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAoXG4gICAvLyAgICB0aGlzLnBsYXllcixcbiAgIC8vICAgIHRoaXMuZW5lbXlQb29sLFxuICAgLy8gICAgdGhpcy5wbGF5ZXJIaXQsXG4gICAvLyAgICBudWxsLFxuICAgLy8gICAgdGhpc1xuICAgLy8gICk7XG5cbiAgIC8vIHRoaXMucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChcbiAgIC8vICAgIHRoaXMucGxheWVyLFxuICAgLy8gICAgdGhpcy5zaG9vdGVyUG9vbCxcbiAgIC8vICAgIHRoaXMucGxheWVySGl0LFxuICAgLy8gICAgbnVsbCxcbiAgIC8vICAgIHRoaXNcbiAgIC8vICApO1xuXG4gICAvLyAgIHRoaXMucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChcbiAgIC8vICAgIHRoaXMucGxheWVyLFxuICAgLy8gICAgdGhpcy5lbmVteUJ1bGxldFBvb2wsXG4gICAvLyAgICB0aGlzLnBsYXllckhpdCxcbiAgIC8vICAgIG51bGwsXG4gICAvLyAgICB0aGlzXG4gICAvLyAgKTtcblxuICAgLy8gICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAoXG4gICAvLyAgICB0aGlzLnBsYXllcixcbiAgIC8vICAgIHRoaXMucG93ZXJVcFBvb2wsXG4gICAvLyAgICB0aGlzLnBsYXllckhpdCxcbiAgIC8vICAgIG51bGwsXG4gICAvLyAgICB0aGlzXG4gICAvLyAgKTtcblxuICAgLy8gIGlmICh0aGlzLmJvc3NBcHByb2FjaGluZyA9PT0gZmFsc2UpIHtcbiAgIC8vICAgIHRoaXMucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChcbiAgIC8vICAgICAgdGhpcy5idWxsZXRQb29sLFxuICAgLy8gICAgICB0aGlzLmJvc3NQb29sLFxuICAgLy8gICAgICB0aGlzLmVuZW15SGl0LFxuICAgLy8gICAgICBudWxsLFxuICAgLy8gICAgICB0aGlzXG4gICAvLyAgICApO1xuXG4gICAvLyAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAoXG4gICAvLyAgICAgIHRoaXMucGxheWVyLFxuICAgLy8gICAgICB0aGlzLmJvc3NQb29sLFxuICAgLy8gICAgICB0aGlzLnBsYXllckhpdCxcbiAgIC8vICAgICAgbnVsbCxcbiAgIC8vICAgICAgdGhpc1xuICAgLy8gICAgKTtcbiAgIC8vICB9XG4gIH1cblxuICBzcGF3bkVuZW1pZXMoKSB7XG4gICAgXG4gIH1cblxuICBlbmVteUZpcmUoKSB7XG4gICAgdGhpcy5zaG9vdGVyUG9vbC5mb3JFYWNoQWxpdmUoZnVuY3Rpb24oZW5lbXkpIHtcbiAgICAgIGlmICh0aGlzLnRpbWUubm93ID4gZW5lbXkubmV4dFNob3RBdCAmJiB0aGlzLmVuZW15QnVsbGV0UG9vbC5jb3VudERlYWQoKSA+IDApIHtcbiAgICAgICAgdmFyIGJ1bGxldCA9IHRoaXMuZW5lbXlCdWxsZXRQb29sLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICAgICAgYnVsbGV0LnJlc2V0KGVuZW15LngsIGVuZW15LnkpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm1vdmVUb09iamVjdChidWxsZXQsIHRoaXMucGxheWVyLCAxNTApO1xuICAgICAgICBlbmVteS5uZXh0U2hvdEF0ID0gdGhpcy50aW1lLm5vdyArIHRoaXMuc2hvb3RlclNob3REZWxheTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIGlmICh0aGlzLmJvc3NBcHByb2FjaGluZyA9PT0gZmFsc2UgJiYgdGhpcy5ib3NzLmFsaXZlICYmIFxuICAgICAgICB0aGlzLmJvc3MubmV4dFNob3RBdCA8IHRoaXMudGltZS5ub3cgJiZcbiAgICAgICAgdGhpcy5lbmVteUJ1bGxldFBvb2wuY291bnREZWFkKCkgPiA5KSB7XG5cbiAgICAgIHRoaXMuYm9zcy5uZXh0U2hvdEF0ID0gdGhpcy50aW1lLm5vdyArIDEwMDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIC8vIHByb2Nlc3MgMiBidWxsZXRzIGF0IGEgdGltZVxuICAgICAgICB2YXIgbGVmdEJ1bGxldCA9IHRoaXMuZW5lbXlCdWxsZXRQb29sLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICAgICAgbGVmdEJ1bGxldC5yZXNldCh0aGlzLmJvc3MueCAtIDEwIC0gaSAqIDEwLCB0aGlzLmJvc3MueSArIDIwKTtcbiAgICAgICAgdmFyIHJpZ2h0QnVsbGV0ID0gdGhpcy5lbmVteUJ1bGxldFBvb2wuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgICAgICByaWdodEJ1bGxldC5yZXNldCh0aGlzLmJvc3MueCArIDEwICsgaSAqIDEwLCB0aGlzLmJvc3MueSArIDIwKTtcblxuICAgICAgICBpZiAodGhpcy5ib3NzLmhlYWx0aCA+IDI1MCkge1xuICAgICAgICAgIC8vIGFpbSBkaXJlY3RseSBhdCB0aGUgcGxheWVyXG4gICAgICAgICAgdGhpcy5waHlzaWNzLmFyY2FkZS5tb3ZlVG9PYmplY3QobGVmdEJ1bGxldCwgdGhpcy5wbGF5ZXIsIDE1MCk7XG4gICAgICAgICAgdGhpcy5waHlzaWNzLmFyY2FkZS5tb3ZlVG9PYmplY3QocmlnaHRCdWxsZXQsIHRoaXMucGxheWVyLCAxNTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGFpbSBzbGlnaHRseSBvZmYgY2VudGVyIG9mIHRoZSBwbGF5ZXJcbiAgICAgICAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm1vdmVUb1hZKFxuICAgICAgICAgICAgbGVmdEJ1bGxldCwgdGhpcy5wbGF5ZXIueCAtIGkgKiAxMDAsIHRoaXMucGxheWVyLnksIDE1MFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5waHlzaWNzLmFyY2FkZS5tb3ZlVG9YWShcbiAgICAgICAgICAgIHJpZ2h0QnVsbGV0LCB0aGlzLnBsYXllci54ICsgaSAqIDEwMCwgdGhpcy5wbGF5ZXIueSwgMTUwXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgZGVsYXlFZmZlY3QoKSB7XG5cbiAgICAvLyBGYWRlIG91dCBpbnN0cnVjdGlvbiB0ZXh0XG4gICAgaWYgKHRoaXMuaW5zdHJ1Y3Rpb25zLmV4aXN0cyAmJiB0aGlzLnRpbWUubm93ID4gdGhpcy5pbnN0RXhwaXJlKSB7XG4gICAgICAvLyB0aGlzLmluc3RydWN0aW9ucy54ID0gdGhpcy5pbnN0cnVjdGlvbnMueCAtIDEwO1xuICAgICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLmluc3RydWN0aW9ucykudG8oIHsgYWxwaGE6IDAgfSwgMTAwLCBcIkxpbmVhclwiLCB0cnVlKTtcbiAgICAgIGlmICh0aGlzLmluc3RydWN0aW9ucy5hbHBoYSA8IDAuMDAxKSB0aGlzLmluc3RydWN0aW9ucy5kZXN0cm95KCk7XG4gICAgfVxuLypcbiAgICBpZiAodGhpcy5naG9zdFVudGlsICYmIHRoaXMuZ2hvc3RVbnRpbCA8IHRoaXMudGltZS5ub3cpIHtcbiAgICAgIHRoaXMuZ2hvc3RVbnRpbCA9IG51bGw7XG4gICAgICB0aGlzLnBsYXllci5wbGF5KCdmbHknKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaG93UmV0dXJuICYmIHRoaXMudGltZS5ub3cgPiB0aGlzLnNob3dSZXR1cm4pIHtcbiAgICAgIHRoaXMucmV0dXJuVGV4dCA9IHRoaXMuYWRkLnRleHQoMTYwLCAzMjAsIFxuICAgICAgICAnUHJlc3MgWiBvciBUYXAgR2FtZSB0byBnbyBiYWNrIHRvIE1haW4gTWVudScsIHtcbiAgICAgICAgICBmb250OiAnMTZweCBzZXJpZicsXG4gICAgICAgICAgZmlsbDogJyNmZmYnXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHRoaXMucmV0dXJuVGV4dC5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgICAgdGhpcy5zaG93UmV0dXJuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYm9zc0FwcHJvYWNoaW5nICYmIHRoaXMuYm9zcy55ID4gODApIHtcbiAgICAgIHRoaXMuYm9zc0FwcHJvYWNoaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmJvc3MuaGVhbHRoID0gNTAwO1xuICAgICAgdGhpcy5ib3NzLm5leHRTaG90QXQgPSAwO1xuXG4gICAgICB0aGlzLmJvc3MuYm9keS52ZWxvY2l0eS55ID0gMDtcbiAgICAgIHRoaXMuYm9zcy5ib2R5LnZlbG9jaXR5LnggPSAyMDA7XG4gICAgICAvLyBhbGxvdyBib3VuY2luZyBvZmYgd29ybGQgYm91bmRzXG4gICAgICB0aGlzLmJvc3MuYm9keS5ib3VuY2UueCA9IDE7XG4gICAgICB0aGlzLmJvc3MuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgIH1cbiAgICAqL1xuICB9XG5cbiAgZXhwbG9kZShzcHJpdGUpIHtcbiAgICBpZiAodGhpcy5leHBsb3Npb25Qb29sLmNvdW50RGVhZCgpID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBleHBsb3Npb24gPSB0aGlzLmV4cGxvc2lvblBvb2wuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgIGV4cGxvc2lvbi5yZXNldChzcHJpdGUueCwgc3ByaXRlLnkpO1xuICAgIGV4cGxvc2lvbi5wbGF5KCdib29tJywgMTUsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIGVuZW15SGl0KGVuZW15LCBidWxsZXQpIHtcbiAgICBjb25zb2xlLmxvZyhcImVuZW15SEl0XCIpO1xuICAgIGJ1bGxldC5raWxsKCk7XG4gICAgdGhpcy5hZGRUb1Njb3JlKDEwKTtcbiAgICB0aGlzLmRhbWFnZUVuZW15KGVuZW15LCAxKTtcbiAgfVxuXG4gIHBsYXllckhpdChwbGF5ZXIsIGVuZW15KSB7XG5cbiAgICBpZiAodGhpcy5naG9zdFVudGlsICYmIHRoaXMuZ2hvc3RVbnRpbCA+IHRoaXMudGltZS5ub3cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRhbWFnZUVuZW15KGVuZW15LCA1KTtcbiAgICB2YXIgbGlmZSA9IHRoaXMubGl2ZXMuZ2V0Rmlyc3RBbGl2ZSgpO1xuICAgIGlmIChsaWZlKSB7XG4gICAgICBsaWZlLmtpbGwoKTtcbiAgICAgIHRoaXMud2VhcG9uTGV2ZWwgPSAwO1xuICAgICAgdGhpcy5naG9zdFVudGlsID0gdGhpcy50aW1lLm5vdyArIDIwMDA7XG4gICAgICB0aGlzLnBsYXllci5wbGF5KCdnaG9zdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV4cGxvZGUocGxheWVyKTtcbiAgICAgIHBsYXllci5raWxsKCk7XG4gICAgICB0aGlzLmRpc3BsYXlFbmQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHBsYXllclBvd2VyVXAocGxheWVyLCBwb3dlclVwKSB7XG4gICAgdGhpcy5hZGRUb1Njb3JlKHBvd2VyVXAucmV3YXJkKTtcbiAgICBwb3dlclVwLmtpbGwoKTtcbiAgICBpZiAodGhpcy53ZWFwb25MZXZlbCA8IDUpIHtcbiAgICAgIHRoaXMud2VhcG9uTGV2ZWwgKz0gMTtcbiAgICB9XG4gIH1cblxuICBkYW1hZ2VFbmVteShlbmVteSwgZGFtYWdlKSB7XG4gICAgLy8gZGV0YWlsIDogaHR0cDovL2RvY3MucGhhc2VyLmlvL1BoYXNlci5TcHJpdGUuaHRtbCNkYW1hZ2VcbiAgICBlbmVteS5kYW1hZ2UoZGFtYWdlKTtcbiAgICAvLyBpZiAoZW5lbXkuYWxpdmUpIHtcbiAgICAvLyAgIGVuZW15LnBsYXkoJ2hpdCcpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB0aGlzLmV4cGxvZGUoZW5lbXkpO1xuICAgIC8vICAgdGhpcy5zcGF3blBvd2VyVXAoZW5lbXkpO1xuICAgIC8vICAgdGhpcy5hZGRUb1Njb3JlKGVuZW15LnJld2FyZCk7XG5cbiAgICAvLyAgIGlmIChlbmVteS5rZXkgPT09ICdib3NzJykge1xuICAgIC8vICAgICB0aGlzLmVuZW15UG9vbC5kZXN0cm95KCk7XG4gICAgLy8gICAgIHRoaXMuc2hvb3RlclBvb2wuZGVzdHJveSgpO1xuICAgIC8vICAgICB0aGlzLmJvc3NQb29sLmRlc3Ryb3koKTtcbiAgICAvLyAgICAgdGhpcy5lbmVteUJ1bGxldFBvb2wuZGVzdHJveSgpO1xuICAgIC8vICAgICB0aGlzLmRpc3BsYXlFbmQodHJ1ZSk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG5cbiAgc3Bhd25Qb3dlclVwKGVuZW15KSB7XG4gICAgaWYgKHRoaXMucG93ZXJVcFBvb2wuY291bnREZWFkKCkgPT09IDAgfHwgdGhpcy53ZWFwb25MZXZlbCA9PT0gNSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJuZC5mcmFjKCkgPCBlbmVteS5kcm9wUmF0ZSkge1xuICAgICAgIHZhciBwb3dlclVwID0gdGhpcy5wb3dlclVwUG9vbC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgICAgcG93ZXJVcC5yZXNldChlbmVteS54LCBlbmVteS55KTtcbiAgICAgICBwb3dlclVwLmJvZHkudmVsb2NpdHkueSA9IDEwMDtcbiAgICAgfVxuICB9XG5cbiAgc3Bhd25Cb3NzKCkge1xuICAgIHRoaXMuYm9zc0FwcHJvYWNoaW5nID0gdHJ1ZTtcbiAgICB2YXIgYm9zcyA9IHRoaXMuYm9zc1Bvb2wuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgIHRoaXMucGh5c2ljcy5lbmFibGUoYm9zcywgUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcbiAgICBib3NzLnJlc2V0KDE2MCwgMCwgdGhpcy5ib3NzSW5pdGlhbEhlYWx0aCk7XG4gICAgYm9zcy5ib2R5LnZlbG9jaXR5LnkgPSAxNTtcbiAgICBib3NzLnBsYXkoJ2ZseScpO1xuXG4gICAgdGhpcy5lbmVteVBvb2wuZGVzdHJveSgpO1xuICAgIC8vIHRoaXMuc2hvb3RlclBvb2wuZGVzdHJveSgpO1xuICB9XG5cbiAgYWRkVG9TY29yZShzY29yZSkge1xuICAgIHRoaXMuc2NvcmUgKz0gc2NvcmU7XG4gICAgdGhpcy5zY29yZVRleHQudGV4dCA9ICdTY29yZSA6ICcgKyB0aGlzLnNjb3JlO1xuICAgIGlmICh0aGlzLnNjb3JlID49IDIwMDAwICYmIHRoaXMuYm9zc1Bvb2wuY291bnREZWFkKCkgPT0gMSkge1xuLyogICAgICB0aGlzLmVuZW15UG9vbC5kZXN0cm95KCk7XG4gICAgICB0aGlzLnNob290ZXJQb29sLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZW5lbXlCdWxsZXRQb29sLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZGlzcGxheUVuZCh0cnVlKTsqL1xuICAgICAgdGhpcy5zcGF3bkJvc3MoKTtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5RW5kKHdpbikge1xuICAgIGlmICh0aGlzLmVuZFRleHQgJiYgdGhpcy5lbmRUZXh0LmV4aXN0cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtZXNzYWdlID0gd2luID8gJ1lvbyBXaW4hISEnIDogJ0dhbWUgT3ZlciEnO1xuICAgIHRoaXMuZW5kVGV4dCA9IHRoaXMuYWRkLnRleHQoMTYwLCAyNDAsIG1lc3NhZ2UsIHtcbiAgICAgIGZvbnQ6ICc0OHB4IHNlcmlmJywgXG4gICAgICBmaWxsOiAnI2YwMCdcbiAgICB9KTtcbiAgICB0aGlzLmVuZFRleHQuYW5jaG9yLnNldFRvKDAuNSwgMCk7XG4gICAgdGhpcy5zaG93UmV0dXJuID0gdGhpcy50aW1lLm5vdyArIDIwMDA7XG4gIH1cblxuICBxdWl0R2FtZShwb2ludGVyKSB7XG5cbiAgICAvLyAgSGVyZSB5b3Ugc2hvdWxkIGRlc3Ryb3kgYW55dGhpbmcgeW91IG5vIGxvbmdlciBuZWVkLlxuICAgIC8vICBTdG9wIG11c2ljLCBkZWxldGUgc3ByaXRlcywgcHVyZ2UgY2FjaGVzLCBmcmVlIHJlc291cmNlcywgYWxsIHRoYXQgZ29vZCBzdHVmZi5cbiAgICB0aGlzLnNlYS5kZXN0cm95KCk7XG4gICAgdGhpcy5wbGF5ZXIuZGVzdHJveSgpO1xuICAgIC8vIHRoaXMuZW5lbXlQb29sLmRlc3Ryb3koKTtcbiAgICAvLyB0aGlzLmJ1bGxldFBvb2wuZGVzdHJveSgpO1xuICAgIC8vIHRoaXMuZXhwbG9zaW9uUG9vbC5kZXN0cm95KCk7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMuZGVzdHJveSgpO1xuICAgIHRoaXMuc2NvcmVUZXh0LmRlc3Ryb3koKTtcbiAgICAvLyB0aGlzLnJldHVyblRleHQuZGVzdHJveSgpO1xuXG4gICAgLy8gIFRoZW4gbGV0J3MgZ28gYmFjayB0byB0aGUgbWFpbiBtZW51LlxuICAgIHRoaXMuc3RhdGUuc3RhcnQoJ01lbnUnKTtcbiAgfVxuXG5cbiAgc2V0dXBQbGF5ZXIoKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZ2FtZSwgMTYwLCA0NTAsICdwbGF5ZXInKTtcbiAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0YXRlcy9QbGF5LmpzXG4gKiovIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkge1xuICAgIHN1cGVyKGdhbWUsIHgsIHksICdwbGF5ZXInKTtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMuY3Vyc29ycyA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnZmx5JywgWzAsIDEsIDIsIDNdLCAxMCwgdHJ1ZSk7XG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnZmx5LWxlZnQnLCBbNCwgNSwgNiwgN10sIDEwLCB0cnVlKTtcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdmbHktcmlnaHQnLCBbOCwgOSwgMTAsIDExXSwgMTAsIHRydWUpO1xuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2dob3N0JywgWzMsIDAsIDMsIDFdLCAyMCwgdHJ1ZSk7XG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKHRoaXMsIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgdGhpcy5zcGVlZCA9IDI1MDtcbiAgICB0aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcbiAgICB0aGlzLmJvZHkuc2V0U2l6ZSgyMCwgMjAsIDAsIC01KTtcbiAgICB0aGlzLndlYXBvbkxldmVsID0gMDtcbiAgICB0aGlzLmJ1bGxldFNwZWVkID0gMjAwO1xuICAgIHRoaXMuY3JlYXRlQnVsbGV0UG9vbCgpO1xuICAgIHRoaXMuY3JlYXRpb25UaW1lID0gdGhpcy5nYW1lLnRpbWUubm93O1xuXG4gICAgLy8gdGhpcy5lbWl0dGVyID0gdGhpcy5nYW1lLmFkZC5lbWl0dGVyKHRoaXMuYm9keS54LCB0aGlzLmJvZHkueSwgMjAwKTtcbiAgICAvLyB0aGlzLmVtaXR0ZXIubWFrZVBhcnRpY2xlcygnZmlyZScpO1xuICAgIC8vIHRoaXMuZW1pdHRlci5ncmF2aXR5ID0gMjAwO1xuICAgIC8vIHRoaXMuZW1pdHRlci5zZXRBbHBoYSgxLCAwLCAzMDAwKTtcbiAgICAvLyB0aGlzLmVtaXR0ZXIuc2V0U2NhbGUoMC44LCAwLCAwLjgsIDAsIDMwMDApO1xuICAgIC8vIHRoaXMuZW1pdHRlci53aWR0aCA9IDg7XG4gICAgLy8gdGhpcy5lbWl0dGVyLnNldFlTcGVlZCgxMDAsIDIwMCk7XG4gICAgLy8gdGhpcy5lbWl0dGVyLnNldFhTcGVlZCgtMC4xLCAuMSk7XG4gICAgLy8gdGhpcy5lbWl0dGVyLm1pblJvdGF0aW9uID0gMDtcbiAgICAvLyB0aGlzLmVtaXR0ZXIubWF4Um90YXRpb24gPSAwO1xuXG4gICAgdGhpcy5nYW1lLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xuICAgIHRoaXMucGxheSgnZmx5Jyk7XG4gIH1cblxuICBjcmVhdGVCdWxsZXRQb29sKCkge1xuICAgIHRoaXMuYnVsbGV0UG9vbCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5idWxsZXRQb29sLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuY3JlYXRlTXVsdGlwbGUoMTAwLCAnYnVsbGV0Jyk7XG4gICAgdGhpcy5idWxsZXRQb29sLnNldEFsbCgnYW5jaG9yLngnLCAwLjUpO1xuICAgIHRoaXMuYnVsbGV0UG9vbC5zZXRBbGwoJ2FuY2hvci55JywgMC41KTtcblxuICAgIC8vIEtpbGwgYnVsbGV0IHdoZW4gb29CXG4gICAgdGhpcy5idWxsZXRQb29sLnNldEFsbCgnb3V0T2ZCb3VuZHNLaWxsJywgdHJ1ZSk7XG4gICAgdGhpcy5idWxsZXRQb29sLnNldEFsbCgnY2hlY2tXb3JsZEJvdW5kcycsIHRydWUpO1xuXG4gICAgdGhpcy5uZXh0U2hvdEF0ID0gMDtcbiAgICB0aGlzLnNob3REZWxheSA9IDIwMDtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuaGFuZGxlSW5wdXQoKTtcbiAgfVxuXG4gIHNob290KGRpcmVjdGlvbikge1xuICAgIGlmICghdGhpcy5hbGl2ZSB8fCB0aGlzLm5leHRTaG90QXQgPiB0aGlzLmdhbWUudGltZS5ub3cpIHtcbiAgICAgIHJldHVybjsgLy8gcmV0dXJuIGlmIHBsYXllciBpcyBkZWFkIG9yIGRlbGF5IGlzIGluIHBsYWNlXG4gICAgfVxuXG4gICAgdGhpcy5uZXh0U2hvdEF0ID0gdGhpcy5nYW1lLnRpbWUubm93ICsgdGhpcy5zaG90RGVsYXk7XG4gICAgbGV0IGJ1bGxldDtcblxuICAgIGlmICh0aGlzLndlYXBvbkxldmVsID09PSAwKSB7XG4gICAgICBpZiAodGhpcy5idWxsZXRQb29sLmNvdW50RGVhZCgpID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYnVsbGV0ID0gdGhpcy5idWxsZXRQb29sLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICAgIGJ1bGxldC5yZXNldCh0aGlzLngsIHRoaXMueSk7XG4gICAgICBidWxsZXQuYm9keS52ZWxvY2l0eS55ID0gLXRoaXMuYnVsbGV0U3BlZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmJ1bGxldFBvb2wuY291bnREZWFkKCkgPCB0aGlzLndlYXBvbkxldmVsICogMikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud2VhcG9uTGV2ZWw7IGkrKykge1xuICAgICAgICBidWxsZXQgPSB0aGlzLmJ1bGxldFBvb2wuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuXG4gICAgICAgIC8vIFNwYXduIGxlZnQgYnVsbGV0IGxlZnQgb2ZmIGNlbnRlclxuICAgICAgICBidWxsZXQucmVzZXQodGhpcy54IC0gKDEwICsgaSAqIDUpLCB0aGlzLnkgLSAxNik7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS52ZWxvY2l0eUZyb21BbmdsZSgtOTUgLSBpICogMTAsIHRoaXMuYnVsbGV0U3BlZWQsIGJ1bGxldC5ib2R5LnZlbG9jaXR5KTtcblxuICAgICAgICBidWxsZXQgPSB0aGlzLmJ1bGxldFBvb2wuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgICAgICBidWxsZXQucmVzZXQodGhpcy54ICsgKDEwICsgaSAqIDUpLCB0aGlzLnkgLSAxNik7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS52ZWxvY2l0eUZyb21BbmdsZSgtODUgKyBpICoxMCwgdGhpcy5idWxsZXRTcGVlZCwgYnVsbGV0LmJvZHkudmVsb2NpdHkpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cblxuICBoYW5kbGVJbnB1dCgpIHtcbiAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IDA7XG4gICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSAwO1xuXG4gICAgaWYgKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlgpIHx8IHRoaXMuZ2FtZS5pbnB1dC5hY3RpdmVQb2ludGVyLmlzRG93bikgdGhpcy5zaG9vdChcInVwXCIpO1xuICAgIGlmICh0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5ZKSkgdGhpcy5sZXZlbFVwKCk7XG5cblxuICAgIGlmICh0aGlzLmN1cnNvcnMudXAuaXNEb3duKSB7XG4gICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IC10aGlzLnNwZWVkO1xuICAgICAgLy8gdGhpcy5maXJlUGFydGljbGVzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnNvcnMuZG93bi5pc0Rvd24pIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gdGhpcy5zcGVlZDtcblxuXG4gICAgaWYgKHRoaXMuY3Vyc29ycy5sZWZ0LmlzRG93bikge1xuICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSAtdGhpcy5zcGVlZDtcbiAgICAgIHRoaXMucGxheSgnZmx5LWxlZnQnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3Vyc29ycy5yaWdodC5pc0Rvd24pIHtcbiAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gK3RoaXMuc3BlZWQ7XG4gICAgICB0aGlzLnBsYXkoJ2ZseS1yaWdodCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYXkoJ2ZseScpO1xuICAgIH1cblxuXG4gICAgLy8gSGFuZGxlciBNb3VzZSBDbGljayAmIFRvdWNoXG4gICAgaWYgKHRoaXMuZ2FtZS5pbnB1dC5hY3RpdmVQb2ludGVyLmlzRG93biAmJiB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZGlzdGFuY2VUb1BvaW50ZXIodGhpcykgPiAxNSkge1xuICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm1vdmVUb1BvaW50ZXIodGhpcywgdGhpcy5zcGVlZCk7XG4gICAgICBpZiAodGhpcy5ib2R5LnZlbG9jaXR5LnggPiAwKSB0aGlzLnBsYXkoJ2ZseS1yaWdodCcpO1xuICAgICAgaWYgKHRoaXMuYm9keS52ZWxvY2l0eS54IDwgMCkgdGhpcy5wbGF5KCdmbHktbGVmdCcpO1xuICAgIH1cblxuICB9XG5cbiAgZmlyZVBhcnRpY2xlcygpIHtcbiAgICB0aGlzLmVtaXR0ZXIueCA9IHRoaXMuYm9keS5jZW50ZXIueDtcbiAgICB0aGlzLmVtaXR0ZXIueSA9IHRoaXMuYm9keS5jZW50ZXIueTtcbiAgICB0aGlzLmVtaXR0ZXIuc3RhcnQodHJ1ZSAsIDMwMCwgMSwgLjEpO1xuXG4gIH1cblxuICBsZXZlbFVwKCkge1xuICAgIHRoaXMud2VhcG9uTGV2ZWwgPSAxO1xuICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWxzL1BsYXllci5qc1xuICoqLyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcbiAgXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7XG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2dyZWVuRW5lbXknKTtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdmbHknLCBbMCwgMSwgMiwgM10sIDEwLCB0cnVlKTtcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdnaG9zdCcsIFszLCAwLCAzLCAyXSwgMjAsIHRydWUpO1xuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZSh0aGlzLCBQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgIHRoaXMuc3BlZWQgPSAyMDA7XG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgdGhpcy5ib2R5LnNldFNpemUoMjAsIDIwLCAwLCAtNSk7XG4gICAgLy8gQ3JlYXRlIEJ1bGxldHNcbiAgICB0aGlzLmNyZWF0ZUJ1bGxldFBvb2woKTtcblxuICAgIHRoaXMuZW1pdHRlciA9IHRoaXMuZ2FtZS5hZGQuZW1pdHRlcih0aGlzLmJvZHkueCwgdGhpcy5ib2R5LnksIDIwMCk7XG4gICAgdGhpcy5lbWl0dGVyLm1ha2VQYXJ0aWNsZXMoJ2ZpcmUnKTtcbiAgICB0aGlzLmVtaXR0ZXIuZ3Jhdml0eSA9IDIwMDtcbiAgICB0aGlzLmVtaXR0ZXIuc2V0QWxwaGEoMSwgMCwgMzAwMCk7XG4gICAgdGhpcy5lbWl0dGVyLnNldFNjYWxlKDAuOCwgMCwgMC44LCAwLCAzMDAwKTtcbiAgICB0aGlzLmVtaXR0ZXIud2lkdGggPSA4O1xuICAgIHRoaXMuZW1pdHRlci5zZXRZU3BlZWQoMTAwLCAyMDApO1xuICAgIHRoaXMuZW1pdHRlci5zZXRYU3BlZWQoLTAuMSwgLjEpO1xuICAgIHRoaXMuZW1pdHRlci5taW5Sb3RhdGlvbiA9IDA7XG4gICAgdGhpcy5lbWl0dGVyLm1heFJvdGF0aW9uID0gMDtcbiAgICAvLyBBZGQgdG8gc3RhZ2VcbiAgICB0aGlzLmdhbWUuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XG4gICAgdGhpcy5wbGF5KCdmbHknKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1bGxldFBvb2woKSB7XG4gICAgdGhpcy5idWxsZXRQb29sID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuICAgIHRoaXMuYnVsbGV0UG9vbC5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICB0aGlzLmJ1bGxldFBvb2wucGh5c2ljc0JvZHlUeXBlID0gUGhhc2VyLlBoeXNpY3MuQVJDQURFO1xuICAgIHRoaXMuYnVsbGV0UG9vbC5jcmVhdGVNdWx0aXBsZSgxMDAsICdlbmVteUJ1bGxldCcpO1xuICAgIHRoaXMuYnVsbGV0UG9vbC5zZXRBbGwoJ2FuY2hvci54JywgMC41KTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuc2V0QWxsKCdhbmNob3IueScsIDAuNSk7XG5cbiAgICAvLyBLaWxsIGJ1bGxldCB3aGVuIG9vQlxuICAgIHRoaXMuYnVsbGV0UG9vbC5zZXRBbGwoJ291dE9mQm91bmRzS2lsbCcsIHRydWUpO1xuICAgIHRoaXMuYnVsbGV0UG9vbC5zZXRBbGwoJ2NoZWNrV29ybGRCb3VuZHMnLCB0cnVlKTtcblxuICAgIHRoaXMubmV4dFNob3RBdCA9IDA7XG4gICAgdGhpcy5zaG90RGVsYXkgPSA1MDA7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgLy8gdGhpcy5zaG9vdCgpO1xuICB9XG5cbiAgZGFtYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZW5lbXkgZGFtYWdlXCIpO1xuICAgIHRoaXMuZmlyZVBhcnRpY2xlcygpO1xuICB9XG5cbiAgc2hvb3QoKSB7XG4gICAgaWYgKCF0aGlzLmFsaXZlIHx8IHRoaXMubmV4dFNob3RBdCA+IHRoaXMuZ2FtZS50aW1lLm5vdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubmV4dFNob3RBdCA9IHRoaXMuZ2FtZS50aW1lLm5vdyArIHRoaXMuc2hvdERlbGF5O1xuICAgIGxldCBidWxsZXQ7XG4gICAgYnVsbGV0ID0gdGhpcy5idWxsZXRQb29sLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICBidWxsZXQucmVzZXQodGhpcy54LCB0aGlzLnkpO1xuICAgIGJ1bGxldC5ib2R5LnZlbG9jaXR5LnkgPSAxNTA7XG4gIH1cblxuXG4gIGZpcmVQYXJ0aWNsZXMoKSB7XG4gICAgdGhpcy5lbWl0dGVyLnggPSB0aGlzLmJvZHkuY2VudGVyLng7XG4gICAgdGhpcy5lbWl0dGVyLnkgPSB0aGlzLmJvZHkuY2VudGVyLnk7XG4gICAgdGhpcy5lbWl0dGVyLnN0YXJ0KHRydWUgLCAzMDAsIDEsIDEpO1xuXG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbHMvRW5lbXkuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9