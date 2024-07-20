<template>
  <div class="form-comments">
    <div class="title-box-d">
      <h3 class="title-d">Leave a Reply</h3>
    </div>
    <form class="form-a">
      <div class="row">
        <div class="col-md-6 mb-3">
          <div class="form-group">
            <label for="inputName">Enter name</label>
            <TextInput placeholder="Name *" id="inputName" />
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="form-group">
            <label for="inputEmail1">Enter email</label>
            <TextInput placeholder="Email *" id="inputEmail1" />
          </div>
        </div>
        <div class="col-md-12 mb-3">
          <div class="form-group">
            <label for="inputUrl">Enter website</label>
            <TextInput placeholder="Website" id="inputUrl" />
          </div>
        </div>
        <div class="col-md-12 mb-3">
          <div class="form-group">
            <label for="textMessage">Enter message</label>
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
          <FormButtonSecond>Send Message</FormButtonSecond>
        </div>
      </div>
    </form>
  </div>
</template>
