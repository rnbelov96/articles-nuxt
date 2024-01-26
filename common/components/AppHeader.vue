<template>
  <header class="header">
    <div class="container container--large">
      <div class="header__content">
        <nuxt-link :to="{name: 'index'}">
          <svg
            width="84"
            height="25"
            viewBox="0 0 84 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="header__logo"
          >
            <path
              d="M13.2594 25C10.5869 25 8.2457 24.4981 6.23567 23.4944C4.24848 22.4907 2.70669 21.0551 1.61031 19.1877C0.53677 17.3203 0 15.1494 0 12.6751C0 10.1774 0.54819 7.97152 1.64457 6.05742C2.76379 4.11998 4.28274 2.62605 6.2014 1.57563C8.14291 0.52521 10.3128 0 12.7112 0C15.0867 0 17.2337 0.52521 19.1524 1.57563C21.0939 2.62605 22.6129 4.11998 23.7092 6.05742C24.8285 7.97152 25.3881 10.1774 25.3881 12.6751C25.3881 14.3557 25.0226 15.9664 24.2917 17.507C23.5608 19.0243 22.6129 20.2264 21.4479 21.1134H25.8335V25H13.2594ZM12.7112 20.9734C15.2465 20.9734 17.2566 20.2498 18.7413 18.8025C20.2488 17.3553 21.0025 15.3128 21.0025 12.6751C21.0025 10.9477 20.6371 9.43044 19.9062 8.12325C19.1752 6.81606 18.1816 5.81233 16.9254 5.11205C15.6691 4.41177 14.2644 4.06162 12.7112 4.06162C11.158 4.06162 9.7418 4.41177 8.46269 5.11205C7.20642 5.81233 6.21282 6.81606 5.4819 8.12325C4.75098 9.43044 4.38552 10.9477 4.38552 12.6751C4.38552 15.3361 5.12786 17.3903 6.61255 18.8375C8.12007 20.2614 10.1529 20.9734 12.7112 20.9734Z"
              fill="#101010"
            />
            <path
              d="M33.9455 4.20168H26.7163V0.52521H45.526V4.20168H38.2968V25H33.9455V4.20168Z"
              fill="#101010"
            />
            <path
              d="M49.6329 0.52521H53.9842V25H49.6329V0.52521Z"
              fill="#101010"
            />
            <path
              d="M59.4685 0.52521H63.717L71.7342 18.4524L79.7515 0.52521H84V25H79.8886V9.10364L72.7621 25H70.7064L63.5799 9.10364V25H59.4685V0.52521Z"
              fill="#101010"
            />
          </svg>
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1579_162)">
                  <path
                    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                    fill="#F0F0F0"
                  />
                  <path
                    d="M2.48056 4.69434C1.53796 5.92073 0.82719 7.33424 0.41333 8.86982H6.65605L2.48056 4.69434Z"
                    fill="#0052B4"
                  />
                  <path
                    d="M23.5866 8.86977C23.1728 7.33424 22.4619 5.92073 21.5194 4.69434L17.344 8.86977H23.5866Z"
                    fill="#0052B4"
                  />
                  <path
                    d="M0.41333 15.1309C0.827236 16.6664 1.538 18.0799 2.48056 19.3063L6.65591 15.1309H0.41333Z"
                    fill="#0052B4"
                  />
                  <path
                    d="M19.3058 2.48086C18.0794 1.53825 16.6659 0.82748 15.1304 0.413574V6.65625L19.3058 2.48086Z"
                    fill="#0052B4"
                  />
                  <path
                    d="M4.69409 21.5196C5.92048 22.4622 7.334 23.173 8.86953 23.5869V17.3442L4.69409 21.5196Z"
                    fill="#0052B4"
                  />
                  <path
                    d="M8.86948 0.413574C7.33395 0.82748 5.92044 1.53825 4.69409 2.48081L8.86948 6.6562V0.413574Z"
                    fill="#0052B4"
                  />
                  <path
                    d="M15.1304 23.5869C16.6659 23.173 18.0794 22.4622 19.3058 21.5196L15.1304 17.3442V23.5869Z"
                    fill="#0052B4"
                  />
                  <path
                    d="M17.344 15.1309L21.5194 19.3063C22.4619 18.08 23.1728 16.6664 23.5866 15.1309H17.344Z"
                    fill="#0052B4"
                  />
                  <path
                    d="M23.8984 10.4348H13.5653H13.5653V0.101578C13.0529 0.034875 12.5305 0 12 0C11.4694 0 10.9471 0.034875 10.4348 0.101578V10.4347V10.4347H0.101578C0.034875 10.9471 0 11.4695 0 12C0 12.5306 0.034875 13.0529 0.101578 13.5652H10.4347H10.4347V23.8984C10.9471 23.9651 11.4694 24 12 24C12.5305 24 13.0529 23.9652 13.5652 23.8984V13.5653V13.5653H23.8984C23.9651 13.0529 24 12.5306 24 12C24 11.4695 23.9651 10.9471 23.8984 10.4348Z"
                    fill="#D80027"
                  />
                  <path
                    d="M15.1304 15.1304L20.4852 20.4852C20.7315 20.239 20.9664 19.9817 21.1906 19.7148L16.6061 15.1304H15.1304V15.1304Z"
                    fill="#D80027"
                  />
                  <path
                    d="M8.86951 15.1304H8.86941L3.51465 20.4851C3.76084 20.7314 4.01823 20.9664 4.28504 21.1905L8.86951 16.6059V15.1304Z"
                    fill="#D80027"
                  />
                  <path
                    d="M8.86951 8.8696V8.86951L3.5147 3.51465C3.26842 3.76084 3.03348 4.01823 2.80933 4.28504L7.39384 8.86955H8.86951V8.8696Z"
                    fill="#D80027"
                  />
                  <path
                    d="M15.1304 8.8698L20.4852 3.5149C20.239 3.26862 19.9817 3.03368 19.7148 2.80957L15.1304 7.39409V8.8698Z"
                    fill="#D80027"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1579_162">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
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
