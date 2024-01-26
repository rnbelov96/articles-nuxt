<template>
  <section class="articles">
    <div class="container">
      <h1 class="articles__title title">
        Articles
      </h1>
      <article-list
        class="articles__list"
        :article-list="currentItems"
      >
        <template #card="props">
          <article class="card">
            <main class="card__body">
              <div class="card__img-box">
                <img
                  class="card__img"
                  :src="props.image"
                  width="280"
                  height="280"
                  alt="Article image"
                >
              </div>
              <p class="card__preview-text">
                {{ props.preview }}
              </p>
            </main>
            <footer class="card__footer">
              <p class="card__read-more-text">
                Read more
              </p>
            </footer>
          </article>
        </template>
      </article-list>
      <app-navigation
        class="articles__pagination"
        :current-page="currentPage"
        :pagination-list="paginationList"
        :total-pages="totalPages"
        @update="setCurrentPage"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePagination } from '~/common/composables/use-pagination';
import { type Article } from '~/types/index';

const nuxtApp = useNuxtApp();
const { data } = await useFetch<Article[]>('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/', {
  getCachedData(key) {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
  },
});

const items = computed(() => {
  if (data.value) {
    return [...data.value].reverse();
  }
  return null;
});

const {
  currentPage,
  setCurrentPage,
  paginationList,
  totalPages,
  currentItems,
} = usePagination(items, {
  itemsPerPage: 8,
  onPageChange: () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
});
</script>

<style lang="scss" scoped>
.articles {
  padding-top: 7.5rem;
  padding-bottom: 8.75rem;

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

.articles__list {
  margin-top: 3.7rem;

  @include media-breakpoint(sm) {
    margin-top: 1.5rem;
  }
}

.articles__pagination {
  margin-top: 4rem;

  @include media-breakpoint(sm) {
    margin-top: 2rem;
  }
}
</style>
