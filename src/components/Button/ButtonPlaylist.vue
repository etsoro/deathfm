<template>
  <base-button @click="onClick">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g fill="#FFFFFF">
        <path
          d="M20 8H10c-1.1 0-2-.9-2-2s.9-2 2-2h10c1.1 0 2 .9 2 2s-.9 2-2 2zM20 14H10c-1.1 0-2-.9-2-2s.9-2 2-2h10c1.1 0 2 .9 2 2s-.9 2-2 2zM20 20H10c-1.1 0-2-.9-2-2s.9-2 2-2h10c1.1 0 2 .9 2 2s-.9 2-2 2z"
        ></path>
        <circle cx="4" cy="6" r="2"></circle>
        <circle cx="4" cy="12" r="2"></circle>
        <circle cx="4" cy="18" r="2"></circle>
      </g>
    </svg>
  </base-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseButton from '@/components/Button/Button.vue';

@Component({ components: { BaseButton } })
export default class ButtonPlaylist extends Vue {
  private onClick(): void {
    this.$emit('click');
  }
}
</script>

<style scoped lang="scss">
.button {
  height: 63px;
  width: 30px;
  margin: 0;
  margin-left: auto;
  padding-right: 0;
  svg {
    height: 20px;
    width: 20px;
  }
}
</style>
