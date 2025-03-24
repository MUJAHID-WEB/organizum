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
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none" data-v-3886167c=""><path d="M5.79295 1.63605C5.60548 1.82358 5.50017 2.07788 5.50017 2.34305C5.50017 2.60821 5.60548 2.86252 5.79295 3.05005L10.743 8.00005L5.79295 12.95C5.61079 13.1387 5.51 13.3913 5.51228 13.6535C5.51456 13.9156 5.61973 14.1665 5.80513 14.3519C5.99054 14.5373 6.24135 14.6424 6.50355 14.6447C6.76575 14.647 7.01835 14.5462 7.20695 14.364L12.864 8.70705C13.0514 8.51952 13.1567 8.26521 13.1567 8.00005C13.1567 7.73488 13.0514 7.48058 12.864 7.29305L7.20695 1.63605C7.01942 1.44858 6.76512 1.34326 6.49995 1.34326C6.23479 1.34326 5.98048 1.44858 5.79295 1.63605Z" fill="black" data-v-3886167c=""></path></svg>
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
