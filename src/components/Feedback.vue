<template>
<div>
  <div class="border_bottom_light feedback-title">
    <input type="text" placeholder="Add title here">
  </div>
  <div class="border_bottom_light feedback-rating">
    <h2>RATING</h2>
    <star-rating active-color="#a29d82" v-bind:star-size="20" inactive-color="white" border-color="#a29d82" border-width="1" rounded-corners="true" v-bind:show-rating="false"></star-rating>
    <p>Roll over stars, then click to rate.</p>

  </div>
  <div class=" person-info">

    <img src="https://via.placeholder.com/48" alt="">

    <div class="description">
      <h1>Mathilde Jocobsen</h1>
      <p>VP at Spotify</p>
    </div>

  </div>
  <Tabs>
    <Tab label="Idea/Suggestion" :active="true">
      <div>
        <textarea name="name">Write comment here</textarea>
      </div>
    </Tab>
    <Tab label="Question">
      <div>
        <textarea name="name">Write question</textarea>
      </div>
    </Tab>
    <Tab label="Appreciate">
      <div>
        <textarea name="name">Write appreciate</textarea>
      </div>
    </Tab>
  </Tabs>
  <div class="files border_bottom_light">
    <div class="attach-file">
      <div v-if="attachedFile !== ''" class="horizontal-center">
        <img src="https://via.placeholder.com/14" alt="" @click="removeFile">
        <label>{{attachedFile.name}}</label>
      </div>
      <div v-else class="horizontal-center">
        <label for="feedback-file" class="horizontal-center">
          <img src="https://via.placeholder.com/16" alt="">Attach a file</label>
        <input @change="onFileChange" type="file" id="feedback-file" />
      </div>
    </div>
    <div class="middle-line">

    </div>

  </div>
  <div class="footer">
    <button type="button" class="button blue-button" name="button">SEND</button>
    <button type="button" class="button white-button" name="button">CANCEL</button>
  </div>
</div>
</template>

<script >
import Tab from './Tab.vue';
import Tabs from './Tabs.vue';
import StarRating from 'vue-star-rating'


export default {
  name: "Feedback",
  components: {
    StarRating,
    Tab,
    Tabs
  },
  data() {
    return {
      attachedFile: ''
    }
  },
  methods: {
    onFileChange(e) {
      console.log(e);
      this.attachedFile = e.target.files[0];
    },
    removeFile() {
      this.attachedFile = '';
    }
  }
}
</script>
