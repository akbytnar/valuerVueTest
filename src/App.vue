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
      <router-view class="section" />
    </transition>

  </div>
</template>

<script>

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
