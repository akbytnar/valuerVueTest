<template>
  <div id="app">
    <nav>
      <router-link id="valuer" to="/">Valuer</router-link>
      <router-link to="/media">Media</router-link>
      <router-link to="/experts">Experts</router-link>
      <router-link to="/data">Data</router-link>
      <router-link to="/human">Human capital</router-link>
      <router-link to="/article">Article</router-link>
      <router-link to="/Executive">Executive summary</router-link>
      <router-link to="/about">Pitch</router-link>
      <router-link to="/intro">Intro</router-link>
    </nav>
    <transition name="content" enter-active-class="animated bounceInUp" >
      <router-view class="section" v-bind:experts="experts" v-bind:intro="intro"/>
    </transition>

  </div>
</template>

<script>
// import './style/global.scss'
import './style/modal.scss'
import './style/search.scss'

export default{
  data(){
    return{
      experts: [
        {id: '0', name: 'Tom', speciality: 'writing', age: '24'},
        {id: '1',name: 'Alex', speciality: 'reading', age: '30'},
        {id: '2',name: 'Justyna', speciality: 'skiing', age: '26'},
        {id: '3',name: 'Marek', speciality: 'reading', age: '34'},
        {id: '4',name: 'Maria', speciality: 'writing', age: '64'},
        {id: '5',name: 'Luis', speciality: 'runing', age: '14'},
        {id: '6',name: 'Anna', speciality: 'skiing', age: '21'},
        {id: '7',name: 'Pierre', speciality: 'writing', age: '25'}
      ],
      intro: {
        name: 'valuer',
        desc: 'the best startup :)'
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Gotham:400,700');
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
body {
  background-color: #EEEEEE;
  font-family: 'Gotham', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  background-image: url(https://picsum.photos/1250/1250?image=523);
  background-repeat: no-repeat;
  background-size: cover;
  padding:  0 20px;
}
body, html {
  color: white;
  margin: 0;
  height: 100%;
}
#app {
    width: 100%;
}

nav {
  padding: 20px 20px 20px 0;
}
#valuer{
  float: left !important;
}
nav a {
  float: right;
  padding: 10px;
  text-decoration: none;
  color: white;
  margin-right: 15px;
}
.section{
  max-width: 1000px;
  margin: 5% auto;
}
</style>
