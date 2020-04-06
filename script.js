//!  save the questions and the answer options to later be passed into a function that will display the current options// 
var startEl = document.querySelector("#start");
var questionsEl = document.querySelector("#question");
var a1El = document.querySelector("#a1");
var a2El = document.querySelector("#a2");
var a3El = document.querySelector("#a3");
var a4El = document.querySelector("#a4");
var myBtn = document.querySelector(".mybtn");
var timeEl = document.querySelector("#time")



// var qanda = { 
//     [0 ,"Commonly used data types DO NOT include?", "Strings", "Booleans", "alerts", "Numbers"],
//     [1, "The condition in an if/else statement is inclosed within ______.", "q2a", "q2b", "q2c", "q2d"],
//     [2, "Arrays in Javascript can be used to store _____.", "q3a", "q3b", "q3c", "q3d"],
//     [3, "String values must be inclosed within ___ when being assigned to variables", "q4a", "q4b", "q4c", "q4d"],
// };

var questionsIndex = -1;

var qanda = [ 
    [0, "Commonly used data types DO NOT include?", "Strings", "Booleans", "alerts", "Numbers", 4],
    [1, "The condition in an if/else statement is inclosed within ______.", "q2a", "q2b", "q2c", "q2d", 3],
    [2, "Arrays in Javascript can be used to store _____.", "q3a", "q3b", "q3c", "q3d", 2],
    [3, "String values must be inclosed within ___ when being assigned to variables", "q4a", "q4b", "q4c", "q4d", 3],
];

var correct = 0;
var wrong = 0;
//need to add a timer to start givving each question a total of 15 seconds before incrementing question index
startEl.addEventListener("click", function render() {
    // 
    questionsIndex++;
    var qs = qanda[questionsIndex] [1];
    var op1= qanda[questionsIndex][2];
    var op2= qanda[questionsIndex][3];
    var op3 = qanda[questionsIndex][4];
    var op4 = qanda[questionsIndex][5];

    if (qanda[0] === qanda.length) {
        return
    }

    questionsEl.textContent = qs;
    a1El.textContent = op1;
    a2El.textContent = op2;
    a3El.textContent = op3;
    a4El.textContent = op4;

    var timePer= 15;
    var totalTime = 60;

    function timer(15){
        setInterval(() => {
        
            render()

        }, 1000);
    }

    timer()
})

// I need to get my render call to work but i am running out of time so i will come back to this
// if the selection is correct take the remaing time and add it back to a total count time aka score
myBtn.addEventListener("click", function selected(){
    if (document.getElementById.val === qanda[questionsIndex] [-1]) {
        correct++;
    } else {
       wrong++ 
    }
  timer()  
  
})

// });
// function timer(timePer){
//     setInterval(() => {
//         seconds--;
//     }, 1000);
// }

