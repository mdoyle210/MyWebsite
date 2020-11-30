$("#play_a_game").click(ajaxTheGame);

function ajaxTheGame(){
  $.ajax({url: "https://www.bubblegame.org/flash-bubble-spinner.php", success: loadContent});
}

function loadContent(result) {
  $("#game_content").html(result);
}

alert("Game Content Loaded");

$('#remove_game').click(function() {
  $('#game_content').html('');
})
