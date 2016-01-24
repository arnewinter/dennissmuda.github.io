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
	      this.health--;
	      if (this.health === 0) {
	        this.explode();
	        this.destroy();
	      }
	      // this.explode();
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
	  }, {
	    key: 'getRandomInt',
	    value: function getRandomInt(min, max) {
	      return Math.floor(Math.random() * (max - min + 1)) + min;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODYzMTU4NTk2MDY0ZGQ1NzU4NzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvQm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzL1ByZWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcy9NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvUGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2hlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDaENNLElBQUk7YUFBSixJQUFJOztBQUVSLFlBRkksSUFBSSxHQUVNOzJCQUZWLElBQUk7Ozs7d0VBQUosSUFBSSxhQUdBLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSTs7QUFHNUMsV0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0saUJBQU8sQ0FBQztBQUM3QixXQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxvQkFBVSxDQUFDO0FBQ25DLFdBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLGlCQUFPLENBQUM7QUFDN0IsV0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0saUJBQU87O0FBRTVCLFdBQUssS0FBSyxDQUFDLEtBQUss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LEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLFdBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNwQyxXQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztNQUV0Qzs7O2tDQUdZLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDckIsY0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO01BQzFEOzs7VUFqSGtCLEtBQUs7R0FBUyxNQUFNLENBQUMsTUFBTTs7bUJBQTNCLEtBQUssQzs7Ozs7Ozs7Ozs7O1NDRFYsWUFBWSxHQUFaLFlBQVk7U0FJWixNQUFNLEdBQU4sTUFBTTtBQUpmLFVBQVMsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDckMsVUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0VBQzFEOztBQUVNLFVBQVMsTUFBTSxDQUFDLENBQUMsRUFBRTtBQUNsQixVQUFPLENBQUMsR0FBRyxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA4NjMxNTg1OTYwNjRkZDU3NTg3MlxuICoqLyIsIlxuaW1wb3J0IEJvb3QgZnJvbSAnLi9zdGF0ZXMvQm9vdCc7XG5pbXBvcnQgUHJlbG9hZCBmcm9tICcuL3N0YXRlcy9QcmVsb2FkJztcbmltcG9ydCBNZW51IGZyb20gJy4vc3RhdGVzL01lbnUnO1xuaW1wb3J0IFBsYXkgZnJvbSAnLi9zdGF0ZXMvUGxheSc7XG5cbmNsYXNzIEdhbWUgZXh0ZW5kcyBQaGFzZXIuR2FtZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoMzIwLCA0ODAsIFBoYXNlci5BVVRPLCAnY29udGVudCcsIG51bGwpO1xuXG4gICAgLy8gQWRkIHN0YXRlc1xuICAgIHRoaXMuc3RhdGUuYWRkKCdCb290JywgQm9vdCk7XG4gICAgdGhpcy5zdGF0ZS5hZGQoJ1ByZWxvYWQnLCBQcmVsb2FkKTtcbiAgICB0aGlzLnN0YXRlLmFkZCgnTWVudScsIE1lbnUpO1xuICAgIHRoaXMuc3RhdGUuYWRkKCdQbGF5JywgUGxheSk7XG4gICAgLy8gU3RhcnQgdGhlIGdhbWUgc3RhdGUgJ2Jvb3QnIGZvciBwcm9kXG4gICAgdGhpcy5zdGF0ZS5zdGFydCgnQm9vdCcpO1xuICB9XG5cbn1cblxubmV3IEdhbWUoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb3QgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuICBcbiAgcHJlbG9hZCgpIHtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3ByZWxvYWRlckJhcicsICdhc3NldHMvcHJlbG9hZGVyLWJhci5wbmcnKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICAvLyBObyBtdWx0aXRvdWNoIHN1cHBvcnQgPSAxXG4gICAgdGhpcy5pbnB1dC5tYXhQb2ludGVycyA9IDE7XG4gICAgLy8gUGhhc2VyIHdpbGwgYXV0b21hdGljYWxseSBwYXVzZSBpZiB0aGUgYnJvd3NlciB0YWIgbG9zZXMgZm9jdXNcbiAgICB0aGlzLnN0YWdlLmRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmdhbWUuZGV2aWNlLmRlc2t0b3ApIHtcbiAgICAgIC8vIERlc2t0b3Agc3BlY2lmaWMgc2V0dGluZ3NcbiAgICAgIC8vIHRoaXMuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTW9iaWxlIHNwZWNpZmljIHNldHRpbmdzXG4gICAgICB0aGlzLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XG4gICAgICB0aGlzLnNjYWxlLm1pbldpZHRoICA9IDMyMDtcbiAgICAgIHRoaXMuc2NhbGUubWluSGVpZ2h0ID0gNDgwO1xuICAgICAgdGhpcy5zY2FsZS5tYXhXaWR0aCAgPSAxMDI0O1xuICAgICAgdGhpcy5zY2FsZS5tYXhIZWlnaHQgPSA3Njg7XG4gICAgICAvLyB0aGlzLnNjYWxlLmZvcmNlTGFuZHNjYXBlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gZmFsc2U7XG4gICAgICAvLyB0aGlzLnNjYWxlLnNldFNjcmVlblNpemUodHJ1ZSk7XG4gICAgfSBcblxuICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1ByZWxvYWQnKTtcbiAgfVxuXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RhdGVzL0Jvb3QuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcbiAgXG4gIHByZWxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coXCJQcmVsb2FkXCIpO1xuICAgIC8vIFNob3cgdGhlIGxvYWRpbmcgcHJvZ3Jlc3MgYmFyIGFzc2V0IHdlIGxvYWRlZCBpbiBib290LmpzXG4gICAgdGhpcy5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJkMmQyZCc7XG5cbiAgICB0aGlzLnByZWxvYWRCYXIgPSB0aGlzLmFkZC5zcHJpdGUoNDEyLCA0MDAsICdwcmVsb2FkZXJCYXInKTtcbiAgICB0aGlzLmFkZC50ZXh0KDUxMCwgMzYwLCBcIkxvYWRpbmcuLi5cIiwge2ZvbnQ6IFwiMzJweCBtb25vc3BhY2VcIiwgZmlsbDogJyNmZmYnfSkuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcblxuICAgIC8vIFNldCBsb2FkZXIgc3ByaXRlXG4gICAgdGhpcy5sb2FkLnNldFByZWxvYWRTcHJpdGUodGhpcy5wcmVsb2FkQmFyKTtcblxuICAgIC8vIExvYWQgcmVzdCBvZiB0aGUgYXNzZXRzXG4gICAgdGhpcy5sb2FkLmltYWdlKCd0aXRsZXBhZ2UnLCAnYXNzZXRzL3RpdGxlcGFnZS5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NlYScsICdhc3NldHMvc2VhLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnYnVsbGV0JywgJ2Fzc2V0cy9idWxsZXQucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdlbmVteUJ1bGxldCcsICdhc3NldHMvZW5lbXktYnVsbGV0LnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgncG93ZXJ1cDEnLCAnYXNzZXRzL3Bvd2VydXAxLnBuZycpO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZ3JlZW5FbmVteScsICdhc3NldHMvZW5lbXkucG5nJywgMzIsIDMyKTtcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3doaXRlRW5lbXknLCAnYXNzZXRzL3Nob290aW5nLWVuZW15LnBuZycsIDMyLCAzMik7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdib3NzJywgJ2Fzc2V0cy9ib3NzLnBuZycsIDkzLCA3NSk7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdleHBsb3Npb24nLCAnYXNzZXRzL2V4cGxvc2lvbi5wbmcnLCAzMiwgMzIpO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncGxheWVyJywgJ2Fzc2V0cy9wbGF5ZXIucG5nJywgNjQsIDY0KTtcbiAgICB0aGlzLmxvYWQuYXVkaW8oJ2V4cGxvc2lvbicsIFsnYXNzZXRzL2V4cGxvc2lvbi53YXYnXSk7XG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdwbGF5ZXJFeHBsb3Npb24nLCBbJ2Fzc2V0cy9wbGF5ZXItZXhwbG9zaW9uLndhdiddKTtcbiAgICB0aGlzLmxvYWQuYXVkaW8oJ2VuZW15RmlyZScsIFsnYXNzZXRzL2VuZW15LWZpcmUud2F2J10pO1xuICAgIHRoaXMubG9hZC5hdWRpbygncGxheWVyRmlyZScsIFsnYXNzZXRzL3BsYXllci1maXJlLndhdiddKTtcbiAgICB0aGlzLmxvYWQuYXVkaW8oJ3Bvd2VyVXAnLCBbJ2Fzc2V0cy9wb3dlcnVwLndhdiddKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcblxuICAgIHRoaXMucHJlbG9hZEJhci5jcm9wRW5hYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuc3RhdGUuc3RhcnQoJ01lbnUnKTtcbiAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0YXRlcy9QcmVsb2FkLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG4gIHByZWxvYWQoKSB7XG4gICAgdGhpcy5sb2FkLmltYWdlKCd0aXRsZXBhZ2UnLCAnLi9hc3NldHMvdGl0bGVwYWdlLnBuZycpXG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJNZW51XCIpO1xuICAgIGxldCB0aXRsZXBhZ2UgPSB0aGlzLmFkZC5zcHJpdGUoMCwgMCwgJ3RpdGxlcGFnZScpO1xuXG4gICAgdGhpcy50aXRsZVRleHQgICA9IHRoaXMuYWRkLnRleHQoMTYwLCAxMDAsIFwiU2ltcGxlIFNob290ZXJcIiwge2ZvbnQ6IFwiMzJweCBGaXJhIE1vbm9cIiwgZmlsbDogXCIjZmZmXCIsIGFsaWduOiAnY2VudGVyJ30pLmFuY2hvci5zZXRUbyguNSwgLjUpO1xuICAgIHRoaXMubG9hZGluZ1RleHQgPSB0aGlzLmFkZC50ZXh0KDE2MCwgNDAwLCBcIkNsaWNrIHRvIHN0YXJ0XCIsIHsgZm9udDogXCIxNXB4IEZpcmEgTW9ub1wiLCBmaWxsOiBcIiNmZmZcIiB9KTtcbiAgICB0aGlzLmxvYWRpbmdUZXh0LmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5TUEFDRUJBUikgfHzCoHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5pc0Rvd24pIHtcbiAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRHYW1lKCkge1xuICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1BsYXknKTtcbiAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0YXRlcy9NZW51LmpzXG4gKiovIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9tb2RlbHMvUGxheWVyJztcbmltcG9ydCBFbmVteSBmcm9tICcuLi9tb2RlbHMvRW5lbXknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBwcmVsb2FkKCkge1xuXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzZWEnLCAnYXNzZXRzL3NlYS5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2J1bGxldCcsICdhc3NldHMvYnVsbGV0LnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnZW5lbXlCdWxsZXQnLCAnYXNzZXRzL2VuZW15LWJ1bGxldC5wbmcnKTtcblxuICAgIC8vIExvYWQgcG93ZXJ1cFxuICAgIHRoaXMubG9hZC5pbWFnZSgncG93ZXJ1cDEnLCAnYXNzZXRzL3Bvd2VydXAxLnBuZycpO1xuICAgIC8vIExvYWQgc2hpdFxuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZ3JlZW5FbmVteScsICdhc3NldHMvZW5lbXkucG5nJywgMzIsIDMyKTtcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3doaXRlRW5lbXknLCAnYXNzZXRzL3Nob290aW5nLWVuZW15LnBuZycsIDMyLCAzMik7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdib3NzJywgJ2Fzc2V0cy9ib3NzLnBuZycsIDkzLCA3NSk7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdleHBsb3Npb24nLCAnYXNzZXRzL2V4cGxvc2lvbi5wbmcnLCA2NCwgNjQpO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncGxheWVyJywgJ2Fzc2V0cy9wbGF5ZXJfZnVsbC5wbmcnLCA2NCwgNjQsIDEyKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2ZpcmUnLCAnYXNzZXRzL2ZpcmUucG5nJyk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5zZWEgPSB0aGlzLmFkZC50aWxlU3ByaXRlKDAsIDAsIDMyMCwgNDgwLCAnc2VhJyk7XG4gICAgdGhpcy5zZXR1cFBsYXllcigpO1xuICAgIHRoaXMuZW5lbXkgPSBuZXcgRW5lbXkodGhpcy5nYW1lLCAxNjAsIDEwMCwgJ2dyZWVuRW5lbXknKTtcblxuICAgIC8vIHRoaXMuc2V0dXBFbmVtaWVzKCk7XG4gICAgLy8gdGhpcy5zZXR1cEV4cGxvc2lvbnMoKTtcbiAgICB0aGlzLmN1cnNvcnMgPSB0aGlzLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcbiAgICB0aGlzLndvcmxkU3BlZWQgPSAwLjI1O1xuXG4gICAgLy8gdGlocy5zZXR1cFBsYXllckljb25zKCk7XG4gICAgdGhpcy5zZXR1cFRleHQoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnBsYXllci5oYW5kbGVJbnB1dCgpO1xuICAgIHRoaXMuc2VhLnRpbGVQb3NpdGlvbi55ICs9IHRoaXMud29ybGRTcGVlZDtcbiAgICB0aGlzLmNoZWNrQ29sbGlzaW9ucygpO1xuICAgIC8vIHRoaXMuc3Bhd25FbmVtaWVzKCk7XG4gICAgLy8gdGhpcy5lbmVteUZpcmUoKTtcbiAgICB0aGlzLmRldGVjdFBsYXllcklucHV0KCk7XG4gICAgdGhpcy5kZWxheUVmZmVjdCgpO1xuICB9XG5cbiAgZGV0ZWN0UGxheWVySW5wdXQoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5RKSkgdGhpcy5xdWl0R2FtZSgpO1xuICB9XG5cblxuICBzZXR1cEVuZW1pZXMoKSB7XG4gICAgdGhpcy5lbmVteUJ1bGxldFBvb2wgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgIHRoaXMuZW5lbXlCdWxsZXRQb29sLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgIHRoaXMuZW5lbXlCdWxsZXRQb29sLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcbiAgICB0aGlzLmVuZW15QnVsbGV0UG9vbC5jcmVhdGVNdWx0aXBsZSgxMDAsICdlbmVteUJ1bGxldCcpO1xuICAgIHRoaXMuZW5lbXlCdWxsZXRQb29sLnNjYWxlLnNldFRvKDAuNSwgMC41KTtcbiAgICB0aGlzLmVuZW15QnVsbGV0UG9vbC5zZXRBbGwoJ291dE9mQm91bmRzS2lsbCcsIHRydWUpO1xuICAgIHRoaXMuZW5lbXlCdWxsZXRQb29sLnNldEFsbCgnY2hlY2tXb3JsZEJvdW5kcycsIHRydWUpO1xuICAgIHRoaXMuZW5lbXlCdWxsZXRQb29sLnNldEFsbCgncmV3YXJkJywgMCwgZmFsc2UsIGZhbHNlLCAwLCB0cnVlKTtcblxuICAgIHRoaXMuZW5lbXlQb29sID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLmVuZW15UG9vbC5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICB0aGlzLmVuZW15UG9vbC5waHlzaWNzQm9keVR5cGUgPSBQaGFzZXIuUGh5c2ljcy5BUkNBREU7XG4gICAgdGhpcy5lbmVteVBvb2wuY3JlYXRlTXVsdGlwbGUoNTAsICdncmVlbkVuZW15Jyk7XG4gICAgdGhpcy5lbmVteVBvb2wuc2V0QWxsKCdhbmNob3IueCcsIDAuNSk7XG4gICAgdGhpcy5lbmVteVBvb2wuc2V0QWxsKCdhbmNob3IueScsIDAuNSk7XG4gICAgdGhpcy5lbmVteVBvb2wuc2V0QWxsKCdvdXRPZkJvdW5kc0tpbGwnLCB0cnVlKTtcbiAgICB0aGlzLmVuZW15UG9vbC5zZXRBbGwoJ3Jld2FyZCcsIDEwMCwgZmFsc2UsIGZhbHNlLCAwLCB0cnVlKTtcblxuICAgIC8vIDEwJSBjaGFuY2UgYWZ0ZXIgZW5lbXkgZGVhZC5cbiAgICB0aGlzLmVuZW15UG9vbC5zZXRBbGwoJ2Ryb3BSYXRlJywgMC4xLCBmYWxzZSwgZmFsc2UsIDAsIHRydWUpO1xuXG4gICAgdGhpcy5ib3NzUG9vbCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgdGhpcy5ib3NzUG9vbC5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICB0aGlzLmJvc3NQb29sLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcbiAgICB0aGlzLmJvc3NQb29sLmNyZWF0ZU11bHRpcGxlKDEsICdib3NzJyk7XG4gICAgdGhpcy5ib3NzUG9vbC5zZXRBbGwoJ2FuY2hvci54JywgMC41KTtcbiAgICB0aGlzLmJvc3NQb29sLnNldEFsbCgnYW5jaG9yLnknLCAwLjUpO1xuICAgIHRoaXMuYm9zc1Bvb2wuc2V0QWxsKCdvdXRPZkJvdW5kc0tpbGwnLCB0cnVlKTtcbiAgICB0aGlzLmJvc3NQb29sLnNldEFsbCgnY2hlY2tXb3JsZEJvdW5kcycsIHRydWUpO1xuICAgIHRoaXMuYm9zc1Bvb2wuc2V0QWxsKCdyZXdhcmQnLCAxMDAwMCwgZmFsc2UsIGZhbHNlLCAwLCB0cnVlKTtcbiAgICB0aGlzLmJvc3NQb29sLnNldEFsbCgnZHJvcFJhdGUnLCAwLCBmYWxzZSwgZmFsc2UsIDAsIHRydWUpO1xuXG4gICAgLy8gU2V0IGFuaW1hdGlvbiBmb3IgZWFjaCBzcHJpdGVcbiAgICB0aGlzLmJvc3NQb29sLmZvckVhY2goZnVuY3Rpb24oZW5lbXkpIHtcbiAgICAgIGVuZW15LmFuaW1hdGlvbnMuYWRkKCdmbHknLCBbMCwgMSwgMl0sIDIwLCB0cnVlKTtcbiAgICAgIGVuZW15LmFuaW1hdGlvbnMuYWRkKCdoaXQnLCBbMywgMSwgMywgMl0sIDIwLCBmYWxzZSk7XG4gICAgICBlbmVteS5ldmVudHMub25BbmltYXRpb25Db21wbGV0ZS5hZGQoZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnBsYXkoJ2ZseScpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmJvc3MgPSB0aGlzLmJvc3NQb29sLmdldFRvcCgpO1xuICAgIHRoaXMuYm9zc0FwcHJvYWNoaW5nID0gZmFsc2U7XG4gICAgdGhpcy5ib3NzSW5pdGlhbEhlYWx0aCA9IDUwMDtcblxuICAgIC8vIFNldCBhbmltYXRpb25cbiAgICB0aGlzLmVuZW15UG9vbC5mb3JFYWNoKGZ1bmN0aW9uKGVuZW15KSB7XG4gICAgICBlbmVteS5hbmltYXRpb25zLmFkZCgnZmx5JywgWzAsIDEsIDJdLCAyMCwgdHJ1ZSk7XG4gICAgICBlbmVteS5hbmltYXRpb25zLmFkZCgnaGl0JywgWzMsIDEsIDQsIDJdLCAyMCwgZmFsc2UpO1xuICAgICAgZW5lbXkuZXZlbnRzLm9uQW5pbWF0aW9uQ29tcGxldGUuYWRkKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucGxheSgnZmx5Jyk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9KTtcblxuICAgIHRoaXMubmV4dEVuZW15QXQgPSAwO1xuICAgIHRoaXMuZW5lbXlEZWxheSA9IDEwMDA7XG4gICAgdGhpcy5lbmVteUluaXRpYWxIZWFsdGggPSAyO1xuXG4gICAgdGhpcy5zaG9vdGVyUG9vbCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgdGhpcy5zaG9vdGVyUG9vbC5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICB0aGlzLnNob290ZXJQb29sLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcbiAgICB0aGlzLnNob290ZXJQb29sLmNyZWF0ZU11bHRpcGxlKDIwLCAnd2hpdGVFbmVteScpO1xuICAgIHRoaXMuc2hvb3RlclBvb2wuc2V0QWxsKCdhbmNob3IueCcsIDAuNSk7XG4gICAgdGhpcy5zaG9vdGVyUG9vbC5zZXRBbGwoJ2FuY2hvci55JywgMC41KTtcbiAgICB0aGlzLnNob290ZXJQb29sLnNldEFsbCgnb3V0T2ZCb3VuZHNLaWxsJywgdHJ1ZSk7XG4gICAgdGhpcy5zaG9vdGVyUG9vbC5zZXRBbGwoJ2NoZWNrV29ybGRCb3VuZHMnLCB0cnVlKTtcbiAgICB0aGlzLnNob290ZXJQb29sLnNldEFsbCgncmV3YXJkJywgMzAwLCBmYWxzZSwgZmFsc2UsIDAsIHRydWUpO1xuXG4gICAgLy8gMjAlIEFmdGVyIGVuZW15U2hvb3RlciBkaWUuXG4gICAgdGhpcy5zaG90ZXJQb29sLnNldEFsbCgnZHJvcFJhdGUnLCAwLjIsIGZhbHNlLCBmYWxzZSwgMCwgdHJ1ZSk7XG4gICAgLy8gU2V0IHRoZSBhbmltYXRpb24gZm9yIGVhY2ggc3ByaXRlXG4gICAgdGhpcy5zaG9vdGVyUG9vbC5mb3JFYWNoKGZ1bmN0aW9uIChlbmVteSkge1xuICAgICAgZW5lbXkuYW5pbWF0aW9ucy5hZGQoJ2ZseScsIFswLCAxLCAyXSwgMjAsIHRydWUpO1xuICAgICAgZW5lbXkuYW5pbWF0aW9ucy5hZGQoJ2hpdCcsIFszLCAxLCAzLCAyXSwgMjAsIGZhbHNlKTtcbiAgICAgIGVuZW15LmV2ZW50cy5vbkFuaW1hdGlvbkNvbXBsZXRlLmFkZChmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnBsYXkoJ2ZseScpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSk7XG5cbiAgICAvLyBTdGFydCBzcGF3bmluZyA1IHNlY29uZHMgaW50byB0aGUgZ2FtZVxuICAgIHRoaXMubmV4dFNob290ZXJBdCA9IHRoaXMudGltZS5ub3cgKyA1MDAwO1xuICAgIHRoaXMuc2hvb3RlckRlbGF5ID0gMzAwMDtcbiAgICB0aGlzLnNob290ZXJTaG90RGVsYXkgPSAxMDAwO1xuICAgIHRoaXMuc2hvb3RlckluaXRpYWxIZWFsdGggPSA1O1xuICB9XG5cblxuICBzZXR1cEV4cGxvc2lvbnMoKSB7XG4gICAgdGhpcy5leHBsb3Npb25Qb29sID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLmV4cGxvc2lvblBvb2wuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5leHBsb3Npb25Qb29sLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcbiAgICB0aGlzLmV4cGxvc2lvblBvb2wuY3JlYXRlTXVsdGlwbGUoMTAwLCAnZXhwbG9zaW9uJyk7XG4gICAgdGhpcy5leHBsb3Npb25Qb29sLnNldEFsbCgnYW5jaG9yLngnLCAwLjUpO1xuICAgIHRoaXMuZXhwbG9zaW9uUG9vbC5zZXRBbGwoJ2FuY2hvci55JywgMC41KTtcbiAgICAvLyBTZXQgZXhwbG9zaW9uIGFuaW1hdGlvblxuICAgIHRoaXMuZXhwbG9zaW9uUG9vbC5mb3JFYWNoKGZ1bmN0aW9uIChleHBsb3Npb24pIHtcbiAgICAgIGV4cGxvc2lvbi5hbmltYXRpb25zLmFkZCgnYm9vbScpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0dXBQbGF5ZXJJY29ucygpIHtcbiAgICB0aGlzLnBvd2VyVXBQb29sID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLnBvd2VyVXBQb29sLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgIHRoaXMucG93ZXJVcFBvb2wucGh5c2ljc0JvZHlUeXBlID0gUGhhc2VyLlBoeXNpY3MuQVJDQURFO1xuICAgIHRoaXMucG93ZXJVcFBvb2wuY3JlYXRlTXVsdGlwbGUoNSwgJ3Bvd2VydXAxJyk7XG4gICAgdGhpcy5wb3dlclVwUG9vbC5zZXRBbGwoJ2FuY2hvci54JywgMC41KTtcbiAgICB0aGlzLnBvd2VyVXBQb29sLnNldEFsbCgnYW5jaG9yLnknLCAwLjUpO1xuICAgIHRoaXMucG93ZXJVcFBvb2wuc2V0QWxsKCdvdXRPZkJvdW5kc0tpbGwnLCB0cnVlKTtcbiAgICB0aGlzLnBvd2VyVXBQb29sLnNldEFsbCgnY2hlY2tXb3JsZEJvdW5kcycsIHRydWUpO1xuICAgIHRoaXMucG93ZXJVcFBvb2wuc2V0QWxsKCdyZXdhcmQnLCAxMDAsIGZhbHNlLCBmYWxzZSwgMCwgdHJ1ZSk7XG5cbiAgICB0aGlzLmxpdmVzID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgbGV0IGxpZmUgPSB0aGlzLmxpdmVzLmNyZWF0ZSgyNDAgKyAoMzAgKiBpKSwgMzAsICdwbGF5ZXInKTtcbiAgICAgIGxpZmUuc2NhbGUuc2V0VG8oMC40LCAwLjQpO1xuICAgICAgbGlmZS5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgIH1cbiAgfVxuXG4gIHNldHVwVGV4dCgpIHtcbiAgICB0aGlzLmluc3RydWN0aW9ucyA9IHRoaXMuYWRkLnRleHQoMTYwLCA0MDAsICdVc2UgQXJyb3cgS2V5cyB0byBNb3ZlLCBYIHRvIEZpcmVcXG4nLCB7XG4gICAgICAgIGZvbnQ6ICcxNHB4IEZpcmEgTW9ubycsXG4gICAgICAgIGZpbGw6ICcjZmZmJyxcbiAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICB9KTtcbiAgICB0aGlzLmluc3RydWN0aW9ucy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgIHRoaXMuaW5zdEV4cGlyZSA9IHRoaXMudGltZS5ub3cgKyA1MDAwO1xuXG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5zY29yZVRleHQgPSB0aGlzLmFkZC50ZXh0KFxuICAgICAgMTYwLCAzMCwgJ1Njb3JlOiAnICsgdGhpcy5zY29yZSwge1xuICAgICAgICBmb250OiAnMjBweCBGaXJhIE1vbm8nLFxuICAgICAgICBmaWxsOiAnI2ZmZicsXG4gICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgfSk7XG4gICAgdGhpcy5zY29yZVRleHQuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgfVxuXG4gIGNoZWNrQ29sbGlzaW9ucygpIHtcbiAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAoXG4gICAgICB0aGlzLnBsYXllci5idWxsZXRQb29sLFxuICAgICAgdGhpcy5lbmVteSxcbiAgICAgIHRoaXMuZW5lbXlIaXQsXG4gICAgICBudWxsLFxuICAgICAgdGhpc1xuICAgICk7XG5cbiAgIC8vICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAoXG4gICAvLyAgICB0aGlzLmJ1bGxldFBvb2wsXG4gICAvLyAgICB0aGlzLnNob290ZXJQb29sLFxuICAgLy8gICAgdGhpcy5lbmVteUhpdCxcbiAgIC8vICAgIG51bGwsXG4gICAvLyAgICB0aGlzXG4gICAvLyAgKTtcblxuICAgLy8gIHRoaXMucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChcbiAgIC8vICAgIHRoaXMucGxheWVyLFxuICAgLy8gICAgdGhpcy5lbmVteVBvb2wsXG4gICAvLyAgICB0aGlzLnBsYXllckhpdCxcbiAgIC8vICAgIG51bGwsXG4gICAvLyAgICB0aGlzXG4gICAvLyAgKTtcblxuICAgLy8gdGhpcy5waHlzaWNzLmFyY2FkZS5vdmVybGFwKFxuICAgLy8gICAgdGhpcy5wbGF5ZXIsXG4gICAvLyAgICB0aGlzLnNob290ZXJQb29sLFxuICAgLy8gICAgdGhpcy5wbGF5ZXJIaXQsXG4gICAvLyAgICBudWxsLFxuICAgLy8gICAgdGhpc1xuICAgLy8gICk7XG5cbiAgIC8vICAgdGhpcy5waHlzaWNzLmFyY2FkZS5vdmVybGFwKFxuICAgLy8gICAgdGhpcy5wbGF5ZXIsXG4gICAvLyAgICB0aGlzLmVuZW15QnVsbGV0UG9vbCxcbiAgIC8vICAgIHRoaXMucGxheWVySGl0LFxuICAgLy8gICAgbnVsbCxcbiAgIC8vICAgIHRoaXNcbiAgIC8vICApO1xuXG4gICAvLyAgIHRoaXMucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChcbiAgIC8vICAgIHRoaXMucGxheWVyLFxuICAgLy8gICAgdGhpcy5wb3dlclVwUG9vbCxcbiAgIC8vICAgIHRoaXMucGxheWVySGl0LFxuICAgLy8gICAgbnVsbCxcbiAgIC8vICAgIHRoaXNcbiAgIC8vICApO1xuXG4gICAvLyAgaWYgKHRoaXMuYm9zc0FwcHJvYWNoaW5nID09PSBmYWxzZSkge1xuICAgLy8gICAgdGhpcy5waHlzaWNzLmFyY2FkZS5vdmVybGFwKFxuICAgLy8gICAgICB0aGlzLmJ1bGxldFBvb2wsXG4gICAvLyAgICAgIHRoaXMuYm9zc1Bvb2wsXG4gICAvLyAgICAgIHRoaXMuZW5lbXlIaXQsXG4gICAvLyAgICAgIG51bGwsXG4gICAvLyAgICAgIHRoaXNcbiAgIC8vICAgICk7XG5cbiAgIC8vICAgIHRoaXMucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChcbiAgIC8vICAgICAgdGhpcy5wbGF5ZXIsXG4gICAvLyAgICAgIHRoaXMuYm9zc1Bvb2wsXG4gICAvLyAgICAgIHRoaXMucGxheWVySGl0LFxuICAgLy8gICAgICBudWxsLFxuICAgLy8gICAgICB0aGlzXG4gICAvLyAgICApO1xuICAgLy8gIH1cbiAgfVxuXG4gIHNwYXduRW5lbWllcygpIHtcbiAgICBcbiAgfVxuXG4gIGVuZW15RmlyZSgpIHtcbiAgICB0aGlzLnNob290ZXJQb29sLmZvckVhY2hBbGl2ZShmdW5jdGlvbihlbmVteSkge1xuICAgICAgaWYgKHRoaXMudGltZS5ub3cgPiBlbmVteS5uZXh0U2hvdEF0ICYmIHRoaXMuZW5lbXlCdWxsZXRQb29sLmNvdW50RGVhZCgpID4gMCkge1xuICAgICAgICB2YXIgYnVsbGV0ID0gdGhpcy5lbmVteUJ1bGxldFBvb2wuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgICAgICBidWxsZXQucmVzZXQoZW5lbXkueCwgZW5lbXkueSk7XG4gICAgICAgIHRoaXMucGh5c2ljcy5hcmNhZGUubW92ZVRvT2JqZWN0KGJ1bGxldCwgdGhpcy5wbGF5ZXIsIDE1MCk7XG4gICAgICAgIGVuZW15Lm5leHRTaG90QXQgPSB0aGlzLnRpbWUubm93ICsgdGhpcy5zaG9vdGVyU2hvdERlbGF5O1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuXG4gICAgaWYgKHRoaXMuYm9zc0FwcHJvYWNoaW5nID09PSBmYWxzZSAmJiB0aGlzLmJvc3MuYWxpdmUgJiYgXG4gICAgICAgIHRoaXMuYm9zcy5uZXh0U2hvdEF0IDwgdGhpcy50aW1lLm5vdyAmJlxuICAgICAgICB0aGlzLmVuZW15QnVsbGV0UG9vbC5jb3VudERlYWQoKSA+IDkpIHtcblxuICAgICAgdGhpcy5ib3NzLm5leHRTaG90QXQgPSB0aGlzLnRpbWUubm93ICsgMTAwMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgLy8gcHJvY2VzcyAyIGJ1bGxldHMgYXQgYSB0aW1lXG4gICAgICAgIHZhciBsZWZ0QnVsbGV0ID0gdGhpcy5lbmVteUJ1bGxldFBvb2wuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgICAgICBsZWZ0QnVsbGV0LnJlc2V0KHRoaXMuYm9zcy54IC0gMTAgLSBpICogMTAsIHRoaXMuYm9zcy55ICsgMjApO1xuICAgICAgICB2YXIgcmlnaHRCdWxsZXQgPSB0aGlzLmVuZW15QnVsbGV0UG9vbC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgICAgIHJpZ2h0QnVsbGV0LnJlc2V0KHRoaXMuYm9zcy54ICsgMTAgKyBpICogMTAsIHRoaXMuYm9zcy55ICsgMjApO1xuXG4gICAgICAgIGlmICh0aGlzLmJvc3MuaGVhbHRoID4gMjUwKSB7XG4gICAgICAgICAgLy8gYWltIGRpcmVjdGx5IGF0IHRoZSBwbGF5ZXJcbiAgICAgICAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm1vdmVUb09iamVjdChsZWZ0QnVsbGV0LCB0aGlzLnBsYXllciwgMTUwKTtcbiAgICAgICAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm1vdmVUb09iamVjdChyaWdodEJ1bGxldCwgdGhpcy5wbGF5ZXIsIDE1MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gYWltIHNsaWdodGx5IG9mZiBjZW50ZXIgb2YgdGhlIHBsYXllclxuICAgICAgICAgIHRoaXMucGh5c2ljcy5hcmNhZGUubW92ZVRvWFkoXG4gICAgICAgICAgICBsZWZ0QnVsbGV0LCB0aGlzLnBsYXllci54IC0gaSAqIDEwMCwgdGhpcy5wbGF5ZXIueSwgMTUwXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm1vdmVUb1hZKFxuICAgICAgICAgICAgcmlnaHRCdWxsZXQsIHRoaXMucGxheWVyLnggKyBpICogMTAwLCB0aGlzLnBsYXllci55LCAxNTBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBkZWxheUVmZmVjdCgpIHtcblxuICAgIC8vIEZhZGUgb3V0IGluc3RydWN0aW9uIHRleHRcbiAgICBpZiAodGhpcy5pbnN0cnVjdGlvbnMuZXhpc3RzICYmIHRoaXMudGltZS5ub3cgPiB0aGlzLmluc3RFeHBpcmUpIHtcbiAgICAgIC8vIHRoaXMuaW5zdHJ1Y3Rpb25zLnggPSB0aGlzLmluc3RydWN0aW9ucy54IC0gMTA7XG4gICAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMuaW5zdHJ1Y3Rpb25zKS50byggeyBhbHBoYTogMCB9LCAxMDAsIFwiTGluZWFyXCIsIHRydWUpO1xuICAgICAgaWYgKHRoaXMuaW5zdHJ1Y3Rpb25zLmFscGhhIDwgMC4wMDEpIHRoaXMuaW5zdHJ1Y3Rpb25zLmRlc3Ryb3koKTtcbiAgICB9XG4vKlxuICAgIGlmICh0aGlzLmdob3N0VW50aWwgJiYgdGhpcy5naG9zdFVudGlsIDwgdGhpcy50aW1lLm5vdykge1xuICAgICAgdGhpcy5naG9zdFVudGlsID0gbnVsbDtcbiAgICAgIHRoaXMucGxheWVyLnBsYXkoJ2ZseScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3dSZXR1cm4gJiYgdGhpcy50aW1lLm5vdyA+IHRoaXMuc2hvd1JldHVybikge1xuICAgICAgdGhpcy5yZXR1cm5UZXh0ID0gdGhpcy5hZGQudGV4dCgxNjAsIDMyMCwgXG4gICAgICAgICdQcmVzcyBaIG9yIFRhcCBHYW1lIHRvIGdvIGJhY2sgdG8gTWFpbiBNZW51Jywge1xuICAgICAgICAgIGZvbnQ6ICcxNnB4IHNlcmlmJyxcbiAgICAgICAgICBmaWxsOiAnI2ZmZidcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgdGhpcy5yZXR1cm5UZXh0LmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICB0aGlzLnNob3dSZXR1cm4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3NzQXBwcm9hY2hpbmcgJiYgdGhpcy5ib3NzLnkgPiA4MCkge1xuICAgICAgdGhpcy5ib3NzQXBwcm9hY2hpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuYm9zcy5oZWFsdGggPSA1MDA7XG4gICAgICB0aGlzLmJvc3MubmV4dFNob3RBdCA9IDA7XG5cbiAgICAgIHRoaXMuYm9zcy5ib2R5LnZlbG9jaXR5LnkgPSAwO1xuICAgICAgdGhpcy5ib3NzLmJvZHkudmVsb2NpdHkueCA9IDIwMDtcbiAgICAgIC8vIGFsbG93IGJvdW5jaW5nIG9mZiB3b3JsZCBib3VuZHNcbiAgICAgIHRoaXMuYm9zcy5ib2R5LmJvdW5jZS54ID0gMTtcbiAgICAgIHRoaXMuYm9zcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgfVxuICAgICovXG4gIH1cblxuICBleHBsb2RlKHNwcml0ZSkge1xuICAgIGlmICh0aGlzLmV4cGxvc2lvblBvb2wuY291bnREZWFkKCkgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGV4cGxvc2lvbiA9IHRoaXMuZXhwbG9zaW9uUG9vbC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgZXhwbG9zaW9uLnJlc2V0KHNwcml0ZS54LCBzcHJpdGUueSk7XG4gICAgZXhwbG9zaW9uLnBsYXkoJ2Jvb20nLCAxNSwgZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgZW5lbXlIaXQoZW5lbXksIGJ1bGxldCkge1xuICAgIGNvbnNvbGUubG9nKFwiZW5lbXlISXRcIik7XG4gICAgYnVsbGV0LmtpbGwoKTtcbiAgICB0aGlzLmFkZFRvU2NvcmUoMTApO1xuICAgIHRoaXMuZGFtYWdlRW5lbXkoZW5lbXksIDEpO1xuICB9XG5cbiAgcGxheWVySGl0KHBsYXllciwgZW5lbXkpIHtcblxuICAgIGlmICh0aGlzLmdob3N0VW50aWwgJiYgdGhpcy5naG9zdFVudGlsID4gdGhpcy50aW1lLm5vdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGFtYWdlRW5lbXkoZW5lbXksIDUpO1xuICAgIHZhciBsaWZlID0gdGhpcy5saXZlcy5nZXRGaXJzdEFsaXZlKCk7XG4gICAgaWYgKGxpZmUpIHtcbiAgICAgIGxpZmUua2lsbCgpO1xuICAgICAgdGhpcy53ZWFwb25MZXZlbCA9IDA7XG4gICAgICB0aGlzLmdob3N0VW50aWwgPSB0aGlzLnRpbWUubm93ICsgMjAwMDtcbiAgICAgIHRoaXMucGxheWVyLnBsYXkoJ2dob3N0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXhwbG9kZShwbGF5ZXIpO1xuICAgICAgcGxheWVyLmtpbGwoKTtcbiAgICAgIHRoaXMuZGlzcGxheUVuZChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcGxheWVyUG93ZXJVcChwbGF5ZXIsIHBvd2VyVXApIHtcbiAgICB0aGlzLmFkZFRvU2NvcmUocG93ZXJVcC5yZXdhcmQpO1xuICAgIHBvd2VyVXAua2lsbCgpO1xuICAgIGlmICh0aGlzLndlYXBvbkxldmVsIDwgNSkge1xuICAgICAgdGhpcy53ZWFwb25MZXZlbCArPSAxO1xuICAgIH1cbiAgfVxuXG4gIGRhbWFnZUVuZW15KGVuZW15LCBkYW1hZ2UpIHtcbiAgICAvLyBkZXRhaWwgOiBodHRwOi8vZG9jcy5waGFzZXIuaW8vUGhhc2VyLlNwcml0ZS5odG1sI2RhbWFnZVxuICAgIGVuZW15LmRhbWFnZShkYW1hZ2UpO1xuICAgIC8vIGlmIChlbmVteS5hbGl2ZSkge1xuICAgIC8vICAgZW5lbXkucGxheSgnaGl0Jyk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHRoaXMuZXhwbG9kZShlbmVteSk7XG4gICAgLy8gICB0aGlzLnNwYXduUG93ZXJVcChlbmVteSk7XG4gICAgLy8gICB0aGlzLmFkZFRvU2NvcmUoZW5lbXkucmV3YXJkKTtcblxuICAgIC8vICAgaWYgKGVuZW15LmtleSA9PT0gJ2Jvc3MnKSB7XG4gICAgLy8gICAgIHRoaXMuZW5lbXlQb29sLmRlc3Ryb3koKTtcbiAgICAvLyAgICAgdGhpcy5zaG9vdGVyUG9vbC5kZXN0cm95KCk7XG4gICAgLy8gICAgIHRoaXMuYm9zc1Bvb2wuZGVzdHJveSgpO1xuICAgIC8vICAgICB0aGlzLmVuZW15QnVsbGV0UG9vbC5kZXN0cm95KCk7XG4gICAgLy8gICAgIHRoaXMuZGlzcGxheUVuZCh0cnVlKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cblxuICBzcGF3blBvd2VyVXAoZW5lbXkpIHtcbiAgICBpZiAodGhpcy5wb3dlclVwUG9vbC5jb3VudERlYWQoKSA9PT0gMCB8fCB0aGlzLndlYXBvbkxldmVsID09PSA1KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucm5kLmZyYWMoKSA8IGVuZW15LmRyb3BSYXRlKSB7XG4gICAgICAgdmFyIHBvd2VyVXAgPSB0aGlzLnBvd2VyVXBQb29sLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICAgICBwb3dlclVwLnJlc2V0KGVuZW15LngsIGVuZW15LnkpO1xuICAgICAgIHBvd2VyVXAuYm9keS52ZWxvY2l0eS55ID0gMTAwO1xuICAgICB9XG4gIH1cblxuICBzcGF3bkJvc3MoKSB7XG4gICAgdGhpcy5ib3NzQXBwcm9hY2hpbmcgPSB0cnVlO1xuICAgIHZhciBib3NzID0gdGhpcy5ib3NzUG9vbC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgdGhpcy5waHlzaWNzLmVuYWJsZShib3NzLCBQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgIGJvc3MucmVzZXQoMTYwLCAwLCB0aGlzLmJvc3NJbml0aWFsSGVhbHRoKTtcbiAgICBib3NzLmJvZHkudmVsb2NpdHkueSA9IDE1O1xuICAgIGJvc3MucGxheSgnZmx5Jyk7XG5cbiAgICB0aGlzLmVuZW15UG9vbC5kZXN0cm95KCk7XG4gICAgLy8gdGhpcy5zaG9vdGVyUG9vbC5kZXN0cm95KCk7XG4gIH1cblxuICBhZGRUb1Njb3JlKHNjb3JlKSB7XG4gICAgdGhpcy5zY29yZSArPSBzY29yZTtcbiAgICB0aGlzLnNjb3JlVGV4dC50ZXh0ID0gJ1Njb3JlIDogJyArIHRoaXMuc2NvcmU7XG4gICAgaWYgKHRoaXMuc2NvcmUgPj0gMjAwMDAgJiYgdGhpcy5ib3NzUG9vbC5jb3VudERlYWQoKSA9PSAxKSB7XG4vKiAgICAgIHRoaXMuZW5lbXlQb29sLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuc2hvb3RlclBvb2wuZGVzdHJveSgpO1xuICAgICAgdGhpcy5lbmVteUJ1bGxldFBvb2wuZGVzdHJveSgpO1xuICAgICAgdGhpcy5kaXNwbGF5RW5kKHRydWUpOyovXG4gICAgICB0aGlzLnNwYXduQm9zcygpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlFbmQod2luKSB7XG4gICAgaWYgKHRoaXMuZW5kVGV4dCAmJiB0aGlzLmVuZFRleHQuZXhpc3RzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1lc3NhZ2UgPSB3aW4gPyAnWW9vIFdpbiEhIScgOiAnR2FtZSBPdmVyISc7XG4gICAgdGhpcy5lbmRUZXh0ID0gdGhpcy5hZGQudGV4dCgxNjAsIDI0MCwgbWVzc2FnZSwge1xuICAgICAgZm9udDogJzQ4cHggc2VyaWYnLCBcbiAgICAgIGZpbGw6ICcjZjAwJ1xuICAgIH0pO1xuICAgIHRoaXMuZW5kVGV4dC5hbmNob3Iuc2V0VG8oMC41LCAwKTtcbiAgICB0aGlzLnNob3dSZXR1cm4gPSB0aGlzLnRpbWUubm93ICsgMjAwMDtcbiAgfVxuXG4gIHF1aXRHYW1lKHBvaW50ZXIpIHtcblxuICAgIC8vICBIZXJlIHlvdSBzaG91bGQgZGVzdHJveSBhbnl0aGluZyB5b3Ugbm8gbG9uZ2VyIG5lZWQuXG4gICAgLy8gIFN0b3AgbXVzaWMsIGRlbGV0ZSBzcHJpdGVzLCBwdXJnZSBjYWNoZXMsIGZyZWUgcmVzb3VyY2VzLCBhbGwgdGhhdCBnb29kIHN0dWZmLlxuICAgIHRoaXMuc2VhLmRlc3Ryb3koKTtcbiAgICB0aGlzLnBsYXllci5kZXN0cm95KCk7XG4gICAgLy8gdGhpcy5lbmVteVBvb2wuZGVzdHJveSgpO1xuICAgIC8vIHRoaXMuYnVsbGV0UG9vbC5kZXN0cm95KCk7XG4gICAgLy8gdGhpcy5leHBsb3Npb25Qb29sLmRlc3Ryb3koKTtcbiAgICB0aGlzLmluc3RydWN0aW9ucy5kZXN0cm95KCk7XG4gICAgdGhpcy5zY29yZVRleHQuZGVzdHJveSgpO1xuICAgIC8vIHRoaXMucmV0dXJuVGV4dC5kZXN0cm95KCk7XG5cbiAgICAvLyAgVGhlbiBsZXQncyBnbyBiYWNrIHRvIHRoZSBtYWluIG1lbnUuXG4gICAgdGhpcy5zdGF0ZS5zdGFydCgnTWVudScpO1xuICB9XG5cblxuICBzZXR1cFBsYXllcigpIHtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5nYW1lLCAxNjAsIDQ1MCwgJ3BsYXllcicpO1xuICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RhdGVzL1BsYXkuanNcbiAqKi8iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7XG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ3BsYXllcicpO1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5jdXJzb3JzID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG5cbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdmbHknLCBbMCwgMSwgMiwgM10sIDEwLCB0cnVlKTtcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdmbHktbGVmdCcsIFs0LCA1LCA2LCA3XSwgMTAsIHRydWUpO1xuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2ZseS1yaWdodCcsIFs4LCA5LCAxMCwgMTFdLCAxMCwgdHJ1ZSk7XG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnZ2hvc3QnLCBbMywgMCwgMywgMV0sIDIwLCB0cnVlKTtcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUodGhpcywgUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcbiAgICB0aGlzLnNwZWVkID0gMjUwO1xuICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgIHRoaXMuYm9keS5zZXRTaXplKDIwLCAyMCwgMCwgLTUpO1xuICAgIHRoaXMud2VhcG9uTGV2ZWwgPSAwO1xuICAgIHRoaXMuYnVsbGV0U3BlZWQgPSAyMDA7XG4gICAgdGhpcy5jcmVhdGVCdWxsZXRQb29sKCk7XG4gICAgdGhpcy5jcmVhdGlvblRpbWUgPSB0aGlzLmdhbWUudGltZS5ub3c7XG5cbiAgICAvLyB0aGlzLmVtaXR0ZXIgPSB0aGlzLmdhbWUuYWRkLmVtaXR0ZXIodGhpcy5ib2R5LngsIHRoaXMuYm9keS55LCAyMDApO1xuICAgIC8vIHRoaXMuZW1pdHRlci5tYWtlUGFydGljbGVzKCdmaXJlJyk7XG4gICAgLy8gdGhpcy5lbWl0dGVyLmdyYXZpdHkgPSAyMDA7XG4gICAgLy8gdGhpcy5lbWl0dGVyLnNldEFscGhhKDEsIDAsIDMwMDApO1xuICAgIC8vIHRoaXMuZW1pdHRlci5zZXRTY2FsZSgwLjgsIDAsIDAuOCwgMCwgMzAwMCk7XG4gICAgLy8gdGhpcy5lbWl0dGVyLndpZHRoID0gODtcbiAgICAvLyB0aGlzLmVtaXR0ZXIuc2V0WVNwZWVkKDEwMCwgMjAwKTtcbiAgICAvLyB0aGlzLmVtaXR0ZXIuc2V0WFNwZWVkKC0wLjEsIC4xKTtcbiAgICAvLyB0aGlzLmVtaXR0ZXIubWluUm90YXRpb24gPSAwO1xuICAgIC8vIHRoaXMuZW1pdHRlci5tYXhSb3RhdGlvbiA9IDA7XG5cbiAgICB0aGlzLmdhbWUuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XG4gICAgdGhpcy5wbGF5KCdmbHknKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1bGxldFBvb2woKSB7XG4gICAgdGhpcy5idWxsZXRQb29sID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuICAgIHRoaXMuYnVsbGV0UG9vbC5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICB0aGlzLmJ1bGxldFBvb2wucGh5c2ljc0JvZHlUeXBlID0gUGhhc2VyLlBoeXNpY3MuQVJDQURFO1xuICAgIHRoaXMuYnVsbGV0UG9vbC5jcmVhdGVNdWx0aXBsZSgxMDAsICdidWxsZXQnKTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuc2V0QWxsKCdhbmNob3IueCcsIDAuNSk7XG4gICAgdGhpcy5idWxsZXRQb29sLnNldEFsbCgnYW5jaG9yLnknLCAwLjUpO1xuXG4gICAgLy8gS2lsbCBidWxsZXQgd2hlbiBvb0JcbiAgICB0aGlzLmJ1bGxldFBvb2wuc2V0QWxsKCdvdXRPZkJvdW5kc0tpbGwnLCB0cnVlKTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuc2V0QWxsKCdjaGVja1dvcmxkQm91bmRzJywgdHJ1ZSk7XG5cbiAgICB0aGlzLm5leHRTaG90QXQgPSAwO1xuICAgIHRoaXMuc2hvdERlbGF5ID0gMjAwO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5oYW5kbGVJbnB1dCgpO1xuICB9XG5cbiAgc2hvb3QoZGlyZWN0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmFsaXZlIHx8IHRoaXMubmV4dFNob3RBdCA+IHRoaXMuZ2FtZS50aW1lLm5vdykge1xuICAgICAgcmV0dXJuOyAvLyByZXR1cm4gaWYgcGxheWVyIGlzIGRlYWQgb3IgZGVsYXkgaXMgaW4gcGxhY2VcbiAgICB9XG5cbiAgICB0aGlzLm5leHRTaG90QXQgPSB0aGlzLmdhbWUudGltZS5ub3cgKyB0aGlzLnNob3REZWxheTtcbiAgICBsZXQgYnVsbGV0O1xuXG4gICAgaWYgKHRoaXMud2VhcG9uTGV2ZWwgPT09IDApIHtcbiAgICAgIGlmICh0aGlzLmJ1bGxldFBvb2wuY291bnREZWFkKCkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBidWxsZXQgPSB0aGlzLmJ1bGxldFBvb2wuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgICAgYnVsbGV0LnJlc2V0KHRoaXMueCwgdGhpcy55KTtcbiAgICAgIGJ1bGxldC5ib2R5LnZlbG9jaXR5LnkgPSAtdGhpcy5idWxsZXRTcGVlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuYnVsbGV0UG9vbC5jb3VudERlYWQoKSA8IHRoaXMud2VhcG9uTGV2ZWwgKiAyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53ZWFwb25MZXZlbDsgaSsrKSB7XG4gICAgICAgIGJ1bGxldCA9IHRoaXMuYnVsbGV0UG9vbC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG5cbiAgICAgICAgLy8gU3Bhd24gbGVmdCBidWxsZXQgbGVmdCBvZmYgY2VudGVyXG4gICAgICAgIGJ1bGxldC5yZXNldCh0aGlzLnggLSAoMTAgKyBpICogNSksIHRoaXMueSAtIDE2KTtcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLnZlbG9jaXR5RnJvbUFuZ2xlKC05NSAtIGkgKiAxMCwgdGhpcy5idWxsZXRTcGVlZCwgYnVsbGV0LmJvZHkudmVsb2NpdHkpO1xuXG4gICAgICAgIGJ1bGxldCA9IHRoaXMuYnVsbGV0UG9vbC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgICAgIGJ1bGxldC5yZXNldCh0aGlzLnggKyAoMTAgKyBpICogNSksIHRoaXMueSAtIDE2KTtcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLnZlbG9jaXR5RnJvbUFuZ2xlKC04NSArIGkgKjEwLCB0aGlzLmJ1bGxldFNwZWVkLCBidWxsZXQuYm9keS52ZWxvY2l0eSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuXG4gIGhhbmRsZUlucHV0KCkge1xuICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gMDtcbiAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IDA7XG5cbiAgICBpZiAodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuWCkgfHwgdGhpcy5nYW1lLmlucHV0LmFjdGl2ZVBvaW50ZXIuaXNEb3duKSB0aGlzLnNob290KFwidXBcIik7XG4gICAgaWYgKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlkpKSB0aGlzLmxldmVsVXAoKTtcblxuXG4gICAgaWYgKHRoaXMuY3Vyc29ycy51cC5pc0Rvd24pIHtcbiAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gLXRoaXMuc3BlZWQ7XG4gICAgICAvLyB0aGlzLmZpcmVQYXJ0aWNsZXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3Vyc29ycy5kb3duLmlzRG93bikgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLnNwZWVkO1xuXG5cbiAgICBpZiAodGhpcy5jdXJzb3JzLmxlZnQuaXNEb3duKSB7XG4gICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IC10aGlzLnNwZWVkO1xuICAgICAgdGhpcy5wbGF5KCdmbHktbGVmdCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJzb3JzLnJpZ2h0LmlzRG93bikge1xuICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSArdGhpcy5zcGVlZDtcbiAgICAgIHRoaXMucGxheSgnZmx5LXJpZ2h0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxheSgnZmx5Jyk7XG4gICAgfVxuXG5cbiAgICAvLyBIYW5kbGVyIE1vdXNlIENsaWNrICYgVG91Y2hcbiAgICBpZiAodGhpcy5nYW1lLmlucHV0LmFjdGl2ZVBvaW50ZXIuaXNEb3duICYmIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5kaXN0YW5jZVRvUG9pbnRlcih0aGlzKSA+IDE1KSB7XG4gICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUubW92ZVRvUG9pbnRlcih0aGlzLCB0aGlzLnNwZWVkKTtcbiAgICAgIGlmICh0aGlzLmJvZHkudmVsb2NpdHkueCA+IDApIHRoaXMucGxheSgnZmx5LXJpZ2h0Jyk7XG4gICAgICBpZiAodGhpcy5ib2R5LnZlbG9jaXR5LnggPCAwKSB0aGlzLnBsYXkoJ2ZseS1sZWZ0Jyk7XG4gICAgfVxuXG4gIH1cblxuICBmaXJlUGFydGljbGVzKCkge1xuICAgIHRoaXMuZW1pdHRlci54ID0gdGhpcy5ib2R5LmNlbnRlci54O1xuICAgIHRoaXMuZW1pdHRlci55ID0gdGhpcy5ib2R5LmNlbnRlci55O1xuICAgIHRoaXMuZW1pdHRlci5zdGFydCh0cnVlICwgMzAwLCAxLCAuMSk7XG5cbiAgfVxuXG4gIGxldmVsVXAoKSB7XG4gICAgdGhpcy53ZWFwb25MZXZlbCA9IDE7XG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbHMvUGxheWVyLmpzXG4gKiovIiwiaW1wb3J0IHsgZ2V0UmFuZG9tSW50LCBzcXVhcmUgfSBmcm9tICcuLi91dGlsL2hlbHBlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuICBcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHtcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnZ3JlZW5FbmVteScpO1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2ZseScsIFswLCAxLCAyLCAzXSwgMTAsIHRydWUpO1xuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2dob3N0JywgWzMsIDAsIDMsIDJdLCAyMCwgdHJ1ZSk7XG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKHRoaXMsIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgdGhpcy5zcGVlZCA9IDIwMDtcbiAgICB0aGlzLmhlYWx0aCA9IDU7XG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgdGhpcy5ib2R5LnNldFNpemUoMjAsIDIwLCAwLCAtNSk7XG4gICAgLy8gQ3JlYXRlIEJ1bGxldHNcbiAgICB0aGlzLmNyZWF0ZUJ1bGxldFBvb2woKTtcbiAgICB0aGlzLmNyZWF0ZUV4cGxvc2lvbigpO1xuXG4gICAgdGhpcy5lbWl0dGVyID0gdGhpcy5nYW1lLmFkZC5lbWl0dGVyKHRoaXMuYm9keS54LCB0aGlzLmJvZHkueSwgMjAwKTtcbiAgICB0aGlzLmVtaXR0ZXIubWFrZVBhcnRpY2xlcygnZmlyZScpO1xuICAgIHRoaXMuZW1pdHRlci5ncmF2aXR5ID0gMjAwO1xuICAgIHRoaXMuZW1pdHRlci5zZXRBbHBoYSgxLCAwLCAzMDAwKTtcbiAgICB0aGlzLmVtaXR0ZXIuc2V0U2NhbGUoMC44LCAwLCAwLjgsIDAsIDMwMDApO1xuICAgIHRoaXMuZW1pdHRlci53aWR0aCA9IDg7XG4gICAgdGhpcy5lbWl0dGVyLnNldFlTcGVlZCgxMDAsIDIwMCk7XG4gICAgdGhpcy5lbWl0dGVyLnNldFhTcGVlZCgtMC4xLCAuMSk7XG4gICAgdGhpcy5lbWl0dGVyLm1pblJvdGF0aW9uID0gMDtcbiAgICB0aGlzLmVtaXR0ZXIubWF4Um90YXRpb24gPSAwO1xuICAgIC8vIEFkZCB0byBzdGFnZVxuICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcbiAgICB0aGlzLnBsYXkoJ2ZseScpO1xuXG4gIH1cblxuICBjcmVhdGVCdWxsZXRQb29sKCkge1xuICAgIHRoaXMuYnVsbGV0UG9vbCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5idWxsZXRQb29sLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuY3JlYXRlTXVsdGlwbGUoMTAwLCAnZW5lbXlCdWxsZXQnKTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuc2V0QWxsKCdhbmNob3IueCcsIDAuNSk7XG4gICAgdGhpcy5idWxsZXRQb29sLnNldEFsbCgnYW5jaG9yLnknLCAwLjUpO1xuXG4gICAgLy8gS2lsbCBidWxsZXQgd2hlbiBvb0JcbiAgICB0aGlzLmJ1bGxldFBvb2wuc2V0QWxsKCdvdXRPZkJvdW5kc0tpbGwnLCB0cnVlKTtcbiAgICB0aGlzLmJ1bGxldFBvb2wuc2V0QWxsKCdjaGVja1dvcmxkQm91bmRzJywgdHJ1ZSk7XG5cbiAgICB0aGlzLm5leHRTaG90QXQgPSAwO1xuICAgIHRoaXMuc2hvdERlbGF5ID0gNTAwO1xuICB9XG5cbiAgY3JlYXRlRXhwbG9zaW9uKCkge1xuICAgIHRoaXMuZXhwbG9zaW9uUG9vbCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLmV4cGxvc2lvblBvb2wuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5leHBsb3Npb25Qb29sLnBoeXNpY3NCb2R5VHlwZSA9IFBoYXNlci5QaHlzaWNzLkFSQ0FERTtcbiAgICB0aGlzLmV4cGxvc2lvblBvb2wuY3JlYXRlTXVsdGlwbGUoMTAwLCAnZXhwbG9zaW9uJyk7XG4gICAgdGhpcy5leHBsb3Npb25Qb29sLnNldEFsbCgnYW5jaG9yLngnLCAwLjUpO1xuICAgIHRoaXMuZXhwbG9zaW9uUG9vbC5zZXRBbGwoJ2FuY2hvci55JywgMC4yNSk7XG4gICAgLy8gU2V0IGV4cGxvc2lvbiBhbmltYXRpb25cbiAgICB0aGlzLmV4cGxvc2lvblBvb2wuZm9yRWFjaChmdW5jdGlvbiAoZXhwbG9zaW9uKSB7XG4gICAgICBleHBsb3Npb24uYW5pbWF0aW9ucy5hZGQoJ2Jvb20nKTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cGxvZGUoc3ByaXRlKSB7XG4gICAgaWYgKHRoaXMuZXhwbG9zaW9uUG9vbC5jb3VudERlYWQoKSA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coXCJubyBleHBsXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXhwbG9zaW9uID0gdGhpcy5leHBsb3Npb25Qb29sLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICBsZXQgaW1wYWN0WCA9IGdldFJhbmRvbUludCgtMywgMyk7XG4gICAgbGV0IGltcGFjdFkgPSBnZXRSYW5kb21JbnQoLTMsIDMpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYm9keS5jZW50ZXIueCk7XG4gICAgZXhwbG9zaW9uLnJlc2V0KHRoaXMuYm9keS5jZW50ZXIueCArIGltcGFjdFgsIHRoaXMuYm9keS5jZW50ZXIueSArIGltcGFjdFkpO1xuICAgIGV4cGxvc2lvbi5wbGF5KCdib29tJywgMTUsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyB0aGlzLnNob290KCk7XG4gIH1cblxuICBkYW1hZ2UoKSB7XG4gICAgY29uc29sZS5sb2coXCJlbmVteSBkYW1hZ2VcIik7XG4gICAgdGhpcy5maXJlUGFydGljbGVzKCk7XG4gICAgdGhpcy5oZWFsdGgtLTtcbiAgICBpZiAodGhpcy5oZWFsdGggPT09IDApIHtcbiAgICAgIHRoaXMuZXhwbG9kZSgpO1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuICAgIC8vIHRoaXMuZXhwbG9kZSgpO1xuICB9XG5cbiAgc2hvb3QoKSB7XG4gICAgaWYgKCF0aGlzLmFsaXZlIHx8IHRoaXMubmV4dFNob3RBdCA+IHRoaXMuZ2FtZS50aW1lLm5vdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubmV4dFNob3RBdCA9IHRoaXMuZ2FtZS50aW1lLm5vdyArIHRoaXMuc2hvdERlbGF5O1xuICAgIGxldCBidWxsZXQ7XG4gICAgYnVsbGV0ID0gdGhpcy5idWxsZXRQb29sLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICBidWxsZXQucmVzZXQodGhpcy54LCB0aGlzLnkpO1xuICAgIGJ1bGxldC5ib2R5LnZlbG9jaXR5LnkgPSAxNTA7XG4gIH1cblxuXG4gIGZpcmVQYXJ0aWNsZXMoKSB7XG4gICAgdGhpcy5lbWl0dGVyLnggPSB0aGlzLmJvZHkuY2VudGVyLng7XG4gICAgdGhpcy5lbWl0dGVyLnkgPSB0aGlzLmJvZHkuY2VudGVyLnk7XG4gICAgdGhpcy5lbWl0dGVyLnN0YXJ0KHRydWUgLCAzMDAsIDEsIDEpO1xuXG4gIH1cblxuXG4gIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWxzL0VuZW15LmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZSh4KSB7XG4gICAgICAgIHJldHVybiB4ICogeDtcbiAgICB9XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9oZWxwZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9