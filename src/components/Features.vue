<template>
  <section class="features">
    <h2 class="features-title">Explore Our Features</h2>
    <div class="features-content container">
      <div class="feature-item" 
      v-for="feature in features" :key="feature.id">
         <img class="line" src="../../public/images/line.png" alt="">
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
          title: 'Role-Based Management',
          description: 'Create names such as tour guide, drivers, and operations teams for the flow of tasks.',
        },
        {
          id: 2,
          title: 'Comprehensive Job Scheduling',
          description: 'A practical tool for the creation of transportation tasks, assigning them to employees as well as tracking their availability in real time.',
        },
        {
          id: 3,
          title: 'Effortless Employee Onboarding',
          description: 'Easily drive and staff cars with secure login accounts for drivers and their instant access to the cars.',
        },
        {
          id: 4,
          title: 'Affiliate Collaboration',
          description: 'Ensure affiliates’ integration properly with the opportunity to get the data in real-time mode with the protected payment methods.',
        },
        {
          id: 5,
          title: 'Customer Satisfaction',
          description: 'They should want to embrace the use of quick response for their sign in and want to have ample communication for pickup messages and changes.',
        },
        {
          id: 6,
          title: 'Real-Time Communication',
          description: 'Integrated chat enables you to easily communicate with drivers, staff, and other affiliates as and when needed.',
        },

        {
          id: 7,
          title: 'Vehicle Management',
          description: 'More than one vehicle to a job and monitor the vehicle’s status, its maintenance and timetable.',
        },
        {
          id: 8,
          title: 'Vehicle Repair & Tracking',
          description: 'Ensure that each transport vehicle has its repair status, and other operational status updates in check.',
        },
        {
          id: 9,
          title: 'Escrow-Based Payments',
          description: 'It is our way of offering the security of our escrow system that will guarantee all the surety of the transaction.',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/sections/_features.scss";
</style>
