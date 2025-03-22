<template>
  <div class="mission-vission-wrapper slide-up animate">

    <div class="container">
      <div class="project-count-header-area">

        <h3 class="title">Bookinpro is where <br>your customers are</h3>

        <p class="brief">Lorem Ipsum is simply dummy text lorem Ipsum is simply dummy text</p>
      </div>

      <div class="img_stats">
        <div class="image">
          <img class="main-img" src="/images/tour_booking/location.svg" alt="Mission Vission Image">
        </div>

        <div class="stats">
          <div class="stats_content">
            <h4 class="count">
              100%
            </h4>
            <p class="details">
              Customer Satisfaction
            </p>
          </div>
          <div class="stats_content">
            <h4 class="count">
              3K+
            </h4>
            <p class="details">
              Successflly Trained
            </p>
          </div>
          <div class="stats_content">
            <h4 class="count">
              1506+
            </h4>
            <p class="details">
              Classes Completed
            </p>
          </div>
          <div class="stats_content">
            <h4 class="count">
              500+
            </h4>
            <p class="details">
              Active User Everyday
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>
<script>
export default {
  name: "Statistics",

  methods: {
    startCounting() {
      this.counters.forEach((counter, index) => {
        let start = 0;
        const end = counter.target;
        const duration = 2000; // 2 seconds
        const step = Math.ceil((end - start) / (duration / 50));

        const interval = setInterval(() => {
          start += step;
          if (start >= end) {
            start = end;
            clearInterval(interval);
          }
          // Directly update the `displayValue` without `$set`
          this.counters[index].displayValue = start;
        }, 50);
      });
    },
    setupObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.startCounting();
              this.observer.disconnect(); // Only trigger once
            }
          });
        },
        { threshold: 0.5 }
      );
      this.observer.observe(this.$refs.counterupSection);
    },
  },
  mounted() {
    this.setupObserver();
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
};
</script>
