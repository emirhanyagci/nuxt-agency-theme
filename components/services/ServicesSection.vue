<script setup>
const serviceItems = [
  {
    header: "Lifestyle",
    icon: "fa-gamepad",
    text: "Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    to: "#",
  },
  {
    header: "Loans",
    icon: "fa-usd",
    text: "Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    to: "#",
  },
  {
    header: "Sell",
    icon: "fa-home",
    text: "Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    to: "#",
  },
];
</script>
<template>
  <section class="section-services section-t8">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="title-wrap d-flex justify-content-between">
            <div class="title-box">
              <h2 class="title-a">Our Services</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <ServicesCard
          v-for="(item, index) in serviceItems"
          :key="index"
          :icon="item.icon"
          :header="item.header"
          :text="item.text"
          :to="item.to"
        />
      </div>
    </div>
  </section>
</template>
