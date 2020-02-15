<template>
  <div>
    <div class="bg bg-blur"></div>
    <div class="content content-front">
      <div class="vertical-center">
        <div class="header">
          K
        </div>
        <div class="user-name">Stephen Ye</div>
        <div class="input-content">
          <van-cell-group class="inputs">
            <van-field
              left-icon="envelop-o"
              label-align="left"
              input-align="center"
              placeholder="user"
              class="user-info"
              v-model="form.user"
            />
            <van-field
              left-icon="bag-o"
              label-align="left"
              input-align="center"
              placeholder="password"
              class="password"
              v-model="form.password"
            />
          </van-cell-group>
          <van-button
            v-bind:loading="isLogining"
            @click="clickLogin"
            class="login-btn"
            type="default"
            size="large"
            >Login</van-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../utils/Contant";
export default {
  name: "HelloWorld",
  data() {
    return {
      isLogining: false,
      form: {
        user: "",
        password: ""
      }
    };
  },
  methods: {
    async clickLogin() {
      this.isLogining = true;
      const { status } = await this.axios.post(api.login, this.form);
      if (status === 200) {
        this.isLogining = false;
        this.$router.push({ path: "/home" });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@blur-px: 5px;
.content {
  color: #ffffff;
}
.bg {
  background: url("../../assets/Login-bg.jpeg");
  height: 100vh;
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
.van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
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
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  border: 1px solid #ebedf0;
}
.content-front {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  text-align: center;
  height: 100vh;
  width: 100vw;
  .vertical-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
  }
  .user-name {
    margin-bottom: 20px;
  }
  .header {
    margin-bottom: 10px;
    width: 120px;
    height: 120px;
    background: transparent;
    color: white;
    font-size: 80px;
    line-height: 120px;
    text-align: center;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.5);
  }
  .input-content {
    width: 80vw;
    color: #fff !important;
    .inputs {
      margin-bottom: 40px;
      .user-info,
      .password {
        margin-bottom: 10px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        background: rgba(0, 0, 0, 0);
      }
    }
  }
}
</style>
