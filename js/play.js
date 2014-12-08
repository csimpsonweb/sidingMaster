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

		//console.log(game.global.trainXSpeed.length);
		//console.log(game.global.train);
		//console.log(game.global.train);
		//console.log(game.global.startSpeedY);

	},

	createTrain: function(){

		var check=(Math.random()*90000);

			if(check<800){

				//Spawn train type
				tcolour='trainOne';

				if(check < 600){
					tcolour='trainTwo';
				}
				if(check < 400){
					tcolour='trainThree';
				}
				if(check < 200){
					tcolour='trainFour';
				}

			// add trains to the array
			var newTrain = game.add.sprite(-20, 1000, tcolour);
			game.global.train[game.global.train.length] = newTrain;
			game.global.trainXSpeed[game.global.trainXSpeed.length]=game.global.startSpeedX;
			game.global.trainYSpeed[game.global.trainYSpeed.length]=game.global.startSpeedY;
			game.global.trainStatus[game.global.trainStatus.length]=game.global.startStatus;
			game.global.trainColour[game.global.trainColour.length]=tcolour;
			game.global.trainCount++;

			//console.log(game.global.trainCount);
			//console.log(game.global.direction1);
			//console.log(game.global.train.x);
			//console.log(game.global.train);
		}


	},

	moveTrain: function() {

		for(i=0;i<game.global.train.length;i++){
			game.global.train[i].x = game.global.train[i].x+game.global.trainXSpeed[i];
			game.global.train[i].y = game.global.train[i].y+game.global.trainYSpeed[i];
			this.checkLocation(game.global.train[i], i);
			//console.log(game.global.train[i]);
			console.log(i);
		}


		/*if(game.global.train1Status === 'moving'){
			game.global.train.x = game.global.train.x+game.global.train1XSpeed;
			game.global.train.y = game.global.train.y+game.global.train1YSpeed;
		}
		this.checkLocation(this.trainOne);*/
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
		if(game.global.hb1train!=null){
			game.global.train[game.global.hb1train].angle=-45;
			game.global.trainYSpeed[game.global.hb1train]=-2;
		}
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
	checkLocation: function(train, arrNum) {

		//Check train location
		if((train.x > 200) && (train.x < 400)){
			game.global.hb1train = arrNum;
		} else if((train.x >400) && (train.x < 800)){
			game.global.hb1train = null;
		} else if(((train.x >800) && (train.x < 1000)) && (train.y<800)){
			game.global.hb2train = arrNum;
		}

	},
};
























