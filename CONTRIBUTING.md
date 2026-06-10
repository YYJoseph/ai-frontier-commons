# Contributing

AI Frontier Commons is a public-benefit learning project. Contributions should help people learn AI more clearly, deeply, or efficiently.

## What We Accept

- High-quality papers, repos, interviews, talks, courses, tools, and datasets.
- Clear explanations of why a resource matters.
- Knowledge tree improvements that make the AI learning map easier to understand.
- Learning paths and personal learning experience notes with practical value.

## What We Avoid

- Low-effort link dumping.
- Pure marketing pages without educational value.
- Unverifiable claims.
- Duplicate resources without a new reason for inclusion.

## Review Standard

Every accepted resource should answer:

- What is it?
- Who should learn from it?
- Why does it matter?
- Which topic nodes does it belong to?

## Data Guidelines

Approved resources live in `src/data/resources.json`. Knowledge tree nodes live in `src/data/topics.json`. Learning paths live in `src/data/learning-paths.json`.

Before opening a pull request, run:

```bash
npm run validate:data
npm run build
```
