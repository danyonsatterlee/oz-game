var readlineSync = require('readline-sync');

//loose con // win con

//contituation condition
//THESE NEED TO CHANGE TO HAVE THE GAME CONTINUE
var continueOn = true;
var die = false;
var win = false;
var rubySlippers = 3;


var gems = ["ruby", "saphire", "emerald"];

var genNumInRange = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min + 1);
}

//THIS IS THE PLAYER AND KEEPING TRACK OF THEIR LIFE
var Player = function(name, hp, inv) {
  this.name = name;
  this.hp = hp || 200;
  this.inv = inv || [];
  this.print = function() {
    console.log("Name: " + this.name + "HP " + this.hp);
    console.log("Inventory " + this.inv);
    // for (var i = 0; i < this.inv; i++) {
    //   console.log(inv[i]);
    // }
  }
};

//IF THESE CHANGE THE GAME WILL END OR CONTINUE
var onwards = function() {
  if (die === true) {
    console.log("You have failed " + userName + " Looks like you will never make it back to your home, " + userHome);
  } else if (user.inv.length === rubySlippers) {
    console.log("Hurray, " + userName + "! The wizard has come. For your bravery he will grant you your wish of returning to your home. These ruby slippers were a special gift from the great Dorothy of Kansas. Be careful with them! Click your heels three time and think to yourself, 'there is no place like home' and you will find yourself back in " + userHome + " sooner than you know");
  } else if (continueOn === true) {
    console.log("Great! Keep moving");
  }

};



var type = function() {
  var villians = ["Wheelers", "Flying Monkies", "Winkie Guards"];
  return villians[Math.floor(Math.random() * villians.length)];

};





var hitPoints = function(type) {
  var wheelersPts = [80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
  var flyingMonkiesPts = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79];
  var winkieGuardsPts = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 49, 49];
  if (type === "Wheelers") {
    return wheelersPts[Math.floor(Math.random() * wheelersPts.length)];
  } else if (type === "Flying Monkies") {
    return flyingMonkiesPts[Math.floor(Math.random() * flyingMonkiesPts.length)];
  } else if (type === "Winkie Guards") {
    return winkieGuardsPts[Math.floor(Math.random() * winkieGuardsPts.length)];
  }

};


var defense = function(type, hitPoints) {

  if (type === "Wheelers") {
    return hitPoints * 3;
  } else if (type === "Flying Monkies") {
    return hitPoints * 3;
  } else if (type === "Winkie Guards") {
    return hitPoints * 3;
  }

};

// console.log(type());
// console.log(hitPoints(type()));
// console.log(defense(type(), hitPoints(type())));
var Monster = function() {
  this.type = type();
  this.hitPoints = hitPoints(this.type);
  this.defense = defense(this.type, this.hitPoints);
  this.print = function() {
    console.log("The enemy " + this.type + "  has appeared. It has hit points of " + this.hitPoints + " and a defense of " + this.defense);
  }

};


//START OF THE GAME
var userName = readlineSync.question("Hello, and who might you be? ");
var userHome = readlineSync.question("Awe, hello " + userName + " You're dressed very peculiar, where might you be from? ");

//CREATES NEW PLAYER AND ADDS THEIR NAME TO A FUNCTION
var user = new Player(userName);
var evilOz;

var starter = function() {
  startGame.toLowerCase();
  if (startGame === "yes") {
    onwards();
    console.log("Wonderful! On your way!");
  } else if (startGame === "no") {
    die = true;
    onwards();
  } else{
    console.log("That is not a command, but you don't get a choice now. You're in Oz, and you're here to stay unless you play!")

  }
};



var startGame = readlineSync.question(userHome + ", you say? I don't know where that is, but you are in the land of Oz! There's only one way out, and that is to get the ruby slippers. To do that you will need to cross Oz. To gain favor with the wizard you must bring one emerald, one ruby, and one saphire. I warn you, there are many wild creatures that may harm you. Are you sure you are up for the task? ")
starter(startGame);
// START OFF WITH ALIVE OR DIE


// KEEP WALKING RANDOM IF A VILLIAN APPEARS


var scenarios = ["Continue walking along the yellow brick raod, nothing here.", "Monster!!!", "You hear the birds chirping"];



while (true) {

  var input = readlineSync.question("press 'w' to keep walking down the yellow brick road, type 'print' to see your player status >>").toLowerCase();


  //WALKING OR PRINT
  if (input === "w") {
    var probability = scenarios[Math.floor(Math.random() * scenarios.length)];
    if (probability === "Monster!!!") {
      evilOz = new Monster();
      evilOz.print();
      while (user.hp > 0 && evilOz.hitPoints > 0) {
        console.log("Do you flee or attack?")
        var input = readlineSync.question(">>");
        //attacking the monster and hit points
        if (input === "attack") {
          var damage = genNumInRange(1, 100);
          evilOz.hitPoints -= damage;
          console.log("You hit " + evilOz.type + " for " + damage + " points");

          //flee
        } else {
          var fiftyFifty = genNumInRange(1, 10);
          if (fiftyFifty > 5) {
            console.log("You made it out with out a scratch!");
            onwards();
            break;

          }

        }

        //attack from monster
        var fiftyFifty = genNumInRange(1, 10);
        if (fiftyFifty > 8) {
          console.log("You dodged an attack");

        } else {
          var damageUser = genNumInRange(1, 100);
          user.hp -= damageUser
          console.log("The " + evilOz.type + " hit you for a " + damageUser + " points");
        }

      }
      if (user.hp <= 0) {
        die = true;
        onwards();
        break;
      } else if (evilOz.hitPoints <= 0) {
        console.log(evilOz.type + " died!");
        while (gems.length != 0) {
          var index = Math.floor(Math.random() * gems.length);
          var pickedGem = gems[index];
          gems.splice(index, 1);
          var userArray = user.inv;
          userArray.push(pickedGem);
          onwards();
          break;
        }

      }
      ///adding inventory items


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
