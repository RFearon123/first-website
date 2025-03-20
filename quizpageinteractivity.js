function finishFunction() {
    alert("Thank you for completing the quiz.")
}

function checkAnswers() {
    // assign starting score to 0
    // assign "0" to the "score" variable
    var score = 0;
    // assign the quiz elements to the quiz variable
    quiz = document.forms.Quiz.elements; 
    // assign the answer to the question to the answer 1 variable:
    answer1 = quiz.numberOfCelebrators.value;
    // check if answer if correct
    if (answer1 == "80%") {
      //add 1 to the score of the user score, if he user was correct
      score = score + 1;
    }

    answer2 = quiz.xmasChurch.value;
    if (answer2 == "10"){
        score = score + 1;
    }
    
    
    
    
    
    alert ("Well done, your score was..." + score);
}
