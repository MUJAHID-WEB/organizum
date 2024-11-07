<template>
    <section class="curve-shape">
       
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

  