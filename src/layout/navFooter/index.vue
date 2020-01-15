<template>
  <footer>
    <section>{{text}} {{time}}</section>
  </footer>
</template>

<script>
export default {
  name: 'nav-footer',
  data() {
    return  {
      time: '',
      text: 'Copyright © XU'
    }
  },
  created() {
    this.getTime()
  },
  methods: {
    getTime() {
      let year = new Date().getFullYear()
      let month = new Date().getMonth() + 1
      let date = new Date().getDate()
      this.time = year + '年' + month + '月' + date
    }
  }
}
</script>
