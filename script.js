// Your JS goes here

function getRandomColor() {
  var x = Math.floor(Math.random() * 255);
  var y = Math.floor(Math.random() * 255);
  var z = Math.floor(Math.random() * 255);
  var color = "rgb(" + x + ", " + y + ", " + z + ")";
  return color;
}

for (var i = 0; i < 99; i++) {
  var div = document.createElement("div");
  document.body.appendChild(div);
  div.style.float="right";
  div.style.paddingBottom="11.1%";
  div.style.width="11.1%";
  div.style.backgroundColor=getRandomColor();
};
