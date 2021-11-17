<template>
  <div v-if="counter" class="fixed bottom-0 left-0 right-0 z-50">
    <div class="relative bg-gray-800 h-6">
      <button type="button" class="flex items-center justify-center text-center w-6 h-6 cursor-pointer absolute left-0 z-50 bg-gray-800" @click="counter = null">
        <i class="material-icons text-base">close</i>
      </button>
      <div class="bg-yellow-500 h-full flex-grow min-w-0" style="transition: width 0.2s;" :style="{width: `${counter / secondsToCount * 100}%`}">
        <div class="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center text-center text-sm" v-text="`00:${counter}`" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'nuxt-property-decorator'
@Component
export default class ExerciseTimer extends Vue {
  @Watch('counter', { immediate: true })
  onChangeCounter (val: number | null) {
    if (val === null) { return }
    if (val > 0) {
      setTimeout(() => {
        if (this.counter) {
          this.counter--
        }
      }, 1000)
    } else {
      console.log('TODO: Do code for notification sound')
    }
  }

  @Prop({ default: 0 })
  timerSeconds!: number

  secondsToCount: number = 30
  counter: number | null = null

  mounted () {
    this.secondsToCount = this.timerSeconds || this.secondsToCount
    this.counter = this.secondsToCount
  }
}
</script>
