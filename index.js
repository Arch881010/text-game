//DIV
const div = document.getElementById('div');
//Creates locations
const selection = document.createElement('select');
selection.setAttribute('id', 'locationselecter')
selection.setAttribute('class', 'c1');
const blank = document.createElement("option");
blank.setAttribute("value", 'blank');
blank.setAttribute('text', 'text')
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
    const text = document.getElementById('text');
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
    if(numlocation === 1){
        div.replaceChildren();
        div.appendChild(selection);
        selection.appendChild(blank);
        selection.appendChild(dL);
        selection.appendChild(dR);
        selection.appendChild(room1);
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
//USE FOR TESTING PURPOSES ONLY
// /*
setTimeout(() => {
    window.location.reload();
  }, waittime)
// */