<template lang="pug">
  div.hero-card
    img(src='/assets/logo.svg').logo
    h1 Hello 
      i.fad.fa-comment-alt-smile.fa-sm(style='--fa-primary-color: #f38423; --fa-secondary-color: #fabf89;')
    ul.fa-ul
      li
        span.fa-li
          i.fad.fa-lg.fa-user-circle(style='--fa-primary-color: #f38423; --fa-secondary-color: #fabf89;')
        span.text I'm Carlos Ingles and I'm a full stack developer based in Melbourne.
      li
        span.fa-li
          i.fad.fa-lg.fa-keyboard(style='--fa-primary-color: #f38423; --fa-secondary-color: #fabf89;')
        span.text Currently working with TS, JS, HTML, CSS with some occasional Swift and C#.
      li
        span.fa-li
          i.fad.fa-lg.fa-browser(style='--fa-primary-color: #f38423; --fa-secondary-color: #fabf89;')
        span.text My experience is working with online applications for both mobile and desktop platforms.
      li
        span.fa-li
          i.fad.fa-lg.fa-mailbox(style='--fa-primary-color: #f38423; --fa-secondary-color: #fabf89;')
        span.text I rarely use social platforms, but I am available via email at: 
          a(href="mailto:hello@carlosingles.com") hello@carlosingles.com
</template>


<style lang="postcss">
.hero-card {
  @apply relative;
  @apply max-w-full self-center;
  @apply p-4 pb-24 mx-0;
  @apply border-solid border-2 border-gray-100;
  @apply bg-white text-center;
  border-bottom-color: #f38423;
  border-left-color: theme('colors.gray.300');
  border-right-color: theme('colors.gray.300');
  @screen md {
    @apply p-8 pb-24;
    @apply max-w-2xl;
    @apply text-left;
    @apply ml-0 mr-16 pr-24;
  }
  img.logo {
    height: 42px;
    @apply absolute;
    @apply transform translate-x-1/2;
    @apply bottom-0 right-1/2;
    @screen md {
      @apply translate-x-0;
      @apply right-0;
    }
  }
  ul.fa-ul {
    @apply text-xl;
    li {
      @apply my-2;
    }
  }
  h1 {
    @apply mb-4;
    .fa-user-circle {
      @apply mb-1 ml-1;
    }
  }
}
</style>