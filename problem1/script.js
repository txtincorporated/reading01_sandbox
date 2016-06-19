//TOGGLE IF-STATEMENTS TO ACTIVATE CODE

//Test connection with some good old-fashioned JavaScript
if (false) {
  function flipUOn() {
    var el = document.getElementById('cover');
    el.style.display = 'none';
  }
  flipUOn();
}

//Works!  Now let's switcheroo the script tags to before the body...

  // ...
  // <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
  // <script src="p1js/script.js"></script><!-- local script source -->
  // </head><!-- close head -->

//Awwww! Div element with JS/JQ message is still hidden and console says "Uncaught TypeError: Cannot read property 'style' of null", by which it means "el".

//Well, let's try this newfangled jQuery; maybe that'll work?

//Hide #cover
if (false) {
  $('#cover').hide();
}

//Rats!  No reason for that not to work, ...or was there?
//How about with the local script first?

// ...
// <script src="p1js/script.js"></script><!-- local script source -->
// <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
// </head><!-- close head -->

//Well, at least there's a new console message: "Uncaught ReferenceError: $ is not defined".
//Makes sense, since the js file is attempting to run a jQuery command without jQuery loaded.  Bueno.
//As expected, the "#cover" div is overlaying "#container" and its <h1> title, showing that the script never had a chance to run.
//Predictions:  1) putting the local script at the end of the file will solve the problem, and 2) putting them in the reverse of that order will duplicate this fail...

//...Well it's a hell of a thing to be right about, but right I was on both counts.

//Anyways, this is all getting confusing.  Why not just try wrapping the jQ command in the $document.ready() method?

if (false) {
  $(document).ready(function() {
    $('#cover').hide();
  });
}

//Well, still no joy.  Obviously jQ has to load before the local script calling it, even if both of them can otherwise be run anywhere as long as $(document).ready() is used.

  // ...
  // <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
  // </head><!-- close head -->
  // <body>
  // <script src="p1js/script.js" /><!-- local script source -->
  //...

//Tadaaaaaa!  Success.  The result is the same as putting the JS all the way at the bottom but with the theoretical advantage that it can now be placed ahead of other body elements if need be.
