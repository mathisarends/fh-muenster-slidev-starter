<script setup>
import { getCurrentInstance, provide, computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import Title from './Title.vue'
import Logo from './Logo.vue'
import Footer from './Footer.vue'
import FootnoteList from './footnote/List.vue'
import { provideFootnotes } from '@composables/useFootnotes'

const { $frontmatter, $slidev } = useSlideContext()

const instance = getCurrentInstance()
const { register, footnotes } = provideFootnotes(instance)

provide('registerFootnote', register)

const allFootnotes = computed(() => {
  const staticFootnotes = ($frontmatter.value?.footnotes || []).map((text, index) => ({
    number: index + 1,
    text
  }))

  const dynamicFootnotes = footnotes.value.map(item => ({
    number: staticFootnotes.length + item.number,
    text: item.text
  }))

  return [...staticFootnotes, ...dynamicFootnotes]
})
</script>

<template>
  <div class="h-full flex flex-col px-8 pt-4 pb-4 bg-white relative">
    <div class="flex justify-between items-start mb-1">
      <Title
        :title="$frontmatter?.title || 'Grundlegende Begriffe'"
        :subtitle="$frontmatter?.subtitle"
      />
      <Logo />
    </div>

    <div class="flex-1 py-3.5 space-y-3.5">
      <slot />
    </div>

    <FootnoteList v-if="allFootnotes.length > 0" :items="allFootnotes" :divider-length="100" />

    <Footer
      :presentation="$frontmatter?.presentation"
      :chapter="$frontmatter?.chapter"
      :section="$frontmatter?.section"
      :current-page="$slidev?.nav.currentPage"
    />
  </div>
</template>
