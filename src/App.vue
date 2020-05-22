<template>
  <div id="app">
    <header>
      <router-link to="/">
        <img alt="Vue logo" class="logo" src="./assets/logo.png">
      </router-link>
      <h1>Sudoku Vue</h1>
    </header>
    <nav>
      <router-link to="/score">Score</router-link>
      <router-link to="/">X</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~@/assets/scss/reset.scss";

html, html * {
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  background-color: $main-green;
  color: white;
  font-weight: 700;

  .logo {
    height: 30px;
    margin-right: 15px;
  }
}

nav {
  display: flex;
  justify-content: space-between;
  margin-left: 45%;

  a {
    font-weight: bold;
    color: $dark-green;
    text-decoration-line: none;

    // &.router-link-exact-active {
    // }
  }
}

</style>
