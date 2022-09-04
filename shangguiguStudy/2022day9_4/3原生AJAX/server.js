const { json } = require('express')
const express = require('express')
const app = express()
// 1
app.get('/server', (req, res) => {
  // 设置响应头 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  // 设置响应体
  res.send('1GET.html')
})
// 2
app.post('/server', (req, res) => {
  // 设置响应头 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  // 设置所有头信息均允许
  res.setHeader('Access-Control-Allow-Headers', '*')
  // 设置响应体
  res.send('1GET.html POST')
})
// 3
app.all('/json-server', (req, res) => {
  // 设置响应头 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  // 设置所有头信息均允许
  res.setHeader('Access-Control-Allow-Headers', '*')
  // 响应一个数据
  const data = {
    name: 'tanmengxun'
  }
  // 对对象进行字符串转换 因为响应体只能接收字符串格式的数据
  let str = JSON.stringify(data)
  // 设置响应体
  res.send(str)
})

// 4 响应延时
app.get('/delay', (req, res) => {
  // 设置响应头 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  // 设置响应体
  setTimeout(() => {
    res.send('响应延时')
  }, 3000);
  
})


app.listen(8000, () => {
  console.log('8000端口开启')
})
