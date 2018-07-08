$("#quizContent").hide();

$("#beginQuiz").on("click", function () {
  // Hide Start Button
  $("#beginQuiz").hide();

  //  Interval Demonstration, set our number counter to 121.
  var number = 121;

  //  Variable that will hold our interval ID when we execute the "run" function
  var intervalId;

  //  When the stop button gets clicked, run the stop function.
  $("#stop").on("click", stop);

  //  When the resume button gets clicked, execute the run function.
  $("#resume").on("click", run);

  //  The run function sets an interval that runs the decrement function once a second.
  //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {
    number--;

    //  Show the number in the #show-number tag.
    $("#timeDisplay").html("<h3>" + number + " Seconds Left!" + "</h3>");


    //  Once number hits zero stop the function
    if (number === 0) {
      stop();

      //  Display the user's score when time is up
      alert("Time Up!");
    }
  }

  //  The stop function
  function stop() {
    clearInterval(intervalId);
  }

  //  Execute the run function.
  run();

  // Displays the full quiz questions and answers
  $("#quizContent").show();

});

// What's left to program is to keep track of the user's score 
// and display that when the user selects the submit button.
// Currently the submit button restarts the quiz.
// I'll need to use an event.preventDefault function to fix this.

// Declaring elements needed for keeping track of the user's score
var correctAnswers = 0;

// Function for determining if the user answer question 1 correctly
$("#quizForm #q1").on("click", function () {

  console.log($("input:checked").val());

  if ($("input[name=question1]:checked").val() === "2001: A Space Odyssey") {
    console.log("Correct value selected!");
    correctAnswers++;
    console.log(correctAnswers);
  }
});

// Function for determining if the user answer question 2 correctly
$("#quizForm #q2").on("click", function () {

  console.log($("input:checked").val());

  if ($("input[name=question2]:checked").val() === "The Departed") {
    console.log("Correct value for 2 selected!");
    correctAnswers++;
    console.log(correctAnswers);
  }
});

// Ideally I would want to use a for loop for the above rather than repeating essentially the same code for each question.

// Calculate the user's score when they select the submit button
$("#submitButton").on("click", function () {

  // Prevent the page from resetting
  event.preventDefault();

  // Hide all of the previous content
  $("#quizContent").hide();
  $("#timeDisplay").hide();
  $("#gameDescription").hide();

  // Provide the user's final score
  $("#finalScore").html("<h2>Your final score is " + correctAnswers + "/10 Correct!" + "</h2>");
});
