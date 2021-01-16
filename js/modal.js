var modal = document.getElementById("reset-modal");

var btn = document.getElementById("btn-reset");
var span = document.getElementsByClassName("close")[0];
var yes_btn = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

function reset() {
    location.reload();
}