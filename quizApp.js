//We're going to create the JS for a basic quiz application.

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors.

//Create a QuizUser constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

  //code here
function QuizUser(name, email, password, totalScore){
  this.name = name;
  this.email = email;
  this.password = password;
  this.totalScore = totalScore;
}

//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

  //code here
function Question(title, answersArray, rightAnswer, difficulty){
  this.title = title;
  this.answersArray = answersArray;
  this.rightAnswer = rightAnswer;
  this.difficulty = difficulty;
}

//Create a quizUsers Array which is going to hold all of our users.

  //code here
var quizUsers = [];

//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

  //code here
var bill = new QuizUser('Bill', 'bill@bill.com', 'b!ll', '100%');
var beth = new QuizUser('Beth', 'beth@beth.com', 'b3th', '80%');
var weston = new QuizUser('Weston', 'weston@weston.com', 'w3ston');

quizUsers.push(bill, beth, weston);

//Create a questions Array which is going to hold all of our questions

  //code here
var questions = [];

//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

  //code here
var question1 = new Question('title:', 'T/F: Inheritance is achieved in JavaScript through Prototypes?', 'False', 'hard');
var question2 = new Question('title:', 'T/F: JavaScript is just a scripting version of Java', 'True', 'easy');
var question3 = new Question('title:', "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value",'True', "hardest");
//Now push all of your instances of Question into the questions Array

  //code here
questions.push(question1, question2, question3);

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  //code here

  quizUsers.forEach(function (element) {
    console.log(element);
  });

  questions.forEach(function (element) {
    console.log(element);
  });
