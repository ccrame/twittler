$(document).ready(function(){
  var $body = $('.tweet-board');
  $body.html('');

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $name = $('<div class="name"></div>');
    var $message = $('<div class="message"></div>');
    //show username and date
    $name.text('@' + tweet.user + ' created at ' + tweet.created_at);
    $name.appendTo($body);
    //show message
    $message.text(tweet.message);
    $message.appendTo($body);
    index -= 1;
  }
  

});