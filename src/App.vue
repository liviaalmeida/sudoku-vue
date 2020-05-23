<template>
  <div id="app">
    <header>
      <router-link to="/">
        <img alt="Vue logo" class="logo" src="./assets/logo.png">
      </router-link>
      <h1>Sudoku Vue</h1>
    </header>
    <nav>
      <router-link to="/score" class="score">Score</router-link>
      <router-link to="/" class="close">X</router-link>
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

$nav-hmargin: 15px;

nav {
  display: flex;
  justify-content: space-between;
  margin: $nav-hmargin 5px $nav-hmargin 47%;

  a {
    color: $main-green;
    text-decoration-line: none;

    // &.router-link-exact-active {
    // }

    &.score {
      font-weight: bold;
      align-self: center;

      &:hover {
        animation: jello .5s 1 ease-in-out;
        text-decoration-line: underline;
      }
    }

    &.close {
      align-self: flex-end;
      font-size: 14px;
    }
  }
}

</style>
