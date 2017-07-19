function Superhero(realName, ability, archEnemy, age, weakness){
this.realName = realName;
this.ability = ability;
this.archEnemy = archEnemy;
this.age = age
this.weakness = weakness


this.talk = function(){
    console.log("Yo! My name is" + realName);
}
    this.callForHelp =function(call){
         console.log(call);

    }
}
var superMan = new Superhero("Clark Kent", "Dat Money", "Male", "Lex Luthor", 30, "cryptonite")
var wonderWoman = new Superhero( " Dianna Prince", "super strength", "Female","Donald Trump", 20, "Guns");


superMan.ability = "lazer vision";
//console.log(superMan);

wonderWoman.archEnemy = superMan.realName
console.log(wonderWoman);

wonderWoman.callForHelp("Im booling!");

superMan.callForHelp("Its not looking good right now!");
