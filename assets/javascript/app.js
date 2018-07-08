$("#quizContent").hide();

$("#beginQuiz").on("click", function() {
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

    // // Function for determining the user's score
    // function calculateScore(){
    //     var correctAnswers = 0;
    //     $('input[name=question1:checked]', '#quizForm').val();
    //     console.log()