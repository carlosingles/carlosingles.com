module.exports = {
  title: 'carlos ingles(software developer)',
  description: 'Carlos Ingles is a software developer based in Melbourne',
  dest: 'dist',
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
    'seo': {}
  },
  postcss: {
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('postcss-nested'),
      require('autoprefixer')
    ]
  }
}