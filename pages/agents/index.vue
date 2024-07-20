<script setup>
const agentItems = [
  {
    name: "Margaret \nSotillo Escala",
    imageUrl: "/img/agent-4.jpg",
    content:
      "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.",
    phone: "+54 356 945234",
    email: "agents@example.com",
    to: "/agents/1",
  },
  {
    name: "Stiven Spilver Darw",
    imageUrl: "/img/agent-1.jpg",
    content:
      "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.",
    phone: "+54 356 945234",
    email: "agents@example.com",
    to: "/agents/1",
  },
  {
    name: "Emma Toledo Cascada",
    imageUrl: "/img/agent-5.jpg",
    content:
      "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.",
    phone: "+54 356 945234",
    email: "agents@example.com",
    to: "/agents/1",
  },
  {
    name: "John Doe",
    imageUrl: "/img/agent-6.jpg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    phone: "+54 356 945234",
    email: "johndoe@example.com",
    to: "/agents/1",
  },
  {
    name: "John Doe",
    imageUrl: "/img/agent-6.jpg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    phone: "+54 356 945234",
    email: "johndoe@example.com",
    to: "/agents/1",
  },
  {
    name: "Jane Smith",
    imageUrl: "/img/agent-7.jpg",
    content:
      "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.",
    phone: "+54 356 945234",
    email: "janesmith@example.com",
    to: "/agents/1",
  },
];
</script>
<template>
  <PageHeader>
    <template #title>Our Amazing Agents </template>
    <template #content>Grid Properties </template>
  </PageHeader>

  <section class="agents-grid grid">
    <div class="container">
      <div class="row">
        <PersonCard
          v-for="(agent, index) in agentItems"
          :key="index"
          :person="agent"
        />
      </div>
      <Pagination />
    </div>
  </section>
</template>
