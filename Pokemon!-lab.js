const deckOfCards = [];
const newPokemon = []

const Pokemon = function(name, damage){
	this.name = name
	this.damage = damage
}


const createPokemon = (pokemonNameString, pokemonDamage, deckToAddPokemon)=>{
	let newPokemonCreated = new Pokemon(pokemonNameString, pokemonDamage)
	deckToAddPokemon.push(newPokemonCreated)
}

createPokemon("Snorlax", 100, newPokemon);
createPokemon("Mewtwo", 75, newPokemon);
createPokemon("Eevee", 45, newPokemon);
createPokemon("Ditto", 0, newPokemon);
createPokemon("Charizard", 120, newPokemon);
createPokemon("Gengar", 90, newPokemon);
createPokemon("Dragonite", 120, newPokemon);
createPokemon("Raichu", 55, newPokemon);
createPokemon("Blastoise", 90, newPokemon);
createPokemon("Blaziken", 75,newPokemon);
createPokemon("Cloyster", 80,newPokemon);
createPokemon("Cloyster", 85,newPokemon);
createPokemon("Combee", 70,newPokemon);
createPokemon("Conkeldurr",85,newPokemon);
createPokemon("Cutiefly", 50,newPokemon);
createPokemon("Cyndaquil", 45,newPokemon);
createPokemon("Dartrix", 55,newPokemon);
createPokemon("Delcatty", 60,newPokemon);
createPokemon("Dodrio", 80,newPokemon);
createPokemon("Drapion", 55, newPokemon);
createPokemon("Dratini", 45, newPokemon); 
createPokemon("Drifblim", 70, newPokemon); 
createPokemon("Ekans", 60, newPokemon); 
createPokemon("Electabuzz", 70, newPokemon); 
createPokemon("Exeggutor", 80, newPokemon);  
createPokemon("Excadrill", 75, newPokemon); 
createPokemon("Feraligatr", 120, newPokemon); 
createPokemon("Flaaffy", 55, newPokemon); 
createPokemon("Floette", 60, newPokemon); 
createPokemon("Foongus", 55, newPokemon); 
createPokemon("Golduck", 80, newPokemon); 
createPokemon("Gurdurr", 75, newPokemon); 
createPokemon("Ho-Oh", 150, newPokemon); 








const bulbasaur = new Pokemon("Bulbasaur", 60);
deckOfCards.push(bulbasaur);
const caterpie = new Pokemon("Caterpie" , 40);
deckOfCards.push(caterpie);
const charmander = new Pokemon("Charmander" , 60);
deckOfCards.push(charmander);
const clefairy = new Pokemon("Clefairy" , 60);
deckOfCards.push(clefairy);
const jigglypuff = new Pokemon("Jigglypuff", 60);
deckOfCards.push(jigglypuff);
const mankey = new Pokemon("Mankey", 30);
deckOfCards.push(mankey);
const meowth = new Pokemon("Meowth", 60);
deckOfCards.push(meowth);
const nidoranFemale = new	Pokemon("Nidoran - female" , 60);
deckOfCards.push(nidoranFemale);
const nidoranMale = new Pokemon("NidoranMale" , 50);
deckOfCards.push(nidoranMale);
const oddish = new Pokemon("Oddish", 40);
deckOfCards.push(oddish);
const pidgey = new Pokemon("Pidgey", 50);
deckOfCards.push(pidgey);
const pikachu = new Pokemon("Pikachu", 50);
deckOfCards.push(pikachu);
const poliwag = new Pokemon("Poliwag", 50);
deckOfCards.push(poliwag)
const psyduck = new Pokemon("Psyduck", 60);
deckOfCards.push(psyduck);
const rattata = new Pokemon("Rattata", 30);
deckOfCards.push(rattata);
const squirtle = new Pokemon("Squirtle" , 60);
deckOfCards.push(squirtle);
const vulpix = new Pokemon("Vulpix", 50);
deckOfCards.push(vulpix);
const weedle = new Pokemon("Weedle" , 40);
deckOfCards.push(weedle)

// for(let i = 0; i <newPokemon.length; i++){
// 	if(newPokemon[i].name == "Charizard"){
// 		console.log(i)
// 	}
// }

