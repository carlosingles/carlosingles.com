<template lang="pug">
  div.app
    div.card-container
      Content(title='Welcome :)')
      footer
        a(href='mailto:hello@carlosingles.com' title='Email' target="_blank")
          i(style='font-size: 24px;').fas.fa-mailbox.block
        a(href='https://github.com/carlosingles' title='GitHub' target="_blank")
          i(style='font-size: 24px;').fab.fa-github.block
        a(href='https://twitter.com/carlosingles_' title='Twitter' target="_blank")
          i(style='font-size: 24px;').fab.fa-twitter.block
    p.last-updated last updated(28 June 2020)
</template>

<style lang="postcss">
.app {
  @apply flex flex-col flex-grow;
  .card-container {
    @apply p-3 mx-auto flex flex-col;
    @screen md {
      @apply p-0 pt-32;
      @apply flex-row;
    }
  }
}
.last-updated {
  @apply mt-auto mb-6 text-center text-gray-600;
}
footer {
  @apply flex flex-row justify-center;
  @apply my-6;
  @apply text-4xl text-gray-700 text-center;
  min-height: 1.75em;
  @screen md {
    @apply flex-col;
    @apply mt-auto mb-0;
    @apply border-solid border-2 border-gray-300;
    border-left-color: theme('colors.gray.400');
    border-right-color: theme('colors.gray.400');
    border-bottom-color: #f38423;
  }
  a {
    @apply mx-3 p-3 bg-gray-300 text-center;
    @apply border-b-2 border-solid;
    border-color: #f38423;
    width: 48px;
    height: 48px;
    @screen md {
      @apply mx-0;
      @apply border-b-0;
    }
    &:hover {
      background-color: #fde6d2;
    }
  }
}
</style>