<template>
  <ul class="article-list">
    <li
      v-for="article in articleList"
      :key="article.id"
      class="article-list__item"
    >
      <nuxt-link :to="`/article/${article.id}`">
        <slot
          v-bind="article"
          name="card"
        />
      </nuxt-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { type Article } from '~/types/index';

defineProps<{
  articleList: Article[]
}>();
</script>

<style lang="scss" scoped>
.article-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.25rem 2rem;

  @include media-breakpoint(md) {
    grid-template-columns: repeat(3, 1fr);
  }

  @include media-breakpoint(sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
}

</style>
