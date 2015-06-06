$(document).ready(function(){
  var body = $('.messages');
  var index;
  var others = function(){
     $('.tweet').html('');
  };

  var getTime = function(){

  }//end of getTime function

  var loadScreen = function(){
    index = streams.home.length - 1;
    $('.messages').remove();
    $('.tweet-board').append($('<div class="messages"></div>'));
    while(index >= 0){
      var tweet = streams.home[index];
      var block= $('<div class="tweet"></div>')
      var pic = $('<img class="profile picture" src="user.png">');
      var header = $('<p class="message-header">@' + tweet.user + '  created at ' + tweet.created_at.getHours() + ':' + tweet.created_at.getMinutes() + '</p>');
      var message = $('<p>' + tweet.message + '</p>');
      //show username and date
      block.append(pic);
      block.append(header);
      block.append(message);
      $('.messages').append(block);

      index-=1;
    }//end of while
  };//end of loadScreen function

var refresh = function(){
  loadScreen();
  setTimeout(refresh,1000);
};//end of refresh function

refresh();

//event handlers
  $('.logo').on('click',function(){
    loadScreen();
  })
  
});