<script setup lang="ts">
import { ref, onMounted } from "vue";
import PongGame from "./lib/PongGame";

const container_game = ref(null);
const canvas_game = ref(null);
const maxGameContainerWidth = 1000;
const maxGameContainerHeight = 500;
const resizeGameContainer = () => {
  if (!container_game.value) return;
  let winHeight =
    window.innerHeight > maxGameContainerHeight
      ? maxGameContainerHeight
      : window.innerHeight;
  let winWidth =
    window.innerWidth > maxGameContainerWidth
      ? maxGameContainerWidth
      : window.innerWidth;

  if (winWidth < winHeight * 2) {
    (container_game.value as HTMLElement).style.width = `${winWidth}px`;
    (container_game.value as HTMLElement).style.height = `${winWidth / 2}px`;
  } else {
    (container_game.value as HTMLElement).style.width = `${winHeight * 2}px`;
    (container_game.value as HTMLElement).style.height = `${winHeight}px`;
  }
};
onMounted(() => {
  if (!canvas_game.value || !container_game.value) return;
  resizeGameContainer();
  window.addEventListener("resize", resizeGameContainer);
  const canvas = canvas_game.value as HTMLCanvasElement;
  let ponggame = new PongGame(canvas);
});
</script>

<template>
  <div class="game_container" ref="container_game">
    <canvas class="game_canvas" ref="canvas_game"></canvas>
  </div>
</template>

<style>
.game_container {
  margin: auto;
  /*padding: 20px 0;*/
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100vh;
  /*background-color: #000;*/
  position: relative;
  background: #12ff12;
  overflow-y: hidden;
}

.game_canvas {
  /*width: 100%;*/
  /*height: 250px;*/
  width: 100%;
  height: 100%;
  background-color: #000;
  /*background: #12ff12;*/
}
</style>
