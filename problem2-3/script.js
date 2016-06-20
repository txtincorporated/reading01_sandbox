//TOGGLE IF-STATEMENTS TO SWITCH BETWEEN PROBLEMS 2 AND 3
//Hide #cover
if (false) {
  $('#cover').hide();
}

//PROBLEM 2:
//Get HTML descendants of yellow div #container
var $ctnr = $('#container').html();
console.log('YELLOW DIV HTML = ' + $ctnr);

//Get text content of yellow div #container
var $ctnr = $('#container').text();
console.log('YELLOW DIV TEXT = ' + $ctnr);

//PROBLEM 3
var $label = $('#label').text();//Store initial text node of #label
$('#cover').on('click', function() {
  if($label == 'BIG OL\' DIV') {
    $('#cover').html('<p id="label"><em>Just a lonely little div.</em></p>');
    $label = $('#label').text();//Force reset of #label's stored text node
  } else if($label == 'Just a lonely little div.') {
    $('#cover').html('<h1 id="label">BIG OL\' DIV AGAIN</h1><p>(problem 3)</p>');
    $label = $('#label').text();//Force reset again to prevent reversion on click
  } else if($label == 'BIG OL\' DIV AGAIN') {
    $('#label').text('MOVE ALONG FOLKS, SHOW\'S OVER.');
  }
});
