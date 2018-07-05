// Declare variables to measure the user's correct answers
var correctAnswer;

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

// Each additional question will be nested in the click function of the previous question so that the next question 
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
                document.getElementById("questionNumberAndDescription").innerHTML = ("'Gentlemen, you can't fight in here! This is the War Room!");

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
                // On click function for the 'Next' button for Question 6
                $("#nextButton").on("click", function (event) {
                    // Display the second question's data
                    document.getElementById("questionNumberAndDescription").innerHTML = ("'We're the middle children of history, man. No purpose or place. We have no Great War. No Great Depression. Our great war is a spiritual war. Our great depression is our lives.'");

                    // Display the available choices
                    document.getElementById("answerChoiceA").innerHTML = ("A. Fight Club");
                    document.getElementById("answerChoiceB").innerHTML = ("B. The Shawshank Redemption");
                    document.getElementById("answerChoiceC").innerHTML = ("C. Seven");
                    document.getElementById("answerChoiceD").innerHTML = ("D. Dazed and Confused");

                    // Display the questions left
                    document.getElementById("questionNumber").innerHTML = ("Question 6 of 10");

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

                    // On click function for the 'Next' button for Question 7
                    $("#nextButton").on("click", function (event) {
                        // Display the second question's data
                        document.getElementById("questionNumberAndDescription").innerHTML = ("'There is a difference between knowing the path and walking the path.'");

                        // Display the available choices
                        document.getElementById("answerChoiceA").innerHTML = ("A. Clueless");
                        document.getElementById("answerChoiceB").innerHTML = ("B. Pulp Fiction");
                        document.getElementById("answerChoiceC").innerHTML = ("C. The Matrix");
                        document.getElementById("answerChoiceD").innerHTML = ("D. Titanic");

                        // Display the questions left
                        document.getElementById("questionNumber").innerHTML = ("Question 7 of 10");

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

                        // On click function for the 'Next' button for Question 8
                        $("#nextButton").on("click", function (event) {
                            // Display the second question's data
                            document.getElementById("questionNumberAndDescription").innerHTML = ("'Your scientists were so preoccupied with whether they could, they didn't stop to think if they should.'");

                            // Display the available choices
                            document.getElementById("answerChoiceA").innerHTML = ("A. Jurassic Park");
                            document.getElementById("answerChoiceB").innerHTML = ("B. Terminator");
                            document.getElementById("answerChoiceC").innerHTML = ("C. The Lion King");
                            document.getElementById("answerChoiceD").innerHTML = ("D. There Will Be Blood");

                            // Display the questions left
                            document.getElementById("questionNumber").innerHTML = ("Question 8 of 10");

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

                            // On click function for the 'Next' button for Question 9
                            $("#nextButton").on("click", function (event) {
                                // Display the second question's data
                                document.getElementById("questionNumberAndDescription").innerHTML = ("'I can't really remember when I last had any hope, and I certainly can't remember when anyone else did either because really, since women stopped being able to have babies, what's left to hope for?'");

                                // Display the available choices
                                document.getElementById("answerChoiceA").innerHTML = ("A. Pan's Labyrinth");
                                document.getElementById("answerChoiceB").innerHTML = ("B. Spirited Away");
                                document.getElementById("answerChoiceC").innerHTML = ("C. No Country for Old Men");
                                document.getElementById("answerChoiceD").innerHTML = ("D. Children of Men");

                                // Display the questions left
                                document.getElementById("questionNumber").innerHTML = ("Question 9 of 10");

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

                                // On click function for the 'Next' button for Question 10
                                $("#nextButton").on("click", function (event) {
                                    // Display the second question's data
                                    document.getElementById("questionNumberAndDescription").innerHTML = ("'I could die right now, Clem. I'm just... happy. I'm exactly where I want to be.'");

                                    // Display the available choices
                                    document.getElementById("answerChoiceA").innerHTML = ("A. Eternal Sunshine of the Spotless Mind");
                                    document.getElementById("answerChoiceB").innerHTML = ("B. Memento");
                                    document.getElementById("answerChoiceC").innerHTML = ("C. Almost Famous");
                                    document.getElementById("answerChoiceD").innerHTML = ("D. Brokeback Mountain");
                                    document.getElementById("finalScore").innerHTML = ("View Final Score");

                                    // Display the questions left
                                    document.getElementById("questionNumber").innerHTML = ("Question 10 of 10");

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
                                    
                                        // On click function to see the final score
                                        $("#finalScore").on("click", function (event) {

                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});