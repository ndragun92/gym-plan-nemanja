<template>
  <div class="my-2">
    <div class="container mx-auto px-2">
      <h1 class="text-lg my-2 text-center">
        Chest | Back | Abs
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
export default class PageWednesday extends Vue {
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
    },
    {
      id: 5,
      name: 'Dumbbell Flys',
      image: '/images/exercises/gif/dumbbell-flys.gif',
      explainImage: '/images/exercises/gif/barbell-bench-press-explain.png',
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Lay flat on the bench and place your feet on the ground.'
        },
        {
          id: 2,
          text: 'Begin the exercise with the dumbbells held together above your chest, elbows slightly bent.'
        },
        {
          id: 3,
          text: 'Simultaneously lower the weights to either side.'
        },
        {
          id: 4,
          text: 'Pause when the weights are parallel to the bench, then raise your arms to the starting position.'
        }
      ],
      sets: []
    },
    {
      id: 6,
      name: 'Lat pull down',
      image: '/images/exercises/gif/lat-pull-down.gif',
      explainImage: '/images/exercises/gif/lat-pull-down-explain.jpg',
      expanded: false,
      description: [],
      sets: []
    },
    {
      id: 7,
      name: 'Lat pull back',
      image: '/images/exercises/gif/lat-pull-back.gif',
      explainImage: '/images/exercises/gif/lat-pull-down-explain.jpg',
      expanded: false,
      description: [],
      sets: []
    },
    {
      id: 8,
      name: 'Seated row narrow grip',
      image: '/images/exercises/gif/seated-row-narrow-grip.gif',
      explainImage: '/images/exercises/gif/lat-pull-down-explain.jpg',
      expanded: false,
      description: [],
      sets: []
    },
    {
      id: 9,
      name: 'Dumbbell Row',
      image: '/images/exercises/gif/dumbbell-row.gif',
      explainImage: '/images/exercises/gif/lat-pull-down-explain.jpg',
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Place your right leg on the top end of the bench so that your knee and shin rest flat on the bench, your foot hanging off the end.'
        },
        {
          id: 2,
          text: 'Bend your torso towards the floor and support yourself with your right arm by placing your palm flat against the bench.'
        },
        {
          id: 3,
          text: 'Grip the weight with your left and, and pull it straight up to the side of your chest. Repeat the motion.'
        },
        {
          id: 4,
          text: 'Switch the supporting leg and arm to work the other side.'
        }
      ],
      sets: []
    },
    {
      id: 10,
      name: 'Kettlebells Row',
      image: '/images/exercises/gif/kattlebells-row.gif',
      explainImage: '/images/exercises/gif/lat-pull-down-explain.jpg',
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Stand with your feet shoulder width apart holding the kettlebell with both hands in front of your thighs.'
        },
        {
          id: 2,
          text: 'Bend forward at the hips bringing the kettlebell to the floor while you slightly bend your knees, keeping your back straight.'
        },
        {
          id: 3,
          text: 'Lift the kettlebell upwards towards your chest and lower - repeat.'
        }
      ],
      sets: []
    },
    {
      id: 11,
      name: 'Crunches',
      image: '/images/exercises/gif/crunches.gif',
      explainImage: '/images/exercises/gif/crunches-explain.jpg',
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Lay flat on your back with your knees bent and your feet flat on the ground, about a foot from your lower back.'
        },
        {
          id: 2,
          text: 'Place your fingertips on your temples with your palms facing out.'
        },
        {
          id: 3,
          text: 'Draw your belly into the base of your spine to engage the muscles, then raise your head and shoulders off the floor. Return to starting position and repeat.'
        }
      ],
      sets: []
    },
    {
      id: 12,
      name: 'Laying Leg Raises',
      image: '/images/exercises/gif/laying-leg-raises.gif',
      explainImage: '/images/exercises/gif/crunches-explain.jpg',
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Lay on your back with your arms palms down on either side.'
        },
        {
          id: 2,
          text: 'Keep your legs together and as straight as possible.'
        },
        {
          id: 3,
          text: 'Slowly raise your legs to a 90° angle, pause at this position, or as high as you can reach your legs, and then slowly lower your legs back down.'
        },
        {
          id: 4,
          text: 'Duration of these movements should be slow so that you do not utilize momentum, enabling you to get the most out of the exercise.'
        }
      ],
      sets: []
    },
    {
      id: 13,
      name: 'Forearm Plank',
      image: '/images/exercises/gif/forearm-plank.gif',
      explainImage: '/images/exercises/gif/crunches-explain.jpg',
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Place forearms on the ground with your elbows bent at a 90° angle aligned beneath your shoulders, with your arms parallel at shoulder-width.'
        },
        {
          id: 2,
          text: 'Your feet should be together, with only your toes touching the floor.'
        },
        {
          id: 3,
          text: 'Lift your belly off the floor and form a straight line from your heels to the crown of your head and hold.'
        }
      ],
      sets: []
    }
  ]

  mounted () {
    const storedData = localStorage.getItem(this.$route.name as string)
    if (storedData && JSON.parse(storedData).length === this.exercises.length) {
      this.exercises = JSON.parse(storedData)
    }
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
