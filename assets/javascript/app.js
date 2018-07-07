// Question list
var questionList = [
"What classic science fiction film features an artifical intelligence anatonogistist named 'HAL'?", 
"What crime thriller film features a rat in the mob and a rat in the police department?",
"This movie primarily focuses on exploring the meaning of the 'rosebud' and critics often refer to it as one the best movies in film history.",
"'Of all the gin joints in all the world and she had to walk into mine.'",
"'Gentlemen, you can't fight in here! This is the War Room!",
"'We're the middle children of history, man. No purpose or place. We have no Great War. No Great Depression. Our great war is a spiritual war. Our great depression is our lives.'",
"'There is a difference between knowing the path and walking the path.'",
"'Your scientists were so preoccupied with whether they could, they didn't stop to think if they should.'",
"'I can't really remember when I last had any hope, and I certainly can't remember when anyone else did either because really, since women stopped being able to have babies, what's left to hope for?'",
"'I could die right now, Clem. I'm just... happy. I'm exactly where I want to be.'"];

var answerChoicesQuestion1 = ["A. 2001: A Space Odyssey", "B. Alein", "C. Interstellar", "D. Blade Runner"];
var answerChoicesQuestion2 = ["A. Goodfellas", "B. Heat", "C. The Departed", "D. The Godfather"];
var answerChoicesQuestion3 = ["A. Lawrence of Arabia", "B. Citizen Kane", "C. Rosemary's Baby", "D. Psycho"];
var answerChoicesQuestion4 = ["A. Sunset Boulevard", "B. 12 Angry Men", "C. A Streetcar Named Desire", "D. Casablanca"];
var answerChoicesQuestion5 = ["A. Badlands", "B. Dr. Strangelove Or How I Learned to Stop Worrying and Love the Bomb", "C. Some Like It Hot", "D. Goldfinger"];
var answerChoicesQuestion6 = ["A. Fight Club", "B. The Shawshank Redemption", "C. Seven", "D. Dazed and Confused"];
var answerChoicesQuestion7 = ["A. Clueless", "B. Pulp Fiction", "C. The Matrix", "D. Titanic"];
var answerChoicesQuestion8 = ["A. Jurassic Park", "B. Terminator", "C. Edge of Tomorrow", "D. There Will Be Blood"];
var answerChoicesQuestion9 = ["A. Pan's Labyrinth", "B. Spirited Away", "C. No Country for Old Men", "D. Children of Men"];
var answerChoicesQuestion10 = ["A. Eternal Sunshine of the Spotless Mind", "B. Memento", "C. Almost Famous", "D. Brokeback Mountain"];


$("#beginQuiz").on("click", function() {
    // Hide Start Button
    $("#beginQuiz").hide();

    //  Interval Demonstration
    //  Set our number counter to 121.
    var number = 121;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);

    //  When the resume button gets clicked, execute the run function.
    $("#resume").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#timeDisplay").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();

});