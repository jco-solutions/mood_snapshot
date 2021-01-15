n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

$.getJSON(url, function (data) {
  console.log(data);
  $("#quoteDisplay").append("<h7>" + data.quoteText + " - <i>" + data.quoteAuthor + "</i></h7>");
  // shows the code string data. 
  // $("body").append("<code>" + JSON.stringify(data, null, '<br/>') + "</code>");

  if (typeof (Storage) !== "undefined") {
    document.getElementById("result").innerHTML = localStorage.getItem("mentalState");
  } else {
    document.getElementById("result").innerHTML = "Click the button to determine your current mental state.";
  }

  $('#prntBtn').click(function printpage() {
    window.print();
  })

});

