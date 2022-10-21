//waittime settings every 1000 = 1 second.
waittime = 1000;
//Buffer
function panic() {
    window.close();
}
function refresh() {
    reload();
}
// TIMEOUT/DOCUMENT.reload for sanity
setTimeout(() => {
    reload();
  }, waittime)