// Initialize Phaser, and create a 400x490px game
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');
var game_state = {};

// Creates a new 'main' state that wil contain the game
game_state.main = function() { };  

// Define main game state
game_state.main.prototype = {

    preload: function() { 
		// Function called first to load all the assets
        this.game.stage.backgroundColor = '#71c5cf'
        this.game.load.image('bird', 'assets/bird.png');
    },

    create: function() { 
    	// Fuction called after 'preload' to setup the game
        this.bird = this.game.add.sprite(100, 245, 'bird');
        this.bird.body.gravity.y = 1000;
        
        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.jump, this);
    },
    
    update: function() {
		// Function called 60 times per second
        if(this.bird.inWorld == false) 
            this.restart_game();
    },
};

// Add and start the 'main' state to start the game
game.state.add('main', game_state.main);  
game.state.start('main'); 




// Make the bird jump
jump: function() {
    this.bird.add.velocity.y = -350;
},
    
// Restart the game
restart_game: function() {
    this.game.state.start('main');
},