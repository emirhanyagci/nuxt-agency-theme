<script setup>
const agent = {
  name: "Margaret Stone",
  imageUrl: "/img/agent-4.jpg",
  content:
    "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.",
  phone: "+54 356 945234",
  email: "agents@example.com",
  content:
    "Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam  vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
  contact: [
    { label: "Phone", value: "+54 356 945234" },
    { label: "Email", value: "agents@example.com" },
    { label: "Mobile", value: "777 287 378 737" },
    { label: "Skype", value: "Annabela.ge" },
  ],

  to: "/agent-single",
};
</script>
<template>
  <PageHeader>
    <template #title>{{ agent.name }}</template>
    <template #content>Agent Immobiliari</template>
  </PageHeader>
  <section class="agent-single">
    <div class="container">
      <div class="row">
        <AgentsProfileCard :agent="agent" />
        <div class="col-md-12 section-t8">
          <div class="title-box-d">
            <h3 class="title-d">My Properties (6)</h3>
          </div>
        </div>
        <PropertiesGrid />
      </div>
    </div>
  </section>
</template>
