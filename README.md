```bash
npm run build

npm publish

```


### vue3使用

* 安装

```bash
npm i zrh-ui-library
```

* 在main.js里引入样式
```js
import 'zrh-ui-library/dist/index.css'
```


* vue文件里使用
```js
import { ZrhButton, ZrhLabel } from 'zrh-ui-library'


<template>
  <div>        
    <ZrhButton label="zrh"></ZrhButton>
    <ZrhLabel label="hua"></ZrhLabel>
  </div>
</template>
```