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
    GlobalEventBus.$on(GlobalEvents.ResetGlobalData, this.onResetData)
  }

  beforeDestroy () {
    GlobalEventBus.$off(GlobalEvents.UpdateStorage, this.onUpdateStorage)
    GlobalEventBus.$off(GlobalEvents.ResetGlobalData, this.onResetData)
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

  onResetData () {
    this.exercises = this.exercises.map((obj) => {
      return {
        ...obj,
        sets: []
      }
    })
    this.localStorageUpdate()
  }
}
</script>
