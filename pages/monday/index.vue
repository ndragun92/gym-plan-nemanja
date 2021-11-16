<template>
  <div class="my-2">
    <div class="container mx-auto px-2">
      <h1 class="text-lg my-2 text-center">
        Arms | Back | Abs
      </h1>
      <exercises-list :exercises="exercises" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ExerciseInterface } from '~/interfaces/ExercisesInterface'
import ExercisesList from '~/components/Elements/ExercisesList/ExercisesList.vue'
import { GlobalEventBus, GlobalEvents } from '~/events/GlobalEvents'
@Component({
  components: { ExercisesList }
})
export default class PageMonday extends Vue {
  exercises: ExerciseInterface[] = [
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
      sets: []
    },
    {
      id: 2,
      name: 'Barbell bench press narrow',
      image: '/images/exercises/gif/barbell-bench-press.gif',
      explainImage: '/images/exercises/gif/barbell-bench-press-explain.png',
      expanded: false,
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
      expanded: false,
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
    },
    {
      id: 4,
      name: 'Dumbbell bench press narrow',
      image: '/images/exercises/gif/dumbbell-bench-press.gif',
      explainImage: '/images/exercises/gif/barbell-bench-press-explain.png',
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Lay flat on the bench with your feet on the ground. Raise the dumbbells close to your body until you have straight arms.'
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

  created () {
    const storedData = localStorage.getItem(this.$route.name as string)
    if (storedData && JSON.parse(storedData).length === this.exercises.length) {
      this.exercises = JSON.parse(storedData)
    }
  }

  mounted () {
    GlobalEventBus.$on(GlobalEvents.ResetGlobalData, this.onResetData)
  }

  beforeDestroy () {
    GlobalEventBus.$off(GlobalEvents.ResetGlobalData, this.onResetData)
  }

  onResetData () {
    this.exercises = this.exercises.map((obj) => {
      return {
        ...obj,
        sets: []
      }
    })
    localStorage.setItem(this.$route.name as string, JSON.stringify(this.exercises))
  }
}
</script>