const pokemonGame = {
	cards : deckOfCards,
	"cards played" : [],
	"cards left" : [],
	"track points" : { playerPoints : 0, computerPoints : 0},
	turns : 0
}



class Player {
	constructor(name){
		this.name = name
		this.statsAndRoundsWon = 0
		this.cards = []
		this.totalCardsDealtAllGame = []
		this.bestCardDamage = 0
		this.bestCardPokemonName = ""
		this.bestPokemon = null
		this.cardsUsed = []
		this.pointsWithinOneRound = 0
	}
	pickRandomCard(){ 
		if(this.totalCardsDealtAllGame.length == 9){return}
			let randomNumber1 = Math.floor(Math.random()*(pokemonGame.cards.length - 1))
			if(randomNumber1 == -1){
				randomNumber1++
			}
			this.cards.push(pokemonGame.cards[randomNumber1])
			this.totalCardsDealtAllGame.push(pokemonGame.cards[randomNumber1])
			pokemonGame.cards.splice(randomNumber1, 1)
	
			let randomNumber2 = Math.floor(Math.random()*(pokemonGame.cards.length - 1))
			if(randomNumber2 == -1){
				randomNumber2++
			}
			this.cards.push(pokemonGame.cards[randomNumber2])
			this.totalCardsDealtAllGame.push(pokemonGame.cards[randomNumber2]) 
			pokemonGame.cards.splice(randomNumber2, 1)
	
			let randomNumber3 = Math.floor(Math.random()*(pokemonGame.cards.length - 1))
			if(randomNumber3 == -1){
				randomNumber3++
			}
			this.cards.push(pokemonGame.cards[randomNumber3])
			this.totalCardsDealtAllGame.push(pokemonGame.cards[randomNumber3])
			pokemonGame.cards.splice(randomNumber3, 1)
	}
}



let player = new Player("player")
let computer = new Player("computer")

const findTheMostDamage = function(thisPlayer){



		for(let i = 0; i < thisPlayer.cards.length; i++){
			for(let j = 0; j < thisPlayer.cards.length; j++){
				if(thisPlayer.cards[i] !== thisPlayer.cards[j] && thisPlayer.cards[j].damage >= thisPlayer.cards[i].damage){
						thisPlayer.bestPokemon = thisPlayer.cards[j]
						
						thisPlayer.bestCardDamage = thisPlayer.cards[j].damage
						thisPlayer.bestCardPokemonName = thisPlayer.cards[j].name

				} else if (thisPlayer.cards.length == 1){
						thisPlayer.bestPokemon = thisPlayer.cards[j]
						thisPlayer.bestCardDamage = thisPlayer.cards[j].damage
						thisPlayer.bestCardPokemonName = thisPlayer.cards[j].name
						
				}
			}
		}	

	}


const compareCards = ()=>{

	console.log(`${computer.name} was dealt these cards`)
	console.log(computer.cards)
	console.log(`${player.name} was dealt these cards`)
	console.log(player.cards)

	while(player.cards.length>0){
		findTheMostDamage(player);
		findTheMostDamage(computer);

		computer.cardsUsed.push(computer.bestPokemon)
		player.cardsUsed.push(player.bestPokemon)

		console.log(`${computer.name}'s best card is`)
		console.log(computer.bestPokemon)
		console.log('players best pokemon is')
		console.log(player.bestPokemon)

		if(computer.bestPokemon.damage> player.bestPokemon.damage){
			computer.pointsWithinOneRound++
		}else if(player.bestPokemon.damage > computer.bestPokemon.damage){
			player.pointsWithinOneRound++
		}else if(player.bestPokemon.damage == computer.bestPokemon.damage){
			console.log(`both computer and player's best cards damge are the same, no points!!`)
		}
		console.log(`player points : ${player.pointsWithinOneRound}`)
		console.log(`computer points : ${computer.pointsWithinOneRound}`)
		/* condition who wins this comparison*/
		//log who wins and all that jazz


		for (let i=0;i<computer.cards.length; i++){
			if(computer.bestPokemon == computer.cards[i]){
				pokemonGame["cards played"].push(computer.cards[i])
				computer.cards.splice(i,1)
				}
			}
		for (let i=0;i<player.cards.length; i++){
			if(player.bestPokemon == player.cards[i]){
				pokemonGame["cards played"].push(player.cards[i])
				player.cards.splice(i,1)
				}
			}

		//this should take out the best card out of current hand
		computer.bestPokemon = null
		player.bestPokemon = null



		// end this comparison

	// takes most dmg and splice it out of hand
	//use MostDmg() again and repeat untill last card.
 
	}

	player.cards = []
	computer.cards = []
}

