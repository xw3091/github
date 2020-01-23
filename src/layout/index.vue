<template>
    <div class="app_wrapper">
      <el-container class="app_content">
        <!-- 顶部 -->
        <el-header>
          <nav-header></nav-header>
        </el-header>
        <el-container>
          <!-- 侧边栏 -->
          <el-aside v-if="!isMobile">
            <nav-aside></nav-aside>
          </el-aside>
          <el-container>
            <!-- 内容 -->
            <el-main :style="{ height: height + 'px' }">
              <router-view :key="key"></router-view>
            </el-main>
            <!-- 尾部 -->
            <el-footer>
              <nav-footer></nav-footer>
            </el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
</template>

<script>

export default {
  name: 'layout',
  data() {
    return {
      height: 800,
      isMobile: false
    }
  },
  computed: {
    key() {
      return this.$route.fullPath
    }
  },
  components: {
    NavHeader: () => import('./navHeader'),
    NavFooter: () => import('./navFooter'),
    NavAside: () => import('./navAside')
  },
  created() {
    this.navigatorInfo()
  },
  mounted() {
    this.handleHeight()
  },
  methods: {
    handleHeight() {
      let innerHeight = document.body.clientHeight
      this.height = innerHeight - 121
    },
    navigatorInfo() {
      if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    }
  }
}
</script>