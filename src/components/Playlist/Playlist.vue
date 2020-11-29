<template>
  <div
    v-if="visible"
    id="playlist"
    class="playlist"
    :class="isPlaylistVisible ? 'show' : 'hide'"
  >
    <div class="playlist__header">
      <button-close @click="closePlaylist" />
    </div>
    <playlist-track
      v-for="(track, index) in tracks"
      :key="index"
      :metadata="track"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Track from '@/types/track.type';
import PlaylistTrack from '@/components/Playlist/PlaylistTrack.vue';
import ButtonClose from '@/components/Button/ButtonClose.vue';

@Component({ components: { PlaylistTrack, ButtonClose } })
export default class Playlist extends Vue {
  @Prop() readonly visible!: boolean;
  @Prop() readonly tracks!: Track[];

  private isPlaylistVisible = false;

  @Watch('visible')
  onVisibleChange(value: boolean) {
    setTimeout(() => {
      this.isPlaylistVisible = value;
    }, 10);
  }

  private closePlaylist() {
    this.isPlaylistVisible = false;
    setTimeout(() => {
      this.$emit('close');
    }, 350);
  }
}
</script>

<style scoped lang="scss">
.playlist {
  width: 100%;
  position: absolute;
  transform: translateY(0);
  transition: 0.4s;
  background-color: #0a0a0a;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 4vh 8vw;
  opacity: 0.5;
  &.show {
    opacity: 1;
    transform: translateY(-97vh);
  }
}
</style>
