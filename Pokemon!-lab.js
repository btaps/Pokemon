let deckOfCards = [];


let Pokemon = function(name, damage){
	this.name = name
	this.damage = damage
}


let bulbasaur = new Pokemon("Bulbasaur", 60);
deckOfCards.push(bulbasaur);
let caterpie = new Pokemon("Caterpie" , 40);
deckOfCards.push(caterpie);
let charmander = new Pokemon("Charmander" , 60);
deckOfCards.push(charmander);
let clefairy = new Pokemon("Clefairy" , 60);
deckOfCards.push(clefairy);
let jigglypuff = new Pokemon("Jigglypuff", 60);
deckOfCards.push(jigglypuff);
let mankey = new Pokemon("Mankey", 30);
deckOfCards.push(mankey);
let meowth = new Pokemon("Meowth", 60);
deckOfCards.push(meowth);
let nidoranFemale = new	Pokemon("Nidoran - female" , 60);
deckOfCards.push(nidoranFemale);
let nidoranMale = new Pokemon("NidoranMale" , 50);
deckOfCards.push(nidoranMale);
let oddish = new Pokemon("Oddish", 40);
deckOfCards.push(oddish);
let pidgey = new Pokemon("Pidgey", 50);
deckOfCards.push(pidgey);
let pikachu = new Pokemon("Pikachu", 50);
deckOfCards.push(pikachu);
let poliwag = new Pokemon("Poliwag", 50);
deckOfCards.push(poliwag)
let psyduck = new Pokemon("Psyduck", 60);
deckOfCards.push(psyduck);
let rattata = new Pokemon("Rattata", 30);
deckOfCards.push(rattata);
let squirtle = new Pokemon("Squirtle" , 60);
deckOfCards.push(squirtle);
let vulpix = new Pokemon("Vulpix", 50);
deckOfCards.push(vulpix);
let weedle = new Pokemon("Weedle" , 40);
deckOfCards.push(weedle)




let pokemonGame = {
	cards : deckOfCards,
	"cards played" : [],
	"cards left" : [],
	"track points" : { playerPoints : 0, computerPoints : 0},
	turns : 0
}


class Game {
	constructor(name){
		this.name = name
		this.statsAndRoundsWon = 0
		this.cards = []
		this.totalCardsDealtAllGame = []
		this.bestCardDamage = 0
		this.bestCardPokemonName = ""
	}
	pickRandomCard(){ 
		if(this.totalCardsDealtAllGame.length == 9){return}
			let randomNumber1 = Math.floor(Math.random()*(deckOfCards.length - 1))
			if(randomNumber1 == -1){
				randomNumber1++
			}
			this.cards.push(deckOfCards[randomNumber1])
			this.totalCardsDealtAllGame.push(deckOfCards[randomNumber1])
			deckOfCards.splice(randomNumber1, 1)
	
			let randomNumber2 = Math.floor(Math.random()*(deckOfCards.length - 1))
			if(randomNumber2 == -1){
				randomNumber2++
			}
			this.cards.push(deckOfCards[randomNumber2])
			this.totalCardsDealtAllGame.push(deckOfCards[randomNumber2]) 
			deckOfCards.splice(randomNumber2, 1)
	
			let randomNumber3 = Math.floor(Math.random()*(deckOfCards.length - 1))
			if(randomNumber3 == -1){
				randomNumber3++
			}
			this.cards.push(deckOfCards[randomNumber3])
			this.totalCardsDealtAllGame.push(deckOfCards[randomNumber3])
			deckOfCards.splice(randomNumber3, 1)
	}
}



let player = new Game("player")
let computer = new Game("computer")


let findTheMostDamagePlayer = function(){

	if(player.cards.length == 3){

		for(let i = 0; i < player.cards.length; i++){
			for(let j = 0; j < player.cards.length; j++){
				if(player.cards[i] !== player.cards[j] && player.cards[j].damage > player.cards[i].damage){
						player.bestCardDamage = player.cards[j].damage
						player.bestCardPokemonName = player.cards[j].name
				}
			}
		}
		
	}
}

let findTheMostDamageComputer = function(){

	if(computer.cards.length == 3){

		for(let i = 0; i < computer.cards.length; i++){
			for(let j = 0; j < computer.cards.length; j++){
				if(computer.cards[i] !== computer.cards[j] && computer.cards[j].damage >= computer.cards[i].damage){
						computer.bestCardDamage = computer.cards[j].damage
						computer.bestCardPokemonName = computer.cards[j].name
				}
			}
		}			
	}
}

let cardsUsed = function(){
		for(let i = 0; i <player.cards.length; i++){
		pokemonGame["cards played"].push(player.cards[i])
	}
	
	for(let i = 0; i <computer.cards.length; i++){
		pokemonGame["cards played"].push(computer.cards[i])
	}
}


