<template>
  <header class="header">
    <nav>
      <!-- Add your nav content here -->
      <img src="/images/logo.png" alt="Logo" />
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <!-- Add more links -->
      </ul>
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
