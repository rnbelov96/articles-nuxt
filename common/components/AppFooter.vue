<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__top-box">
          <p class="footer__title-label">
            Is there a project?
          </p>
          <div class="footer__body">
            <button class="footer__title-btn">
              <h3 class="footer__title">
                Let’s work together
              </h3>
            </button>
            <address class="footer__info-box">
              <div class="footer__contacts-box">
                <p class="footer__contacts-label">
                  For all questions
                </p>
                <a
                  href="tel:+79202780068"
                  class="footer__phone"
                >+7 (920) 278—00—68</a>
                <a
                  href="mailto:qtim@agency.com"
                  class="footer__mail"
                >qtim@agency.com</a>
              </div>
              <div class="footer__address-container">
                <div class="footer__address-box">
                  <p class="footer__address-label">
                    Office in Russia
                  </p>
                  <p class="footer__address-text">
                    139 Ruben Station Lake Drew, NM 52678
                  </p>
                  <a
                    href="#"
                    class="footer__address-link"
                    aria-label="Link to contacts"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="32"
                        height="32"
                        rx="16"
                        fill="#101010"
                      />
                      <path
                        d="M17.5 20.5L20.5 11.5L11.5 14.5L15.25 16.75L17.5 20.5Z"
                        stroke="#E2BEFF"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                <div class="footer__address-box">
                  <p class="footer__address-label">
                    Office in Dubai
                  </p>
                  <p class="footer__address-text">
                    139 Ruben Station Lake Drew, NM 52678
                  </p>
                  <a
                    href="#"
                    class="footer__address-link"
                    aria-label="Link to contacts"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="32"
                        height="32"
                        rx="16"
                        fill="#101010"
                      />
                      <path
                        d="M17.5 20.5L20.5 11.5L11.5 14.5L15.25 16.75L17.5 20.5Z"
                        stroke="#E2BEFF"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </address>
          </div>
        </div>
        <div class="footer__bottom-box">
          <div class="footer__link-box">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__link"
            >Facebook</a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__link"
            >Instagram</a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__link"
            >Telegram</a>
          </div>
          <button class="footer__btn">
            <span>Go</span>
          </button>
          <div class="footer__link-box">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__link"
            >Behance</a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__link"
            >Linkedn</a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__link"
            >Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $pink;
  padding-top: 8.75rem;
  padding-bottom: 2rem;
  overflow: clip;

  @include media-breakpoint(sm) {
    padding-top: 4rem;
  }
}

.footer__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer__title-label {
  line-height: 1.2;
  letter-spacing: 0.01rem;
}

.footer__body {
  display: flex;
  gap: 23rem;
  align-items: flex-start;
  margin-top: 3.5rem;

  @include media-breakpoint(lg) {
    gap: 2rem;
    justify-content: space-between;
  }

  @include media-breakpoint(md) {
    flex-wrap: wrap;
    gap: 4rem;
    margin-top: 1.5rem;
  }
}

.footer__title {
  font-size: 7rem;
  line-height: 1;
  background-image: linear-gradient(90deg,$black 0,$black);
  background-repeat: repeat-x;
  background-position: 0 100%;
  background-size: 100% 2px;
  display: inline;

  @include media-breakpoint(sm) {
    font-size: rem(72);
  }
}

.footer__title-btn {
  text-align: left;
  max-width: 33rem;
  width: 100%;
  display: block;
}

.footer__info-box {
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  max-width: 11rem;
  flex-shrink: 0;

  @include media-breakpoint(sm) {
    max-width: 100%;
  }
}

.footer__address-container {
  display: flex;
  flex-direction: column;
  gap: 2.25rem;

  @include media-breakpoint(sm) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
}

.footer__contacts-label,
.footer__phone,
.footer__mail,
.footer__address-label,
.footer__address-text {
  line-height: 120%;
  display: block;
}

.footer__phone {
  margin-top: 0.75rem;
}

.footer__mail {
  margin-top: 0.25rem;
}

.footer__address-text {
  margin-top: 0.75rem;
}

.footer__address-link {
  display: block;
  margin-top: 0.25rem;
  width: 2rem;
  height: 2rem;
}

.footer__bottom-box {
  margin-top: 17rem;
  display: flex;
  justify-content: space-between;
  position: relative;

  @include media-breakpoint(md) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }

  @include media-breakpoint(sm) {
    margin-top: 10rem;
  }
}

.footer__link-box {
  display: flex;
  gap: 2rem;
  position: relative;
  z-index: 6;

  @include media-breakpoint(md) {
    gap: 0.5rem;
  }
}

.footer__link {
  background-image: linear-gradient(90deg,$black 0,$black);
  background-repeat: repeat-x;
  background-position: 0 100%;
  background-size: 100% 1px;
  line-height: 120%;

  @include media-breakpoint(md) {
    color: white;
  }
}

.footer__btn {
  width: 358px;
  height: 358px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: $black;
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  color: #fff;
  bottom: -210px;
  z-index: 5;
  transition: all .3s ease;

  &:hover {
    transform: translateX(-50%) scale(1.32);

    @include media-breakpoint(md) {
      transform: translateX(-50%);
    }
  }

  span {
    position: absolute;
    top: 122px;
    left: 50%;
    transform: translateX(-50%);
    transition: opacity .2s ease;
    pointer-events: none;

    @include media-breakpoint(md) {
      top: 40px;
    }
  }
}
</style>
