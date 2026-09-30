# 个人作品集

一个以深色星河视觉为主题的静态个人作品集网站，使用原生 HTML、CSS 和 JavaScript 构建。页面包含项目展示、双语切换、联系弹窗、响应式布局、Canvas 粒子效果和轻量交互动画。

## 功能

- 中英文界面切换
- 响应式布局，适配桌面端和移动端
- 星河背景与局部银河漩涡粒子效果
- 像素风黑猫头像和悬停歪头动画
- 项目图片展示与外部项目链接
- 联系弹窗和邮件联系入口
- 支持 `prefers-reduced-motion`，尊重用户的动效偏好

## 技术栈

- Vite
- HTML
- CSS
- JavaScript
- Canvas 2D

## 本地运行

在项目根目录执行：

```bash
npm install
npm run dev
```

开发服务器启动后，终端会显示本地预览地址。

## 构建与预览

生成生产版本：

```bash
npm run build
```

预览生产构建：

```bash
npm run preview
```

运行内容检查：

```bash
npm run test:content
```

## 项目结构

```text
.
├── index.html              页面结构与文案
├── src/
│   ├── main.js             页面交互、语言切换与粒子效果
│   └── styles.css          页面样式与响应式规则
├── public/
│   └── assets/             页面使用的图片资源
├── tests/                  内容检查脚本
├── package.json            项目脚本与依赖配置
└── package-lock.json       依赖锁定文件
```

## 部署

这是一个不依赖后端服务的静态网站，可以部署到 GitHub Pages、Cloudflare Pages 或其他静态托管平台。

使用 GitHub Pages 时，建议通过 GitHub Actions 执行构建，并将构建结果目录设置为 `dist`。如果使用普通仓库作为项目站点，需要根据仓库名称配置 Vite 的 `base` 路径；如果使用用户主页仓库，则可以直接使用根路径。

## 公开仓库注意事项

- 不要提交 API 密钥、密码、令牌或其他凭据。
- 不要提交 `.env` 文件、私钥、证书和本机生成的配置文件。
- `node_modules/`、`dist/` 和缓存目录已通过 `.gitignore` 排除。
- 依赖锁定文件应保留，以便部署环境使用一致的依赖版本。

## 内容与资源

项目图片和像素风角色资源位于 `public/assets/`。如果替换资源，请同步检查图片路径、替代文本和移动端显示效果。

项目展示中的外部网站：

- [Animals 3D](https://animals-3d.pages.dev/)
- [TypeWords](https://typewords.cc/)

## 设计致谢

页面的信息架构和部分视觉语言参考了 [Brittany Chiang v4](https://github.com/bchiang7/v4)，当前项目的内容、交互和视觉资源均经过独立调整。
