// Your JS goes here
function getRandomColor() {
  var x = Math.floor(Math.random() * 255);
  var y = Math.floor(Math.random() * 255);
  var z = Math.floor(Math.random() * 255);
  var color = "rgb(" + x + ", " + y + ", " + z + ")";
  return color;
  console.log(x)
}
function makeDiv() {
  for (var i = 0; i < 99; i++) {
    var div = document.createElement("div");
    document.body.appendChild(div);
    div.style.float="right";
    div.style.paddingBottom="11.1%";
    div.style.width="11.1%";
    div.style.background="linear-gradient(" + getRandomColor() + ", " + getRandomColor() + ")";
    console.log("Log me")
  }
}

function colorDiv() {
  for (var i = 0; i < 99; i++) {
    var div = document.getElementsByTagName('div')[i];
    div.style.background="linear-gradient(" + getRandomColor() + ", " + getRandomColor() + ")";
  }
}

makeDiv();

var nIntervId;

function changeColor() {
  nIntervId = setInterval(flashText, 2000);
}

function flashText() {
  colorDiv();
}

changeColor()
