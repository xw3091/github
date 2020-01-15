// 侧边栏
export default [{
  path: 'home',
  title: '2018',
  icon: 'el-icon-sunny',
  children: [
    { path: 'meet', title: '相遇' },
    { path: 'hug', title: '拥抱' },
    { path: 'hotPot', title: '海底捞' }
  ]
}, {
  path: 'before',
  title: '2019',
  icon: 'el-icon-ship',
  children: [
    { path: 'wuzhen', title: '乌镇之旅' },
    { path: 'xihu', title: '西湖泛舟' },
    { path: 'storage', title: '存钱' },
    { path: 'parents', title: '见父母' },
    { path: 'cat', title: '养蓝猫' }
  ]
}, {
  path: 'future',
  title: '2020',
  icon: 'el-icon-goblet-full',
  children: [
    { path: 'engagement', title: '订婚' }
  ]
}]
