<template>
  <div class="home__container container">
    <div class="home__header">
      <h1 class="home__title">{{ title }}</h1>
      <p class="home__description">{{ description }}</p>
      <Button :to="action.link">{{ action.text }}</Button>
    </div>
    </footer>
  </div>
</template>
<script>
import MarkdownIt from 'markdown-it'

import { localizePath } from './utils'
import Button from './components/Button'

const md = new MarkdownIt()

export default {
  components: {
    Button,
  },
  computed: {
    data() {
      debugger;
      return this.$page.frontmatter
    },
    title() {
      return this.$page.frontmatter.title || this.$title || ''
    },
    description() {
      return (
        this.$page.description || this.$description || ''
      )
    },
    action() {
      return {
        text: this.data.actionText,
        link: localizePath(this.data.actionLink, this.$localePath),
      }
    },
    footer() {
      const defaultFooter = ''
      return md.render(this.data.footer || defaultFooter)
    },
  },
}

</script>
<style lang="stylus">
@import './styles/_variables.styl'

.home
  &__header
    margin: 10rem 0
    text-align: center

  &__title
    font-size: 46px
    font-weight: 400

  &__description
    padding: 0 20%
    margin-bottom: 5rem
    font-size: 18px
    line-height: 24px
    color: $black

  &__body
    justify-content: center

  &__content
    padding: 6rem 4rem
    border-top: 1px solid $divider-color
    
  &__footer
    margin: 2rem 0
    text-align: center
</style>
