// Initialize Phaser
var game = new Phaser.Game(2048, 2048, Phaser.AUTO, 'gameDiv');

// Our 'global' variable
game.global = {
	sound: true,
	score: 0,

	// Array for holding trains

	train1Status: 'moving',
	train1XSpeed: 4,
	train1YSpeed: 0,

	
};

// Define states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);

// Start the "boot" state
game.state.start('boot');