var playState = {

// Aim of the game is to get each of the correct coloured trains home into thier corresponding sidings

	create: function() {

		this.background = game.add.sprite(0, 0, 'background');
		this.background.anchor.x = 0;
		this.background.anchor.y = 0;

		this.hitboxes();


	},

	update: function() {

		this.createTrain();
		this.moveTrain();

	},

	createTrain: function(){

		var check=(Math.random()*100000);

			if(check<800){

			// add trains to the array
			game.global.train = game.add.sprite(-20, 1000, 'trainOne');
			game.global.trainCount++;

			//console.log(game.global.trainCount);
			//console.log(game.global.direction1);
			//console.log(game.global.train.x);

		}

	},

	moveTrain: function() {
		if(game.global.train1Status === 'moving'){
			game.global.train.x = game.global.train.x+game.global.train1XSpeed;
			game.global.train.y = game.global.train.y+game.global.train1YSpeed;
		}
		this.checkLocation(this.trainOne);
	},

	hitboxes: function(){

		this.hitboxOne = game.add.sprite(160, 935, 'hitBox');
		this.hitboxOne.inputEnabled = true;
		this.hitboxOne.events.onInputDown.add(this.hitboxOneListener, this);

		this.hitboxTwo = game.add.sprite(690, 725, 'hitBox');
		this.hitboxTwo.inputEnabled = true;
		this.hitboxTwo.events.onInputDown.add(this.hitboxTwoListener, this);

		this.hitboxThree = game.add.sprite(1050, 945, 'hitBox');
		this.hitboxThree.inputEnabled = true;
		this.hitboxThree.events.onInputDown.add(this.hitboxThreeListener, this);

		this.hitboxFour = game.add.sprite(1320, 945, 'hitBox');
		this.hitboxFour.inputEnabled = true;
		this.hitboxFour.events.onInputDown.add(this.hitboxFourListener, this);
	},

	hitboxOneListener: function(){
		console.log('hitboxOne pressed');
		//game.global.direction1 = 'turn';

		//make the train turn left when it passes over and direct it into the siding
	},

	hitboxTwoListener: function(){
		console.log('hitboxTwo pressed');
		//game.global.direction1 = 'turn';

	},

	hitboxThreeListener: function(){
		console.log('hitboxThree pressed');
		//game.global.direction1 = 'turn';

	},

	hitboxFourListener: function(){
		console.log('hitboxFour pressed');
		//game.global.direction1 = 'turn';

	},
	checkLocation: function(train) {

		// checks for train1 passing over junction1
		if(game.global.train.x < 2230){

	  		game.global.train1XSpeed=4;
			game.global.train1YSpeed=0;
		}

	},
};
























