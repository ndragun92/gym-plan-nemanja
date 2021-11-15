<template>
  <div class="section-hero-homepage" :style="backgroundImage">
    <div class="container mx-auto h-full relative z-10">
      <div class="h-full flex items-center">
        <div>
          <h1 class="font-bold text-6xl max-w-2xl">
            Order Tasty & Fresh Food <span class="text-red-600">anytime!</span>
          </h1>
          <p>
            Just confirm your order and enjoy our delicious fastest delivery.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class SectionHeroHomepage extends Vue {
  // Getters
  get backgroundImage () {
    const imgUrl = this.$img('/images/homepage/hero-pizza.jpg', { width: 1920 })
    return {
      backgroundImage: `url('${imgUrl}')`
    }
  }
}
</script>

<style lang="scss" scoped>
.section-hero-homepage {
  @apply h-screen w-full;
  @apply bg-cover bg-no-repeat bg-right-bottom;
  &:after {
    content: '';
    @apply bg-gradient-to-t from-black via-transparent to-transparent;
    @apply absolute top-0 right-0 bottom-0 left-0;
  }
}
</style>
