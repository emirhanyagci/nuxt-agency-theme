<script setup></script>
<template>
  <PageHeader>
    <template #title>Contact US </template>
    <template #content
      >Aut voluptas consequatur unde sed omnis ex placeat quis eos. Aut natus
      officia corrupti qui autem fugit consectetur quo. Et ipsum eveniet
      laboriosam voluptas beatae possimus qui ducimus. Et voluptatem deleniti.
      Voluptatum voluptatibus amet. Et esse sed omnis inventore hic
      culpa.</template
    >
  </PageHeader>
  <section class="contact">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <MapIframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834"
          />
        </div>
        <div class="col-sm-12 section-t8">
          <div class="row">
            <div class="col-md-7">
              <form
                class="form-a contactForm"
                action=""
                method="post"
                role="form"
              >
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <div class="form-group">
                      <TextInput placeholder="Your Name" id="name" />
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="form-group">
                      <TextInput placeholder="Your Email" id="email" />
                    </div>
                  </div>
                  <div class="col-md-12 mb-3">
                    <div class="form-group">
                      <TextInput placeholder="Subject" id="email" />

                      <div class="validation"></div>
                    </div>
                  </div>
                  <div class="col-md-12 mb-3">
                    <div class="form-group">
                      <textarea
                        name="message"
                        class="form-control"
                        cols="45"
                        rows="8"
                        data-rule="required"
                        data-msg="Please write something for us"
                        placeholder="Message"
                      ></textarea>
                      <div class="validation"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <FormButtonSecond type="submit" class="btn btn-a">
                      Send Message
                    </FormButtonSecond>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-md-5 section-md-t3">
              <div class="icon-box section-b2">
                <div class="icon-box-icon">
                  <span class="ion-ios-paper-plane"></span>
                </div>
                <div class="icon-box-content table-cell">
                  <div class="icon-box-title">
                    <h4 class="icon-title">Say Hello</h4>
                  </div>
                  <div class="icon-box-content">
                    <p class="mb-1">
                      Email.
                      <span class="color-a">contact@example.com</span>
                    </p>
                    <p class="mb-1">
                      Phone.
                      <span class="color-a">+54 356 945234</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="icon-box section-b2">
                <div class="icon-box-icon">
                  <span class="ion-ios-pin"></span>
                </div>
                <div class="icon-box-content table-cell">
                  <div class="icon-box-title">
                    <h4 class="icon-title">Find us in</h4>
                  </div>
                  <div class="icon-box-content">
                    <p class="mb-1">
                      Manhattan, Nueva York 10036,
                      <br />
                      EE. UU.
                    </p>
                  </div>
                </div>
              </div>
              <div class="icon-box">
                <div class="icon-box-icon">
                  <span class="ion-ios-redo"></span>
                </div>
                <div class="icon-box-content table-cell">
                  <div class="icon-box-title">
                    <h4 class="icon-title">Social networks</h4>
                  </div>
                  <div class="icon-box-content">
                    <div class="socials-footer">
                      <PersonSocials />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
