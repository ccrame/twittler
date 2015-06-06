$(document).ready(function(){
  var $body = $('.messages');

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var pic = $('<img class="profile picture" src="user.png">');
    var block= $('<div class="tweet"></div>')
    var header = $('<p class="message-header">@' + tweet.user + '  created at ' + tweet.created_at.getHours() + ':' + tweet.created_at.getMinutes() + '</p>');
    var message = $('<p>' + tweet.message + '</p>');
    //show username and date
    block.append(pic);
    block.append(header);
    block.append(message);
    $('.tweet-board').append(block);
    //show message
    index -= 1;
  }
  
});