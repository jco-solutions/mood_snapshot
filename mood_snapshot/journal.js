n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

var journalEntry = document.getElementById("exampleFormControlTextarea1").innerHTML;

$('#returnButton').click(function setJournalEntry() {
    localStorage.setItem("journalEntry", ("Journal Entry:" + "<br>" + Date + journalEntry));
})