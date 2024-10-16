# 加密货币新闻前端

这是一个 React 应用，用于展示实时的加密货币新闻和分析。

## 功能

- 展示最新的加密货币新闻列表
- 提供新闻详情页面
- 支持中英文语言切换
- 每5分钟自动更新新闻列表

## 快速开始

1. 克隆仓库：
   ```
   git clone https://github.com/0xrikt/crypto-news-frontend.git
   cd crypto-news-frontend
   ```

2. 安装依赖：
   ```
   npm install
   ```

3. 启动开发服务器：
   ```
   npm start
   ```

4. 在浏览器中打开 `http://localhost:3000`（如果被占用则会采用新的PORT，以实际情况为准）

## 构建生产版本

运行 `npm run build` 来构建应用的生产版本。

## 环境变量

创建一个 `.env` 文件，并设置以下变量：
```
REACT_APP_API_URL=你的后端API地址
```

## 部署

此项目配置为使用 Vercel 进行部署。推送到主分支将触发自动部署。

## 贡献

欢迎提交 Pull Requests 来改进项目。

## 许可证

MIT
