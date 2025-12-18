<script setup>
import FootnoteList from '../components/footnote/List.vue'
</script>

<template>
  <div class="h-full flex flex-col px-8 py-4 bg-white relative">
    <!-- Header -->
    <div class="flex justify-between items-start mb-1">
      <div class="flex-1 mt-2">
        <h1 class="text-4xl font-extrabold text-[#003978] m-0 leading-tight">
          {{ $frontmatter.title || 'Grundlegende Begriffe' }}
        </h1>
        <p v-if="$frontmatter.subtitle" class="text-xl -mt-0.5 text-[#4D4D4D] font-normal">
          {{ $frontmatter.subtitle }}
        </p>
      </div>
        
      <div class="ml-8 -mr-1">
        <img 
          src="/images/fh-logo.jpg" 
          alt="FH Münster" 
          class="h-14"
        />
      </div>
    </div>

    <!-- Content -->
    <div class="flex-1">
      <slot />
    </div>

    <!-- Fußnoten -->
    <FootnoteList 
      v-if="$frontmatter.footnotes" 
      :items="$frontmatter.footnotes" 
      :dividerLength="100" 
    />
    
    <!-- Footer -->
    <div class="flex justify-between items-center py-1.75 px-8 -mx-8 -mb-4 mt-4 bg-gradient-to-r from-[#002855] to-[#003366]">
      <div class="text-[#D9D9D9] text-[11px]">
        <span v-if="$frontmatter.presentation">{{ $frontmatter.presentation }}</span>
        <span v-if="$frontmatter.presentation && $frontmatter.chapter"> | </span>
        <span v-if="$frontmatter.chapter">{{ $frontmatter.chapter }}</span>
        <span v-if="$frontmatter.chapter && $frontmatter.section"> | </span>
        <span v-if="$frontmatter.section">{{ $frontmatter.section }}</span>
      </div>
      <span class="text-[#D9D9D9] text-[11px]">{{ $slidev.nav.currentPage }}</span>
    </div>
  </div>
</template>