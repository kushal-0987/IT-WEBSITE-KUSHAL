document.addEventListener('DOMContentLoaded', () => {
  const slideContainer = document.getElementById('dynamicSlide');
  const title = document.getElementById('slideTitle');
  const text = document.getElementById('slideText');
  const thumbContainer = document.getElementById('thumbnailContainer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const slideData = [
    {
      image: 'image-1.jpg',
      title: 'Breathtaking',
      text: 'We organize professional adventures! The most amazing corners of our planet. Our Routes change peoples lives forever.'
    },
    {
      image: 'image-2.jpg',
      title: 'Adventure Awaits',
      text: 'Discover hidden gems and create unforgettable memories. Every trail tells a story, every peak offers a new perspective.'
    },
    {
      image: 'image-3.jpg',
      title: 'Life Changing',
      text: 'Join thousands of adventurers who have found their passion through our carefully curated routes and expert guidance.'
    }
  ];

  let currentIndex = 0;

  // Create thumbnails
  slideData.forEach((item, index) => {
    const thumb = document.createElement('img');
    thumb.src = item.image;
    thumb.classList.add('slider-thumb');
    if (index === 0) thumb.classList.add('active');
    thumb.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
    thumbContainer.appendChild(thumb);
  });

  const thumbs = document.querySelectorAll('.slider-thumb');

  function showSlide(index) {
    const data = slideData[index];
    slideContainer.style.backgroundImage = `url('${data.image}')`;
    title.textContent = data.title;
    text.textContent = data.text;

    thumbs.forEach((thumb, i) => {
      thumb.classList.toggle('active', i === index);
    });
  }

  function changeSlide(direction) {
    currentIndex = (currentIndex + direction + slideData.length) % slideData.length;
    showSlide(currentIndex);
  }

  // Auto-slide
  setInterval(() => changeSlide(1), 5000);
  prevBtn.addEventListener('click', () => changeSlide(-1));
  nextBtn.addEventListener('click', () => changeSlide(1));

  showSlide(currentIndex);
});

// Animate glassmorphism overlay on load
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    var overlay = document.querySelector('.hero-overlay-info');
    if (overlay) overlay.classList.add('visible');
  }, 200);
});

// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});