const WhoWon = ()=>{
	if(player.cards.length == 0){
		if(player.pointsWithinOneRound>computer.pointsWithinOneRound){
			player.statsAndRoundsWon++
			console.log("player takes this one <<<<<<<<👾>>>>>>>>")
			pokemonGame["track points"].playerPoints++
		}else if(computer.pointsWithinOneRound> player.pointsWithinOneRound){
			computer.statsAndRoundsWon++
			console.log("computer takes this one <<<<<<<👾>>>>>>")
			pokemonGame["track points"].computerPoints++
		}else if (player.pointsWithinOneRound == computer.pointsWithinOneRound){
			console.log("Its a Tie <<<<<<<👾>>>>>>>>")
		}
	}
	pokemonGame.turns++
	computer.pointsWithinOneRound = 0
	player.pointsWithinOneRound = 0
}

const cardsUsed = function(){
		for(let i = 0; i <player.cards.length; i++){
		pokemonGame["cards played"].push(player.cards[i])
	}
	
	for(let i = 0; i <computer.cards.length; i++){
		pokemonGame["cards played"].push(computer.cards[i])
	}
}

const POKEMON= function(){
	console.log("                                  ,'\\					  \n    _.----.        ____         ,'  _\\  ___    ___     ____  \n_,-'       `.     |    |  /`.   \\,-'   |   \\  /   |   |    \\  |`.  \n\\      __   \\    '-.  | /   `.  ___    |    \\/    |   '-.   \\ |  |  \n \\    \\ \\   |  __  |  |/    ,','_  `.  |          | __  |    \\|  |  \n  \\    \\/   /,' _`.|      ,' / / / /   |          ,' _`.|     |  |  \n   \\     ,-'/  / \\ \\    ,'   | \\/ / ,`.|         /  / \\ \\  |     |  \n    \\    \\ |   \\_/  |   `-.  \\    `'  /|  |    ||   \\_/  | |\     |  \n     \\    \\ \\      /       `-.`.___,-' |  |\\  /| \\      /  | |   |  \n      \\    \\ `.__,'|  |`-._    `|      |__| \\/ |  `.__,'|  | |   |  \n       \\_.-'       |__|    `-._ |              '-.|     '-.| |   |  \n                                `'                           '-._|  ")
}

