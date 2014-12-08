var playState = {

// Aim of the game is to get each of the correct coloured trains home into thier corresponding sidings

	create: function() {

		this.background = game.add.sprite(0, 0, 'background');
		this.background.anchor.x = 0;
		this.background.anchor.y = 0;

		this.hitboxes();
		this.trains();

	},

	update: function() {

		this.moveTrain();

		console.log(this.trainOne.x);
		console.log(this.trainOne.y);

		//console.log(game.global.direction1);

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
		game.global.direction1 = 'turn';

		//make the train turn left when it passes over and direct it into the siding
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

		// checks for train1 passing over junction1
		if(train.x > 220 && train.x < 230){
		  if(train.y > 1015 && train.y < 1025 && game.global.direction1 === 'turn'){

	  		game.global.train1XSpeed=1;
			game.global.train1YSpeed=-1;
			train.angle=-45;

			}
		}
		/*
		// checks train1 passing over the curve
		if(train.x > 420 && train.x < 445){
			if(train.y > 805 && train.y < 815){
				game.global.train1XSpeed=1;
				game.global.train1YSpeed=0;
				train.angle=0;
			}
		}
		*/
		/*
		// stop the train in the siding - set it home. globally
		if(train.x > 1385 && train.x < 1390){
			if(train.y > 810 && train.y < 820){
				game.global.train1XSpeed=0;
				game.global.train1YSpeed=0;
				game.global.train1Home = true;
				
			}
		}
		*/
		/*
		if(train.x > 2148 && train.y === 1020){
			game.global.train1XSpeed=0;
			game.global.train1YSpeed=0;
			train.destroy();
		}
		*/
	},

};



/*

	-======================== COMMENTS ========================-

	1: the train somehow needs to be destroyed when it goes offscreen 
	2:
	3:
	4:

*/
























