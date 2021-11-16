export interface ExerciseSetInterface {
    id: number,
    weight: number,
    reps: number,
    completed: boolean
}

export interface ExerciseInterface {
    id: number
    name: string
    image: string
    explainImage: string
    expanded: boolean
    description: {
        id: number,
        text: string
    }[]
    sets: ExerciseSetInterface[]
}
