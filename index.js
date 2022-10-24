//waittime settings every 1000 = 1 second.
waittime = 50000;
//Buffer
function panic() {
    close();
}
// TIMEOUT/DOCUMENT.reload for sanity

setTimeout(() => {
    window.location.reload();
  }, waittime)
