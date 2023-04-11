const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const title = item.querySelector('.accordion-title');
  const content = item.querySelector('.accordion-content');
  const icon = item.querySelector('.accordion-icon');

  title.addEventListener('click', () => {
    content.classList.toggle('show');
    icon.textContent = content.classList.contains('show') ? '-' : '+';
  });
});
