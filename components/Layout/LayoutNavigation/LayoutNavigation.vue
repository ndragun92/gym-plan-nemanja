<template>
  <nav class="layout-navigation" :class="{'layout-navigation--scrolled': scrollPosition > 80}">
    <div class="container mx-auto flex items-center justify-between h-20">
      <div>
        <nuxt-img src="/images/logo-inverted.png" width="65" />
      </div>
      <div>
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Online orders</a>
          </li>
          <li>
            <a href="#">Recipes</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <a href="https://www.lieferando.de/en/menu/vanino-cucina-italiana">
          <i class="material-icons-outlined" v-text="'shopping_cart'" />
        </a>
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
  @apply fixed top-0 right-0 left-0 z-50 transition duration-500 border-black;
  & > div {
    transition: 0.25s linear;
  }
  &--scrolled {
    backdrop-filter: blur(2px);
    @apply bg-black bg-opacity-50 border-b border-opacity-30;
    & > div {
      @apply h-16;
    }
  }
  ul {
    @apply flex items-center gap-8;
  }
}
</style>
