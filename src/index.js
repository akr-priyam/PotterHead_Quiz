const readlineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;

/*variable to store score*/
var score=0;
/*variable to store highscores of users*/
var maxScore=[{
  name:"Hermeine",
  score: 9
},
{
  name:"Harry",
  score: 7
},
{
  name:"Ron",
  score: 5
}]


/*Array to store the question and answer*/
var questionArray=[
  {
    query :chalk.red("Which Harry Potter word is now in the Oxford English Dictionary?\n" )+" 1. Hogwarts\n 2. Voldemort\n 3. Muggle\n\nChoose your option: ",
    response:3
  }, 
  {
    query :chalk.red("Who are the muggle aunt and uncle that Harry must live with every summer?\n")+" 1. Ned and Camilla Diddly\n 2. Ralph and Magnolia Dudley\n 3. Vernon and Petunia Dursley\n\nChoose your option:  :",
    response:3
  },
  {
    query :chalk.red("Who first shows Harry the diary of Tom Riddle?\n")+" 1. Moaning Myrtle\n 2. Fawkes\n 3. Nearly Headless Nick\n\nChoose your option: ",
    response:1
  },
  {
    query :chalk.red("What are the three Unforgivable Curses?\n")+" 1. Impedimenta, Incarcerous and Incendio\n 2. Avada Kedavra, Crucio and Imperio\n 3. Expelliarmus, Expecto Patronum and Diffindo\n\nChoose your option: ",
    response:2
  },
  {
    query :chalk.red("What's the only book in the Harry Potter series that doesn't feature Lord Voldemort?\n")+" 1. The Prisoner of Azkaban\n 2. The Sorcerer's Stone\n 3. The Deathly Hallows\n\nChoose your option:",
    response:1
  },
  {
    query :chalk.red("In order of birth, who are the seven Weasley siblings?\n")+" 1. Percy, Bill, George, Charlie, Fred, Ron, Ginny\n 2. George, Fred, Percy, Bill, Charlie, Ron, Ginny\n 3. Bill, Charlie, Percy, Fred, George, Ron, Ginny\n\nChoose your option:",
    response:3
  },
  {
    query :chalk.red("What's the name of the fairy-tale book that Dumbledore bequeaths to Hermione in \"The Deathly Hallows?\"\n")+" 1. The Tales of Beedle the Bard\n 2. The Tales of Crookshanks the Cat\n 3. The Tales of Gilderoy the Great\n\nChoose your option:",
    response:1
  },
  {
    query :chalk.red("Another tidbit offered in the final epilogue is that this former Hogwarts student is now teaching Herbology at his alma mater.\n")+" 1. Luna Lovegood\n 2. Lavender Brown\n 3. Neville Longbottom\n\nChoose your option:",
    response:3
  },
  {
    query :chalk.red("The sorcerer's stone is an incredibly valuable magical item which provides immortality and unlimited wealth. Which item was NOT protecting its hiding place?\n ")+" 1. A three-headed dog\n 2. A Blast-Ended Skrewt\n 3. Snape's potions puzzle\n\nChoose your option:",
    response:2
  },
  {
    query :chalk.red("Hogwarts students are excited when Professor Lockhart starts a dueling club. At the first meeting, Harry unwittingly reveals a mysterious and rare ability. What is this ability?\n")+" 1. Harry is a Horcrux.\n 2. Harry can cast a Patronus charm.\n 3. Harry can speak Parseltongue\n\nChoose your option:",
    response:3
  }
  
]

/*Function to check high score*/
function checkMaxScore() {
    for(var i = 0; i<maxScore.length; i++) {
        if(score > maxScore[i].score) {
            console.log(chalk.bold.bgGreen("Congratulations!! You have registered a new high score!)"));
            break;
        }
    }
}

function questionAnswer(query, response){

  
  let userResponse=readlineSync.question(chalk(query));
  if(userResponse == response){
    score++;
    log(chalk.bold.green("Hola! You are right."));
  }
  else{
    log(chalk.bold.red("\nOops...WRONG"));
    log(chalk.green.bold(`The correct answer is ${response} `));
  }
  log(chalk.blue(`Current score : ${score}`));
}

function checkAnswer(questionArray){
  log(chalk.italic.bgBlue("Starting your quiz...\n" ));
 
  for(let i=0;i<questionArray.length;i++){
    questionAnswer(questionArray[i].query,questionArray[i].response);
    log(chalk.bold.magenta('----------------'));
  }
  log(chalk.yellow("Game Over and your final score is ") + chalk.bold.green(score));
  checkMaxScore();
  if(readlineSync.keyInYN(chalk.bold.red("Do you want to play this quiz again? "))) {
    checkAnswer();
  }
  else {
    console.log(chalk.dim.red("Thank you for playing this quiz!!"));
  }

}


var response=readlineSync.question(chalk.yellow("Do you believe you are a PotterHead?") + chalk.bold.blue(" (Absolutely/Not at all) \n"));


if(response.toLowerCase() ==='absolutely'){
    
    var userName=readlineSync.question(chalk.yellow("\nWhat do you want me to call you ? "));
    log("\nWelcome " + chalk.bold.yellow(userName) + "\nLet's check your magical power by this" + chalk.bold.red(" PotterHead Quiz") + chalk.underline.green("\nFor each level you will get 1 point if you get it correct"));
    
    log("\n");
    checkAnswer(questionArray);
}
else{
    log(chalk.bold.red("\nAvada Kedavra!!!"));
    log(chalk.dim.red("BOOM....vanished"));
    
}

