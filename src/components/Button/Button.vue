<template>
  <div class="button" @click="$emit('click')">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {}
</script>

<style scoped lang="scss">
.button {
  cursor: pointer;
  height: 63px;
  width: 63px;
  padding: 10px;
  margin: 0 8px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  svg {
    height: 36px;
    width: 36px;
  }
}
</style>
