<template>
  <footer class="layout-footer">
    Nemanja Dragun &copy; {{returnYear}}. All Rights Reserved
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
  @apply container mx-auto h-10 text-center text-sm;
}
</style>
