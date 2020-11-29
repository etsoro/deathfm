<template>
  <base-button @click="onClick">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g fill="#FFFFFF">
        <path
          d="M7 19c1.1 0 2-.9 2-2v-2.7l7.8 4.4c1 .6 2.2-.2 2.2-1.3V6.6c0-1.2-1.2-1.9-2.2-1.3L9 9.7V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2z"
        ></path>
      </g>
    </svg>
  </base-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseButton from '@/components/Button/Button.vue';

@Component({ components: { BaseButton } })
export default class ButtonPrevious extends Vue {
  private onClick(): void {
    this.$emit('click');
  }
}
</script>

<style scoped lang="scss"></style>
