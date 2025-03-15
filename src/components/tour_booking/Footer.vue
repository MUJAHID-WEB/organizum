<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-links">
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="#privacy">Privacy Policy</a>
      </div>
      <!-- <div class="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/facebook-icon.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/twitter-icon.png" alt="Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram-icon.png" alt="Instagram" />
        </a>
      </div> -->
      <p>&copy; {{ currentYear }} Your Company Name. All rights reserved.</p>
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
