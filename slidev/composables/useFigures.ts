import { ref } from 'vue'

interface Figure {
  id: string
  src: string
  alt: string
  caption: string
  source: string
  slide: number
}

const figures = ref<Figure[]>([])
let figureCounter = 0

export const useFigures = () => {
  const registerFigure = (figure: Omit<Figure, 'id' | 'slide'>) => {
    figureCounter++
    const id = `fig-${figureCounter}`

    const slide = (window as any)?.$slidev?.nav?.currentPage || figureCounter

    figures.value.push({
      id,
      ...figure,
      slide
    })

    return { id, number: figureCounter }
  }

  const getFigures = () => figures.value

  const clearFigures = () => {
    figures.value = []
    figureCounter = 0
  }

  return {
    registerFigure,
    getFigures,
    clearFigures
  }
}
