<template>
  <div class="my-2">
    <div class="container mx-auto px-2">
      <h1 class="text-lg my-2 text-center">
        Arms | Legs | Abs
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
export default class PageFriday extends Vue {
  exercises: ExerciseInterface[] = [
    {
      id: 1,
      name: 'Dumbbell Curl',
      image: '/images/exercises/gif/dumbbell-curl.gif',
      explainImage: '/images/exercises/gif/dumbbell-curl-explain.png',
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Stand up straight with a dumbbell in each hand at arm\'s length.'
        },
        {
          id: 2,
          text: 'Raise one dumbbell and twist your forearm until it is vertical and your palm faces the shoulder.'
        },
        {
          id: 3,
          text: 'Lower to original position and repeat with opposite arm'
        }
      ],
      sets: []
    },
    {
      id: 2,
      name: 'Hammer Curl',
      image: '/images/exercises/gif/hammer-curl.gif',
      explainImage: '/images/exercises/gif/dumbbell-curl-explain.png',
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Hold the dumbbells with a neutral grip (thumbs facing the ceiling).'
        },
        {
          id: 2,
          text: 'Slowly lift the dumbbell up to chest height'
        },
        {
          id: 3,
          text: 'Return to starting position and repeat.'
        }
      ],
      sets: []
    },
    {
      id: 3,
      name: 'Barbell Curl',
      image: '/images/exercises/gif/barbell-curl.gif',
      explainImage: '/images/exercises/gif/dumbbell-curl-explain.png',
      expanded: false,
      description: [
        {
          id: 1,
          text: 'While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out.'
        },
        {
          id: 2,
          text: 'Continue the movement until your biceps are fully contracted and the bar is at shoulder level.'
        },
        {
          id: 3,
          text: 'Hold the contracted position for a second and squeeze the biceps hard.'
        },
        {
          id: 4,
          text: 'Slowly bring the weight back down to the starting position.'
        }
      ],
      sets: []
    },
    {
      id: 4,
      name: 'Back Barbell Wrist Curl',
      image: '/images/exercises/gif/back-barbell-wrist-curl.gif',
      explainImage: '/images/exercises/gif/wrist-curl-explain.png',
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Stand straight and hold the barbell behind you using a pronated grip with your hands and feet shoulder-width apart.'
        },
        {
          id: 2,
          text: 'Slowly curl your wrists in a semi-circular motion upwards.'
        },
        {
          id: 3,
          text: 'Hold the barbell at the apex of the motion and then slowly lower the barbell back down to starting position.'
        }
      ],
      sets: []
    },
    {
      id: 5,
      name: 'Reverse Curl',
      image: '/images/exercises/gif/reverse-curl.gif',
      explainImage: '/images/exercises/gif/wrist-curl-explain.png',
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Grab an EZ bar (or barbell) with a shoulder width pronated (overhand) grip.'
        },
        {
          id: 2,
          text: 'Curl the weight until your forearms and your biceps touch one another.'
        },
        {
          id: 3,
          text: 'Lower the weight in a controlled manner and repeat.'
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
