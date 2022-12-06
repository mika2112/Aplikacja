<template>
  <div>
  
  <h1>----------Alkomix----------</h1>
<AlkoholeApp />
<DrinkApp />
   
  </div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Przepisy</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: gold;
}

nav {
  text-align: center;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body {
  border-left-width: 25%;
  border-right: 25%;
  text-align: left;
}
h1{
  text-align: center;
}
</style>
