<template>
  <div id="app">
    <div class="container mx-auto flex-grow">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
html, body {
  margin: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .container {
    flex: 1;
  }
}

.card {
  background-color: gray;
  border-radius: 2rem;
  height: 100%;
}
</style>
