//Math Js
var candies = 8
var res = 8 / (1 + 3);
// console.log(res);
var balloons = (15 + 9) * 2;
// console.log(balloons);
var numberOdsiblings = 1 + 3;
var numberOfCandies = 8;
var ans = numberOdsiblings / numberOfCandies

//hour
var secondsInMinute = 60;
var mintuesInAnHour = 60;
var secondsInAnHour = secondsInMinute * mintuesInAnHour;
// console.log(secondsInAnHour);
var hoursInADay = 24;
// var secondInDay = secondsInHour * hoursInADay;

var x = 10;
x = x + 5;

// Js Strings
var greeting = "Hello";
var myName = "Ruban";
var joinStr = greeting + myName;

//Length;
var script = "RubanHello";
var a = "EnglishIsNotEasyLanguage";
// console.log(a.slice(1, 5));
// console.log(a.toUpperCase());
var sillyString = 'hELLO THERE, hOW ARE yOu doING';
// console.log(sillyString[0].toUpperCase() + sillyString.silce(1).toLowerCase());
var hadShower = true;
var hasBackPack = true;
if (hasBackPack === true && hadShower === true) {
    // console.log("you are ready for a school");
} else {
    console.log("you are not ready for a school")
}
// || Either one is true
var hasApple = true;
var hasOrange = false;
if (hasApple === true || hasOrange === false) {
    // console.log("you can go");
} else {
    console.log("you are yet to eat a breakfast");
}
// not operator !
var isWeekend = true;
var needToShowerToday = !isWeekend;
if (!isWeekend) {
    console.log("no need to take bath");
} else {
    // console.log("take a shower");
}
var isWeekend = false;
var hadShower = true;
var hasApple = false;
var hasOrange = true;
var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);

//greater than
var height = 60;
var heightRestriction = 60;
console.log(height >= heightRestriction);

//Arrays;
let names = ['ruban', 'apple', 'orange', 'orange', 'grapes', 'ghuop', 'bommo', 'oile', 'oil', 'oghy'];
console.log(names.length - 4);
var animals = [];
animals.push('cat');
animals.push("Dog");
animals.push("Llama");
animals.unshift('polar bear');
console.log(animals);

//indexof()
var insects = ['bee', 'ant', 'bee', 'ant'];
console.log(insects.indexOf('bee'));
var boringAnimals = ['Monkey', "Cat", "Fish", "Licards"];
console.log(boringAnimals.join(' '));


//LandMark;
var landmarks = [];
landmarks.push("My house");
landmarks.push("Front path");
landmarks.push("Flickering streetLight");
landmarks.push("Leaky fire hydrant");
landmarks.push("Fire stations");
landmarks.push("Cat rescue center");
landmarks.push("My old school");
landmarks.push("My friend's house");
console.log(landmarks);
landmarks.pop();
console.log(landmarks);
landmarks.pop();
console.log(landmarks);
landmarks.pop();
console.log(landmarks);
landmarks.pop();
console.log(landmarks);
landmarks.pop();
console.log(landmarks);
landmarks.pop();
console.log(landmarks);
landmarks.pop();
console.log(landmarks);
landmarks.pop();
console.log(landmarks);


//Math Random;
console.log(Math.random() * 10);
// console.log(Math.floor(Math.random() * 5));
var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
var randomIndex = Math.floor(Math.random() * 4);
// console.log(randomIndex[Math.floor(Math.random() * 4)]);

var phrases = [
    "That sounds good",
    "Yes, you should definitely do that",
    "I'm not sure that's s great idea",
    "Maybe not today",
    "Computer says no"
]
var choose = phrases[Math.floor(Math.random() * 5)]
// console.log(choose);


//Creating A random Insult Generator;
var randomBodyparts = ["face", 'Nose', "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var rabdomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
var randomchoose = randomBodyparts[Math.floor(Math.random() * 3)];
// console.log(randomchoose);
var chooseAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// console.log(chooseAdjective);
var choosewords = randomWords[Math.floor(Math.random() * 3)];
// console.log(choosewords);

//Objectsssssssssss
