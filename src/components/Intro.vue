<template>
  <div class="intro">
    <h1>{{intro.name}}</h1>
    <p>{{intro.desc}}</p>
  </div>
</template>
<script >
  export default{
    props:{
      intro :{
        type: Object,
        default: () => ({
            name: 'no startup',
            desc: 'no desc'
        })
      }
    },
    data(){
      return{}
    }
  }
</script>
