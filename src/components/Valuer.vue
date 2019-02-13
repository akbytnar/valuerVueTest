<template>
  <div class="intro">
    <button id="show-modal" class="test" @click="showModal = true">Show Modal</button>
    <!-- use the modal component, pass in the prop -->
    <modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <!-- <h3 slot="header">custom header</h3> -->
      <div slot="body">
        <div class="assigned-box">
          <h3>Assigned Experts</h3>
        </div>
        <div>
          <h3>Add new</h3>
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
    Modal, Search
  },
    data(){
      return{
        showModal: false
      }
    }

};
</script>
