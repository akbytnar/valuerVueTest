<template id="modal-template">
  <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                <button class="modal-default-button button--close" @click="$emit('close')">
                  <img src="https://via.placeholder.com/20" alt=""/>
                </button>
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                default body
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
</template>
<script >

export default{
  name: "Modal"
}
</script>
