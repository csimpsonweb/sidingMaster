var playState = {

// Aim of the game is to get each of the correct coloured trains home into thier corresponding sidings

//TODO: REMOVE THIS : section each out into a function , be clear about your layout and think it through properly first

	create: function() {

		this.background = game.add.sprite(0, 0, 'background');
		this.background.anchor.x = 0;
		this.background.anchor.y = 0;

		this.hitboxes();
		this.trains();

	},

	update: function() {

		this.moveTrain();

	},

	moveTrain: function(){

		if(game.global.train1Status === 'moving'){
			this.trainOne.x = this.trainOne.x+game.global.train1XSpeed;
			this.trainOne.y = this.trainOne.y+game.global.train1YSpeed;
		}
		this.checkLocation(this.trainOne);
	},

	trains: function() {

		this.trainOne = game.add.sprite(20, 1020, 'trainOne');
		this.trainOne.anchor.x=0.5;
		this.trainOne.anchor.y=0.5;
	},

	hitboxes: function(){

		this.hitboxOne = game.add.sprite(160, 935, 'hitBoxRED');
		this.hitboxOne.inputEnabled = true;
		this.hitboxOne.events.onInputDown.add(this.hitboxOneListener, this);

		this.hitboxTwo = game.add.sprite(690, 725, 'hitBoxRED');
		this.hitboxTwo.inputEnabled = true;
		this.hitboxTwo.events.onInputDown.add(this.hitboxTwoListener, this);

		this.hitboxThree = game.add.sprite(1050, 945, 'hitBoxRED');
		this.hitboxThree.inputEnabled = true;
		this.hitboxThree.events.onInputDown.add(this.hitboxThreeListener, this);

		this.hitboxFour = game.add.sprite(1320, 945, 'hitBoxRED');
		this.hitboxFour.inputEnabled = true;
		this.hitboxFour.events.onInputDown.add(this.hitboxFourListener, this);
	},

	hitboxOneListener: function(){
		console.log('hitboxOne pressed');

	},
	hitboxTwoListener: function(){
		console.log('hitboxTwo pressed');

	},
	hitboxThreeListener: function(){
		console.log('hitboxThree pressed');

	},
	hitboxFourListener: function(){
		console.log('hitboxFour pressed');

	},

	checkLocation: function(train) {

		if(train.x < 2048){
			game.global.train1XSpeed=2; //
			game.global.train1YSpeed=0;

		}

	},

};




























