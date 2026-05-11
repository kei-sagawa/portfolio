<template>
  <section ref="introRef" class="intro" id="intro">
    <div class="intro-rain" aria-hidden="true">
      <span v-for="n in 18" :key="n" class="rain-drop"></span>
    </div>
    <div class="intro-ripples" aria-hidden="true">
      <span v-for="n in 10" :key="n" class="ripple"></span>
    </div>
    <div class="section-inner">
      <div class="intro-layout">
        <p class="intro-caption">Introduction</p>

        <div class="intro-row">
          <p class="intro-block intro-tag intro-text">
            小さくても、<br />
            豊かな人生を。
          </p>

          <p class="intro-block intro-body intro-text">
            プログラミング、茶道、<br />
            制作と日々の記録。<br />
            その中で生まれた思索や作品を、<br />
            ここに静かに残しています。
          </p>

          <div class="intro-line" aria-hidden="true"></div>

          <p class="intro-block intro-main intro-text">思索と創作を綴る場所。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const introRef = ref<HTMLElement | null>(null)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!introRef.value) return

  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) return
      introRef.value?.classList.add('is-visible')
      observer?.disconnect()
    },
    {
      threshold: 0.35,
    },
  )

  observer.observe(introRef.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.intro {
  padding: 180px 40px 72px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.intro-rain {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  opacity: 0.65;
  mask-image: linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%);
}

.rain-drop {
  position: absolute;
  top: -160px;
  width: 2px;
  height: 140px;
  background: linear-gradient(to bottom, transparent, rgba(107, 79, 58, 0.28), transparent);
  animation: introRainDrop 8s linear infinite;
}

.rain-drop:nth-child(1) {
  left: 8%;
  animation-delay: -1s;
  animation-duration: 9s;
}
.rain-drop:nth-child(2) {
  left: 14%;
  animation-delay: -5s;
  animation-duration: 12s;
}
.rain-drop:nth-child(3) {
  left: 21%;
  animation-delay: -3s;
  animation-duration: 10s;
}
.rain-drop:nth-child(4) {
  left: 28%;
  animation-delay: -7s;
  animation-duration: 13s;
}
.rain-drop:nth-child(5) {
  left: 36%;
  animation-delay: -2s;
  animation-duration: 11s;
}
.rain-drop:nth-child(6) {
  left: 43%;
  animation-delay: -6s;
  animation-duration: 14s;
}
.rain-drop:nth-child(7) {
  left: 51%;
  animation-delay: -4s;
  animation-duration: 10s;
}
.rain-drop:nth-child(8) {
  left: 58%;
  animation-delay: -8s;
  animation-duration: 13s;
}
.rain-drop:nth-child(9) {
  left: 66%;
  animation-delay: -2s;
  animation-duration: 12s;
}
.rain-drop:nth-child(10) {
  left: 73%;
  animation-delay: -6s;
  animation-duration: 15s;
}
.rain-drop:nth-child(11) {
  left: 81%;
  animation-delay: -4s;
  animation-duration: 11s;
}
.rain-drop:nth-child(12) {
  left: 89%;
  animation-delay: -9s;
  animation-duration: 14s;
}

.rain-drop:nth-child(13) {
  left: 18%;
  height: 46px;
  opacity: 0.45;
  animation-delay: -10s;
  animation-duration: 16s;
}
.rain-drop:nth-child(14) {
  left: 33%;
  height: 54px;
  opacity: 0.38;
  animation-delay: -12s;
  animation-duration: 18s;
}
.rain-drop:nth-child(15) {
  left: 47%;
  height: 42px;
  opacity: 0.4;
  animation-delay: -11s;
  animation-duration: 17s;
}
.rain-drop:nth-child(16) {
  left: 62%;
  height: 58px;
  opacity: 0.35;
  animation-delay: -13s;
  animation-duration: 19s;
}
.rain-drop:nth-child(17) {
  left: 77%;
  height: 48px;
  opacity: 0.42;
  animation-delay: -15s;
  animation-duration: 18s;
}
.rain-drop:nth-child(18) {
  left: 93%;
  height: 52px;
  opacity: 0.36;
  animation-delay: -14s;
  animation-duration: 20s;
}

@keyframes introRainDrop {
  from {
    transform: translateY(-120px);
  }

  to {
    transform: translateY(760px);
  }
}

.intro-ripples {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.ripple {
  position: absolute;
  width: 22px;
  height: 7px;
  border: 1.2px solid rgba(107, 79, 58, 0.38);
  border-radius: 50%;
  opacity: 0;
  animation: rippleExpand 7.5s ease-out infinite;
}

.ripple:nth-child(1) {
  left: 8%;
  top: 78%;
  animation-delay: -0.4s;
}
.ripple:nth-child(2) {
  left: 18%;
  top: 86%;
  animation-delay: -3.8s;
  width: 34px;
  height: 10px;
}
.ripple:nth-child(3) {
  left: 31%;
  top: 74%;
  animation-delay: -1.7s;
}
.ripple:nth-child(4) {
  left: 42%;
  top: 82%;
  animation-delay: -5.2s;
  width: 30px;
  height: 9px;
}
.ripple:nth-child(5) {
  left: 54%;
  top: 77%;
  animation-delay: -2.9s;
}
.ripple:nth-child(6) {
  left: 63%;
  top: 85%;
  animation-delay: -6.1s;
  width: 36px;
  height: 11px;
}
.ripple:nth-child(7) {
  left: 72%;
  top: 73%;
  animation-delay: -4.4s;
}
.ripple:nth-child(8) {
  left: 81%;
  top: 84%;
  animation-delay: -1.1s;
  width: 32px;
  height: 10px;
}
.ripple:nth-child(9) {
  left: 91%;
  top: 79%;
  animation-delay: -5.7s;
}
.ripple:nth-child(10) {
  left: 47%;
  top: 88%;
  animation-delay: -7.2s;
  width: 20px;
  height: 7px;
}

@keyframes rippleExpand {
  0% {
    transform: scale(0.15);
    opacity: 0;
  }

  8% {
    opacity: 0.38;
  }

  38% {
    opacity: 0.18;
  }

  100% {
    transform: scale(4.2);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .rain-drop,
  .ripple {
    animation: none;
    opacity: 0;
  }
}

.section-inner {
  width: 100%;
  display: flex;
  justify-content: center;
}

.intro-layout {
  position: relative;
  width: min(100%, 960px);
  min-height: 460px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro-caption {
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  font-size: 11px;
  line-height: 1;
  letter-spacing: 0.34em;
  color: rgba(107, 79, 58, 0.42);
}

.intro-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 58px;
}

.intro-block {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  color: #2b2b2b;
  margin: 0;
}

.intro-text,
.intro-line,
.intro-caption {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 1.4s ease,
    transform 1.4s ease;
}

.is-visible .intro-caption {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  transition-delay: 0.05s;
}

.is-visible .intro-tag {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.18s;
}

.is-visible .intro-body {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.36s;
}

.is-visible .intro-line {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.52s;
}

.is-visible .intro-main {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.66s;
}

.intro-main {
  font-size: 34px;
  font-weight: 600;
  line-height: 2.08;
  letter-spacing: 0.16em;
  color: #1f1f1f;
}

.intro-body {
  font-size: 18px;
  line-height: 2.12;
  letter-spacing: 0.12em;
  color: rgba(43, 43, 43, 0.74);
}

.intro-tag {
  font-size: 20px;
  line-height: 2.1;
  letter-spacing: 0.14em;
  color: #6b4f3a;
}

.intro-line {
  width: 1px;
  height: 148px;
  background: linear-gradient(to bottom, transparent, rgba(107, 79, 58, 0.24), transparent);
}

@media (prefers-reduced-motion: reduce) {
  .intro-text,
  .intro-line,
  .intro-caption {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .is-visible .intro-caption {
    transform: translateX(-50%);
  }
}

@media (max-width: 768px) {
  .intro {
    padding: 112px 20px 88px;
  }

  .intro-layout {
    min-height: auto;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .intro-caption {
    position: static;
    transform: none;
    margin-bottom: 36px;
    font-size: 10px;
    letter-spacing: 0.28em;
  }

  .is-visible .intro-caption {
    transform: none;
  }

  .intro-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 26px;
  }

  .intro-block {
    writing-mode: horizontal-tb;
    text-orientation: initial;
    width: 100%;
  }

  .intro-main {
    order: 1;
    font-size: 24px;
    line-height: 1.9;
    letter-spacing: 0.08em;
  }

  .intro-line {
    order: 2;
    width: 72px;
    height: 1px;
    background: linear-gradient(to right, rgba(107, 79, 58, 0.26), transparent);
  }

  .intro-body {
    order: 3;
    font-size: 15px;
    line-height: 2;
    letter-spacing: 0.04em;
    color: rgba(43, 43, 43, 0.82);
  }

  .intro-tag {
    order: 4;
    font-size: 17px;
    line-height: 1.9;
    letter-spacing: 0.06em;
  }
}
</style>
