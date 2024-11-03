# Tailwind 指南

tailwind
是一个样式原子类，tailwind最大的便利是杜绝了魔法值，也就是那些可以随意定义的值。这对于没有UI设计的页面来说尤其重要。

另一个使用原子样式的原因是组件样式，css样式的权重、继承很容易导致组件样式冲突。

## 封装和继承

对于组件样式，通常我们想要两种效果：

- 组件可以封闭样式，不会收到父组件的影响

- 组件可以有条件的继承组件样式，或者在不同的父组件中展示不同的子组件样式

归根揭底就是封装和继承的度的问题，目前存在的方案有三种，局部样式,原子类，`css-in-js`

- 局部样式：
  `vue`就是采用的该方案，配合`scss`、`less`等`css`预处理器可以轻松完成绝大部份的页面样式。但是最大的问题就是修改组件内部样式，比如修改`element-ui`内部的样式，这通常非常困难。

- css-in-js :
  这是react社区比较流行的风格，`styled`，`@emotion`是其中比较受欢迎的，该类框架可以充分使用js的能力，但是会导致页面变慢，因为无法复用样式，同时可能会导致页面闪动。

- 原子类：`tailwind`
  就是原子类的鼻祖了，设计的比较全面和合理，这点相当重要。因为都是全局样式，所以组件的样式关系非常鲜明，配合`tailwind-merge`可以实现样式的合并覆盖，是比较权衡的一类框架。

## vite 下安装

```sh
# 添加依赖
pnpm add -D tailwindcss postcss autoprefixer

# 生成配置文件
pnpm tailwindcss init -p
```

[安装地址](https://tailwindcss.com/docs/guides/vite)

```ts
// 修改配置文件内容： tailwind.config.ts
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```css
/* 主入口文件中加入下面内容 */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
