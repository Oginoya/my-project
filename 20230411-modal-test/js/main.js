var openModalBtn = document.getElementById("openModal");
var modal = document.getElementById("myModal");
var closeModalBtn = document.getElementsByClassName("close")[0];
var overlay = document.getElementById("overlay");
var modalContent = document.querySelector(".modal-content");

openModalBtn.onclick = function() {
  modal.style.display = "block";
  overlay.style.display = "block";
  document.body.style.overflow = 'hidden'; // スクロール禁止
}

closeModalBtn.onclick = function() {
  modal.style.display = "none";
  overlay.style.display = "none";
  document.body.style.overflow = 'auto'; // スクロール許可
}

overlay.onclick = function(event) {
  if (event.target === overlay) {
    modal.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = 'auto'; // スクロール許可
  }
}

modalContent.onclick = function(event) {
  event.stopPropagation();
}
