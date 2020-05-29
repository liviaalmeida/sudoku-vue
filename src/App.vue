<template>
  <div id="app">
    <header>
      <div class="pseudo-button">00:00:00</div>
      <span class="page-title">
        <router-link to="/" class="logo-link">
          <img alt="Vue logo" class="logo" src="./assets/logo.png">
        </router-link>
        <h1>Sudoku Vue</h1>
      </span>
      <router-link to="/score" class="pseudo-button">Score</router-link>
    </header>
    <nav>
      <router-link to="/">X</router-link>
    </nav>
    <transition name="slide">
      <router-view class="router-view"/>
    </transition>
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
  text-align: right;
  margin: 5px 10px;
}

a {
  color: $main-green;
  text-decoration-line: none;
  font-weight: bold;

  &:hover {
    animation: jello .5s 1 ease-in-out;
  }

  &.router-link-exact-active:not(.logo-link) {
    visibility: hidden;
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

$slide-transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
.slide-leave-to {
  transform: translateY(-15px);
  opacity: 0;
  transition: $slide-transition;
  overflow-y: hidden;
}
.slide-enter, .slide-enter-to {
  display: none;
}
.slide-enter-active {
  transition: $slide-transition;
}

</style>
