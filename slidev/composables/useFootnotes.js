import { reactive, computed } from 'vue'

const slideFootnotes = new WeakMap()

export function provideFootnotes(slideContext) {
  if (!slideFootnotes.has(slideContext)) {
    slideFootnotes.set(
      slideContext,
      reactive({
        items: new Map(),
        counter: 0
      })
    )
  }

  const state = slideFootnotes.get(slideContext)

  const register = text => {
    const id = text
    if (!state.items.has(id)) {
      state.counter++
      state.items.set(id, { number: state.counter, text })
    }
    return state.items.get(id).number
  }

  const footnotes = computed(() => {
    return Array.from(state.items.values()).sort((a, b) => a.number - b.number)
  })

  return { register, footnotes }
}
