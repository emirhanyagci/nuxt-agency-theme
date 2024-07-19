<script setup>
const { agent } = defineProps(["agent"]);
const agentSocial = [
  { icon: "fa-facebook", to: "#" },
  { icon: "fa-twitter", to: "#" },
  { icon: "fa-instagram", to: "#" },
  { icon: "fa-pinterest-p", to: "#" },
  { icon: "fa-dribbble", to: "#" },
];
</script>
<template>
  <div class="row section-t3">
    <div class="col-sm-12">
      <div class="title-box-d">
        <h3 class="title-d">Contact Agent</h3>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 col-lg-4">
      <img :src="agent.imageUrl" alt="" class="img-fluid" />
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="property-agent">
        <h4 class="title-agent">{{ agent.name }}</h4>
        <p class="color-text-a">
          {{ agent.content }}
        </p>
        <ul class="list-unstyled">
          <li
            v-for="contact in agent.contact"
            class="d-flex justify-content-between"
          >
            <strong>{{ contact.label }}:</strong>
            <span class="color-text-a">{{ contact.value }}</span>
          </li>
        </ul>
        <div class="socials-a">
          <PersonCardSocials :socials="agentSocial" />
        </div>
      </div>
    </div>
    <div class="col-md-12 col-lg-4">
      <div class="property-contact">
        <form class="form-a">
          <div class="row">
            <div class="col-md-12 mb-1">
              <div class="form-group">
                <TextInput id="inputName" placeholder="Name *" />
              </div>
            </div>
            <div class="col-md-12 mb-1">
              <div class="form-group">
                <TextInput id="inputEmail1" placeholder="Email *" />
              </div>
            </div>
            <div class="col-md-12 mb-1">
              <div class="form-group">
                <textarea
                  id="textMessage"
                  class="form-control"
                  placeholder="Comment *"
                  name="message"
                  cols="45"
                  rows="8"
                  required
                ></textarea>
              </div>
            </div>
            <div class="col-md-12">
              <FormButton>Send Message</FormButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
