<script setup>
const { agent } = defineProps(["agent"]);
</script>
<template>
  <div class="col-sm-12">
    <div class="row">
      <div class="col-md-6">
        <div class="agent-avatar-box">
          <img src="/img/agent-7.jpg" alt="" class="agent-avatar img-fluid" />
        </div>
      </div>
      <div class="col-md-5 section-md-t3">
        <div class="agent-info-box">
          <div class="agent-title">
            <div class="title-box-d">
              <h3 class="title-d">
                Margaret Stone <br />
                Escala
              </h3>
            </div>
          </div>
          <div class="agent-content mb-3">
            <p class="content-d color-text-a">
              Sed porttitor lectus nibh. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget
              felis porttitor volutpat. Vivamus suscipit tortor eget felis
              porttitor volutpat.
            </p>
            <div class="info-agents color-a">
              <p v-for="contact in agent.contact">
                <strong>{{ contact.label }}: </strong>
                <span class="color-text-a"> {{ contact.value }} </span>
              </p>
            </div>
          </div>
          <div class="socials-footer">
            <ul class="list-inline">
              <PersonSocials />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
