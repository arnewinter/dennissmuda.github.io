
import Boot from './states/Boot';
import Preload from './states/Preload';
import Menu from './states/Menu';
import Play from './states/Play';

class Game extends Phaser.Game {

  constructor() {
    super(320, 480, Phaser.AUTO, 'content', null);

    // Add states
    this.state.add('Boot', Boot);
    this.state.add('Preload', Preload);
    this.state.add('Menu', Menu);
    this.state.add('Play', Play);
    // Start the game state 'boot' for prod
    this.state.start('Boot');
  }

}

new Game();