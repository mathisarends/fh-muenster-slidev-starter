import { ref } from 'vue'

interface Figure {
  id: string
  src: string
  alt: string
  caption: string
  source: string
  number: number
}

const figuresMap = ref<Map<string, Figure>>(new Map())

export const useFigures = () => {
  const registerFigure = (uniqueId: string, figure: Omit<Figure, 'id' | 'number'>) => {
    const existing = figuresMap.value.get(uniqueId)
    if (existing) {
      return { id: existing.id, number: existing.number }
    }

    const number = figuresMap.value.size + 1
    const id = `fig-${number}`

    const newFigure: Figure = {
      id,
      ...figure,
      number
    }

    figuresMap.value.set(uniqueId, newFigure)
    return { id, number }
  }

  const getFigures = () => {
    return Array.from(figuresMap.value.values()).sort((a, b) => a.number - b.number)
  }

  const clearFigures = () => {
    figuresMap.value.clear()
  }

  const hasFigure = (uniqueId: string) => {
    return figuresMap.value.has(uniqueId)
  }

  return {
    registerFigure,
    getFigures,
    clearFigures,
    hasFigure
  }
}
