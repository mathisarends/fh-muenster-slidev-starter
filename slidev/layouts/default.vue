<script setup>
import Title from './Title.vue'
import Logo from './Logo.vue'
import Footer from './Footer.vue'
import FootnoteList from './footnote/List.vue'
</script>

<template>
  <div class="h-full flex flex-col px-8 pt-4 pb-4 bg-white relative">
    <div class="flex justify-between items-start mb-1">
      <Title 
        :title="$frontmatter.title || 'Grundlegende Begriffe'" 
        :subtitle="$frontmatter.subtitle"
      />
      <Logo />
    </div>

    <div class="flex-1 py-3.5 space-y-3.5">
        <slot />
    </div>

    <FootnoteList 
      v-if="$frontmatter.footnotes" 
      :items="$frontmatter.footnotes" 
      :dividerLength="100" 
    />
    
    <Footer 
      :presentation="$frontmatter.presentation"
      :chapter="$frontmatter.chapter"
      :section="$frontmatter.section"
      :currentPage="$slidev.nav.currentPage"
    />
  </div>
</template>