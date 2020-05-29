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
    <router-view class="router-view"/>
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
  display: flex;
  flex-direction: column;
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
}

nav {
  display: flex;
  justify-content: flex-end;
  margin: 5px 10px;
}

a {
  color: $main-green;
  text-decoration-line: none;

  &:hover {
    animation: jello .5s 1 ease-in-out;
  }

  &.score {
    font-weight: bold;
    align-self: center;
  }

  &.close {
    align-self: flex-end;
    font-size: 14px;
  }
}

.router-view {
  display: flex;
	flex-direction: column;
  position: relative;
  justify-content: space-between;
  flex: 1;
  overflow-y: auto;
}

</style>
