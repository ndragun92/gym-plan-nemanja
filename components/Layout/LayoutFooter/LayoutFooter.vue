<template>
  <footer class="layout-footer">
    vanino-bielefeld.de &copy; Vanino. All Rights Reserved
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class LayoutFooter extends Vue {
}
</script>

<style lang="scss" scoped>
.layout-footer {
  @apply container mx-auto h-10 text-center text-sm;
}
</style>
