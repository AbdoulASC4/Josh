function pokemonObjects(name, type, hp, def, atk, legend){
this.name = name;
this.type = type;
this.hp = hp;
this.def = def;
this.atk = atk;
this.legend = legend;

}
var Arbok = new pokemonObjects ("Arbok", "posion", 60, 69, 85, false);
//console.log(Arbok);

var Pikachu = new pokemonObjects ("pikachu", "electric",55,35, 60,false);
//console.log(Pikachu);

var Metagross = new pokemonObjects ("Metagross","pyschic", 80, 130, 135, false);
//console.log(Metagross);

var Eelektross = new pokemonObjects ("Eelektross", "electric", 80, 80, 115, false);
//console.log(Eelektross);


var PokemonRoster = [Arbok, Pikachu, Metagross, Eelektross];

for( var i = 0; i< PokemonRoster.length; i++){
    console.log(PokemonRoster);
}
