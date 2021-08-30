var readlinesync=require("readline-sync");
var userName=readlinesync.question("What is your name?");
console.log("Welcome "+userName+" to Do you Know Me Quiz");
var score=0;
console.log("You get a point for every correct answer");
questionOne = {
  question:"How old am I?",
  answer:"21"
}
questionTwo = {
  question:"Which city was I born in?",
  answer:"Kolkata"
}
questionThree = {
  question:"Which subject did I undergraduate in?",
  answer:"CS"
}
questionFour = {
  question:"What is my favorite dish?",
  answer:"Kebab"
}
questionFive = {
  question:"What is my dream destination?",
  answer:"Mykonos"
}
var arrquestions=[questionOne,questionTwo,questionThree,questionFour,questionFive];
for(var i=0;i<5;i++)
{
  console.log(arrquestions[i].question);
  var userAnswer=readlinesync.question();
  if(userAnswer===arrquestions[i].answer)
  {
    console.log("You are right");
    score++;
  }
  else
  {
    console.log("You are wrong");
  }
}
console.log("Your final score is: ",score);