<template>
  <base-button @click="onClick">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g fill="#FFFFFF">
        <path
          d="M17 5c-1.1 0-2 .9-2 2v2.7L7.2 5.3c-1-.6-2.2.1-2.2 1.3v10.8c0 1.2 1.2 1.9 2.2 1.3l7.8-4.4V17c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2z"
        ></path>
      </g>
    </svg>
  </base-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseButton from '@/components/Button/Button.vue';

@Component({ components: { BaseButton } })
export default class ButtonNext extends Vue {
  private onClick(): void {
    this.$emit('click');
  }
}
</script>

<style scoped lang="scss"></style>
