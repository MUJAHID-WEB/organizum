<template>
  <header class="header">
    <nav class="">
      <img src="/images/organizum.webp" alt="logo">
      <ul :class="{ 'mobile-menu': true, active: showMenu }">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div class="nav_btn">
        <a class="btn" href="#">
        Get Started
      </a>

      <button @click="toggleMenu">
        <svg aria-hidden="true" class="e-font-icon-svg e-fas-bars" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
      </button>

      </div>
      
      
    </nav>

    
  </header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/sections/_header.scss";
</style>
