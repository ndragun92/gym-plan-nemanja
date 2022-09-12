<template>
  <div class="my-2">
    <div class="container mx-auto px-2">
      <h1 class="text-lg my-2 text-center">
        Arms | Shoulders | Abs
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
      name: 'Dumbbell Curl',
      image: require('~/static/images/exercises/gif/dumbbell-curl.gif'),
      explainImage: require('~/static/images/exercises/gif/dumbbell-curl-explain.png'),
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
      image: require('~/static/images/exercises/gif/hammer-curl.gif'),
      explainImage: require('~/static/images/exercises/gif/dumbbell-curl-explain.png'),
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
      image: require('~/static/images/exercises/gif/barbell-curl.gif'),
      explainImage: require('~/static/images/exercises/gif/dumbbell-curl-explain.png'),
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
      name: 'Wrist Curl',
      image: require('~/static/images/exercises/gif/wrist-curl.gif'),
      explainImage: require('~/static/images/exercises/gif/wrist-curl-explain.png'),
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Grip the dumbbell with your palm facing upwards with your forearm rested against the bench.'
        },
        {
          id: 2,
          text: 'Slowly curl your wrist upwards in a semicircular motion.'
        },
        {
          id: 3,
          text: 'Return to starting position and repeat.'
        }
      ],
      sets: []
    },
    {
      id: 5,
      name: 'Barbell Wrist Curl',
      image: require('~/static/images/exercises/gif/barbell-wrist-curl.gif'),
      explainImage: require('~/static/images/exercises/gif/wrist-curl-explain.png'),
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Grab a straight bar with a supinated (underhand) grip.'
        },
        {
          id: 2,
          text: 'Kneel down next to a flat bench and place your forearms on the bench with your wrists just off the bench.'
        },
        {
          id: 3,
          text: 'Let the barbell pull down on your wrists until they are extended.'
        },
        {
          id: 4,
          text: 'Curl the barbell until your wrists are fully flexed.'
        },
        {
          id: 5,
          text: 'Lower in a controlled manner and repeat.'
        }
      ],
      sets: []
    },
    {
      id: 6,
      name: 'Seated DB Shrugs',
      image: require('~/static/images/exercises/gif/seated-db-shrugs.gif'),
      explainImage: require('~/static/images/exercises/gif/seated-db-shrugs-explain.png'),
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Sit on a bench with dumbbells in both hands, palms facing your body, back straight.'
        },
        {
          id: 2,
          text: 'Elevate your shoulders and hold the contracted position at the apex of the motion.'
        },
        {
          id: 3,
          text: 'Slowly lower your shoulders back to starting position.'
        }
      ],
      sets: []
    },
    {
      id: 7,
      name: 'Seated Dumbbell Shoulder Press',
      image: require('~/static/images/exercises/gif/seated-dumbbell-shoulder-press.gif'),
      explainImage: require('~/static/images/exercises/gif/seated-dumbbell-shoulder-press-explain.png'),
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.'
        },
        {
          id: 2,
          text: 'Raise the dumbbells upwards and pause at the contracted position.'
        },
        {
          id: 3,
          text: 'Lower the weights back to starting position.'
        }
      ],
      sets: []
    },
    {
      id: 8,
      name: 'Side Lateral Raises',
      image: require('~/static/images/exercises/gif/side-lateral-raises.gif'),
      explainImage: require('~/static/images/exercises/gif/seated-dumbbell-shoulder-press-explain.png'),
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Stand up straight with dumbbells at either side, palms facing your hips.'
        },
        {
          id: 2,
          text: 'Raise your arms on either side with a slight bend in your elbow until they are parallel with the floor. Pause at the top of the motion.'
        },
        {
          id: 3,
          text: 'Slowly return your arms down to starting position.'
        }
      ],
      sets: []
    },
    {
      id: 9,
      name: 'Front Raises',
      image: require('~/static/images/exercises/gif/front-raises.gif'),
      explainImage: require('~/static/images/exercises/gif/seated-dumbbell-shoulder-press-explain.png'),
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Grab two dumbbells while standing upright with the dumbbells at your side.'
        },
        {
          id: 2,
          text: 'Raise the two dumbbells with your elbows being fully extended until the dumbbells are eye level.'
        },
        {
          id: 3,
          text: 'Lower the weights in a controlled manner to the starting position and repeat.'
        }
      ],
      sets: []
    },
    {
      id: 10,
      name: 'Crunches',
      image: require('~/static/images/exercises/gif/crunches.gif'),
      explainImage: require('~/static/images/exercises/gif/crunches-explain.jpg'),
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
      id: 11,
      name: 'Laying Leg Raises',
      image: require('~/static/images/exercises/gif/laying-leg-raises.gif'),
      explainImage: require('~/static/images/exercises/gif/crunches-explain.jpg'),
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
      id: 12,
      name: 'Forearm Plank',
      image: require('~/static/images/exercises/gif/forearm-plank.gif'),
      explainImage: require('~/static/images/exercises/gif/crunches-explain.jpg'),
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
