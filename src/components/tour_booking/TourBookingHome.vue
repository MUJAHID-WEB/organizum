<template>
  <div id="app">
    <Header />
    <Hero />
    <Features />
    <HowItWorks />
    <Statistics />
    <PricingPlans />
    <Industries />
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Hero from './Hero.vue';
import Features from "./Features.vue";
import PricingPlans from './PricingPlans.vue';
import HowItWorks from './HowItWorks.vue';
import Statistics from './Statistics.vue';
import Industries from './offer.vue';
import Footer from './Footer.vue';

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
@import './../../styles/tour_booking.scss';
</style>

