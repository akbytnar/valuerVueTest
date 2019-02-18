<template>
<div id="feedback">
  <div class="border_bottom_light">
    <input type="text" placeholder="Add title here">
  </div>
  <div class="border_bottom_light">
    <h2>RATING</h2>
  </div>
  <div class="border_bottom_light">
    <h1>Mathilde Jocobsen</h1>
  </div>
  <Tabs>
    <Tab label="Idea/Suggestion" :active="true">
      <div>
        <textarea name="name" >Write comment here</textarea>
      </div>
    </Tab>
    <Tab label="Question">
      <div>
        <textarea name="name" >Write question</textarea>
      </div>
    </Tab>
    <Tab label="Appreciate">
      <div>
        <textarea name="name" >Write appreciate</textarea>
      </div>
    </Tab>
  </Tabs>
  <div class="attach-file border_bottom_light">
    attach a file
  </div>
  <div class="footer">
    <button type="button" class="button blue-button" name="button">SEND</button>
    <button type="button" class="button" name="button">CANCEL</button>
  </div>
</div>
</template>

<script >
import Tab from './Tab.vue';
import Tabs from './Tabs.vue';

export default {
  name: "Feedback",
  components: {
    Tab,
    Tabs
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
