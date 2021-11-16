<template>
  <nav class="layout-navigation" :class="{'layout-navigation--scrolled': scrollPosition > 80}">
    <div class="container mx-auto flex items-center justify-between h-12">
      <div>
        <nuxt-img src="/images/fitx_logo.svg" width="40" />
      </div>
      <div>
        <ul class="flex items-center gap-2 text-sm">
          <li>
            <nuxt-link to="/monday">
              Mon.
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/tuesday">
              Tue.
            </nuxt-link>
          </li>
          <li>
            <a href="#">Wed.</a>
          </li>
          <li>
            <a href="#">Thu.</a>
          </li>
          <li>
            <a href="#">Fri.</a>
          </li>
          <li class="ml-4">
            <button type="button" class="bg-gray-900 w-8 h-8 rounded flex items-center justify-center text-center" @click="onResetData">
              <i class="material-icons text-red-500">restart_alt</i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { GlobalEventBus, GlobalEvents } from '~/events/GlobalEvents'
@Component
export default class LayoutNavigation extends Vue {
  // Data
  scrollPosition: number = 0
  // Hooks
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.getScrollPosition)
    })
  }

  beforeDestroy () {
    window.removeEventListener('resize', this.getScrollPosition)
  }

  // Methods
  getScrollPosition () {
    this.scrollPosition = window.scrollY
  }

  onResetData () {
    const confirmed = confirm(`Reset data for ${this.$route.name}`)

    if (confirmed) {
      GlobalEventBus.$emit(GlobalEvents.ResetGlobalData)
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-navigation {
  @apply pl-6 pr-2 bg-black bg-opacity-50;
  .nuxt-link-active {
    @apply text-yellow-600;
  }
}
</style>
