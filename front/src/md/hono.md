# hono 教程

hono 是一个 js 后端框架，建立在最新的 ES 标准之上，这样可以尽可能复用 npm 上的生态，比较适合前端逐步转型到全栈的过程。

## 基本结构

hono 的基本结构很简单，因为采用了 response 和 request 作为基本实现，所以服务器的基本架构很简单，就是接收每一个 reuqest，而后返回对应的 response。
