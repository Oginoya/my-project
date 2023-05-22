// Slider Function
document.addEventListener('DOMContentLoaded', function() {

	var track               = document.querySelector('.carousel-track');
	var slides              = Array.from(document.querySelectorAll('.carousel-slide'));
	var leftArrow           = document.querySelector('.carousel-arrow.left');
	var rightArrow          = document.querySelector('.carousel-arrow.right');
	var indicatorsContainer = document.querySelector('.carousel-indicators');

	var slideWidth          = slides[0].offsetWidth;
	var slideIndex          = 0;

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
				slideIndex = index;
				updateCarousel();
			});
		});
	}

	function updateIndicators() {
		var indicators = Array.from(document.querySelectorAll('.carousel-indicator'));

		indicators.forEach(function(indicator, index) {
			if (index === slideIndex) {
				indicator.classList.add('active');

			} else {
				indicator.classList.remove('active');

			}
		});
	}


	function updateCarousel() {
		track.style.transform = 'translateX(' + (-slideIndex * slideWidth) + 'px)';
		leftArrow.style.display = slideIndex === 0 ? 'none' : 'block';
		rightArrow.style.display = slideIndex === slides.length - 1 ? 'none' : 'block';
		updateIndicators();
	}

	createIndicators();
	updateCarousel();

});