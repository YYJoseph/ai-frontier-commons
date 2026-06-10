# AI Frontier Commons

让每个对 AI 感兴趣的人，都能看见知识的全貌，并参与建设它。

AI Frontier Commons 是一个社区共建的 AI 学习雷达与知识公共空间。它收录前沿论文、开源项目、访谈、课程、工具、数据集、演讲和学习路径，并把它们连接到一棵持续生长的 AI 知识树上。

## 为什么做

AI 发展太快。真正的问题已经不是信息太少，而是缺少清晰可信的学习地图。这个项目希望帮助学习者发现值得看的内容，理解每个知识点属于哪里，并把有价值的资源贡献回社区。

## 包含内容

- 精选 AI 学习资源
- 研究者和实践者访谈
- 学习路径
- 持续生长的 AI 知识树
- 基于 GitHub Issue 和 PR 的社区投稿流程

## 本地开发

```bash
npm install
npm run dev
```

## 验证

```bash
npm run verify
```

## GitHub Pages 部署

本项目已配置 GitHub Pages 自动部署。推送到 `main` 分支后，`.github/workflows/deploy.yml` 会构建并发布静态站点。

部署前需要在 GitHub 仓库中打开：

1. `Settings`
2. `Pages`
3. `Build and deployment`
4. `Source: GitHub Actions`

默认公网地址：

```text
https://YYJoseph.github.io/ai-frontier-commons/
```

如果你的 GitHub 用户名或仓库名不同，请修改 `astro.config.mjs` 里的 `site` 和 `base`。

## 参与共建

打开 Issue 可以提交资源或建议改进知识树。审核标准见 `CONTRIBUTING.md`。

## License

This project is licensed under the MIT License. See `LICENSE` for details.
