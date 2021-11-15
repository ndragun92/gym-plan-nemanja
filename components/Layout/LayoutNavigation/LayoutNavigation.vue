<template>
  <nav class="layout-navigation" :class="{'layout-navigation--scrolled': scrollPosition > 80}">
    <div class="container mx-auto flex items-center justify-between h-12">
      <div>
        <nuxt-img src="/images/fitx_logo.svg" width="40" />
      </div>
      <div>
        <ul class="flex items-center gap-2">
          <li>
            <a href="#">Mon.</a>
          </li>
          <li>
            <a href="#">Tue.</a>
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
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
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
}
</script>

<style lang="scss" scoped>
.layout-navigation {
  @apply px-6
}
</style>
