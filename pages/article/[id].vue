<template>
  <section
    v-if="article"
    class="article"
  >
    <div class="container">
      <h1 class="title">
        {{ article.title }}
      </h1>

      <div class="article__img-box">
        <img
          class="article__img"
          width="1216"
          height="700"
          alt="Article image"
          :src="article.image"
        >
      </div>
      <div class="article__text-box">
        <p class="article__text-label">
          About
        </p>
        <p class="article__text">
          {{ article.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type Article } from '~/types/index';

const route = useRoute();
const { data: article } = await useFetch<Article>(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${route.params.id}`);
</script>

<style lang="scss" scoped>
.article {
  padding-top: 7.5rem;
  padding-bottom: 5rem;

  @include media-breakpoint(lg) {
    padding-top: 6rem;
    padding-bottom: 7rem;
  }

  @include media-breakpoint(md) {
    padding-top: 4.5rem;
    padding-bottom: 5.5rem;
  }

  @include media-breakpoint(sm) {
    padding-top: 2.5rem;
    padding-bottom: 3rem;
  }
}

.article__img-box {
  margin-top: 4.5rem;
}

.article__img {
  width: 100%;
  height: auto;
  max-height: 43rem;
  position: relative;
  object-fit: cover;
}

.article__text-box {
  margin-top: 5rem;
}

.article__text {
  margin-top: 2rem;
  font-size: 2.25rem;
  line-height: 124%;
  max-width: 43rem;
}
</style>
