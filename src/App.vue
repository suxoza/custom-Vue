<template>
  <div id="app">
    <div id="nav">
      <div class="language">
        <a :href="'/en' + $langVar">en</a>
        <a :href="'' + $langVar">ka</a>
      </div>
      <div class="category-list" v-for="(item, index) in $router.options.routes" :key="index">
          <router-link :to="{ path: item.path}" class="dropdown-item" >{{item.name}}</router-link>  
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>

.language{
  float: left
}

.language a{
  margin: 5px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.category-list{
  display: inline-block;
  margin: 0 5px 0 5px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
