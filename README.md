## Vue + Vant + Mongodb + koa

### Init our project

1. **Install vue-cli**

    ```
    npm install -g vue-cli
    ```

2. **use cli to create a project**

    ```
    vue init webpack front
    ```

if your vue-cli version is more than 3.0.0, you can:

```
vue create front
```

also you can:

```
npm install add @vue/cli-init -g

vue init webpack front
```

### Install UI component Vant

[Click to go to vant site to config vant](https://youzan.github.io/vant/?source=vuejsorg#/zh-CN/quickstart)

### Use Less in vue

1. install less, less-loader

    ```
    yarn add less less-loader -D
    ```

2. Open `build/webpack.base.conf.js`, add below after `module.rules`:

    ```
    {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
    }
    ```

3. use less

```
<style lang='less'>
 // use it
</style>
```

> if you want to import other less:

```
<style lang="less">
　　@import './index.less';  //引入全局less文件
</style>
```
