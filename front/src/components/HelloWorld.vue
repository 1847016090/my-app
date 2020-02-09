<template>
  <div>
      <div class="bg bg-blur"></div>
      <div class="content content-front">
        <div class="vertical-center">
          <van-image
          round
          width="10rem"
          height="10rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="user-name">Stephen Ye</div>
        <div class="input-content">
          <van-cell-group class="inputs">
            <van-field
              left-icon="envelop-o"
              label-align="left"
              input-align="center"
              placeholder="user info"
              class="user-info"
            />
            <van-field
              left-icon="bag-o"
              label-align="left"
              input-align="center"
              placeholder="password"
              class="password"
            />
          </van-cell-group>
          <van-button v-if="login" @click="clickLogin" class="login-btn" type="default" size="large">Login</van-button>
          <van-button v-else loading class="login-loading" />
          <link rel="stylesheet" href="22222" />
        </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      login: true
    }
  },
  methods: {
    clickLogin() {
      setTimeout(() => this.login = false, 300)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @blur-px: 5px;
  .content {
      color: #ffffff;
  }
  .bg {
      background: url('../assets/Login-bg.jpeg');
      height:100vh;
      text-align: center;
  }
  .bg-blur {
      float: left;
      width: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      -webkit-filter: blur(@blur-px);
      -moz-filter: blur(@blur-px);
      -o-filter: blur(@blur-px);
      -ms-filter: blur(@blur-px);
      filter: blur(@blur-px);
  }
  .van-cell-group {
    background: none;
  }
  .van-cell {
    padding: 10px 0;
    font-size: 14px;
    color: #fff;
  }
  .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
    border: none;
  }
  .van-cell:not(:last-child)::after {
    border: none;
  }
  input {
    color: white;
  }
  .van-button--default {
    color: #323233;
    background-color: rgba(0,0,0,0.1);
    color: white;
    border: 1px solid #ebedf0;
  }
  .content-front {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:absolute;
    text-align: center;
    height: 100vh;
    width: 100vw;
    .vertical-center {
      height: 70vh
    }
    .user-name {
      margin-bottom: 20px;
    }
    .input-content {
      width: 80vw;
      color: #fff !important;
      .inputs {
        margin-bottom: 40px;
        .user-info,.password {
          margin-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255, 0.5);
          background: rgba(0,0,0,0);
        }
      }
    }
    .login-btn {
      &:focus {
        background: #40D2BB;
        border: #40D2BB;
      }
    }
    .login-loading{
      border-radius: 50%;
      height: 50px;
      background: #40D2BB;
      border: #40D2BB;
    }
  }
</style>
