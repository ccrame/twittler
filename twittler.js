$(document).ready(function(){
  var body = $('.messages');
  var index, current;
  var others = function(){
     $('.tweet').html('');
  };

  //function to show elapsed time since post was created
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


  //function that loads tweets in the tweets section
  var loadScreen = function(){
    //current shows numbers of tweets loaded in the page
    current = index = streams.home.length - 1;
    $('.messages').remove();
    $('.tweet-board').append($('<div class="messages"></div>'));
    while(index >= 0){
      var tweet = streams.home[index];
      var time = postTimeElapsed(tweet.created_at);
      var messageBlock= $('<div class="tweet"></div>')
      var pic = $('<img class="profile picture" src="user.png">');
      var header = $('<p class="message-header">@' + '<a href="#" class="user-info">' + tweet.user + ' </a></p>');
      header.append(time);
      var message = $('<p>' + tweet.message + '</p>');
      //show username and date
      messageBlock.append(pic);
      messageBlock.append(header);
      messageBlock.append(message);
      $('.messages').append(messageBlock);

      index-=1;
    }//end of while
  };//end of loadScreen function
  loadScreen();


  //function to show number of new tweets
  var newTweets = function(){
    var newMessages = streams.home.length - 1 - current;
    if(newMessages > 0){
      $('.update').remove();
      $('.logo-container').append('<span class="update"></span>');
      $('.update').append(newMessages);
    }
    setTimeout(newTweets, 1000);
  }
  newTweets();

//event handlers
  $('.logo').on('click',function(){
    $('.update').remove();
    $('.logo-container').append('<span class="update"></span>');
    loadScreen();
  })
  
});