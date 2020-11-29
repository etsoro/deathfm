<template>
  <div class="container">
    <vue-headful :title="title" :image="track.cover" />
    <div class="player">
      <div class="header" v-html="track.album"></div>
      <div class="cover">
        <img :src="track.cover" class="cover__background" />
        <img
          :src="track.cover"
          class="cover__foreground"
          :class="playing ? 'active' : ''"
        />
      </div>
      <div class="track" v-html="track.title"></div>
      <div class="artist" v-html="track.artist"></div>

      <progress-bar
        :start="track.startDate"
        :duration="track.duration"
        @end="updateCurrentlyPlaying"
      />

      <div class="controls">
        <button-add @click="onAdd" />
        <button-previous />
        <button-play
          :loading="loading"
          :playing="playing"
          @click="togglePlay"
        />
        <button-next />
        <button-playlist @click="showPlaylist" />
      </div>
    </div>
    <playlist
      :visible="playlistVisible"
      :tracks="playlist"
      @close="playlistVisible = false"
    />
    <popup :visible="isPopupVisible" :message="popupMessage"></popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import deathFMApi from '@/api/death-fm.api';
import Track from '@/types/track.type';
import ProgressBar from '@/components/ProgressBar.vue';
import ButtonPrevious from '@/components/Button/ButtonPrevious.vue';
import ButtonPlay from '@/components/Button/ButtonPlay.vue';
import ButtonNext from '@/components/Button/ButtonNext.vue';
import ButtonPlaylist from '@/components/Button/ButtonPlaylist.vue';
import ButtonAdd from '@/components/Button/ButtonAdd.vue';
import Playlist from '@/components/Playlist/Playlist.vue';
import Popup from '@/components/Popup.vue';

@Component({
  components: {
    Popup,
    ProgressBar,
    ButtonPrevious,
    ButtonPlay,
    ButtonNext,
    ButtonPlaylist,
    ButtonAdd,
    Playlist
  }
})
export default class Player extends Vue {
  private audio: HTMLAudioElement = new Audio();
  private track: Track = {
    title: '',
    album: '',
    artist: '',
    cover: '',
    thumbnail: '',
    duration: 0,
    listeners: 0,
    requestedBy: '',
    startDate: new Date(),
    currentDate: new Date()
  };
  private playlist: Track[] = [];
  private playlistVisible = false;

  private popupMessage = '';
  private isPopupVisible = false;

  private loading = false;
  private playing = false;

  private get title() {
    if (this.track.title || this.track.artist)
      return `${this.track.artist} – ${this.track.title}`;
    else return `Death.FM`;
  }

  private async mounted() {
    await this.updateCurrentlyPlaying();
  }

  private togglePlay(): void {
    if (this.loading) return;
    if (this.playing) this.stopAudio();
    else this.playAudio();
  }

  private async updateCurrentlyPlaying(): Promise<void> {
    this.track = await deathFMApi.getCurrentlyPlaying();
    await this.updatePlaylist();
  }

  private async updatePlaylist() {
    const history: Track[] = await deathFMApi.getHistory();
    const queue: Track[] = await deathFMApi.getQueue();
    this.playlist = history.reverse();
    this.playlist.push(this.track);
    this.playlist = this.playlist.concat(queue);
  }

  private async playAudio(): Promise<void> {
    if (this.playing) return;
    this.loading = true;
    this.audio = new Audio(`http://hi5.death.fm/;`);
    await this.audio.play();
    this.loading = false;
    this.playing = true;
    await this.updateCurrentlyPlaying();
  }

  private stopAudio(): void {
    this.audio.pause();
    this.playing = false;
    this.loading = false;
  }

  private copyToClipboard(value: string) {
    const input = document.createElement('input');
    input.style.opacity = '0';
    input.value = value;
    document.body.append(input);
    input.select();
    document.execCommand('copy');
    input.remove();
    this.popupMessage = 'Copied to Clipboard';
    this.isPopupVisible = true;
    setTimeout(() => {
      this.isPopupVisible = false;
    }, 2000);
  }

  private onAdd() {
    this.copyToClipboard(`${this.track.artist} - ${this.track.title}`);
  }

  private showPlaylist() {
    this.playlistVisible = true;
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-color: #191414;
}
.player {
  padding: 4vh 8vw;
  height: 100vh;
}
.header {
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 2.5rem;
}
.cover {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 38vh;
  .cover__foreground,
  .cover__background {
    position: absolute;
    height: 38vh;
    border-radius: 6px;
    transition: 0.6s;
    &.active {
      transform: scale(1.07);
    }
  }
  .cover__background {
    transform: scale(0.95);
    filter: blur(20px) brightness(70%);
  }
  margin-bottom: 3.5rem;
}
.track {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 6px;
}
.artist {
  font-size: 1.4rem;
  color: #bbbbbb;
  margin-bottom: 20px;
}
.controls {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}
</style>
