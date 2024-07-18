<script setup>
const typeOptions = [
  { value: "all", text: "All Type" },
  { value: "rent", text: "For Rent" },
  { value: "sale", text: "For Sale" },
  { value: "open-house", text: "Open Houses" },
];
const cityOptions = [
  { value: "all", text: "All City" },
  { value: "alabama", text: "Alabama" },
  { value: "arizona", text: "Arizona" },
  { value: "california", text: "California" },
  { value: "colorado", text: "Colorado" },
];
const bedroomOptions = [
  { value: "any", text: "Any" },
  { value: "01", text: "01" },
  { value: "02", text: "02" },
  { value: "03", text: "03" },
];
const garageOptions = [
  { value: "any", text: "Any" },
  { value: "01", text: "01" },
  { value: "02", text: "02" },
  { value: "03", text: "03" },
  { value: "04", text: "04" },
];
const bathroomOptions = [
  { value: "any", text: "Any" },
  { value: "01", text: "01" },
  { value: "02", text: "02" },
  { value: "03", text: "03" },
];
const priceOptions = [
  { value: "unlimited", text: "Unlimited" },
  { value: "50000", text: "$50,000" },
  { value: "100000", text: "$100,000" },
  { value: "150000", text: "$150,000" },
  { value: "200000", text: "$200,000" },
];

const inputItems = [
  { id: "keyword", label: "Keyword", placeholder: "Keyword" },
];
const selectItems = [
  { id: "type", label: "Type", options: typeOptions },
  { id: "city", label: "City", options: cityOptions },
  { id: "bedrooms", label: "Bedrooms", options: bedroomOptions },
  { id: "garage", label: "Garage", options: garageOptions },
  { id: "bathroom", label: "Bathroom", options: bathroomOptions },
  { id: "price", label: "Min Price", options: priceOptions },
];
</script>
<template>
  <div class="click-closed"></div>
  <div class="box-collapse">
    <div class="title-box-d">
      <h3 class="title-d">Search Property</h3>
    </div>
    <span class="close-box-collapse right-boxed ion-ios-close"></span>
    <div class="box-collapse-wrap form">
      <form class="form-a">
        <div class="row">
          <div v-for="item in inputItems" class="col-md-12 mb-2">
            <div class="form-group">
              <label for="keyword">{{ item.label }}</label>
              <TextInput :id="item.id" :placeholder="item.placeholder" />
            </div>
          </div>

          <div v-for="item in selectItems" class="col-md-6 mb-2">
            <div class="form-group">
              <label for="garages">{{ item.label }}</label>
              <SelectBox :options="item.options" :id="item.id" />
            </div>
          </div>

          <div class="col-md-12">
            <FormButton>Search Propertys</FormButton>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
