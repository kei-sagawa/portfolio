<template>
  <section class="interlude">
    <div class="section-inner">
      <p>{{ text }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<style scoped>
.interlude {
  padding: 88px 40px;
}

.section-inner {
  width: min(980px, 100%);
  margin: 0 auto;
}

p {
  margin: 0;
  max-width: 420px;

  font-size: 18px;
  line-height: 2.1;
  letter-spacing: 0.12em;
  color: rgba(43, 43, 43, 0.62);
}

@media (max-width: 768px) {
  .interlude {
    padding: 72px 24px;
  }

  p {
    font-size: 16px;
    line-height: 2;
  }
}
</style>
