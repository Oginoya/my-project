var openModalBtn = document.getElementById("openModal");
var modal = document.getElementById("myModal");
var closeModalBtn = document.getElementsByClassName("close")[0];
var overlay = document.getElementById("overlay");
var modalContent = document.querySelector(".modal-content");

openModalBtn.onclick = function() {
  modal.style.display = "block";
  overlay.style.display = "block";
}

closeModalBtn.onclick = function() {
  modal.style.display = "none";
  overlay.style.display = "none";
}

overlay.onclick = function(event) {
  if (event.target === overlay) {
    modal.style.display = "none";
    overlay.style.display = "none";
  }
}

modalContent.onclick = function(event) {
  event.stopPropagation();
}
