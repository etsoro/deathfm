<template>
  <base-button @click="onClick">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g fill="#FFFFFF">
        <path
          d="M19.5 4.5c-.8-.8-2.2-.8-3 0L12 9 7.5 4.5c-.8-.8-2.2-.8-3 0-.8.8-.8 2.2 0 3L9 12l-4.5 4.5c-.8.8-.8 2.2 0 3 .8.8 2.2.8 3 0L12 15l4.5 4.5c.8.8 2.2.8 3 0 .8-.8.8-2.2 0-3L15 12l4.5-4.5c.8-.8.8-2.2 0-3z"
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
  height: 30px;
  width: 40px;
  margin: 0;
  margin-left: auto;
  svg {
    height: 20px;
    width: 20px;
  }
}
</style>
