<template>
  <section class="howitswork_section">
    <div class="container">
      <div class="howitworks">
        <div class="hiw_top">
          <h2 class="hiw_title">
            A high-performance platform that scales with you.
          </h2>
          <div class="hiw_card">
            <div class="hiw_content">
              <h4 class="hiw_content_subtitle">
                Create
              </h4>
              <h3 class="hiw_content_title">
                Create your Account that convert
              </h3>
              <ul class="hiw_content_desc">
                <li class="hiw_content_text">
                  Lorem Ipsum is simply dummy text
                </li>
                <li class="hiw_content_text">
                  Lorem Ipsum is simply dummy text
                </li>
                <li class="hiw_content_text">
                  Lorem Ipsum is simply dummy text
                </li>
              </ul>

            </div>
            <div class="hiw_img">
              <img src="/images/tour_booking/hiw.webp" />
            </div>
          </div>
          <div class="hiw_card">
            <div class="hiw_content">
              <h4 class="hiw_content_subtitle">
                Convert
              </h4>
              <h3 class="hiw_content_title">
                Convert to Business by choosing your website
              </h3>
              <ul class="hiw_content_desc">
                <li class="hiw_content_text">
                  Lorem Ipsum is simply dummy text
                </li>
                <li class="hiw_content_text">
                  Lorem Ipsum is simply dummy text
                </li>
                <li class="hiw_content_text">
                  Lorem Ipsum is simply dummy text
                </li>
              </ul>

            </div>
            <div class="hiw_img">
              <img src="/images/tour_booking/hiw.webp" />
            </div>
          </div>
          <div class="hiw_card">
            <div class="hiw_content">
              <h4 class="hiw_content_subtitle">
                Market
              </h4>
              <h3 class="hiw_content_title">
                Attract more users.
              </h3>
              <ul class="hiw_content_desc">
                <li class="hiw_content_text">
                  Lorem Ipsum is simply dummy text
                </li>
                <li class="hiw_content_text">
                  Lorem Ipsum is simply dummy text
                </li>
                <li class="hiw_content_text">
                  Lorem Ipsum is simply dummy text
                </li>
              </ul>

            </div>
            <div class="hiw_img">
              <img src="/images/tour_booking/hiw.webp" />
            </div>
          </div>
        </div>

        <Features />

      </div>

    </div>

  </section>
</template>

<script>
import Features from "./Features.vue";
export default {
  name: 'HowItWorks',
  components: {
    Features
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/tour_booking/_howitworks.scss";
</style>
