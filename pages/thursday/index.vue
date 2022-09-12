<template>
  <div class="my-2">
    <div class="container mx-auto px-2">
      <div
        class="text-center flex items-center justify-center flex-col"
        style="height: calc(100vh - 105px);"
      >
        <h1 class="text-lg m-0 mb-2" v-text="'Running'" />
        <img class="w-80 block" src="~static/images/exercises/gif/running.gif" alt="Running">
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class PageThursday extends Vue {
}
</script>
