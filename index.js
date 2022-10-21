//waittime settings every 1000 = 1 second.
waittime = 1000;
//Buffer
function panic() {
    window.close();
}
function refresh() {
    window.location.reload();
}
// TIMEOUT/DOCUMENT.reload for sanity
setTimeout(() => {
    window.location.reload();
  }, waittime)