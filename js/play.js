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
		//this.manageTrains();
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
			game.global.trainStates[game.global.trainStates.length]=game.global.startStatus;
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


			//Move the train
			game.global.train[i].x = game.global.train[i].x+game.global.trainXSpeed[i];
			game.global.train[i].y = game.global.train[i].y+game.global.trainYSpeed[i];
			this.checkLocation(game.global.train[i], i);

			//Check to see the new train pos
			if(game.global.trainStates[i]==='movingup'){
				//console.log('moveup train'+game.global.trainStates[i]);
				if(game.global.trainColour[i]==='trainOne'){
					if(game.global.train[i].y < 780){
						game.global.trainYSpeed[i]=0;
						game.global.train[i].angle=0;
					}
				}

				if(game.global.trainColour==='trainTwo'){

				}
				
			}

			if(game.global.trainStates[i]==='movingup2'){
				//console.log('moveup train'+game.global.trainStates[i]);
				if(game.global.trainColour[i]==='trainOne'){
					if(game.global.train[i].y < 780){
						game.global.trainYSpeed[i]=-2;
						game.global.train[i].angle=-45;
					}
					if(game.global.train[i].y < 580 && game.global.train[i].x > 800){
						game.global.train[i].angle=0;
						game.global.trainXSpeed[i]=1.5;
						game.global.trainYSpeed[i]=2;	
					}
					if(game.global.train[i].y < 580 && game.global.train[i].x > 1150){
						game.global.train[i].angle=0;
						game.global.trainXSpeed[i]=0;
						game.global.trainYSpeed[i]=0;
					}
				}

			}

			if(game.global.trainStates[i]==='movingdown'){
				if(game.global.trainColour[i]==='trainThree'){
					if(game.global.train[i].y > 1300){
						game.global.trainYSpeed[i]=0;
						game.global.train[i].angle=0;
					}
				}

			}

			if(game.global.trainStates[i]==='movingup3'){
				if(game.global.trainColour[i]==='trainFour'){
					if(game.global.train[i].y > 1300){
						game.global.trainYSpeed[i]=0;
						game.global.train[i].angle=0;
					}
				}

			}

			//console.log(game.global.train[i]);
			//console.log(tcolour);
		}
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
		//if(game.global.hb1train!=null)
		if(game.global.trainColour[game.global.hb1train] === 'trainOne'){
			//console.log('conditions met');
			game.global.trainStates[game.global.hb1train] = 'movingup';
			//console.log(game.global.trainStates[game.global.hb1train]);
			//console.log(tcolour);
			game.global.train[game.global.hb1train].angle=-45;
			game.global.trainYSpeed[game.global.hb1train]=-2;		
		}
	},

	hitboxTwoListener: function(){
		console.log('hitboxTwo pressed');
		if(game.global.trainColour[game.global.hb2train] === 'trainOne'){
			game.global.trainStates[game.global.hb2train] = 'movingup2';
			//console.log(game.global.trainStates[game.global.hb1train]);
			game.global.train[game.global.hb2train].angle=-0;
			game.global.trainYSpeed[game.global.hb2train]=0;
			console.log('conditions met');
		}
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
























