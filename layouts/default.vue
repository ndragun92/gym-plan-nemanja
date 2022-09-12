<template>
  <div>
    <layout-navigation />
    <div class="mb-12">
      <Nuxt />
    </div>
    <layout-footer />
    <exercise-timer v-if="showTimer" :timer-seconds="timerSeconds" />
    <transition leave-active-class="animated fadeOut">
      <div v-if="layoutLoading" class="layout-loading">
        <img src="~static/images/fitx_logo.svg" style="width: 100px">
        <div class="layout-loading__loader" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import LayoutNavigation from '~/components/Layout/LayoutNavigation/LayoutNavigation.vue'
import LayoutFooter from '~/components/Layout/LayoutFooter/LayoutFooter.vue'
import { GlobalEventBus, GlobalEvents } from '~/events/GlobalEvents'
@Component({
  components: {
    ExerciseTimer: () => import('~/components/Elements/ExerciseTimer/ExerciseTimer.vue'),
    LayoutFooter,
    LayoutNavigation
  }
})
export default class DefaultLayout extends Vue {
  // Data
  layoutLoading: boolean = true
  showTimer: boolean = false
  timerSeconds: number = 30

  // Hooks
  async created () {
    switch (this.currentDay) {
      case 1:
        await this.$router.push('/monday')
        break
      case 2:
        await this.$router.push('/tuesday')
        break
      case 3:
        await this.$router.push('/wednesday')
        break
      case 4:
        await this.$router.push('/thursday')
        break
      case 5:
        await this.$router.push('/friday')
        break
      case 6:
        await this.$router.push('/resting')
        break
      case 7:
        await this.$router.push('/resting')
        break
      default:
        await this.$router.push('/monday') // Default day is monday
    }
  }

  mounted () {
    document.body.classList.add('body--no-scroll')
    this.$nextTick(() => {
      setTimeout(() => {
        this.layoutLoading = false
        document.body.classList.remove('body--no-scroll')
      }, 2000)
    })
    GlobalEventBus.$on(GlobalEvents.StartTimer, this.onStartTimer)
  }

  beforeDestroy () {
    GlobalEventBus.$off(GlobalEvents.StartTimer, this.onStartTimer)
  }

  // Getters
  get currentDay (): number {
    return new Date().getDay()
  }

  // Methods
  onStartTimer (timer: number) {
    if (timer) {
      this.timerSeconds = timer
    }
    this.showTimer = false
    setTimeout(() => {
      this.showTimer = true
    }, 100)
  }
}
</script>

<style lang="scss" scoped>
.layout-loading {
  @apply fixed z-50 bg-black top-0 right-0 bottom-0 left-0 flex items-center justify-center;
  &__loader {
    content: "";
    @apply w-52 h-52;
    @apply absolute top-0 right-0 bottom-0 left-0 m-auto;
    @apply rounded-full;
    @apply border-4 border-white;
    border-top: 4px dotted #fff;
    border-bottom: 4px dotted #fff;
    animation: loading 2s infinite;
    @keyframes loading {
      0% {
        transform: rotate(0);
      }
      50% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
