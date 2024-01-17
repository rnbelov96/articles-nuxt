<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  font-size: 1.25rem;
  line-height: 100%;
  color: white;
  background-color: $black;
  border-radius: 62.4375rem;
  padding: 1rem 2rem;
  height: 3.25rem;

  @include media-breakpoint(sm) {
    padding: 0.5rem 1.5rem;
    height: rem(40);
  }
}
</style>
