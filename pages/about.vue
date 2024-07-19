<script setup>
const teamItems = [
  {
    name: "Margaret \nSotillo Escala",
    imageUrl: "/img/agent-7.jpg",
    content:
      "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.",
    phone: "+54 356 945234",
    email: "agents@example.com",
    to: "/agent-single",
  },
  {
    name: "Stiven Spilver Darw",
    imageUrl: "/img/agent-6.jpg",
    content:
      "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.",
    phone: "+54 356 945234",
    email: "agents@example.com",
    to: "/agent-single",
  },
  {
    name: "Emma Toledo Cascada",
    imageUrl: "/img/agent-5.jpg",
    content:
      "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.",
    phone: "+54 356 945234",
    email: "agents@example.com",
    to: "/agent-single",
  },
];
</script>
<template>
  <PageHeader>
    <template #title> We Do Great Design For Creative Folks </template>
  </PageHeader>

  <section class="section-about">
    <div class="container">
      <div class="row">
        <AboutBanner />
        <AboutMain />
      </div>
    </div>
  </section>

  <section class="section-agents section-t8">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="title-wrap d-flex justify-content-between">
            <div class="title-box">
              <h2 class="title-a">Meet Our Team</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <PersonCard
          v-for="(member, index) in teamItems"
          :key="index"
          :person="member"
        />
      </div>
    </div>
  </section>
</template>
