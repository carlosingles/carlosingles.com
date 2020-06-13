<template lang="pug">
  div.flex.flex-col.flex-grow
    div(class='md:flex-row').pt-32.mx-auto.flex.flex-col
      Content(title='Welcome :)')
      footer
        a(href='mailto:hello@carlosingles.com' title='Email')
          i(style='font-size: 32px;').fas.fa-mailbox.block
        a(href='https://github.com/carlosingles' title='GitHub')
          i.fab.fa-github.block
        a(href='https://twitter.com/carlosingles_' title='Twitter')
          i.fab.fa-twitter.block
    p.mt-auto.mb-6.text-center.text-gray-600 last updated(13 june 2020)
</template>

<style lang="stylus">
footer
  @apply flex flex-row justify-center;
  @apply my-6;
  @apply text-4xl text-gray-700 text-center;
  a
    @apply mx-3 p-3 bg-gray-300 text-center;
    @apply border-b-2 border-solid;
    border-color: #f38423;
    &:hover
      background-color: #fde6d2;
@screen md
  footer
    @apply flex-col;
    @apply mt-auto mb-0;
    @apply border-b-2;
    border-color: #f38423;
    a
      @apply border-b-0;
</style>