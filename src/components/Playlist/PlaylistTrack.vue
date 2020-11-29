<template>
  <div class="track" :class="metadata.playing ? 'playing' : ''">
    <img class="track__thumbnail" :src="metadata.thumbnail" />
    <div class="track__meta">
      <div class="track__album" v-html="metadata.album"></div>
      <div class="track__title" v-html="metadata.title"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Track from '@/types/track.type';

@Component
export default class PlaylistTrack extends Vue {
  @Prop() readonly metadata!: Track;
}
</script>

<style scoped lang="scss">
.track {
  display: flex;
  align-items: center;
  &.playing {
    color: #1db954;
  }
  &__thumbnail {
    margin-right: 20px;
  }
  &__meta {
    display: grid;
  }
  &__album {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.3rem;
    margin-bottom: 6px;
  }
  &__title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.1rem;
    opacity: 0.7;
  }
  margin-bottom: 25px;
}
</style>
