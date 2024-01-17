<template>
  <header class="header">
    <div class="container container--large">
      <div class="header__content">
        <nuxt-link to="/">
          <svg-icon
            name="logo"
            width="84"
            height="25"
            class="header__logo"
          />
        </nuxt-link>
        <div class="header__right-side">
          <nav class="header__nav">
            <a
              href="#"
              class="header__nav-link"
            >
              Works
            </a>
            <a
              href="#"
              class="header__nav-link"
            >
              About
            </a>
          </nav>
          <button class="header__burger">
            <span />
            <span />
          </button>
          <div class="header__btn-box">
            <button class="header__lang-btn">
              <svg-icon
                name="lang-eng"
                width="24"
                height="24"
              />
              <span class="visually-hidden">Change Language</span>
            </button>
            <app-button class="header__btn">
              Let’s work
            </app-button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 2.2rem 0;
}

.header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.header__nav {
  display: flex;
  gap: 3.5rem;

  @include media-breakpoint(sm) {
    display: none;
  }
}

.header__nav-link {
  font-size: 1.25rem;
  line-height: 100%;
}

.header__right-side {
  display: flex;
  align-items: center;
  gap: 5.7rem;

  @include media-breakpoint(sm) {
    gap: 1.5rem;
  }
}

.header__burger {
  width: rem(40);
  height: rem(40);
  border: 1.6px solid $black;
  border-radius: rem(999);
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 0;
  z-index: 777;
  background: transparent;
  flex-shrink: 0;
  display: none;
  flex-direction: column;

  span {
    transition: transform .3s ease;
    display: block;
    width: 16px;
    height: 1px;
    background-color: $black;
    margin: 2px 0;
  }

  @include media-breakpoint(sm) {
    display: flex;
  }
}

.header__btn-box {
  display: flex;
  gap: 1rem;
  align-items: center;

  @include media-breakpoint(sm) {
    display: none;
  }
}

.header__lang-btn {
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.10);
  display: flex;
  justify-content: center;
  align-items: center;
}

.header__btn {
  @include media-breakpoint(sm) {
    display: none;
  }
}
</style>
