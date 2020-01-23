<template>
  <div class="trivia">
    <div>记录点滴</div>
    <!-- <div class="text_float">
      <ul v-if="isShow">
        <li v-for="itme of textList" :key="itme.index" :style="{top: itme.top + 'px'}">{{itme.text}}</li>
      </ul>
    </div>
    <div class="text_inport">
      <div class="inport_out">
        <el-input
          placeholder="请输入内容"
          v-model="text"
          maxlength="10"
          clearable>
        </el-input>
        <el-button type="primary" plain @click="charText">点我</el-button>
      </div>
    </div> -->
  </div>
</template>
<script>

export default {
  name: 'trivia',
  data() {
    return {
      text: '在一起',
      textList: [],
      positionTop: 0,
      isShow: true
    }
  },
  created() {
    // this.charText()
  },
  methods: {
    charText() {
      // 减去顶部、底部,以及边框高度,求最大容量高度
      this.positionTop = document.body.offsetHeight - 120 - 41
      if (this.text) {
        this.textList = []
        for (let i in this.text) {
          if (this.text[i] !== '') {
            let option = {}
            option.index = i
            option.text = this.text[i]
            this.setStyle(option)
          }
        }
      }
    },
    setStyle(option) {
      // 随机5到10秒
      let time = parseInt(Math.random() * 5) + 5
      for (let e = 0; e < time; e++) {
        // 每次掉落值
        let topStep = parseInt(this.positionTop / time) * e
        console.log(topStep)
        let timeOut = setTimeout(() => {
          option.top = topStep
          option.top = e < time - 1 ? topStep : this.positionTop
          if (this.textList.length <= this.text.length - 1) {
            this.textList.push(option)
          }
          if (e >= time - 1) {
            this.textList = []
            clearTimeout(timeOut)
            // this.charText()
          }
        }, e * 1000)
      }
    }
  }
}
</script>
