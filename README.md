# ChineseBQB-client

> 开源表情包小程序

## 预览

* 扫描下方小程序码

<p>
  <img alt="QQ" src="https://github.com/F-loat/ChineseBQB-client/blob/master/images/qrocde_qq.jpg?raw=true" width="24%" />
  <img alt="微信" src="https://github.com/F-loat/ChineseBQB-client/blob/master/images/qrcode_weapp.jpg?raw=true" width="24%" />
</p>

* 访问网页版 [Demo](https://f-loat.github.io/ChineseBQB-client)

## 运行

1. 克隆仓库

``` sh
git clone https://github.com/F-loat/ChineseBQB-client.git
```

2. 安装依赖

``` sh
npm install
```

3. 运行项目

``` sh
# 微信小程序
npm run dev:weapp

# QQ 小程序
npm run dev:qq

# 网页
npm run dev:h5
```

4. 预览效果

* 小程序 使用开发者工具导入项目，并将 AppID 清除

* 网页 使用浏览器访问 `http://127.0.0.1:10086`

## 说明

* 本项目使用 [Taro](https://github.com/NervJS/taro) 框架开发，图片资源来自 [ChineseBQB](https://github.com/zhaoolee/ChineseBQB) 项目

* 支持表情包 **批量下载** 及自定义布局，列表页长按下载按钮可将表情包随机排序

* 由于小程序无法直接访问 GitHub (未备案)，所以通过 Nginx 做了一层代理

```
server {
  listen      443 ssl;
  server_name proxy.youngon.com.cn;
  
  location / {
    root   /usr/share/nginx/html;
    index  index.html index.htm;
  }

  location /github/api/ {
    proxy_pass https://api.github.com/;
  }

  location /github/raw/ {
    proxy_pass https://raw.githubusercontent.com/;
  }

  ssl_certificate /etc/nginx/keys/proxy.youngon.com.cn.crt;
  ssl_certificate_key /etc/nginx/keys/proxy.youngon.com.cn.key;
}
```

## 截图

<p>
  <img alt="首页" src="https://github.com/F-loat/ChineseBQB-client/blob/master/images/index.jpg?raw=true" width="32%" />
  <img alt="关于" src="https://github.com/F-loat/ChineseBQB-client/blob/master/images/about.jpg?raw=true" width="32%" />
  <img alt="分享" src="https://github.com/F-loat/ChineseBQB-client/blob/master/images/share.jpg?raw=true" width="32%" />
</p>
