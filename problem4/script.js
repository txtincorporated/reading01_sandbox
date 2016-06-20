//PROBLEM 4:
$('#reveal').on('click', function() {
  $('#cover').removeAttr('id');
  $('#reveal').attr('id', 'restore');
  $('#restore').text('RESTORE');
  $('#restore').on('click', function() {
    $('body div:nth-child(2)').attr('id', 'cover');
    $('#restore').attr('id','reveal');
    $('#reveal').text('RELOAD');
    $('#reveal').on('click', function() {
      location.reload();
    });
  });
});
