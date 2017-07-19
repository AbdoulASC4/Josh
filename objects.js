var Charizard ={
    "attack" : "Blaze",
    "hp" : 266,
    "legendary" : false,
"types" : ["fire","Flying"]
};
console.log(Charizard.attack);
console.log(Charizard.HP);
console.log(Charizard["HP"]);
console.log(Charizard.types);
charizard.hp = 100
console.log(charizard.hp)


function Superhero(realName){
    this.realName = realName;

}
var superman = new Superhero("Clark Kent");
console.log(superman.realname);