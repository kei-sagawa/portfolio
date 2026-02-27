<template>
  <div class="layout">
    <div class="axis"></div>
    <header class="header">
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/works">Works</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>

    <main class="main">
      <router-view />
    </main>
  </div>
</template>
<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background:
    linear-gradient(
      to right,
      rgba(0, 0, 0, 0.04) 0px,
      rgba(0, 0, 0, 0.02) 120px,
      transparent 280px
    ),
    #f4efe6;

  color: #3a342f;
  font-family: 'Hiragino Mincho ProN', 'Yu Mincho', serif;
}

.header {
  padding: 32px 100px;
}

.nav {
  display: flex;
  gap: 40px;
  font-size: 14px;
  letter-spacing: 0.08em;
}

.nav a {
  text-decoration: none;
  color: #3a342f;
  position: relative;
}

.nav a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 70%;
  height: 1px;
  background: #000;
  opacity: 0.4;
}

.main {
  flex: 1;
  padding: 0 120px 0 120px;
  line-height: 1.9;
}
</style>
