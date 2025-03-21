<template>
  <div class="features">
    <div class="container">
      <div class="features-header-section">

        <h3 class="block-title">Discover, Register & Start Business</h3>

        <div class="description">

          <div class="features-section-description">
            <p>
              Unlock new possibilities with eye-catching websites and grow your dream.
            </p>
          </div>

          <a class="button " href="#">
            Experience All Features

            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path
                d="M5.79295 1.63605C5.60548 1.82358 5.50017 2.07788 5.50017 2.34305C5.50017 2.60821 5.60548 2.86252 5.79295 3.05005L10.743 8.00005L5.79295 12.95C5.61079 13.1387 5.51 13.3913 5.51228 13.6535C5.51456 13.9156 5.61973 14.1665 5.80513 14.3519C5.99054 14.5373 6.24135 14.6424 6.50355 14.6447C6.76575 14.647 7.01835 14.5462 7.20695 14.364L12.864 8.70705C13.0514 8.51952 13.1567 8.26521 13.1567 8.00005C13.1567 7.73488 13.0514 7.48058 12.864 7.29305L7.20695 1.63605C7.01942 1.44858 6.76512 1.34326 6.49995 1.34326C6.23479 1.34326 5.98048 1.44858 5.79295 1.63605Z"
                fill="white" />
            </svg>
          </a>

        </div>


      </div>
      <div class="features-container">
        <div class="feature-track">
          <div class="feature">
            <div class="feature-container">
              <div class="feature-image">
                <img class="" src="/images/tour_booking/fi1.svg">
              </div>

              <h4 class="feature-title">Unlock Potential, Elevate Productivity 01</h4>
              <p class="feature-description">
                Lorem Ipsum is simply dummy text
              </p>

            </div>
          </div>
          <div class="feature">
            <div class="feature-container">
              <div class="feature-image">
                <img class="" src="/images/tour_booking/fi1.svg">
              </div>

              <h4 class="feature-title">Unlock Potential, Elevate Productivity 012</h4>
              <p class="feature-description">
                Lorem Ipsum is simply dummy text
              </p>

            </div>
          </div>
          <div class="feature">
            <div class="feature-container">
              <div class="feature-image">
                <img class="" src="/images/tour_booking/fi1.svg">
              </div>

              <h4 class="feature-title">Unlock Potential, Elevate Productivity 03</h4>
              <p class="feature-description">
                Lorem Ipsum is simply dummy text
              </p>

            </div>
          </div>
          <div class="feature">
            <div class="feature-container">
              <div class="feature-image">
                <img class="" src="/images/tour_booking/fi1.svg">
              </div>

              <h4 class="feature-title">Unlock Potential, Elevate Productivity 04</h4>
              <p class="feature-description">
                Lorem Ipsum is simply dummy text
              </p>

            </div>
          </div>

        </div>


      </div>



      <div class="feature-slider-pagination"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Features',

};

document.addEventListener("DOMContentLoaded", function () {


  const track = document.querySelector(".feature-track");
  const items = document.querySelectorAll(".feature");
  const totalItems = Math.min(items.length, 6);
  const visibleItems = 3;
  let currentIndex = 0;

  const paginationContainer = document.querySelector(".feature-slider-pagination");
  let autoSlideTimer;

  let autoSlideEnabled = true;
  let autoSlideInterval = 3000;


  function cloneItems() {
    for (let i = 0; i < visibleItems; i++) {
      const clone = items[i % totalItems].cloneNode(true);
      track.appendChild(clone);
    }
  }

  cloneItems();

  function updateSliderPosition() {
    const itemWidth = items[0].offsetWidth + 24;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    updateBullets();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateSliderPosition();
  }

  function generateBullets() {
    paginationContainer.innerHTML = "";
    for (let i = 0; i < totalItems; i++) {
      const bullet = document.createElement("div");
      bullet.classList.add("bullet");
      if (i === currentIndex) bullet.classList.add("active");
      bullet.setAttribute("data-index", i);
      bullet.addEventListener("click", function () {
        currentIndex = i;
        updateSliderPosition();
      });
      paginationContainer.appendChild(bullet);
    }
  }


  function updateBullets() {
    const bullets = document.querySelectorAll(".bullet");
    bullets.forEach((bullet, index) => {
      bullet.classList.toggle("active", index === currentIndex);
    });
  }

  function startAutoSlide() {
    if (autoSlideEnabled) {
      stopAutoSlide();
      autoSlideTimer = setInterval(() => {
        nextSlide();
      }, autoSlideInterval);
    }
  }

  function stopAutoSlide() {
    clearInterval(autoSlideTimer);
  }

  function restartAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }


  document.querySelector(".features-container").addEventListener("mouseenter", stopAutoSlide);
  document.querySelector(".features-container").addEventListener("mouseleave", startAutoSlide);

  window.addEventListener("resize", function () {
    updateSliderPosition();
  });

  generateBullets();
  startAutoSlide();
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/tour_booking/_features.scss";
</style>
