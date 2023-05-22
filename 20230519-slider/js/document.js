document.addEventListener('DOMContentLoaded', function() {

	var track = document.querySelector('.carousel-track');
	var slides = Array.from(document.querySelectorAll('.carousel-slide'));
	var leftArrow = document.querySelector('.carousel-arrow.left');
	var rightArrow = document.querySelector('.carousel-arrow.right');
	var indicatorsContainer = document.querySelector('.carousel-indicators');

	var slideWidth = slides[0].offsetWidth;
	var initialSlidesToShow = 2.5;
	var centerSlideIndex = 0;
	var slideIndex = Math.floor(centerSlideIndex - initialSlidesToShow / 2);

	var initialSlidesArray = slides.slice(slideIndex, slideIndex + initialSlidesToShow);

	track.style.width = (slideWidth * initialSlidesToShow) + 'px';
	initialSlidesArray.forEach(function(slide) {
		track.appendChild(slide.cloneNode(true));
	});

	leftArrow.addEventListener('click', function() {
		slideIndex--;
		updateCarousel();
	});

	rightArrow.addEventListener('click', function() {
		slideIndex++;
		updateCarousel();
	});

	function createIndicators() {

		slides.forEach(function(_, index) {
			var indicator = document.createElement('div');
			indicator.classList.add('carousel-indicator');
			indicatorsContainer.appendChild(indicator);
			indicator.addEventListener('click', function() {
			slideIndex =index - Math.floor(initialSlidesToShow / 2);
			updateCarousel();
			});
		}

		function updateIndicators() {
			var indicators = Array.from(document.querySelectorAll('.carousel-indicator'));

			indicators.forEach(function(indicator, index) {
				if (index === slideIndex + Math.floor(initialSlidesToShow / 2)) {
				indicator.classList.add('active');
				} else {
				indicator.classList.remove('active');
				}
			});
		}

		function updateCarousel() {

			if (slideIndex < 0) {
				slideIndex = 0;

			} else if (slideIndex > slides.length - initialSlidesToShow) {
				slideIndex = slides.length - initialSlidesToShow;

			}

			track.style.transform = 'translateX(' + (-slideIndex * slideWidth) + 'px)';
			leftArrow.style.display = slideIndex === 0 ? 'none' : 'block';
			rightArrow.style.display = slideIndex === slides.length - initialSlidesToShow ? 'none' : 'block';
			updateIndicators();

		}

		createIndicators();
		updateCarousel();


});