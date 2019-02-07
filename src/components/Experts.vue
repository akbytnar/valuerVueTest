<template>
  <div class="experts">
    <h1>Hello, this is an experts page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...</p>
    <ul>
      <li v-for="(expert, index) in experts"  v-bind:key="index">
        <p>name: {{ expert.name }}</p>
        <p>speciality: {{ expert.speciality }}</p>
        <p>age: {{ expert.age }}</p>
      </li>
    </ul>
  </div>
</template>
<script >
  export default{
    props: {
      experts: {
        type: Array,
        default: () => [{id: '0', name: 'no experts'}]
      }
    },
    data(){
      return{}
    }
  }
</script>
