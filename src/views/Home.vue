<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
const Home = {
  name: 'home',
  components: {
    HelloWorld
  },
  actions:{
	some: "paliko"
  } 	
};
export default Home
</script>
