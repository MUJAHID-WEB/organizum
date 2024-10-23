<template>
    <section class="curve-shape">
        <svg x="0px" y="0px" viewBox="0 0 3841 120" style="overflow:scroll;enable-background:new 0 0 3841 120;" xml:space="preserve">
      <path class="wave" style="fill:#f5f5f5;" d="M3360.5,97.739c-242,0-480-48.375-480-48.375S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864
      s-480-48.375-480-48.375S727.5,0.5,480.5,0.5S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
    </svg>
    
        <div class="pricing-plans">
            <h2>Choose Your Plan</h2>
            <div class="plans-container">
                <div class="plan">
                    <h3>Basic</h3>
                    <p class="price">$19/month</p>
                    <p>Includes basic features</p>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                    <button class="btn">Select Plan</button>
                </div>
                <div class="plan">
                    <h3>Standard</h3>
                    <p class="price">$39/month</p>
                    <p>Includes standard features</p>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                        <li>Feature 4</li>
                    </ul>
                    <button class="btn">Select Plan</button>
                </div>
                <div class="plan">
                    <h3>Premium</h3>
                    <p class="price">$59/month</p>
                    <p>Includes all features</p>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                        <li>Feature 4</li>
                        <li>Feature 5</li>
                    </ul>
                    <button class="btn">Select Plan</button>
                </div>
            </div>
    
        </div>
    
    </section>
</template>

<script>
export default {
    name: 'PricingPlans',
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/sections/_pricing.scss";
</style>

  