const runThePokemonGame = function(){

	while(true){
		player.pickRandomCard();
		computer.pickRandomCard();

		pokemonGame["cards left"].push(pokemonGame.cards)

		// findTheMostDamage(computer);
		// findTheMostDamage(player);

			if(pokemonGame.turns == 3){
					if(player.statsAndRoundsWon > computer.statsAndRoundsWon){
						console.log("----------------👾GAME OVER👾-----------------")
						console.log(`The Player WINS!!!  Player : ${player.statsAndRoundsWon}, Computer : ${computer.statsAndRoundsWon}`)
						POKEMON();
					}else if(computer.statsAndRoundsWon > player.statsAndRoundsWon){
						console.log("----------------👾GAME OVER👾-----------------")
						console.log(`The Computer WINS!!! Player : ${player.statsAndRoundsWon}, Computer : ${computer.statsAndRoundsWon}` )
						POKEMON();
					}else if (player.statsAndRoundsWon == computer.statsAndRoundsWon){
						console.log("----------------👾GAME OVER👾-----------------")
						console.log(`We have a TIE NO ONE WINS!!!! Player : ${player.statsAndRoundsWon}, Computer : ${computer.statsAndRoundsWon}`)
						POKEMON();
					}
				return
			}
			console.log("----------------👾NEW ROUND👾------------------")
			compareCards();
			WhoWon();
			console.log("----------------👾ROUND OVER👾------------------")

			

			// else if(player.bestCardDamage > computer.bestCardDamage){
			// 	player.statsAndRoundsWon++
			// 	pokemonGame["track points"].playerPoints++
			// 	cardsUsed();
				
			// 	console.log("----------------👾NEW GAME👾------------------")
			// 	console.log(`The player is delt 3 cards in his hand: ${player.cards[0].name} --> Damage: ${player.cards[0].damage}, ${player.cards[1].name} --> Damage: ${player.cards[1].damage}, ${player.cards[2].name} --> Damage: ${player.cards[2].damage}`)
			// 	console.log(`The computer is delt 3 cards in his hand: ${computer.cards[0].name} --> Damage: ${computer.cards[0].damage}, ${computer.cards[1].name} --> Damage: ${computer.cards[1].damage}, ${computer.cards[2].name} --> Damage: ${computer.cards[2].damage}`)
			// 	console.log(`👾The player has chosen ${player.bestCardPokemonName} and the computer picked ${computer.bestCardPokemonName}👾`)
			// 	console.log(`${player.bestCardPokemonName} damage: ${player.bestCardDamage}, beats ${computer.bestCardPokemonName} damage: ${computer.bestCardDamage}`)
			// 	console.log(` Player : ${player.statsAndRoundsWon}, Computer : ${computer.statsAndRoundsWon}`)
		
			// 	player.cards = []
			// 	computer.cards = []
			// }else if(computer.bestCardDamage > player.bestCardDamage){
			// 	computer.statsAndRoundsWon++
			// 	pokemonGame["track points"].computerPoints++
			// 	cardsUsed();
				
			// 	console.log("----------------👾NEW GAME👾------------------")
			// 	console.log(`The player is delt 3 cards in his hand: ${player.cards[0].name} --> Damage: ${player.cards[0].damage}, ${player.cards[1].name} --> Damage: ${player.cards[1].damage}, ${player.cards[2].name} --> Damage: ${player.cards[2].damage}`)
			// 	console.log(`The computer is delt 3 cards in his hand: ${computer.cards[0].name} --> Damage: ${computer.cards[0].damage}, ${computer.cards[1].name} --> Damage: ${computer.cards[1].damage}, ${computer.cards[2].name} --> Damage: ${computer.cards[2].damage}`)
			// 	console.log(`👾The player has chosen ${player.bestCardPokemonName} and the computer picked ${computer.bestCardPokemonName}👾`)
			// 	console.log(`${computer.bestCardPokemonName} damage: ${computer.bestCardDamage}, beats ${player.bestCardPokemonName} damage: ${player.bestCardDamage}`)
			// 	console.log(` Player : ${player.statsAndRoundsWon}, Computer : ${computer.statsAndRoundsWon}`)
			
			// 	player.cards = []
			// 	computer.cards = []
			// }else{
			// 	cardsUsed();
				
			// 	console.log("----------------👾NEW GAME👾------------------")
			// 	console.log(`The player is delt 3 cards in his hand: ${player.cards[0].name} --> Damage: ${player.cards[0].damage}, ${player.cards[1].name} --> Damage: ${player.cards[1].damage}, ${player.cards[2].name} --> Damage: ${player.cards[2].damage}`)
			// 	console.log(`The computer is delt 3 cards in his hand: ${computer.cards[0].name} --> Damage: ${computer.cards[0].damage}, ${computer.cards[1].name} --> Damage: ${computer.cards[1].damage}, ${computer.cards[2].name} --> Damage: ${computer.cards[2].damage}`)
			// 	console.log(`The player's best card is ${player.bestCardPokemonName} with ${player.bestCardDamage} damage`)
			// 	console.log(`The computer's best card is ${computer.bestCardPokemonName} with ${computer.bestCardDamage} damage`)
			// 	console.log("👾This round is a tie👾")
			// 	console.log(` Player : ${player.statsAndRoundsWon}, Computer : ${computer.statsAndRoundsWon}`)
			
			// 	player.cards = []
			// 	computer.cards = []
			// }
	}

}


runThePokemonGame();



