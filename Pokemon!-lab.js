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




const pokemonGame = {
	cards : newPokemon,
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

	if(thisPlayer.cards.length == 3){

		for(let i = 0; i < thisPlayer.cards.length; i++){
			for(let j = 0; j < thisPlayer.cards.length; j++){
				if(thisPlayer.cards[i] !== thisPlayer.cards[j] && thisPlayer.cards[j].damage >= thisPlayer.cards[i].damage){
						thisPlayer.bestCardDamage = thisPlayer.cards[j].damage
						thisPlayer.bestCardPokemonName = thisPlayer.cards[j].name

						//return { name: , dmg: }
						//return to a variable that is expecting an value, like this object (IE x = FUNCTION), (IE pokemonGame["cards left"].push(FUNCTION))
				}
			}
		}			
	}
}

const cardsUsed = function(){
		for(let i = 0; i <player.cards.length; i++){
		pokemonGame["cards played"].push(player.cards[i])
	}
	
	for(let i = 0; i <computer.cards.length; i++){
		pokemonGame["cards played"].push(computer.cards[i])
	}
}


const runThePokemonGame = function(){

	while(true){
		player.pickRandomCard();
		computer.pickRandomCard();

		pokemonGame["cards left"].push(pokemonGame.cards)

		findTheMostDamage(computer);
		findTheMostDamage(player);

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










