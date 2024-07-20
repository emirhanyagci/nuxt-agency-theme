<script setup>
const propertyItems = [
  {
    id: 206,
    imageUrl: "/img/property-6.jpg",
    location: "Mount \nOlive Road Two",
    price: 12000,
    area: 340,
    beds: 2,
    baths: 4,
    garages: 1,
  },
  {
    id: 157,
    imageUrl: "/img/property-3.jpg",
    location: "Azabu \nNishi Park let",
    price: 12000,
    area: 340,
    beds: 2,
    baths: 4,
    garages: 1,
  },
  {
    id: 157,
    imageUrl: "/img/property-3.jpg",
    location: "Azabu \nNishi Park let",
    price: 12000,
    area: 340,
    beds: 2,
    baths: 4,
    garages: 1,
  },
  {
    id: 157,
    imageUrl: "/img/property-3.jpg",
    location: "Azabu \nNishi Park let",
    price: 12000,
    area: 340,
    beds: 2,
    baths: 4,
    garages: 1,
  },
  {
    id: 245,
    imageUrl: "/img/property-10.jpg",
    location: "West \nCentral Park",
    price: 12000,
    area: 340,
    beds: 2,
    baths: 4,
    garages: 1,
  },
  {
    id: 221,
    imageUrl: "/img/property-7.jpg",
    location: "West \nCentral Park",
    price: 12000,
    area: 340,
    beds: 2,
    baths: 4,
    garages: 1,
  },
];
</script>
<template>
  <div class="row property-grid grid">
    <div class="col-sm-12">
      <div class="grid-option">
        <form>
          <select class="custom-select">
            <option selected>All</option>
            <option value="1">New to Old</option>
            <option value="2">For Rent</option>
            <option value="3">For Sale</option>
          </select>
        </form>
      </div>
    </div>
    <div class="col-md-4" v-for="property in propertyItems" :key="property.id">
      <PropertiesCard :property />
    </div>
  </div>
</template>
