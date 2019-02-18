<template>
  <div class="tabs__content"><slot /></div>
</template>
<script >
export default{
  name: "Tab",
  props:['label', 'active'],
  inject: ['Tabs'],
  created() {
    const length = this.Tabs.labels.push(this.label)
    if (this.active) {
      this.Tabs.active = length - 1
    }
  },
  mounted() {
    this.Tabs.items.push(this.$el)
  }
}
</script>
