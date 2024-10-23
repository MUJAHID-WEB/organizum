<template>
  <section class="how-it-works">
    <div class="how-it-works-content">
      <h2>How It Works</h2>
      <p>Our simple 3-step process to get you started:</p>
      <div class="steps">
        <div class="step">
          <img src="/images/step1.png" alt="Step 1" />
          <h3>Step 1</h3>
          <p>Sign up for an account.</p>
        </div>
        <div class="step">
          <img src="/images/step2.png" alt="Step 2" />
          <h3>Step 2</h3>
          <p>Customize your preferences.</p>
        </div>
        <div class="step">
          <img src="/images/step3.png" alt="Step 3" />
          <h3>Step 3</h3>
          <p>Start enjoying the benefits.</p>
        </div>
      </div>
      <button class="get-started-button">Get Started</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowItWorks',
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/sections/_howitworks.scss";
</style>
