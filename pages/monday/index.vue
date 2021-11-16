<template>
  <div class="my-2">
    <div class="container mx-auto px-2">
      <h1 class="text-lg my-2 text-center">
        Arms | Back | Abs
      </h1>
      <div class="flex flex-col gap-2">
        <div v-for="(item, itemIndex) in exercises" :key="`${item.id}--${itemIndex}`" class="flex items-center gap-2 bg-black bg-opacity-50" @click="exercise = item">
          <div>
            <img class="w-20 h-20" :src="item.image">
          </div>
          <div class="flex gap-1 flex-col p-2">
            <h2 class="text-sm" v-text="item.name" />
            <p class="text-xs" :class="[isCompleted(item) ? 'text-green-400': 'text-gray-400']" v-text="isCompleted(item) ? 'Completed' : 'Pending'" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="exercise" ref="exerciseModal" class="fixed top-0 right-0 bottom-0 left-0 bg-gray-900 bg-opacity-75 overflow-auto h-full z-50" style="backdrop-filter: blur(2px); scroll-behavior: smooth">
      <button type="button" class="fixed top-2 left-2 bg-transparent h-8 w-8 flex items-center justify-center text-center z-50" @click="exercise.expanded = !exercise.expanded">
        <i class="material-icons">info</i>
      </button>
      <button type="button" class="fixed top-2 right-2 bg-transparent h-8 w-8 flex items-center justify-center text-center z-50" @click="exercise = null">
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
              <div class="text-center">
                <label :for="`weight__${set.id}__${exercise.id}--${setIndex}`" class="text-xs">Weight (kg)</label>
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
              <div class="text-center">
                <label :for="`reps__${set.id}__${exercise.id}--${setIndex}`">Reps</label>
                <input :id="`reps__${set.id}__${exercise.id}--${setIndex}`" v-model.number="set.reps" class="w-full h-10 text-gray-100 px-4 bg-transparent text-center" type="text">
              </div>
              <div class="flex items-center justify-center w-32">
                <button class="h-8 w-8 bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center text-center rounded-full" type="button" @click="set.reps++">
                  <i class="material-icons text-base">add</i>
                </button>
              </div>
            </div>
            <div>
              <button
                type="button"
                class="w-full h-12 uppercase text-sm font-bold"
                :class="[set.completed ? 'bg-green-500 hover:bg-green-600': 'bg-yellow-500 hover:bg-yellow-600']"
                @click="set.completed = !set.completed"
                v-text="`${set.completed ? 'Completed' : 'Complete set'}`"
              />
            </div>
          </li>
        </ul>
        <button type="button" class="mt-2 w-full h-12 uppercase text-sm font-bold bg-blue-500 hover:bg-blue-600" @click="onAddSet(exercise)">
          <i class="material-icons text-base">add</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class PageMonday extends Vue {
  exercises = [
    {
      id: 1,
      name: 'Barbell bench press',
      image: '/images/exercises/gif/barbell-bench-press.gif',
      explainImage: '/images/exercises/gif/barbell-bench-press-explain.png',
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Lay flat on the bench with your feet on the ground. With straight arms unrack the bar.'
        },
        {
          id: 2,
          text: 'Lower the bar to your mid chest'
        },
        {
          id: 3,
          text: 'Raise the bar until you\'ve locked your elbows.'
        }
      ],
      sets: [
        {
          id: 1,
          weight: 0,
          reps: 0,
          completed: false
        }
      ]
    },
    {
      id: 2,
      name: 'Barbell bench press narrow',
      image: '/images/exercises/gif/barbell-bench-press.gif',
      explainImage: '/images/exercises/gif/barbell-bench-press-explain.png',
      description: [
        {
          id: 1,
          text: 'Lay flat on the bench with your feet on the ground. With narrow arms unrack the bar.'
        },
        {
          id: 2,
          text: 'Lower the bar to your mid chest'
        },
        {
          id: 3,
          text: 'Raise the bar until you\'ve locked your elbows.'
        }
      ],
      sets: []
    },
    {
      id: 3,
      name: 'Dumbbell bench press',
      image: '/images/exercises/gif/dumbbell-bench-press.gif',
      explainImage: '/images/exercises/gif/barbell-bench-press-explain.png',
      description: [
        {
          id: 1,
          text: 'Lay flat on the bench with your feet on the ground. Raise the dumbbells until you have straight arms.'
        },
        {
          id: 2,
          text: 'Lower the dumbbells to your mid chest'
        },
        {
          id: 3,
          text: 'Raise the dumbbells until you\'ve locked your elbows.'
        }
      ],
      sets: []
    }
  ]

  exercise = this.exercises[0]

  isCompleted (exercise) {
    return exercise.sets.length && exercise.sets.filter(obj => obj.completed).length === exercise.sets.length
  }

  onAddSet (exercise) {
    const date = new Date()
    const id = `${date.getDate()}${date.getDay()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`
    let weight = 0
    let reps = 0
    if (exercise.sets.length) {
      const lastExercise = exercise.sets[exercise.sets.length - 1]
      weight = lastExercise.weight
      reps = lastExercise.reps
    }
    exercise.sets.push({ id, weight, reps, completed: false })
    this.$nextTick(() => {
      const el = this.$refs.exerciseModal
      el.scrollTop = el.scrollHeight
    })
  }
}
</script>
