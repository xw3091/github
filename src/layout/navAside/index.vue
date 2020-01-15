<template>
  <div>
    <el-menu
      :default-active="active"
      :unique-opened="true"
      active-text-color="#21cebf"
    >
      <el-submenu v-for="item in menuObj" :index="item.path" :key="item.path">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item-group>
          <router-link 
            v-for="itemChild in item.children"
            :to="'/' + item.path + '/' + itemChild.path"
            :key="itemChild.path">
            <el-menu-item
              :index="itemChild.path">
              {{itemChild.title}}
            </el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { menu } from '@/menu'

export default {
  name: 'nav-aside',
  data() {
    return {
      menuObj: [],
      active: ''
    }
  },
  created() {
    this.menuObj = menu.navAside
    this.active = this.menuObj[0].children[0].path
  }
}
</script>
