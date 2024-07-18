<script setup>
const agentItems = [
  {
    name: "Margaret \nSotillo Escala",
    imageUrl: "/img/agent-4.jpg",
    content:
      "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.",
    phone: "+54 356 945234",
    email: "agents@example.com",
    to: "/agent-single",
  },
  {
    name: "Stiven Spilver Darw",
    imageUrl: "/img/agent-1.jpg",
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
  <section class="section-agents section-t8">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="title-wrap d-flex justify-content-between">
            <div class="title-box">
              <h2 class="title-a">Best Agents</h2>
            </div>
            <div class="title-link">
              <a href="agents-grid.html"
                >All Agents
                <span class="ion-ios-arrow-forward"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <PersonCard
          v-for="(agent, index) in agentItems"
          :key="index"
          :person="agent"
        />
      </div>
    </div>
  </section>
</template>
