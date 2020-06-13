module.exports = {
  title: 'carlos ingles(software developer)',
  description: 'Carlos Ingles is a software developer based in Melbourne',
  dest: '../../dist',
  devTemplate: 'index.html',
  markdown: {
    anchor: {
      permalink: false
    }
  },
  themeConfig: {
    logo: 'assets/logo.svg'
  },
  plugins: {
    '@silvanite/tailwind': {},
    'seo': {}
  }
}