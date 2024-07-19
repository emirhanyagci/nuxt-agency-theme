<script setup>
const property = {
  id: 1134,
  title: "304 Blaster Up",
  location: "Chicago, IL 606543",
  imageUrls: ["/img/slide-2.jpg", "/img/slide-3.jpg", "/img/slide-1.jpg"],
  price: 15000,
  description:
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar quam id dui posuere blandit.",
  amenities: [
    "Balcony",
    "Outdoor Kitchen",
    "Cable Tv",
    "Deck",
    "Tennis Courts",
    "Internet",
    "Parking",
    "Sun Room",
    "Concrete Flooring",
  ],
  videoUrl: "https://player.vimeo.com/video/73221098",
  floorPlanUrl: "/img/plan2.jpg",
  locationUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834",
  agent: {
    name: "Anabella Geller",
    imageUrl: "/img/agent-4.jpg",
    content:
      "Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam  vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
    contact: [
      { label: "Phone", value: "+54 356 945234" },
      { label: "Email", value: "agents@example.com" },
      { label: "Mobile", value: "777 287 378 737" },
      { label: "Skype", value: "Annabela.ge" },
    ],
    to: "/agent-single",
  },
};
property.summary = [
  { label: "Property ID", value: property.id },
  { label: "Location", value: property.location },
  { label: "Property Type", value: "House" },
  { label: "Status", value: "Sale" },
  { label: "Area", value: "340m2" },
  { label: "Beds", value: "4" },
  { label: "Baths", value: "2" },
  { label: "Garage", value: "1" },
];
</script>
<template>
  <PageHeader>
    <template #title>304 Blaster Up </template>
    <template #content>Chicago, IL 606543 </template>
  </PageHeader>

  <section class="property-single nav-arrow-b">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <PropertiesPropertyCarousel :imageUrls="property.imageUrls" />
          <PropertiesPropertyDetail :property="property" />
        </div>

        <div class="col-md-12">
          <AgentsContact :agent="property.agent" />
        </div>
      </div>
    </div>
  </section>
</template>
