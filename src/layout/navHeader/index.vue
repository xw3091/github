<template>
  <header>
    <div class="github">
      <div class="github_img">
        <div class="he_github">
          <img :src="he_github" alt="he_github" @click="heGithub">
        </div>
        <div>
          <img :src="she_github" alt="she_github" @click="sheGithub">
        </div>
      </div>
    </div>
    <ul>
      <li v-for="item in menuObj" :key="item.path">
        <router-link :to="'/' + item.path">{{item.title}}</router-link>
      </li>
    </ul>
  </header>
</template>
<script>
import he_github from '@/assets/icon/he_github.png'
import she_github from '@/assets/icon/she_github.png'
import { menu } from "@/menu"
const VUE_APP_HEGITHUB = process.env.VUE_APP_HEGITHUB
const VUE_APP_SHEGITHUB = process.env.VUE_APP_SHEGITHUB

export default {
  name: 'nav-header',
  data() {
    return  {
      he_github: he_github,
      she_github: she_github,
      menuObj: []
    }
  },
  created() {
    this.menuObj = menu.navHeader
  },
  methods: {
    heGithub() {
      window.open(VUE_APP_HEGITHUB)
    },
    sheGithub() {
      window.open(VUE_APP_SHEGITHUB)
    }
  }
}
</script>
