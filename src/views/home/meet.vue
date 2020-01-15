<template>
  <div class="meet">
    <div class="dialogue_wrapper">
      <ul>
        <li v-for="item of dialogList" :key="item.index">
          <div :class="item.position === 'right' ? 'dialog_right' : ''">
            <el-avatar v-if="item.position === 'left'" :src="item.position === 'left' ? she_github : he_github"></el-avatar>
            <p>{{item.text}}</p>
            <el-avatar v-if="item.position === 'right'" :src="item.position === 'left' ? she_github : he_github"></el-avatar>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import he_github from '@/assets/icon/he_github.png'
import she_github from '@/assets/icon/she_github.png'
import mock from '@/mock'

export default {
  name: 'meet',
  data() {
    return {
      he_github: he_github,
      she_github: she_github,
      dialogList: []
    }
  },
  created() {
    this.setList()
  },
  methods: {
    setList() {
      const data = mock.dialog.data
      for (let index in data) {
        let option = {}
        option.index = index
        option.text = data[index].text
        option.position = data[index].said === 'she_said' ? 'left' : 'right'
        setTimeout(() => {
          this.setOption(option)
        }, index * 1500)
      }
    },
    setOption(option) {
      this.dialogList.push(option)
    }
  }
}
</script>
