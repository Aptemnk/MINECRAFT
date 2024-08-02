$('#slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: `
    <button class="slick-arrow slick-prev">
    <svg width="72" height="100" viewBox="0 0 72 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="slick-arrow__icon" d="M71.65 11.6667L58.2176 0L0.649994 50L58.2176 100L71.65 88.3333L27.5149 50L71.65 11.6667Z" />
    </svg>

    </button>
    `,
    nextArrow: `
    <button class="slick-arrow slick-next">
    <svg width="62" height="100" viewBox="0 0 62 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="slick-arrow__icon" d="M0.166668 87.5L38.0856 50L0.166668 11.6667L11.7072 0L61.1667 50L11.7072 100L0.166668 87.5Z" />
    </svg>
    </button> `
  });
