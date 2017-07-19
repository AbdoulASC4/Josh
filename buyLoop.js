ouisVuittonDuffleBag.push("ray bans")
     console.log("you have successfully bought this pair of ray bans")
 }
 else if(answer.toLowercase() == "ray bans" && money>= 200){
     money = money - 100;
     console.log("we do not have this item in stock")
 }
 else{
     console.log("we do not have this item in stock");

 }
 }
console.log("you are broke");
var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
var money = 1000;

var louisVuittonDuffleBag = [];
while (money > 100){

    var answer = "you can buy Yeezy's for 400,gucci flip for 200, or ray bans for 100";


 if(answer. toLowercase() == "yeezy" && money >= 500 )   {
      money = money - 400;

   louisVuittonDuffleBag.push("yeezys");
   console.log("You successfully bought these pair of yeezys!");
    }
 else if(answer.toLowercase() == "Gucci FLip Flops" && money > = 300 ){
     money = money - 200:
     louisVuittonDuffleBag.pus("gucci flip flops")
     console.log("you have successfully bought this pair of Gucci Flip Flops")
 }
 else if( answer.toLowercase() == "ray bans" && money >= 200){
     money = money - 100;
     l