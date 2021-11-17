<template>
  <div v-if="exercise" ref="exerciseModal" class="fixed top-0 right-0 bottom-0 left-0 bg-gray-900 bg-opacity-75 overflow-auto h-full z-50" style="backdrop-filter: blur(2px); scroll-behavior: smooth">
    <button type="button" class="fixed top-2 left-2 bg-transparent h-8 w-8 flex items-center justify-center text-center z-50" @click="exercise.expanded = !exercise.expanded">
      <i class="material-icons">info</i>
    </button>
    <button type="button" class="fixed top-2 right-2 bg-transparent h-8 w-8 flex items-center justify-center text-center z-50" @click="$emit('onClose')">
      <i class="material-icons">close</i>
    </button>
    <div>
      <img class="w-full" :src="exercise.image">
    </div>
    <div class="bg-black bg-opacity-75 text-yellow-500 px-6 font-bold text-center py-3">
      <h2 v-text="exercise.name" />
    </div>
    <template v-if="exercise.expanded">
      <div class="mt-2">
        <img class="w-32 mx-auto" :src="exercise.explainImage">
      </div>
      <div>
        <ul class="p-2 text-sm">
          <li v-for="(item, itemIndex) in exercise.description" :key="`${item.id}--${itemIndex}`" v-text="`${itemIndex+1}. ${item.text}`" />
        </ul>
      </div>
    </template>
    <div>
      <ul v-if="exercise.sets.length" class="p-2">
        <li v-for="(set, setIndex) in exercise.sets" :key="`${set.id}__${exercise.id}--${setIndex}`" class="bg-black bg-opacity-50" :class="{'mt-2': setIndex >= 1}">
          <div class="h-16 bg-black bg-opacity-50 flex items-center justify-center text-center flex-col gap-1">
            <h3 class="text-sm" v-text="`Set ${setIndex+1}`" />
            <p class="text-xs text-gray-400" v-text="`8-12 reps`" />
          </div>
          <div class="text-gray-100 flex items-center gap-2 py-4">
            <div class="flex items-center justify-center w-32">
              <button class="h-8 w-8 bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center text-center rounded-full" type="button" @click="set.weight >= 1 ? set.weight-- : setIndex = 0">
                <i class="material-icons text-base">remove</i>
              </button>
            </div>
            <div class="text-center w-full">
              <label :for="`weight__${set.id}__${exercise.id}--${setIndex}`" class="text-xs mb-1 block">Weight (kg)</label>
              <input :id="`weight__${set.id}__${exercise.id}--${setIndex}`" v-model.number="set.weight" class="w-full h-10 text-gray-100 px-4 bg-transparent text-center" type="text">
            </div>
            <div class="flex items-center justify-center w-32">
              <button class="h-8 w-8 bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center text-center rounded-full" type="button" @click="set.weight++">
                <i class="material-icons text-base">add</i>
              </button>
            </div>
          </div>
          <div class="h-[1px] bg-gray-900 w-full" />
          <div class="text-gray-100 flex items-center gap-2 py-4">
            <div class="flex items-center justify-center w-32">
              <button class="h-8 w-8 bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center text-center rounded-full" type="button" @click="set.reps >= 1 ? set.reps-- : setIndex = 0">
                <i class="material-icons text-base">remove</i>
              </button>
            </div>
            <div class="text-center w-full">
              <label class="text-xs mb-1 block" :for="`reps__${set.id}__${exercise.id}--${setIndex}`">Reps</label>
              <input :id="`reps__${set.id}__${exercise.id}--${setIndex}`" v-model.number="set.reps" class="w-full h-10 text-gray-100 px-4 bg-transparent text-center" type="text">
            </div>
            <div class="flex items-center justify-center w-32">
              <button class="h-8 w-8 bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center text-center rounded-full" type="button" @click="set.reps++">
                <i class="material-icons text-base">add</i>
              </button>
            </div>
          </div>
          <div class="flex items-center">
            <button
              type="button"
              class="flex-grow min-w-0 h-12 uppercase text-sm font-bold"
              :class="[set.completed ? 'bg-green-500 hover:bg-green-600': 'bg-yellow-500 hover:bg-yellow-600']"
              @click="onCompleteSet(set)"
              v-text="`${set.completed ? 'Completed' : 'Complete set'}`"
            />
            <button type="button" class="w-12 h-12 bg-red-500 hover:bg-red-600" @click="onDeleteSet(setIndex)">
              <i class="material-icons">delete</i>
            </button>
          </div>
        </li>
      </ul>
      <button type="button" class="mt-2 w-full h-12 uppercase text-sm font-bold bg-blue-500 hover:bg-blue-600" @click="onAddSet(exercise)">
        <i class="material-icons text-base">add</i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'
import { GlobalEventBus, GlobalEvents } from '~/events/GlobalEvents'
import { ExerciseInterface, ExerciseSetInterface } from '~/interfaces/ExercisesInterface'

@Component
export default class ExerciseModal extends Vue {
  @Watch('exercise')
  onVisible (val: boolean) {
    if (val) {
      document.body.classList.add('body--no-scroll')
    } else {
      document.body.classList.remove('body--no-scroll')
    }
  }

  @Prop({ required: true })
  exercise!: ExerciseInterface | null

  onAddSet (exercise: ExerciseInterface) {
    const date = new Date()
    const id = +`${date.getDate()}${date.getDay()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`
    let weight = this.exercise?.lastWeight || 0
    let reps = this.exercise?.lastReps || 0
    if (exercise.sets.length) {
      const lastExercise = exercise.sets[exercise.sets.length - 1]
      weight = lastExercise.weight
      reps = lastExercise.reps
    }
    exercise.sets.push({ id, weight, reps, completed: false })
    this.$nextTick(() => {
      const el = this.$refs.exerciseModal as HTMLElement
      el.scrollTop = el.scrollHeight
    })
    GlobalEventBus.$emit(GlobalEvents.UpdateStorage)
  }

  onCompleteSet (set: ExerciseSetInterface) {
    set.completed = !set.completed
    let timer = 30
    if (this.exercise?.sets.length) {
      if (this.exercise.sets.filter(obj => obj.completed).length === this.exercise.sets.length) {
        timer = 60
      }
    }
    if (set.completed) {
      GlobalEventBus.$emit(GlobalEvents.StartTimer, timer)
    }
  }

  onDeleteSet (setIndex: number) {
    const confirmed = confirm(`Delete set ${setIndex + 1}`)
    if (confirmed) {
      const exerciseData = this.exercise as ExerciseInterface
      exerciseData.sets.splice(setIndex, 1)
    }
  }
}
</script>
