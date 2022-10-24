//Creates locations
const selection = document.createElement('select');
blank.setAttribute('id', 'locationselecter')
const blank = document.createElement("option");
blank.setAttribute("value", 'blank');
const dL = document.createElement("option");
dL.setAttribute('value', 'DL');
const dR = document.createElement("option");
dR.setAttribute("value", 'DR');
const upstairs1 = document.createElement("option");
upstairs1.setAttribute("value", "Floor1u");
const upstairs2 = document.createElement("option");
upstairs1.setAttribute("value", "Floor2u");
const downstairs1 = document.createElement("option");
downstairs1.setAttribute('value', 'Floor1d');
const downstairs2 = document.createElement("option");
downstairs2.setAttribute('value', 'Floor1d')
const room1 = document.createElement('option');

//Sets location, etc. 
var numlocation = 0;
const text1 = document.getElementById('text');
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
function text() {
    if (numlocation === 1) {
        text.innerHTML = "You enter the house, and notice there are two other doors, a stair case. But, you can always leave the house."  
    } else if(numlocation === 2) {
        text.innerHTML = "2";
    } else if(numlocation === 3) {
        text.innerHTML = "3";
    } else if (numlocation === 4) {
        text.innerHTML = "4";
    }
}
function newlocation() {
    const div = document.getElementById("div");
    div.replacechildren();
    div.appendChild(selection);
    if(numlocation === 1){
        
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
text();
newlocation();
}
// TIMEOUT/DOCUMENT.reload for sanity
setTimeout(() => {
    window.location.reload();
  }, waittime)
