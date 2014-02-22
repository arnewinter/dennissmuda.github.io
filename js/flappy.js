// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');
var game_state = {};

// Creates a new 'main' state that wil contain the game
game_state.main = function() { };  
game_state.main.prototype = {

    // PRELOAD FUNCTION
    preload: function() { 
		this.game.stage.backgroundColor = '#71c5cf';
        this.game.load.image('bird', 'assets/bird.png');
        this.game.load.image('pipe', 'assets/pipe.png');
    },

    // CREATE FUNCTION
    create: function() { 
    	this.bird = this.game.add.sprite(100, 245, 'bird');
        this.bird.body.gravity.y = 100;
        
        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.jump, this);
        
        this.pipes = game.add.group();
        this.pipes.createMultiple(20, 'pipe');
        
        this.timer = this.game.time.events.loop(1500, this.add_row_of_pipesm this);
        
        this.score = 0;
        var style = {font: "30px Arial", fill: "#ffffff" };
        this.label_score = this.game.add.text(20, 20, "0", style);
        
        
        
    },

    // UPDATE FUNCTION
    update: function() {
		if(this.bird.inWorld == false) 
            this.restart_game();
        
        this.game.physics.overlap(this.bird, this.pipes, this.restart_game, null, this);
    },
    

    // Jump function
    jump: function() {
        this.bird.body.velocity.y = -350;
    },
    
    // Restart the game
    restart_game:function() {
        this.game.time.events.remove(this.timer);
        this.game.state.start('main');
    },
    
    add_one_pipe: function(x, y) {
        // Get the first dead pipe of our group
        var pipe = this.pipes.getFirstDead();
        // Set new position
        pipe.reset(x,y);
        pipe.body.velocity.x = -200;
        pipe.outOfBoundsKill = true;
    },
    
    add_row_of_pipes: function() {
        var hole = Math.floor(Math.random()*5)+1;
        
        for(var i = 0; i < 8; i++)
            if(i != hole && i != hole+1)
                this.add_one_pipe(400, i*60+10);
    
        this.score += 1;
        this.label_score.content = this.score;
    },
    
    
};

// Add and start the 'main' state to start the game
game.state.add('main', game_state.main);  
game.state.start('main'); 



    