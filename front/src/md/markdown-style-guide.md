# Markdown 样式风格

本文列举了一些常见的编写 markdown 格式的要求。

## 标题

`<h1>`—`<h6>`
表示六个等级的标题，`h1`是最高级的标题（也最大），`h6`则是最下级的标题。

# H1

## H2

### H3

#### H4

##### H5

###### H6

## 段落

每一段普通的文本都被视为段落，换行时就会转变为新的段落。

## 图片

### 语法

```markdown
![替换文本](路径)
```

### 展示

![微笑](/static/smile.jpg)

## 引用

引用元素表示从其他来源引用的内容，（可选）带有必须在 `footer` 或 `cite`
元素内的引文，以及可选的内嵌更改，例如注释和缩写。

### 语法

```markdown
> 末尾的符号表示换行 \

> **注：** 引用中可以使用 markdown 语法
```

### 展示

> 末尾的符号表示换行\
> **注：** 引用中可以使用 markdown 语法

## 超链接

### 语法

```markdown
[链接文字](链接地址)
```

### 展示

[首页](/)

## 表格

### 语法

```markdown
| 表头 1 | 表头 2   | 表头 3 |
| ------ | -------- | ------ |
| _斜体_ | **加粗** | `代码` |
```

### 展示

| 表头 1 | 表头 2   | 表头 3 |
| ------ | -------- | ------ |
| _斜体_ | **加粗** | `代码` |

## 代码块

### 语法

使用三个反引号表示是代码片段，为了生成代码高亮，可以添加不同的语言支持，例如：`html, javascript, css,
markdown, typescript, txt, bash`

````markdown
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

### 展示

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## 列表类型

### 有序列表

#### 语法

```markdown
1. 第一条
2. 第二条
3. 第三条
```

#### 展示

1. 第一条
2. 第二条
3. 第三条

### 无序列表

#### 语法

```markdown
- 列表项 1
- 列表项 2
- 列表项 3
```

#### 展示

- 列表项 1
- 列表项 2
- 列表项 3

### 嵌套列表

#### 语法

```markdown
- 水果
  - 苹果
  - 橘子
  - 香蕉
- 乳制品
  - 牛奶
  - 奶酪
```

#### 展示

- 水果
  - 苹果
  - 橘子
  - 香蕉
- 乳制品
  - 牛奶
  - 奶酪

## 其他元素 — abbr, sub, sup, kbd, mark

可以直接使用 html 中的任意标签。

### 语法

```markdown
<abbr title="图片格式">GIF</abbr> 是一种二级制图片格式。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

快捷键： <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd>
```

### 展示

<abbr title="图片格式">GIF</abbr> 是一种二级制图片格式。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

快捷键： <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd>
