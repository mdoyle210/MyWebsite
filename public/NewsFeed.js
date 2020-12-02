
function loadNewsFeedAsHTML(articles){
  var HTMLoutput = "";
  for(var i =0; i<articles.length; i++){
    var currentArticle = articles[i];
    var currentArticleHTML = "<h3>" + currentArticle['headline'] + "</h3>" + "<h2>" + currentArticle['author'] + "</h2>";

    HTMLoutput+= currentArticleHTML;
  }
  $("#newsFeed").html(HTMLoutput);
}



function requestBlogArticles(){
  //load up the blogArticles JSON
  $.ajax({
    dataType: "json",
    url: "https://firebasestorage.googleapis.com/v0/b/advancedtopicscs.appspot.com/o/blogArticles.json?alt=media&token=478d06a6-d7e5-4cac-a92d-7670dea8de17",
    success: loadNewsFeedAsHTML,
  })
}

$("#load-feed").click(requestBlogArticles);
