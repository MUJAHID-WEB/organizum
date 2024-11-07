<template>
  <section class="features ">
    <h2 class="features-title">Our Features</h2>
    <div class="features-content container">
      <div class="feature-item" v-for="feature in features" :key="feature.id">
        <img :src="feature.image" alt="Feature Icon" class="feature-icon" />
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Features',
  data() {
    return {
      features: [
        {
          id: 1,
          title: 'Feature One',
          description: 'Description for feature one.',
          image: '@/assets/images/feature1.png', // Adjust path as necessary
        },
        {
          id: 2,
          title: 'Feature Two',
          description: 'Description for feature two.',
          image: '@/assets/images/feature2.png', // Adjust path as necessary
        },
        {
          id: 3,
          title: 'Feature Three',
          description: 'Description for feature three.',
          image: '@/assets/images/feature3.png', // Adjust path as necessary
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/sections/_features.scss";

</style>
