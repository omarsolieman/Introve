<template>
  <router-view id="app"/>
</template>

<script>
const Cosmic = require('cosmicjs')
const api = Cosmic()
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: 'introve',
  read_key: 'FbeFnCYBWBRfEAVhhDsInZNSJTc1tAejfnH9ojkyUX9ADhsLs7'
})
export default {
  name: 'App',
  data () {
    return {
      loading: false,
      posts: null
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      bucket.getObjects({
        type: 'posts',
        props: 'slug,title,content,metadata' // Limit the API response data by props
      }).then(data => {
        const posts = data.objects
        this.loading = false
        this.posts = posts
      })
    }
  }
}
</script>

<style lang="scss">
@import './sass/app';
</style>
