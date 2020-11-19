function pressLoadButton(){
  $("#play_a_game").click(ajaxTheGame);
}

function ajaxTheGame(){
  $.ajax({url: "game.html", success: loadContent});
}

function loadContent(result) {
  $("#game_content").html(result);
}

$("#play_a_game").click(ajaxTheGame);
