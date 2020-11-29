<template>
  <base-button @click="onClick">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g fill="#FFFFFF">
        <path
          d="M19 10h-5V5c0-1.1-.9-2-2-2s-2 .9-2 2v5H5c-1.1 0-2 .9-2 2s.9 2 2 2h5v5c0 1.1.9 2 2 2s2-.9 2-2v-5h5c1.1 0 2-.9 2-2s-.9-2-2-2z"
        ></path>
      </g>
    </svg>
  </base-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseButton from '@/components/Button/Button.vue';

@Component({ components: { BaseButton } })
export default class ButtonAdd extends Vue {
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
  margin-right: auto;
  padding-left: 0;
  svg {
    height: 20px;
    width: 20px;
  }
}
</style>
