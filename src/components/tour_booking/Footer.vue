<template>
  <footer>

    <div class="footer-top-main">

      <img class="footer-top-step"
        src="/images/tour_booking/footer-top-shape-mobile.svg">

      <div class="container">
        <div class="footer-top-wrapper">

          <div class="footer-top-left">
            <h2>Start for Free, Grow for Life</h2>
            <p>At SerSkillInter, join a dynamic learning experience and gain the skills you need to thrive in any
              career. Flexible, engaging, and designed to help you succeed</p>
          </div>


          <div class="footer-top-right">

            <a href="/en/#pricing-plans" class="footer-btn">
              <span class="btn-text">Join Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.2929C15.9024 6.68342 15.9024 7.31659 16.2929 7.70711L19.5858 11H6C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H19.5858L16.2929 16.2929C15.9024 16.6834 15.9024 17.3166 16.2929 17.7071C16.6835 18.0976 17.3166 18.0976 17.7072 17.7071L22.7018 12.7124C22.7202 12.6942 22.738 12.6753 22.755 12.6558C22.8225 12.5781 22.8761 12.4926 22.9158 12.4024C22.9696 12.2801 22.9996 12.145 23 12.003V12C23 11.9969 23 11.9938 23 11.9907C22.9988 11.865 22.9745 11.7447 22.931 11.6341C22.8822 11.5098 22.8076 11.3933 22.7071 11.2929L17.7071 6.29289Z"
                  fill="#171618"></path>
              </svg>
            </a>

          </div>

        </div>
      </div>
    </div>

    <div class="footer-main slide-up animate">

      <div class="container footer-logo-container">
        <div class="footer-logo-top">
          <div class="footer-logo-area">



            <div class="logo-container footer-logo animate-footer">
              <a href="/en">
                Bookinpro
              </a>
            </div>
            <p class="branding-text service-description">Unlock your potential and seize new opportunities by mastering
              in-demand skills that drive success and personal growth.</p>
          </div>

          <div class="footer-menu">

            <div class="frame-24">
              <div class="menu-item">
                <a rel="noopener noreferrer" class="text-dark" href="/en/about-us">About Us</a>
              </div>
              <div class="menu-item">
                <a rel="noopener noreferrer" class="text-dark" href="/en/contact">Contact</a>
              </div>
              <div class="menu-item">
                <a rel="noopener noreferrer" class="text-dark" href="/en/terms-and-conditions">Terms &amp;
                  Conditions</a>
              </div>
            </div>
          </div>
          <div class="footer-menu">

            <div class="frame-24">
              <div class="menu-item">
                <a rel="noopener noreferrer" class="text-dark" href="/en/cookie-policy">Cookie Policy</a>
              </div>
              <div class="menu-item">
                <a rel="noopener noreferrer" class="text-dark" href="/en/subscription-terms">Subscription Terms &amp;
                  Conditions</a>
              </div>
              <div class="menu-item">
                <a rel="noopener noreferrer" class="text-dark" href="/en/unsubscribe">Unsubscribe</a>
              </div>
            </div>
          </div>
        </div>

        <div class="watermark-area">
          <h1 class="watermark">Bookinpro</h1>
        </div>

        <div class="footer-bottom">
          <p>Copyright © Bookinpro 2025 | All rights reserved.</p>
        </div>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/tour_booking/_footer.scss";
</style>
