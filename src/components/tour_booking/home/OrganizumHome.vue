<template>
  <div id="app">
    <Header />
    <Hero />
    <Features />
    <PricingPlans />
    <HowItWorks />
    <Statistics />
    <Offer />
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
import Offer from './offer.vue';
import Footer from './Footer.vue';

export default {
  components: {
    Header,
    Hero,
    Features,
    PricingPlans,
    HowItWorks,
    Statistics,
    Offer,
    Footer,
  },
};
</script>

<style lang="scss">
@import './../../styles/tour_booking.scss';
</style>

