<template>
  <section class="counterup" ref="counterupSection">
    <div class="container content">
      <div class="counterup_title">
        <h2 class="title">Some of our Interesting facts</h2>
      </div>
      <div class="count">
        <div class="counterup_box" v-for="(item, index) in counters" :key="index">
          <span class="counterup_number">{{ item.displayValue }}</span>
          <p class="counterup_text">{{ item.label }}</p>
        </div>
      </div>
      <div class="counterup_shape">
        <img src="/images/stats.png" alt="Shape" class="layer" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Statistics",
  data() {
    return {
      counters: [
        { target: 2500, displayValue: 0, label: "Customers" },
        { target: 1500, displayValue: 0, label: "Projects" },
        { target: 500, displayValue: 0, label: "Partners" },
        { target: 100, displayValue: 0, label: "Awards" },
      ],
      observer: null,
    };
  },
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
