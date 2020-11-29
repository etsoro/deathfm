<template>
  <base-button @click="onClick">
    <svg
      v-if="loading"
      class="loading"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="#000000">
        <circle cx="7" cy="7" r="4"></circle>
        <circle cx="17" cy="7" r="4"></circle>
        <circle cx="7" cy="17" r="4"></circle>
        <circle cx="17" cy="17" r="4"></circle>
      </g>
    </svg>
    <svg
      v-if="!playing && !loading"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="#000000">
        <path
          d="M6 6.6v10.8c0 1.2 1.2 1.9 2.2 1.3l9.5-5.4c1-.6 1-2 0-2.6L8.2 5.3c-1-.6-2.2.1-2.2 1.3z"
        ></path>
      </g>
    </svg>
    <svg
      v-if="playing && !loading"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="#000000">
        <path
          d="M8 19c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2s2 .9 2 2v10c0 1.1-.9 2-2 2zM16 19c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2s2 .9 2 2v10c0 1.1-.9 2-2 2z"
        ></path>
      </g>
    </svg>
  </base-button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import BaseButton from '@/components/Button/Button.vue';

@Component({ components: { BaseButton } })
export default class ButtonPlay extends Vue {
  @Prop() readonly loading: boolean = false;
  @Prop() readonly playing: boolean = false;

  private isLoading: boolean = this.loading;
  private isPlaying: boolean = this.playing;

  @Watch('loading')
  onLoadingChange(value: boolean) {
    this.isLoading = value;
  }

  @Watch('playing')
  onPlayingChange(value: boolean) {
    this.isPlaying = value;
  }

  private onClick() {
    this.$emit('click');
  }
}
</script>

<style scoped lang="scss">
.button {
  background: white;
  .loading {
    animation: loading 1s linear infinite;
  }
}

@keyframes loading {
  0% {
    transform: scale(0.7) rotate(0deg);
  }
  10% {
    transform: scale(0.65) rotate(72deg);
  }
  50% {
    transform: scale(0.6) rotate(144deg);
  }
  70% {
    transform: scale(0.65) rotate(216deg);
  }
  100% {
    transform: scale(0.7) rotate(360deg);
  }
}
</style>
