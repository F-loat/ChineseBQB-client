# ChineseBQB-client

> 开源表情包小程序

## 预览

* 扫描下方[小程序码](#截图)

* 访问网页版 [Demo](https://f-loat.github.io/ChineseBQB-client)

## 运行

1. 克隆仓库

``` sh
git clone https://github.com/F-loat/ChineseBQB-client.git
```

2. 安装依赖

``` sh
# 安装 CLI
npm install -g @tarojs/cli

# 安装项目依赖
npm install
```

3. 运行项目

``` sh
# 小程序
npm run dev:weapp

# 网页
npm run dev:h5
```

4. 预览效果

* 小程序 使用微信开发者工具导入项目，并将 AppID 清除

* 网页 使用浏览器访问 `http://127.0.0.1:10086`

## 说明

* 本项目使用 [Taro](https://github.com/NervJS/taro) 框架开发

* 图片资源来自 [ChineseBQB](https://github.com/zhaoolee/ChineseBQB) 项目

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
  <img alt="首页" src="./images/index.jpg" width="32%" />
  <img alt="小程序码" src="./images/qrcode.jpg" width="32%" />
  <img alt="列表" src="./images/list.jpg" width="32%" />
  <img alt="预览" src="./images/preview.jpg" width="32%" />
  <img alt="关于" src="./images/about.jpg" width="32%" />
  <img alt="分享" src="./images/share.jpg" width="32%" />
</p>
