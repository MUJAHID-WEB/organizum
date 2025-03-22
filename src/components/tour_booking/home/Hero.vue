<template>
  <section class="hero">
    <div class="container hero-container text_left__image_right">
      <div class="hero-text hero_text_left">
        <div class="hero_text_top">
          <h1 class="hero-title">
            Start your Business <br>Skip the stress
          </h1>
          <p class="">Empower yourself with our comprehensive coding courses designed for all skill levels. From
            beginner basics to advanced techniques, embark on a transformative journey towards coding mastery. Start
            learning today!</p>

          <div class="hero_buttons">

            <a class="button " href="#modular_pricing">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3.37124 0.500001L12.3712 0.5C12.9235 0.5 13.3712 0.947715 13.3712 1.5L13.3712 10.5C13.3712 11.0523 12.9235 11.5 12.3712 11.5C11.819 11.5 11.3712 11.0523 11.3712 10.5L11.3712 3.91421L2.07835 13.2071C1.68783 13.5976 1.05466 13.5976 0.664138 13.2071C0.273614 12.8166 0.273614 12.1834 0.664138 11.7929L9.95703 2.5L3.37124 2.5C2.81896 2.5 2.37124 2.05228 2.37124 1.5C2.37124 0.947716 2.81896 0.5 3.37124 0.500001Z"
                  fill="white"></path>
              </svg>
            </a>

         
          </div>

        </div>



        <div class="hero-box">
          <div class="first-box">
            <a href="#modular_pricing">
              <h3>Get ready to run without any cost!</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                <rect x="0.5" y="0.5" width="51" height="51" rx="25.5" stroke="#E3FF33" />
                <path d="M30.7112 29.7051L32.7478 22.1043L25.147 20.0677" stroke="#E3FF33" stroke-width="1.6"
                  stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.2522 29.896L32.6128 22.1822" stroke="#E3FF33" stroke-width="1.6" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
          <div class="second-box">
            <a href="#modular_pricing">
              <div class="second-box-wrapper">
                <div class="second-box-top">
                  <img src="/images/tour_booking/hero_right_img.webp" alt="">
                  <h3><span>2000</span>+</h3>
                </div>
                <div class="second-box-bottom">
                  <h3>Stay with us</h3>
                  <!-- <p><span>Get ready to sweat</span> at and feel great Get ready to sweat and feel great!!</p> -->
                </div>
              </div>
             
            </a>
          </div>
        </div>
      </div>
      <div class="hero-right stats-section">
        <div class="hero-box-left">
          <div class="stat-part">
            <div class="mini-card empty-box"></div>
            <div class="image lg-card">
              <img src="/images/tour_booking/car_plane.png" alt="Customer Interaction" />

            </div>
            <div class="image md-card">
              <img src="/images/tour_booking/travel.jpg" alt="Customer Interaction" />
            </div>
            <div class="image md-card">
              <img src="/images/tour_booking/booking.jpg" alt="Customer Interaction" />
            </div>
           
          </div>
        </div>

        <div class="hero-box-right">
          <div class="stat-part">
            <div class="stat-card gradient mini-card">
              <h2><span class="count-up">100</span>+</h2>
              <p>Transport Companies</p>
            </div>
          </div>
          <div class="stat-part">
            <div class="stat-card gradient lg-card num-box">
              <h2 class="text-lg-stat">
                <span class="count-up">1000</span>+
              </h2>
              <p>Areas we cover</p>
            </div>
          </div>
          <div class="stat-part card-4">
            <div class="image lg-card">
              <img src="/images/tour_booking/car.jpeg" alt="Team Collaboration" />
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  name: 'Hero',
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/tour_booking/_hero.scss";
</style>
