<template>
  <div class="mt-4">
    <div class="container min-vh-100">
      <main class="pb-5">
        <img
          v-if="article.image"
          :src="'/images/' + article.image"
          class="pt-2 w-full object-cover cover-image"
          style="height: 24rem; width: 100%; padding-top: 0"
          :alt="article.image"
        >
        <h1 class="prose text-4xl leading-9 py-4 font-bold text-center">
          {{ article.layout }}
        </h1>
        <h6 class="prose leading-9 font-italic font-weight-light">
          Описание: {{ article.abstract }}
        </h6>
        <p class="blog-date text-gray-500 mb-4">
          Последнее обновление: {{ formatDate(article.updatedAt) }}
        </p>
        <Tags :tags="article.tags" limit="10" />
        <hr>
        <nuxt-content class="markdown" :document="article" />
      </main>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  async asyncData ({ params, store }) {
    await store.dispatch('articles/fetchArticle', params.slug)
  },
  computed: {
    article () {
      return this.$store.state.articles.article[0]
    }
  },
  methods: {
    ...mapActions('articles', ['fetchArticle']),
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style scoped></style>
