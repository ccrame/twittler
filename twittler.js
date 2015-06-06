$(document).ready(function(){
  var body = $('.messages');
  var index;
  var others = function(){
     $('.tweet').html('');
  };

  var postTimeElapsed = function(timeInput){
    var seconds = Math.floor(((new Date).getTime() - timeInput.getTime()) / 1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/ 60);
    var days = Math.floor(hours/24);

    if(days > 1){
      return 'posted ' + days + 'days ago';
    } else if (days === 1) {
      return 'posted 1 day ago';
    } else if (hours > 1) {
      return 'posted ' + hours + ' hours ago';
    } else if ( hours === 1) {
      return 'posted 1 hour ago';
    } else if ( minutes > 1) {
      return 'posted ' + minutes + ' minutes ago';
    } else if (minutes === 1) {
      return 'posted 1 minute ago';
    } else if (seconds > 1) {
      return 'posted ' + seconds + ' seconds ago';
    } else {
      return 'posted 1 second ago';
    }

  };//end of getTime function

  var loadScreen = function(){
    index = streams.home.length - 1;
    $('.messages').remove();
    $('.tweet-board').append($('<div class="messages"></div>'));
    while(index >= 0){
      var tweet = streams.home[index];
      var time = postTimeElapsed(tweet.created_at);
      var block= $('<div class="tweet"></div>')
      var pic = $('<img class="profile picture" src="user.png">');
      var header = $('<p class="message-header">@' + tweet.user + ' ' + '</p>');
      header.append(time);
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