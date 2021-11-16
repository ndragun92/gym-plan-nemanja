<template>
  <div class="flex flex-col gap-2">
    <exercises-list-item
      v-for="(item, itemIndex) in exercises"
      :key="`${item.id}--${itemIndex}`"
      :exercise="item"
      @select="exercise = $event"
    />
    <exercise-modal :exercise="exercise" @onClose="exercise = null" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import ExerciseModal from '@/components/Modals/ExerciseModal/ExerciseModal.vue'
import { ExerciseInterface } from '~/interfaces/ExercisesInterface'
import ExercisesListItem from '~/components/Elements/ExercisesListItem/ExercisesListItem.vue'
import { GlobalEventBus, GlobalEvents } from '~/events/GlobalEvents'

@Component({
  components: { ExercisesListItem, ExerciseModal }
})
export default class ExercisesList extends Vue {
  @Prop({ required: true })
  exercises!: ExerciseInterface[]

  exercise = this.exercises[0]

  mounted () {
    GlobalEventBus.$on(GlobalEvents.UpdateStorage, this.onUpdateStorage)
  }

  beforeDestroy () {
    GlobalEventBus.$off(GlobalEvents.UpdateStorage, this.onUpdateStorage)
  }

  // Methods
  onUpdateStorage () {
    localStorage.setItem(this.$route.name as string, JSON.stringify(this.exercises))
  }
}
</script>
