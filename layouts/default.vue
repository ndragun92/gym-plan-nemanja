<template>
  <div>
    <layout-navigation />
    <Nuxt />
    <layout-footer />
    <transition leave-active-class="animated fadeOut">
      <div v-if="layoutLoading" class="layout-loading">
        <nuxt-img src="/images/fitx_logo.svg" width="100" />
        <div class="layout-loading__loader" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import LayoutNavigation from '~/components/Layout/LayoutNavigation/LayoutNavigation.vue'
import LayoutFooter from '~/components/Layout/LayoutFooter/LayoutFooter.vue'
@Component({
  components: {
    LayoutFooter,
    LayoutNavigation
  }
})
export default class DefaultLayout extends Vue {
  // Data
  layoutLoading: boolean = false

  // Hooks
  async created () {
    switch (this.currentDay) {
      case 1:
        await this.$router.push('/monday')
        break
      default:
        await this.$router.push('/monday')
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
  }

  // Getters
  get currentDay (): number {
    return new Date().getDay()
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
