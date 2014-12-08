var menuState = {

	create: function() { 
		
		this.background = game.add.sprite(0, 0, 'loadscreen');
		this.background.anchor.x = 0;
		this.background.anchor.y = 0;

		var playLabel = game.add.text(game.world.centerX, 1080, 'Play Game', { font: '80px Arial', fill: '#ffffff' });
		playLabel.anchor.setTo(0.5, 0.5);
		playLabel.inputEnabled = true;
		playLabel.events.onInputDown.add(this.start, this);
	},



	start: function() {
		game.state.start('play');	
	}
};