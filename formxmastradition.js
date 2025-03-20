/////////////////////////////////////////////////////////// set up//////////////////////////////////////////////

//// define scoring function
function checkAnswers(){
    // set score to 0
let score = 0;
 let result = 0;
 // assign the quiz elements (the elements of the form named quiz) to the quiz variable
 let  quiz = document.forms.quiz.elements;
//assign the score for question 1 to the answer1 variable
// Q1 fav christmas tradition
let answer1 = quiz.christmastradition.value;
//assign the score value
if (answer1 === "christmas tree") {
    score = score + 1;
}
else if (answer1 === "christmas crackers") {
    score = score + 2;
}
else if (answer1 === "present") {
    score = score + 3;
}

else if (answer1 === "church") {
    score = score + 4;
}
else if (answer1 === "stockings") {
    score = score + 5;
}

else if (answer1 === "santa") {
    score = score + 6;
}

else {
    score = score + 7;
}

// Q2 number of presents received
//assign the score for question 2 to the answer2 variable
let answer2 = quiz.gifts.value;

//assign the score value
if (score < 24 ) {
    score = score + 1;
}
else if (answer2 < 50 ) {
    score = score + 2;
}
else if (answer2 < 75) {
    score = score + 3;
}

else {
    score = score + 4;
}

// Q3 fav christmas weather type?
//assign the score for question 3 to the answer3 variable
let answer3 = quiz.xmasweathertypes.value;

// assign score value
if (answer3 === "snow") {
    score = score + 1;
}
else if (answer3 === "sun") {
    score = score + 2;
}
else if (answer3 === "rain") {
    score = score + 3;}

    else {
        score = score + 4;
    }


// Q4 fav christmas desserts?
    //assign the score for question 3 to the answer3 variable
    let answer4 = quiz.xmasdesserts.value;
    
    // assign score value
 if (answer4 === "lebkuchen") {
        score = score + 1;
    }
else if (answer4 === "vanillekipferl") {
        score = score + 2;
    }
else if (answer4 === "stollen") {
        score = score + 3;}
    
else if (answer4 === "pfeffernusse") {
        score = score + 4;}

else if (answer4 === "marzipan") {
        score = score + 5;}

    else {
            score = score + 6;
        }

}

//determine result from score don't have to use ( 5 < score < 10 ) because javascript works top down so it will already deal with the stuff that came first so go from low to high; top to bottom
if (score < 6) {
    result = "spending time with loved ones";
}
else if (score < 10) {
    result = "advent calendars";
}
else if (score < 15) {
    result = "mulled wine";
}
else {
    result = "Christmas markets"
}

//display alert
alert(`You are the German-speaking tradition of ${result}!`)

