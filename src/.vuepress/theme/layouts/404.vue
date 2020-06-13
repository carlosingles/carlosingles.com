<template lang="pug">
  div.flex.flex-col.flex-grow
    div.pt-32.mx-auto.flex.flex-col
      .hero-card Sorry can't find it {{ $route.path }}
      footer.mt-auto.p-6.text-center.text-4xl.text-gray-600
        a(href='https://twitter.com/carlosingles_')
          i.fab.fa-twitter-square.mr-4
        a(href='https://github.com/carlosingles')
          i.fab.fa-github-square.mr-4
        a(href='mailto:hello@carlosingles.com')
          i.fas.fa-envelope-square
  
</template>