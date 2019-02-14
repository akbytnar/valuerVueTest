<template>
<div class="intro">
  <button id="show-modal" class="test" @click="showModal = true">Show Modal</button>
  <modal v-if="showModal" @close="showModal = false">
    <div slot="body">
      <div>
        <Search></Search>
      </div>
    </div>
  </modal>


</div>
</template>
<script >
import Modal from './Modal.vue';
import Search from './Search.vue';
export default {
  name: "Valuer",
  components: {
    Modal,
    Search
  },
  data() {
    return {
      showModal: false
    }
  }

};
</script>
