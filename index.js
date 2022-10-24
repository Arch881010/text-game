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
}
// TIMEOUT/DOCUMENT.reload for sanity
setTimeout(() => {
    window.location.reload();
  }, waittime)
