// Display the first question's data
document.getElementById("questionNumberAndDescription").innerHTML = ("What classic science fiction film features an artifical intelligence anatonogistist named 'HAL'?");

// Display the available choices
document.getElementById("answerChoiceA").innerHTML = ("A. 2001: A Space Odyssey");
document.getElementById("answerChoiceB").innerHTML = ("B. Alein");
document.getElementById("answerChoiceC").innerHTML = ("C. Interstellar");
document.getElementById("answerChoiceD").innerHTML = ("D. Blade Runner");

// Display the questions left
document.getElementById("questionNumber").innerHTML = ("Question 1 of 10");

// On click functions for each multiple choice question
$("#answerChoiceA").on("click", function (event) {
    document.getElementById("answerResponse").innerHTML = ("That's correct!")
});
$("#answerChoiceB").on("click", function (event) {
    document.getElementById("answerResponse").innerHTML = ("WRONG!")
});
$("#answerChoiceC").on("click", function (event) {
    document.getElementById("answerResponse").innerHTML = ("WRONG!")
});
$("#answerChoiceD").on("click", function (event) {
    document.getElementById("answerResponse").innerHTML = ("WRONG!")
});

// On click function for the 'Next' button for Question 2
$("#nextButton").on("click", function (event) {
    // Display the second question's data
    document.getElementById("questionNumberAndDescription").innerHTML = ("What crime thriller film features a rat in the mob and a rat in the police department?");

    // Display the available choices
    document.getElementById("answerChoiceA").innerHTML = ("A. Goodfellas");
    document.getElementById("answerChoiceB").innerHTML = ("B. Heat");
    document.getElementById("answerChoiceC").innerHTML = ("C. The Departed");
    document.getElementById("answerChoiceD").innerHTML = ("D. The Godfather");

    // Display the questions left
    document.getElementById("questionNumber").innerHTML = ("Question 2 of 10");

    // On click functions for each multiple choice question
    $("#answerChoiceA").on("click", function (event) {
        document.getElementById("answerResponse").innerHTML = ("WRONG!")
    });
    $("#answerChoiceB").on("click", function (event) {
        document.getElementById("answerResponse").innerHTML = ("WRONG!")
    });
    $("#answerChoiceC").on("click", function (event) {
        document.getElementById("answerResponse").innerHTML = ("That's correct!")
    });
    $("#answerChoiceD").on("click", function (event) {
        document.getElementById("answerResponse").innerHTML = ("WRONG!")
    });

    // On click function for the 'Next' button for Question 3
    $("#nextButton").on("click", function (event) {
        // Display the second question's data
        document.getElementById("questionNumberAndDescription").innerHTML = ("This movie primarily focuses on exploring the meaning of the 'rosebud' and critics often refer to it as one the best movies in film history.");

        // Display the available choices
        document.getElementById("answerChoiceA").innerHTML = ("A. Lawrence of Arabia");
        document.getElementById("answerChoiceB").innerHTML = ("B. Citizen Kane");
        document.getElementById("answerChoiceC").innerHTML = ("C. Psycho");
        document.getElementById("answerChoiceD").innerHTML = ("D. The Wizard of Oz");

        // Display the questions left
        document.getElementById("questionNumber").innerHTML = ("Question 3 of 10");

        // On click functions for each multiple choice question
        $("#answerChoiceA").on("click", function (event) {
            document.getElementById("answerResponse").innerHTML = ("WRONG!")
        });
        $("#answerChoiceB").on("click", function (event) {
            document.getElementById("answerResponse").innerHTML = ("WRONG!")
        });
        $("#answerChoiceC").on("click", function (event) {
            document.getElementById("answerResponse").innerHTML = ("That's correct!")
        });
        $("#answerChoiceD").on("click", function (event) {
            document.getElementById("answerResponse").innerHTML = ("WRONG!") 
        });

        

    });
});





