import { ref } from 'vue'

export interface Reference {
  id: string
  type?: 'book' | 'article' | 'web' | 'other'
  authors?: string[]
  title?: string
  year?: number
  pages?: string
  publisher?: string
  url?: string
  accessed?: string
  // Fallback für einfache Text-Referenzen
  text?: string
}

interface RegisteredReference extends Reference {
  citations: number[]
}

const referencesMap = ref<Map<string, RegisteredReference>>(new Map())
let citationCounter = 0

export const useReferences = () => {
  const registerCitation = (reference: Reference): number => {
    citationCounter++
    const refId = reference.id || `ref-${citationCounter}`

    const existing = referencesMap.value.get(refId)
    if (existing) {
      existing.citations.push(citationCounter)
    } else {
      referencesMap.value.set(refId, {
        ...reference,
        id: refId,
        citations: [citationCounter]
      })
    }

    return citationCounter
  }

  const getReferences = () => {
    return Array.from(referencesMap.value.values()).sort((a, b) => {
      if (a.id && b.id) {
        return a.id.localeCompare(b.id)
      }
      return a.citations[0] - b.citations[0]
    })
  }

  const clearReferences = () => {
    referencesMap.value.clear()
    citationCounter = 0
  }

  return {
    registerCitation,
    getReferences,
    clearReferences
  }
}
