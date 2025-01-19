<template>
    <div class="home">
      <div class="box black-box" @click="navigateTo('/organizum')">Organizum</div>
      <div class="box blue-box" @click="navigateTo('/tour_booking')">Tour Booking</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
    },
  };
  </script>
  
  <style scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .box {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 18px;
    margin: 10px;
    cursor: pointer;
    border-radius: 10px;
    text-align: center;
  }
  .black-box {
    background-color: black;
  }
  .blue-box {
    background-color: blue;
  }
  </style>
  