<template>
  <div class="popup" :class="isPopupVisible ? 'show' : 'hide'">
    <div class="popup__message">{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Popup extends Vue {
  @Prop() readonly visible!: boolean;
  @Prop() readonly message!: string;

  private isPopupVisible = false;

  @Watch('visible')
  onVisibleChange(value: boolean) {
    setTimeout(() => {
      this.isPopupVisible = value;
    }, 50);
  }

  private closePopup() {
    this.isPopupVisible = false;
    setTimeout(() => {
      this.$emit('close');
    }, 350);
  }
}
</script>

<style scoped lang="scss">
.popup {
  height: 20vh;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
  border-radius: 10px;
  transition: 0.5s;
  &__message {
    text-align: center;
    font-size: 14px;
    transform: scale(0.9);
    transition: 0.35s;
  }
}
.show {
  opacity: 1;
  .popup__message {
    transform: scale(1.05);
  }
}
.hide {
  opacity: 0;
  .popup__message {
    transform: scale(0.9);
  }
}
</style>
