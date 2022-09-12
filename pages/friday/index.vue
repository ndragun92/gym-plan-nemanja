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
      name: 'Back Barbell Wrist Curl',
      image: require('~/static/images/exercises/gif/back-barbell-wrist-curl.gif'),
      explainImage: require('~/static/images/exercises/gif/wrist-curl-explain.png'),
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
      image: require('~/static/images/exercises/gif/reverse-curl.gif'),
      explainImage: require('~/static/images/exercises/gif/wrist-curl-explain.png'),
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
    },
    {
      id: 6,
      name: 'Squats',
      image: require('~/static/images/exercises/gif/squats.gif'),
      explainImage: require('~/static/images/exercises/gif/squats-explain.png'),
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Stand with your feet shoulder width apart.'
        },
        {
          id: 2,
          text: 'Flex your knees and hips and sit back into the squat while lowering your body'
        },
        {
          id: 3,
          text: 'Continue down to full depth'
        },
        {
          id: 4,
          text: 'Return to starting position.'
        }
      ],
      sets: []
    },
    {
      id: 7,
      name: 'Forward Lunges',
      image: require('~/static/images/exercises/gif/forward-lunges.gif'),
      explainImage: require('~/static/images/exercises/gif/squats-explain.png'),
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Step forward with one leg.'
        },
        {
          id: 2,
          text: 'Lower your body until your rear knee nearly touches the ground.'
        },
        {
          id: 3,
          text: 'Ensure you remain upright, and your front knee stay above the front foot.'
        },
        {
          id: 4,
          text: 'Push off the floor with your front foot until you return to the starting position. Switch legs.'
        }
      ],
      sets: []
    },
    {
      id: 8,
      name: 'Calf Raises',
      image: require('~/static/images/exercises/gif/calf-raises.gif'),
      explainImage: require('~/static/images/exercises/gif/calf-raises-explain.png'),
      expanded: false,
      description: [
        {
          id: 1,
          text: 'Balance on the balls of your feet on the platform or plates, leaning forward to use the wall to assist with balance.'
        },
        {
          id: 2,
          text: 'Lower the heels of your feet towards the ground and pause, then push through the balls of your feet like you are standing tip toe, pausing at the apex of the motion.'
        },
        {
          id: 3,
          text: 'Repeat as necessary.'
        }
      ],
      sets: []
    },
    {
      id: 9,
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
      id: 10,
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
      id: 11,
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
