const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal-overlay');
const closeButton = document.querySelector('.modal-close');
const openButton = document.querySelector('.modal-open');

function openModal() {
  modal.style.display = 'block';
  overlay.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
  overlay.style.display = 'none';
}


openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// window.addEventListener('keydown', (event) => {
//   if (event.key === 'Escape') {
//     closeModal();
//   }
// });

