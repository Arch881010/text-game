//Sets location, etc. 
var numlocation = 0;
function num() {
    if (Location === "01") {
        numlocation = 1;
    } else if (Location === "02") {
        numlocation = 2;
    } else {
        console.log("Location is not valid.");
        alert("Check Console");
    }
}
//waittime settings every 1000 = 1 second.
//60000 = 1 minute.
waittime = 60000;
//Buffer
function panic() {
    close();
}
//ONCLICK
const submit = document.getElementById('submit');
submit.onclick = function (){
var Location = document.getElementById("locationselecter").value;
num();
}
// TIMEOUT/DOCUMENT.reload for sanity
setTimeout(() => {
    window.location.reload();
  }, waittime)
