<template>
  <div id="app">
    <Header />
    <Hero />
    <About />
    <HowItWorks />
    <Statistics />
    <Offer />
    <PricingPlans />
    <Footer />
  </div>
</template>

<script>
import Header from './home/Header.vue';
import Hero from './home/Hero.vue';
import About from './home/about.vue';
import PricingPlans from './home/PricingPlans.vue';
import HowItWorks from './home/HowItWorks.vue';
import Statistics from './home/Statistics.vue';
import Offer from './home/offer.vue';
import Footer from './home/Footer.vue';

export default {
  components: {
    Header,
    Hero,
    About,
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