let runThePokemonGame = function(){

	while(true){
		player.pickRandomCard();
		computer.pickRandomCard();

		pokemonGame["cards left"].push(deckOfCards)

		findTheMostDamageComputer();
		findTheMostDamagePlayer();

			if(pokemonGame.turns == 3){
					if(player.statsAndRoundsWon > computer.statsAndRoundsWon){
						console.log("----------------👾GAME OVER👾-----------------")
						console.log(`The Player WINS!!!  Player : ${player.statsAndRoundsWon}, Computer : ${computer.statsAndRoundsWon}`)
					}else if(computer.statsAndRoundsWon > player.statsAndRoundsWon){
						console.log("----------------👾GAME OVER👾-----------------")
						console.log(`The Computer WINS!!! Player : ${player.statsAndRoundsWon}, Computer : ${computer.statsAndRoundsWon}` )
					}else if (player.statsAndRoundsWon == computer.statsAndRoundsWon){
						console.log("----------------👾GAME OVER👾-----------------")
						console.log(`We have a TIE NO ONE WINS!!!! Player : ${player.statsAndRoundsWon}, Computer : ${computer.statsAndRoundsWon}`)
					}
				return
			}else if(player.bestCardDamage > computer.bestCardDamage){
				player.statsAndRoundsWon++
				pokemonGame["track points"].playerPoints++
				cardsUsed();
				
				console.log("----------------👾NEW GAME👾------------------")
				console.log(`The player is delt 3 cards in his hand: ${player.cards[0].name} --> Damage: ${player.cards[0].damage}, ${player.cards[1].name} --> Damage: ${player.cards[1].damage}, ${player.cards[2].name} --> Damage: ${player.cards[2].damage}`)
				console.log(`The computer is delt 3 cards in his hand: ${computer.cards[0].name} --> Damage: ${computer.cards[0].damage}, ${computer.cards[1].name} --> Damage: ${computer.cards[1].damage}, ${computer.cards[2].name} --> Damage: ${computer.cards[2].damage}`)
				console.log(`👾The player has chosen ${player.bestCardPokemonName} and the computer picked ${computer.bestCardPokemonName}👾`)
				console.log(`${player.bestCardPokemonName} damage: ${player.bestCardDamage}, beats ${computer.bestCardPokemonName} damage: ${computer.bestCardDamage}`)
				console.log(` Player : ${player.statsAndRoundsWon}, Computer : ${computer.statsAndRoundsWon}`)
	
				player.cards = []
				computer.cards = []
			}else if(computer.bestCardDamage > player.bestCardDamage){
				computer.statsAndRoundsWon++
				pokemonGame["track points"].computerPoints++
				cardsUsed();
				
				console.log("----------------👾NEW GAME👾------------------")
				console.log(`The player is delt 3 cards in his hand: ${player.cards[0].name} --> Damage: ${player.cards[0].damage}, ${player.cards[1].name} --> Damage: ${player.cards[1].damage}, ${player.cards[2].name} --> Damage: ${player.cards[2].damage}`)
				console.log(`The computer is delt 3 cards in his hand: ${computer.cards[0].name} --> Damage: ${computer.cards[0].damage}, ${computer.cards[1].name} --> Damage: ${computer.cards[1].damage}, ${computer.cards[2].name} --> Damage: ${computer.cards[2].damage}`)
				console.log(`👾The player has chosen ${player.bestCardPokemonName} and the computer picked ${computer.bestCardPokemonName}👾`)
				console.log(`${computer.bestCardPokemonName} damage: ${computer.bestCardDamage}, beats ${player.bestCardPokemonName} damage: ${player.bestCardDamage}`)
				console.log(` Player : ${player.statsAndRoundsWon}, Computer : ${computer.statsAndRoundsWon}`)
				
				player.cards = []
				computer.cards = []
			}else{
				cardsUsed();
				
				console.log("----------------👾NEW GAME👾------------------")
				console.log(`The player is delt 3 cards in his hand: ${player.cards[0].name} --> Damage: ${player.cards[0].damage}, ${player.cards[1].name} --> Damage: ${player.cards[1].damage}, ${player.cards[2].name} --> Damage: ${player.cards[2].damage}`)
				console.log(`The computer is delt 3 cards in his hand: ${computer.cards[0].name} --> Damage: ${computer.cards[0].damage}, ${computer.cards[1].name} --> Damage: ${computer.cards[1].damage}, ${computer.cards[2].name} --> Damage: ${computer.cards[2].damage}`)
				console.log(`The player's best card is ${player.bestCardPokemonName} with ${player.bestCardDamage} damage`)
				console.log(`The computer's best card is ${computer.bestCardPokemonName} with ${computer.bestCardDamage} damage`)
				console.log("👾This round is a tie👾")
				console.log(` Player : ${player.statsAndRoundsWon}, Computer : ${computer.statsAndRoundsWon}`)
				
				player.cards = []
				computer.cards = []
			}
		pokemonGame.turns++
	}
}


runThePokemonGame();











