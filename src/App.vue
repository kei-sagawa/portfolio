<template>
  <div class="layout">
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
.main {
  flex: 1;
  line-height: 1.9;
}
</style>
