//waittime settings every 1000 = 1 second.
//60000 = 1 minute.
waittime = 60000;
//Buffer
function panic() {
    close();
}
// TIMEOUT/DOCUMENT.reload for sanity
const submit = document.getElementById('submit');
submit.onclick = function (){
var location = document.getElementById("locationselecter").value;
}
setTimeout(() => {
    window.location.reload();
  }, waittime)
