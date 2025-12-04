# Project Title - 360° 全景交互应用

一个基于 [Marzipano](http://www.marzipano.net) 的 360° 全景交互式 Web 应用。

## 📋 项目简介

这是一个使用 Marzipano 工具生成的 360° 全景交互式 Web 应用，支持多个场景切换、热点导航、自动旋转等功能。

### 主要特性

- 🎥 360° 全景图展示
- 🔄 多场景切换
- 🎯 交互式热点（链接热点、信息热点）
- 📱 响应式设计，支持桌面和移动端
- 🎮 多种控制方式（鼠标、触摸、按钮）
- 🔄 自动旋转功能
- 🖥️ 全屏模式支持

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0

### 安装依赖

```bash
npm install
```

### 开发模式

启动开发服务器（支持热更新）：

```bash
npm run dev
```

服务器将在 `http://localhost:3000` 启动，并自动在浏览器中打开。

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist/` 目录。

**构建说明：**
- Vite 会自动处理 CSS 文件（压缩、添加 hash）
- 静态资源（`tiles/`、`img/`、`vendor/`）会被完整复制到 `dist/` 目录
- JavaScript 文件保持原样（因为使用的是传统的 script 标签，不是 ES 模块）
- 构建后的项目可以直接部署到任何静态托管服务

### 预览生产构建

```bash
npm run preview
```

## 📁 项目结构

```
project-title/
├── src/                    # 源代码目录
│   ├── index.html         # 主 HTML 文件
│   ├── index.js           # 主 JavaScript 逻辑
│   ├── data.js            # 场景数据配置
│   ├── style.css          # 样式文件
│   ├── vendor/            # 第三方库
│   │   ├── marzipano.js   # Marzipano 核心库
│   │   ├── screenfull.min.js
│   │   ├── bowser.min.js
│   │   └── reset.min.css
│   ├── img/               # 图标资源
│   └── tiles/             # 全景图切片资源
├── package.json           # 项目配置
├── vite.config.js         # Vite 配置
└── README.md             # 项目说明文档
```

## 🛠️ 技术栈

- **Marzipano** - 360° 全景图渲染引擎
- **Vite** - 现代化前端构建工具
- **原生 JavaScript** - 无框架依赖

## 🎨 自定义配置

### 修改场景数据

编辑 `src/data.js` 文件来配置场景、热点、初始视角等参数。

### 修改样式

编辑 `src/style.css` 文件来自定义界面样式。

### 添加新场景

1. 将全景图切片放置在 `src/tiles/[场景ID]/` 目录下
2. 在 `src/data.js` 中添加场景配置
3. 在 `src/index.html` 中添加场景列表项

## 📦 部署

### 静态托管部署

构建完成后，将 `dist/` 目录的内容上传到任何静态托管服务：

- GitHub Pages
- Netlify
- Vercel
- 传统 Web 服务器（Apache、Nginx 等）

### 注意事项

- 确保所有资源路径正确
- 全景图切片文件较大，建议使用 CDN 加速
- 某些浏览器可能对 `file://` 协议有限制，必须使用 Web 服务器访问

## 🎮 使用说明

### 控制方式

- **鼠标拖拽**：旋转视角
- **滚轮**：缩放
- **触摸**：移动设备上支持触摸操作
- **控制按钮**：使用界面上的方向按钮控制视角

### 功能按钮

- **播放/暂停**：切换自动旋转
- **全屏**：进入/退出全屏模式
- **场景列表**：展开/收起场景选择菜单
- **热点**：点击场景中的热点进行导航或查看信息

## 📝 开发说明

### 修改场景配置

场景配置在 `src/data.js` 中，包含以下主要配置项：

- `scenes`: 场景列表
- `settings`: 全局设置（自动旋转、鼠标模式等）
- `initialViewParameters`: 初始视角参数
- `linkHotspots`: 链接热点
- `infoHotspots`: 信息热点

### 浏览器兼容性

- Chrome/Edge (推荐)
- Firefox
- Safari
- 移动端浏览器

## 📄 许可证

查看 [LICENSE.txt](./LICENSE.txt) 文件了解许可证详情。

## 🔗 相关链接

- [Marzipano 官网](http://www.marzipano.net)
- [Marzipano 文档](https://www.marzipano.net/demos.html)
- [Vite 文档](https://vitejs.dev/)

## 📧 支持

如有问题或建议，请提交 Issue 或联系项目维护者。

---

**注意**：本项目由 Marzipano Tool 生成，可在此基础上进行进一步开发和定制。

