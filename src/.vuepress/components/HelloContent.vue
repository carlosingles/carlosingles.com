<template lang="pug">
  div.hero-card
    img(src='/assets/logo.svg').logo
    h1.mb-4 Hello 
      i.fad.fa-comment-alt-smile.fa-sm.mb-1.ml-1(style='--fa-primary-color: #f38423; --fa-secondary-color: #fabf89;')
    ul.fa-ul.text-xl
      li
        span.fa-li
          i.fad.fa-lg.fa-user-circle(style='--fa-primary-color: #f38423; --fa-secondary-color: #fabf89;')
        | I'm Carlos Ingles and I'm a full stack developer based in Melbourne.
      li
        span.fa-li
          i.fad.fa-lg.fa-keyboard(style='--fa-primary-color: #f38423; --fa-secondary-color: #fabf89;')
        | Currently working with TS, JS, HTML, CSS with some occasional Swift and C#.
      li
        span.fa-li
          i.fad.fa-lg.fa-browser(style='--fa-primary-color: #f38423; --fa-secondary-color: #fabf89;')
        | My experience is working with online applications for both mobile and desktop platforms.
      li
        span.fa-li
          i.fad.fa-lg.fa-mailbox(style='--fa-primary-color: #f38423; --fa-secondary-color: #fabf89;')
        | I rarely use social platforms, but I am available via email at: 
        a(href="mailto:hello@carlosingles.com") hello@carlosingles.com
</template>


<style lang="stylus">
.hero-card
  @apply relative;
  @apply max-w-2xl self-center;
  @apply p-8 pb-24 mx-16;
  @apply border-solid border-2 border-gray-100; // border
  @apply bg-white text-center; // content
  border-bottom-color: #f38423;
  border-left-color: theme('colors.gray.300');
  border-right-color: theme('colors.gray.300');
  img.logo
    height: 42px;
    @apply absolute;
    @apply transform translate-x-1/2;
    @apply bottom-0 right-1/2;
  ul.fa-ul
    li
      @apply my-2;

// Desktop Styles
@screen md
  .hero-card
    @apply text-left;
    @apply ml-0 mr-16 pr-24;
    img.logo
      @apply translate-x-0;
      @apply right-0;
</style>