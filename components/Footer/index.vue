<script setup>
const internationalItems = [
  { name: "Venezuela", to: "#" },
  { name: "China", to: "#" },
  { name: "Hong Kong", to: "#" },
  { name: "Argentina", to: "#" },
  { name: "Singapore", to: "#" },
  { name: "Philippines", to: "#" },
];
const companyItems = [
  { name: "Site Map", to: "#" },
  { name: "Legal", to: "#" },
  { name: "Agent Admin", to: "#" },
  { name: "Careers", to: "#" },
  { name: "Affiliate", to: "#" },
  { name: "Privacy Policy", to: "#" },
];
const contactItems = [
  { name: "Phone", value: "contact@example.com" },
  { name: "Email", value: "+54 356 945234" },
];
</script>

<template>
  <section class="section-footer">
    <div class="container">
      <div class="row">
        <FooterCell title="EstateAgency">
          <template #body>
            <p class="w-text-a color-text-a">
              Enim minim veniam quis nostrud exercitation ullamco laboris nisi
              ut aliquip exea commodo consequat duis sed aute irure.
            </p>
          </template>
          <template #footer>
            <ul class="list-unstyled">
              <li class="color-a">
                <span class="color-text-a">Phone .</span> contact@example.com
              </li>
              <li class="color-a">
                <span class="color-text-a">Email .</span> +54 356 945234
              </li>
            </ul>
          </template>
        </FooterCell>
        <FooterCell title="The Company">
          <template #body>
            <ul class="list-unstyled">
              <li v-for="item in companyItems" class="item-list-a">
                <i class="fa fa-angle-right"></i>
                <a :href="item.to">{{ item.name }}</a>
              </li>
            </ul>
          </template>
        </FooterCell>
        <FooterCell title="International sites">
          <template #body>
            <ul class="list-unstyled">
              <li v-for="item in internationalItems" class="item-list-a">
                <i class="fa fa-angle-right"></i>
                <a :href="item.to">{{ item.name }}</a>
              </li>
            </ul>
          </template>
        </FooterCell>
      </div>
    </div>
  </section>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <FooterLinks />
          <FooterCopyRight />
        </div>
      </div>
    </div>
  </footer>
</template>
