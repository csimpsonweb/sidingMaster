// Initialize Phaser
var game = new Phaser.Game(2048, 2048, Phaser.AUTO, 'gameDiv');

game.global = {

	sound: true,
	score: 0,

	trainCount: 0,

	// -= Array for holding trains =- 
	train: [],
	trainStates: [],

	trainColour: [],
	trainStatus: [],
	trainXSpeed: [],
	trainYSpeed: [],

	startSpeedX: 2,
	startSpeedY: 0,
	startStatus: 'moving',

	direction1: 'straight',
	direction2: 'straight',
	direction3: 'straight',
	direction4: 'straight',

	train1Home: false,
	train2Home: false,
	train3Home: false,
	train4Home: false,

	hb1train: null,
	hb2train: null,
	hb3train: null,
	hb4train: null,


};

// Define states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);

// Start the "boot" state
game.state.start('boot');