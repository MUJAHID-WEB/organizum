<template>
  <section class="industries">
    <div class="industries-content">
      <h2>Industries We Serve</h2>
      <p>Explore how we can help your industry thrive.</p>
      <div class="industry-cards">
        <div class="industry-card">
          <h3>Technology</h3>
          <p>Innovative solutions for tech companies.</p>
        </div>
        <div class="industry-card">
          <h3>Healthcare</h3>
          <p>Empowering healthcare with our services.</p>
        </div>
        <div class="industry-card">
          <h3>Finance</h3>
          <p>Streamlined solutions for financial services.</p>
        </div>
        <div class="industry-card">
          <h3>Education</h3>
          <p>Transforming education with technology.</p>
        </div>
      </div>
      <button class="learn-more">Learn More</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Industries',
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/sections/_industries.scss";
</style>
