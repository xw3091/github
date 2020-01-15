<template>
  <div class="house">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'house',
  data() {
    return {
    }
  },
  mounted() {
    this.init()
    this.setCanvas()
  },
  methods: {
    // requestAnimationFrame 兼容
    init() {
      window.requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000/60)
        }
    },
    // 绘图
    setCanvas() {
      // 初始化变量
      let canvas, ctx, w, h, xPoint, yPoint, particles = []
      // 烟花出现概率
      const probability = 0.1

      onLoad()

      // 初始化 Canvas
      function onLoad() {
        canvas = document.getElementById('canvas')
        ctx = canvas.getContext('2d')
        resizeCanvas()
        // 渲染动画
        updateWorld()
      }

      // 改变 Canvas 可视窗口
      function resizeCanvas() {
        if (canvas) {
          w = canvas.width = window.innerWidth
          h = canvas.height = window.innerHeight
        }
      }

      // 更新函数
      function updateWorld() {
        update()
        paint()
        window.requestAnimationFrame(updateWorld)
      }

      // 更新函数
      function update() {
        if (particles.length < 500 && Math.random() < probability) {
          createFirework()
        }
        const alive = []
        for (let i in particles) {
          if (particles[i].move()) {
            alive.push(particles[i])
          }
        }
        particles = alive
      }

      // 绘制函数
      function paint() {
        ctx.globalCompositeOperation = 'source-over'
        ctx.fillStyle = 'rgba(0,0,0,0.2)'
        ctx.fillRect(0, 0, w, h)
        ctx.globalCompositeOperation = 'lighter'
        for (let i in particles) {
          particles[i].draw(ctx)
        }
      }

      // 创建烟花颗粒
      function createFirework() {
        xPoint = Math.random() * (w - 200) + 100
        yPoint = Math.random() * (h - 200) + 100
        const nFire = Math.random() * 50 + 100
        const c = `rgb(${parseInt(Math.random() * 200 + 55)}, ${parseInt(Math.random() * 200 + 55)}, ${parseInt(Math.random() * 200 + 55)})`
        for (let i = 0; i < nFire; i++) {
          const particle = new Particle()
          particle.color = c
          const vy = Math.sqrt(25 - particle.vx * particle.vx)
          if (Math.abs(particle.vy) > vy) {
            particle.vy = particle.vy > 0 ? vy : -vy
          }
          particles.push(particle)
        }
      }

      // 颗粒函数
      function Particle() {
        this.w = this.h = Math.random() * 4 + 1
        this.x = xPoint - this.w / 2
        this.y = yPoint - this.h / 2
        this.vx = (Math.random() - 0.5) * 10
        this.vy = (Math.random() - 0.5) * 10
        this.alpha = Math.random() * 0.5 + 0.5
        this.color
      }

      Particle.prototype = {
        gravity: 0.05,
        move() {
          this.x += this.vx
          this.vy += this.gravity
          this.y += this.vy
          this.alpha -= 0.01
          if (this.x <= -this.w || this.x >= screen.width ||
            this.y >= screen.height ||
            this.alpha <= 0) {
              return false
            }
          return true
        },
        draw(c) {
          c.save()
          c.beginPath()
          c.translate(this.x + this.w / 2, this.y + this.h / 2)
          c.arc(0, 0, this.w, 0, Math.PI * 2)
          c.fillStyle = this.color
          c.globalAlpha = this.alpha
          c.closePath()
          c.fill()
          c.restore()
        }
      }
    }
  }
}
</script>
