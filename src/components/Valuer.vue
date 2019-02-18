<template>
<div class="intro">
  <button id="show-modal" class="test button blue-button" @click="showModal = true">Show Modal experts</button>
  <modal v-if="showModal" @close="showModal = false">
    <div slot="body">
      <div>
        <Search></Search>
      </div>
    </div>
  </modal>
  <button id="show-modal-feedback" class="test button " @click="showModalFeedback = true">Show Modal Feedback</button>
  <modal v-if="showModalFeedback" @close="showModalFeedback = false" id="feedback">
    <div slot="body">
      <div>
        <Feedback></Feedback>
      </div>
    </div>
  </modal>

</div>
</template>
<script >
import Modal from './Modal.vue';
import Search from './Search.vue';
import Feedback from './Feedback.vue';
export default {
  name: "Valuer",
  components: {
    Modal,
    Search,
    Feedback
  },
  data() {
    return {
      showModal: false,
      showModalFeedback: false
    }
  }

};
</script>
