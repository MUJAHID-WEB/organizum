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
          <div class="feature">
            <div class="feature-container">
              <div class="feature-image">
                <img class="" src="/images/tour_booking/fi1.svg">
              </div>

              <h4 class="feature-title">Unlock Potential, Elevate Productivity 05</h4>
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

              <h4 class="feature-title">Unlock Potential, Elevate Productivity 06</h4>
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

              <h4 class="feature-title">Unlock Potential, Elevate Productivity 07</h4>
              <p class="feature-description">
                Lorem Ipsum is simply dummy text
              </p>

            </div>
          </div>
        </div>

        <div class="track_btm">
          <div class="track_button">
            <button class="btn_left">

              <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 14L1 8L7 2" stroke="#008080" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>

            </button>

            <button class="btn_right">
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 14L8 8L2 2" stroke="#008080" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"></path>
              </svg>
            </button>

          </div>
          <div class="pagination">
            <div class="mark">

            </div>
          </div>
        </div>


      </div>

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
  const totalItems = items.length;
  const visibleItems = 3; // Always show 3 items at a time
  let currentIndex = 0;

  const btnLeft = document.querySelector(".btn_left");
  const btnRight = document.querySelector(".btn_right");
  const mark = document.querySelector(".mark");

  // Disable left button initially
  btnLeft.disabled = true;

  // Set the width of the track to fit exactly 3 items
  function setTrackWidth() {
    const itemWidth = track.offsetWidth / visibleItems; // Width of one item
    track.style.width = `${visibleItems * itemWidth}px`;
    items.forEach((item) => {
      item.style.width = `${itemWidth}px`; // Set each item's width
    });
  }

  function updateSliderPosition() {
    const itemWidth = track.offsetWidth / visibleItems; // Width of one item
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    updateButtons();
    updatePagination();
  }

  function nextSlide() {
    if (currentIndex < totalItems - visibleItems) {
      currentIndex++;
      updateSliderPosition();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  }

  function updateButtons() {
    // Disable/enable buttons based on currentIndex
    btnLeft.disabled = currentIndex === 0;
    btnRight.disabled = currentIndex === totalItems - visibleItems;
  }

  function updatePagination() {
    const paginationWidth = ((currentIndex + visibleItems) / totalItems) * 100;
    mark.style.width = `${paginationWidth}%`;
  }

  // Event listeners for navigation buttons
  btnLeft.addEventListener("click", function () {
    prevSlide();
  });

  btnRight.addEventListener("click", function () {
    nextSlide();
  });

  // Update slider position on window resize
  window.addEventListener("resize", function () {
    setTrackWidth(); // Recalculate track width on resize
    updateSliderPosition();
  });

  // Initialize
  setTrackWidth();
  updateButtons();
  updatePagination();
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/tour_booking/_features.scss";
</style>
