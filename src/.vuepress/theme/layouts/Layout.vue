<template lang="pug">
  div.app
    div.card-container
      Content(title='Welcome :)')
      footer
        a(href='mailto:hello@carlosingles.com' title='Email')
          i(style='font-size: 32px;').fas.fa-mailbox.block
        a(href='https://github.com/carlosingles' title='GitHub')
          i.fab.fa-github.block
        a(href='https://twitter.com/carlosingles_' title='Twitter')
          i.fab.fa-twitter.block
    p.last-updated last updated(13 june 2020)
</template>

<style lang="postcss">
.app {
  @apply flex flex-col flex-grow;
  .card-container {
    @apply pt-32 mx-auto flex flex-col;
    @screen md {
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
  @screen md {
    @apply flex-col;
    @apply mt-auto mb-0;
    @apply border-b-2;
    border-color: #f38423;
  }
  a {
    @apply mx-3 p-3 bg-gray-300 text-center;
    @apply border-b-2 border-solid;
    border-color: #f38423;
    @screen md {
      @apply border-b-0;
    }
    &:hover {
      background-color: #fde6d2;
    }
  }
}
</style>