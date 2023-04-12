const checkbox = document.querySelector('#checkbox');
const button = document.querySelector('#button');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    button.classList.remove('disabled');
  } else {
    button.classList.add('disabled');
  }
});
