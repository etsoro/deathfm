<template>
  <div class="timeline">
    <div class="progress-bar">
      <div class="progress"></div>
      <span class="circle"></span>
    </div>
    <div class="time">
      <div class="time__left">{{ timeElapsedText }}</div>
      <div class="time__right">{{ timeLeftText }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import moment from 'moment';

@Component
export default class Progress extends Vue {
  @Prop() readonly start!: Date;
  @Prop() readonly duration!: number;

  private timeInterval = 0;
  private timeTotal = 0;
  private timeElapsed = 0;
  private timeLeft = 0;

  private get timeElapsedText() {
    return this.secondsToText(this.timeElapsed);
  }

  private get timeLeftText() {
    return '-' + this.secondsToText(this.timeLeft);
  }

  @Watch('start')
  onStartChange(value: Date): void {
    this.startProgress();
  }

  @Watch('duration')
  onDurationChange(value: number): void {
    this.startProgress();
  }

  private async mounted() {
    await this.startProgress();
  }

  private async startProgress() {
    this.stopProgress();
    this.timeInterval = setInterval(this.updateProgress, 1000);
    await this.updateProgress();
  }

  private async updateProgress() {
    const startDate = moment(this.start || new Date());
    const currentDate = moment()
      .subtract(9, 'hours')
      .subtract(12, 'seconds');
    const endDate = moment(parseInt(startDate.format('x')) + this.duration);

    const duration = this.duration / 1000;
    const elapsed = currentDate.diff(startDate) / 1000;
    const left = endDate.diff(currentDate) / 1000;

    this.timeTotal = Math.floor(duration);
    this.timeElapsed = Math.floor(elapsed) < 0 ? 0 : Math.floor(elapsed);
    this.timeLeft = Math.floor(left) < 0 ? 0 : Math.floor(left);

    if (this.timeLeft === 0) this.$emit('end');

    this.renderProgress();
  }

  private renderProgress(): void {
    const progress = (this.timeElapsed * 100) / this.timeTotal;
    const progressElement = document.querySelector('.progress') as HTMLElement;
    const circleElement = document.querySelector('.circle') as HTMLElement;
    progressElement.style.width = `calc(${progress}% + 4px)`;
    circleElement.style.marginLeft = `${progress}%`;
  }

  private stopProgress() {
    if (this.timeInterval) clearInterval(this.timeInterval);
    this.timeInterval = 0;
  }

  public secondsToText(seconds: number): string {
    const m: number = Math.floor(seconds / 60);
    const s: number = Math.floor(seconds - m * 60);
    return `${m}:${s.toString().length === 1 ? '0' + s : s}`;
  }
}
</script>

<style scoped lang="scss">
.timeline {
  .progress-bar {
    cursor: pointer;
    height: 4px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-radius: 3px;
    background-color: #464746;
    &:hover > .circle {
      transform: scale(1.3);
    }
  }
  .circle {
    transition: transform 0.17s;
  }
  .progress {
    position: absolute;
    width: 5px;
    height: 4px;
    border-radius: 10px;
    background: white;
  }
  .circle {
    cursor: pointer;
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: white;
    transform: scale(1);
  }
  .time {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    color: #a4a4a4;
    font-size: 1rem;
  }
}
</style>
