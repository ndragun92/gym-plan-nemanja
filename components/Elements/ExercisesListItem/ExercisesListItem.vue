<template>
  <div
    class="relative flex items-center gap-2 bg-black bg-opacity-50"
  >
    <div @click="$emit('select', exercise)">
      <img class="w-20 h-20" :src="exercise.image">
    </div>
    <div class="flex gap-1 flex-col p-2">
      <h2 class="text-sm" v-text="exercise.name" />
      <p class="text-xs" :class="[isCompleted ? 'text-green-400': 'text-gray-400']" v-text="isCompleted ? 'Completed' : 'Pending'" />
      <span
        class="absolute bottom-1 right-1 text-xs text-yellow-500"
        v-text="`${completedSetsCount}/${exercise.sets.length} sets`"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'
import ExerciseModal from '@/components/Modals/ExerciseModal/ExerciseModal.vue'
import { ExerciseInterface } from '~/interfaces/ExercisesInterface'
import { GlobalEventBus, GlobalEvents } from '~/events/GlobalEvents'
@Component({
  components: { ExerciseModal }
})
export default class ExercisesListItem extends Vue {
  @Watch('exercise', { deep: true })
  onChangeExerciseData () {
    GlobalEventBus.$emit(GlobalEvents.UpdateStorage)
  }

  @Prop({ required: true })
  exercise!: ExerciseInterface

  get isCompleted (): boolean {
    return !!this.exercise.sets.length && this.exercise.sets.filter(obj => obj.completed).length === this.exercise.sets.length
  }

  get completedSetsCount (): number {
    return this.exercise.sets.filter(obj => obj.completed).length
  }
}
</script>
