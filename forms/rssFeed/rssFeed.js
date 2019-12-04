
btnRssFeed.onclick=function(){
    const FEED_URL = "http://twitrss.me/twitter_user_to_rss/?user=NBA2K"
  $.get(FEED_URL, function(data) {
    $(data).find("item").each(function() {
      const el = $(this)

      console.log("------------------------")
      console.log("title      : " + el.find("title").text())
    });
  });
} 

