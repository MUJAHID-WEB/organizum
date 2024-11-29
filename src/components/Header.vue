<template>
  <header class="header">
    <nav class="">
      <img src="/images/organizum.webp" alt="logo">
      <ul>
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
      <a class="btn" href="#">
        Get Started
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/sections/_header.scss";
</style>
