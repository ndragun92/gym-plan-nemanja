<template>
  <div>
    <section-hero-homepage />
    <div class="h-screen">Test</div>
  </div>
</template>
<script>
import { Component, Vue } from 'nuxt-property-decorator'
import SectionHeroHomepage from '~/components/Sections/SectionHeroHomepage/SectionHeroHomepage'
@Component({
  components: { SectionHeroHomepage }
})
export default class PageIndex extends Vue {
}
</script>
