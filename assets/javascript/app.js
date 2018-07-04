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
            document.getElementById("answerResponse").innerHTML = ("That's correct!")
        });
        $("#answerChoiceC").on("click", function (event) {
            document.getElementById("answerResponse").innerHTML = ("WRONG!")
        });
        $("#answerChoiceD").on("click", function (event) {
            document.getElementById("answerResponse").innerHTML = ("WRONG!")
        });

        // On click function for the 'Next' button for Question 4
        $("#nextButton").on("click", function (event) {
            // Display the second question's data
            document.getElementById("questionNumberAndDescription").innerHTML = ("'Of all the gin joints in all the world and she had to walk into mine.'");

            // Display the available choices
            document.getElementById("answerChoiceA").innerHTML = ("A. Sunset Boulevard");
            document.getElementById("answerChoiceB").innerHTML = ("B. 12 Angry Men");
            document.getElementById("answerChoiceC").innerHTML = ("C. A Streetcar Named Desire");
            document.getElementById("answerChoiceD").innerHTML = ("D. Casablanca");

            // Display the questions left
            document.getElementById("questionNumber").innerHTML = ("Question 4 of 10");

            // On click functions for each multiple choice question
            $("#answerChoiceA").on("click", function (event) {
                document.getElementById("answerResponse").innerHTML = ("WRONG!")
            });
            $("#answerChoiceB").on("click", function (event) {
                document.getElementById("answerResponse").innerHTML = ("WRONG!")
            });
            $("#answerChoiceC").on("click", function (event) {
                document.getElementById("answerResponse").innerHTML = ("WRONG!")
            });
            $("#answerChoiceD").on("click", function (event) {
                document.getElementById("answerResponse").innerHTML = ("That's correct!!")
            });

            // On click function for the 'Next' button for Question 5
            $("#nextButton").on("click", function (event) {
                // Display the second question's data
                document.getElementById("questionNumberAndDescription").innerHTML = ("'Gentlemen, there's no fighting in the war room!");

                // Display the available choices
                document.getElementById("answerChoiceA").innerHTML = ("A. Badlands");
                document.getElementById("answerChoiceB").innerHTML = ("B. Dr. Strangelove Or How I Learned to Stop Worrying and Love the Bomb");
                document.getElementById("answerChoiceC").innerHTML = ("C. Some Like It Hot");
                document.getElementById("answerChoiceD").innerHTML = ("D. Goldfinger");

                // Display the questions left
                document.getElementById("questionNumber").innerHTML = ("Question 5 of 10");

                // On click functions for each multiple choice question
                $("#answerChoiceA").on("click", function (event) {
                    document.getElementById("answerResponse").innerHTML = ("WRONG!")
                });
                $("#answerChoiceB").on("click", function (event) {
                    document.getElementById("answerResponse").innerHTML = ("That's correct!")
                });
                $("#answerChoiceC").on("click", function (event) {
                    document.getElementById("answerResponse").innerHTML = ("WRONG!")
                });
                $("#answerChoiceD").on("click", function (event) {
                    document.getElementById("answerResponse").innerHTML = ("WRONG!")
                });
            });
        });
    });
});





