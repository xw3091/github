import Layout from '@/layout'
import { menu } from '@/menu'

// 头部导航栏路由配置
const header = {
  path: '/',
  component: Layout,
  redirect: '/home/meet',
  children: menu.navHeader.map(a => ({
    path: a.path,
    meta: { title: a.title },
    name: a.path,
    component: () => {
      if (a.path === 'home/meet')
        return import('@/views/home/meet')
      else
        return import('@/views/' + a.path)
    }
  }))
}

// 侧边栏路由配置
const aside = () => {
  return menu.navAside.map(a => ({
    path: '/' + a.path,
    name: a.path,
    component: Layout,
    meta: { title: a.title },
    children: a.children.map(e => ({
      path: e.path,
      meta: { title: e.title },
      name: e.path,
      component: () => import('@/views/' + a.path + '/' + e.path)
    }))
  }))
}

// 路由配置
const navRoutes = [
  header,
  ...aside()
]

export const routes = [
  ...navRoutes
]