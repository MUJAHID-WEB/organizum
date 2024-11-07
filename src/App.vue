<template>
  <div id="app">
    <Header />
    <Hero />
    <Features />
    <PricingPlans />
    <HowItWorks />
    <Statistics />
    <Industries />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Features from "@/components/Features.vue";
import PricingPlans from './components/PricingPlans.vue';
import HowItWorks from './components/HowItWorks.vue';
import Statistics from './components/Statistics.vue';
import Industries from './components/Industries.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Hero,
    Features,
    PricingPlans,
    HowItWorks,
    Statistics,
    Industries,
    Footer,
  },
};
</script>

<style lang="scss">
@import './styles/main.scss';
</style>

