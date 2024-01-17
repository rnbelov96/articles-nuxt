<template>
  <div
    class="pagination"
  >
    <button
      v-show="currentPage !== 1"
      class="pagination__btn pagination__btn--nav pagination__btn--nav--prev"
      @click="$emit('update', currentPage - 1)"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 7.5L14.5 12.5L9.5 17.5"
          stroke="#494949"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <button
      v-for="page in paginationList"
      :key="page"
      class="pagination__btn"
      :disabled="page === 0"
      :class="{
        'pagination__btn--active': Number(currentPage) === Number(page),
      }"
      @click="$emit('update', page)"
    >
      {{ page || '...' }}
    </button>
    <button
      v-show="currentPage !== totalPages"
      class="pagination__btn pagination__btn--nav"
      @click="$emit('update', currentPage + 1)"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 7.5L14.5 12.5L9.5 17.5"
          stroke="#494949"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { type NavigationProps } from '~/types/index';

defineProps<NavigationProps>();

defineEmits<{
  update: [page: number]
}>();
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  gap: 0.5rem;
}

.pagination__btn {
  border-radius: 0.75rem;
  background: $light-grey;
  width: 2.75rem;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 2.7rem;

  &--active {
    background-color: $black;
    color: white;
  }

  &--nav {
    border: 1px solid #E8E8E8;
    background-color: transparent;

    &--prev svg {
      transform: rotate(180deg);
    }
  }
}
</style>
