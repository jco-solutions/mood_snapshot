
   
url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

$.getJSON(url, function(data){
  console.log(data);
  $("#quoteDisplay").append("<h7>" + data.quoteText + " - <i>" + data.quoteAuthor + "</i></h7>");
  // shows the code string data. 
  // $("body").append("<code>" + JSON.stringify(data, null, '<br/>') + "</code>");
});