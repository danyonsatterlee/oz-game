var readlineSync = require('readline-sync');

//loose con // win con

//contituation condition
//THESE NEED TO CHANGE TO HAVE THE GAME CONTINUE
var continueOn = true;
var die = false;
var win = false;
var emerald = false;
var ruby = false;
var saphire = false;


//IF THESE CHANGE THE GAME WILL END OR CONTINUE
var onwards = function() {
  if (die === true) {
    console.log("You have failed " + userName + " Looks like you will never make it back to your home, " + userHome);
  } else if (emerald === true && ruby === true && saphire === true) {
    console.log("Hurray, " + userName + "! You have been granted the ruby slippers! Click your heels three time and think to yourself, 'there is no place like home' and you will find yourself back in " + userHome + " sooner than you know");
  } else if (continueOn === true) {
    console.log("Great! Keep moving");
  }

};
//THIS IS THE PLAYER AND KEEPING TRACK OF THEIR LIFE
var Player = function(name, hp, inv) {
  this.name = name;
  this.hp = hp || 100;
  this.inv = inv || []
  this.print = function() {
    console.log("Name: " + this.name + "HP " + this.hp);
    console.log("Inventory");
    for (var i = 0; i < this.inv; i++) {
      console.log(inv[i]);
    }
  }
};


//START OF THE GAME
var userName = readlineSync.question("Hello, and who might you be? ");
var userHome = readlineSync.question("Awe, hello " + userName + " You're dressed very peculiar, where might you be from?");

//CREATES NEW PLAYER AND ADDS THEIR NAME TO A FUNCTION
var user = new Player(userName);



// START OFF WITH ALIVE OR DIE
var starter = function() {
  startGame.toLowerCase();
  if (startGame === "yes") {
    onwards();
    console.log("keep going ")
  } else if (startGame === "no") {
    die = true;
    onwards();
  }
};

var startGame = readlineSync.question(userHome + ", you say? I don't know where that is, but you are in the land of Oz! There's only one way out, and that is to get the ruby slippers. To do that you will need to cross Oz. To gain favor with the wizard you must bring one emerald, one ruby, and one saphire. I warn you, there are many wild creatures that may harm you. Are you sure you are up for the task? ")
starter(startGame);

// KEEP WALKING RANDOM IF A VILLIAN APPEARS
var villians = function (){
  console.log("attacked");
};

var scenarios = ["Continue walking along the yellow brick raod, nothing here.", villians, "You hear the birds chirping"];



while (true) {
  var input = readlineSync.question("press 'w' to keep walking down the yellow brick road, type 'print' to see your player status ").toLowerCase();

  //WALKING OR PRINT
  if (input === "w") {
    var probability = scenarios[Math.floor(Math.random() * scenarios.length)];
    if (probability === villians) {
      villians();
    } else {
      console.log(probability)
      console.log(input);
    }
  } else if (input != "w" && input != "print") {
    console.log("You can't stand around forever. Press 'w' to move forward");
  } else if (input === "print") {
    console.log(user.print());
  }
}


// var type = function() {
//   var villians = ["Wheelers", "Flying Monkies", "Winkie Guards"];
//   return villians[Math.floor(Math.random() * villians.length)];
//
// };





// var hitPoints = function(type) {
//   var wheelersPts = [80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
//   var flyingMonkiesPts = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79];
//   var winkieGuardsPts = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 49, 49];
//   if (type === "Wheeler") {
//     return wheelerPts[Math.floor(Math.random() * wheelersPts.length)];
//   } else if (type === "Flying Monkies") {
//     return flyingMonkiesPts[Math.floor(Math.random() * flyingMonkiesPts.length)];
//   } else if (type === "Winkie Guards") {
//     return flyingMonkiesPts[Math.floor(Math.random() * winkieGuardsPts.length)];
//   }
//
// };
//
//
// var defense = function(type, hitPoints) {
//
//   if (type === "Wheelers") {
//     return hitPoints * 3;
//   } else if (type === "Flying Monkies") {
//     return hitPoints * 3;
//   } else if (type === "Winkie Guards ") {
//     return hitPoints * 3;
//   }
//
// };

// console.log(type());
// console.log(hitPoints(type()));
// console.log(defense(type(), hitPoints(type())));
// var Monster = function() {
//   this.type = type();
//   this.hitPoints = hitPoints(this.type);
//   this.defense = defense(this.type, this.hitPoints);
//
// };


//
// var hundredMonsters = function() {
//   var monsterArr = [];
//   for (var i = 1; i <= 100; i++) {
//     monsterArr.push(new Monster())
//
//   }
//   console.log(monsterArr);
// };
//
// hundredMonsters();
