<template>
    <section class="curve-shape">
        <svg x="0px" y="0px" viewBox="0 0 3841 120" style="overflow:scroll;enable-background:new 0 0 3841 120;" xml:space="preserve">
            <path class="wave" d="M3360.5,97.739c-242,0-480-48.375-480-48.375S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864
            s-480-48.375-480-48.375S727.5,0.5,480.5,0.5S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
          </svg>
    
        <div class="industries">
            <div class="faq-area faq-default-area">
                <div class="container">
                    <div class="faq-content" data-aos="fade-up" data-aos-duration="1100">
                        <div class="section-title xs-text-center">
                            <h2 class="title text-white">Industries on the Horizon</h2>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion" id="accordionExample">
                                <div v-for="(item, index) in faqs" :key="item.id" class="accordion-item card">
                                    <h2 class="card-header" :id="'heading' + index">
                                        <button class="accordion-button btn acc-btn border-0 text-start btn-secondary btn-block" :class="{ collapsed: activeIndex !== index }" @click="toggleAccordion(index)" type="button">
    
                            {{ item.question }}
                          </button>
                                    </h2>
                                    <div v-show="activeIndex === index" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            {{ item.answer }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="layer-shape">
                    <div class="layer-shape-one" data-aos="fade-up" data-aos-duration="1000">
                        <img class="img-shape1 tilt-animation" src="../../public/images/faq1.jpg" alt="Virtuf-Image">
                    </div>
                    <div class="layer-shape-two">
                        <img src="../../public/images/circle-line2.png" alt="Virtuf-Image">
                    </div>
                    <div class="layer-shape-three">
                        <img src="../../public/images/circle-line3.png" alt="Virtuf-Image">
                    </div>

                    <div class="layer-shape-four">
                        <img src="../../public/images/circle-line2.png" alt="Virtuf-Image">
                    </div>
                    <div class="layer-shape-five">
                        <img src="../../public/images/circle-line3.png" alt="Virtuf-Image">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'Industries',
    data() {
        return {
            faqs: [{
                    id: 1,
                    question: 'Medical & Healthcare',
                    answer: 'We appreciate all the challenges that come with the coordination of healthcare schedules including the patients and the staff. We will add more specific features like patient management, scheduling and proper distribution of medical staff for the healthcare organization in our following medical module so that they spend less time on concern and more time on caring.',
                },
                {
                    id: 2,
                    question: 'Software & IT Services',
                    answer: 'Most technology companies face communication barriers as they expand and this makes management of employees, projects and clients a difficult task. The software module would feature project management tools which would help IT firms manage all their projects and client onboarding tools which would ensure clients receive the best solutions in the quickest time possible as well as a task scheduling system which would ensure that all IT firms deliver on their promises to their clients.',
                },
                {
                    id: 3,
                    question: 'Manufacturing & Logistics',
                    answer: 'From the case of the manufacturers, it is paramount to plan for production schedules as well as the supply of raw materials. Our manufacturing module will offer solutions on the processes involved in manufacturing, inventory and supply chain management thus offering a one stop solution for manufacturing.',
                },
                {
                    id: 4,
                    question: 'Event Planning & Management',
                    answer: 'Event planners need a software that is capable of covering every aspect of sending invitations, venue management, managing vendors to invitations of the guests. Incorporated in the event planning module are enhanced tools for the scheduling of tasks, management of the vendors, ticketing and customers in the event to ensure that it runs effectively.',
                },
                {
                    id: 5,
                    question: 'Upcoming Transportation Modules',
                    answer: 'Our platform’s roots in transportation will continue to grow with advanced modules such as:',
                },
                {
                    id: 6,
                    question: 'Corsairs & Travel Agents',
                    answer: 'Including specific options for planning travel tours, cooperation with partners, and processing orders throughout different agencies.',
                },
                {
                    id: 7,
                    question: 'Airport Pickup/Drop-off',
                    answer: 'An exclusive module to handle airport transportation services with options such as tracking of transport vehicles, sending notification to the customers & optimizing schedules.',
                },
                {
                    id: 8,
                    question: 'Limousines & VIP Services',
                    answer: 'Specialized features for scheduling premium transportation services, clients’ preferences as well as notification settings.',
                },
                {
                    id: 9,
                    question: 'Charter Bus Services',
                    answer: 'A strong module for charter bus companies, where multiple companies and customers can all be linked through the charters they are using, and the buses are assigned and scheduled correspondingly.',
                },
                {
                    id: 10,
                    question: 'School Routes',
                    answer: 'Coordination and Management of school transport by efficiently planning the transportation routes, pick up points of students and drivers as well as safety measures to ensure students are transported safely.',
                },
                {
                    id: 11,
                    question: 'Courier Services',
                    answer: 'A courier management module capable of real time tracking of parcels, determination of the best route for delivery and even notifying the customers.',
                },
            ],
            activeIndex: 0,
        };
    },
    methods: {
        toggleAccordion(index) {
            this.activeIndex = this.activeIndex === index ? null : index;
        },
    },
};
</script>
  
<style scoped lang="scss">
@import "@/assets/scss/sections/_industries.scss";
</style>
  