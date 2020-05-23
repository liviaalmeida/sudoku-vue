<template>
  <div id="app">
    <header>
      <div class="pseudo-button">00:00:00</div>
      <span class="page-title">
        <router-link to="/">
          <img alt="Vue logo" class="logo" src="./assets/logo.png">
        </router-link>
        <h1>Sudoku Vue</h1>
      </span>
      <router-link to="/score" class="pseudo-button score">Score</router-link>
    </header>
    <nav>
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
  justify-content: space-between;
  padding: 15px 10px;
  background-color: $main-green;
  color: white;
  font-weight: 700;
  position: relative;

  .pseudo-button {
    color: $main-green;
    background-color: white;
    padding: 5px 10px;
    border-radius: 3px;
    font-weight: bold;
  }

  .page-title {
    display: flex;
    align-items: center;
  }

  .logo {
    height: 30px;
    margin-right: 5px;
  }

  .score {
    text-decoration-line: none;
  }

  .logo:hover, .score:hover {
    animation: jello .5s 1 ease-in-out;
  }
}

nav {
  display: flex;
  justify-content: flex-end;
  margin: 5px 10px;

  a {
    color: $main-green;
    text-decoration-line: none;

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
