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
import { ExerciseInterface } from '~/interfaces/ExercisesInterface'
import ExercisesListItem from '~/components/Elements/ExercisesListItem/ExercisesListItem.vue'
import { GlobalEventBus, GlobalEvents } from '~/events/GlobalEvents'

@Component({
  components: {
    ExercisesListItem,
    ExerciseModal: () => import('@/components/Modals/ExerciseModal/ExerciseModal.vue')
  }
})
export default class ExercisesList extends Vue {
  @Prop({ required: true })
  exercises!: ExerciseInterface[]

  exercise = null

  mounted () {
    GlobalEventBus.$on(GlobalEvents.UpdateStorage, this.onUpdateStorage)
  }

  beforeDestroy () {
    GlobalEventBus.$off(GlobalEvents.UpdateStorage, this.onUpdateStorage)
  }

  // Methods
  localStorageUpdate () {
    localStorage.setItem(this.$route.name as string, JSON.stringify(this.exercises))
  }

  onUpdateStorage () {
    this.exercises.forEach((obj) => {
      if (obj.sets.length) {
        const lastSet = obj.sets[obj.sets.length - 1]
        obj.lastWeight = lastSet.weight
        obj.lastReps = lastSet.reps
      }
    })
    this.localStorageUpdate()
  }
}
</script>
