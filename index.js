//waittime settings every 1000 = 1 second.
waittime = 5000;
//Buffer
function panic() {
    close();
}
function refresh() {
    window.location.reload();
}
// TIMEOUT/DOCUMENT.reload for sanity
/*
setTimeout(() => {
    window.location.reload();
  }, waittime)
  */