<template>
  <footer class="layout-footer">
    Nemanja Dragun &copy; {{ returnYear }}. All Rights Reserved
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class LayoutFooter extends Vue {
  get returnYear (): number {
    return new Date().getFullYear()
  }
}
</script>

<style lang="scss" scoped>
.layout-footer {
  @apply container mx-auto h-8 text-gray-400 text-center text-xs fixed bottom-0 left-0 right-0 bg-black bg-opacity-50 flex items-center justify-center;
}
</style>
