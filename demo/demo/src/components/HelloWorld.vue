<template>
  <div class="hello">
    <button @click="test" style="margin-right: 10px">点击</button>
    <button @click="stop" style="margin-right: 10px">停止</button>
    <button @click="reset">重置</button>

    <div class="container">
      <div class="container-father">
        <div class="container-son" :style="{ width: widthResult1 + '%' }"></div>
      </div>
      <div class="container-father">
        <div class="container-son" :style="{ width: widthResult2 + '%' }"></div>
      </div>
      <div class="container-father">
        <div class="container-son" :style="{ width: widthResult3 + '%' }"></div>
      </div>
      <div class="container-father">
        <div class="container-son" :style="{ width: widthResult4 + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      widthResult1: 0,
      widthResult2: 0,
      widthResult3: 0,
      widthResult4: 0,
      timer: null,
      P: null,
    };
  },
  methods: {
    test() {
      this.p1()
        .then((e) => {
          if (e === 100) {
            console.log("开始");
            clearInterval(this.timer);
            this.timer = setInterval(() => {
              this.widthResult2++;
              if (this.widthResult2 === 100) {
                console.log("开始");
                clearInterval(this.timer);
              }
            }, 50);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    stop() {
      clearInterval(this.timer);
    },
    reset() {
      this.widthResult1 = 0;
      this.widthResult2 = 0;
      clearInterval(this.timer);
    },
    p1() {
      return new Promise((resolve, reject) => {
        clearInterval(this.timer);
        if (this.widthResult1 < 100) {
          this.timer = setInterval(() => {
            this.widthResult1++;
            console.log(this.widthResult1);
            if (this.widthResult1 === 100) {
              console.log("停");
              resolve(this.widthResult1);
              clearInterval(this.timer);
            }
          }, 50);
        } else {
          reject("错误");
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.container-father {
  width: 400px;
  height: 20px;
  border: 1px solid #999;
  border-radius: 8px;
}

.container {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container-father {
    margin-top: 20px;
    .container-son {
      background-color: skyblue;
      transition: width 0.1s;
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
}
</style>
