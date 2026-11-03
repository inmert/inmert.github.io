# inmert.github.io
Personal Website written in Vite + React + Tailwind, running on [Bun](https://bun.sh).

## Development

```sh
bun install
bun run dev      # start the dev server
bun run lint     # run ESLint
bun run build    # type-check and build to dist/
bun run preview  # serve the production build
```

## Deployment

`bun run deploy` builds the site and publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves at [priyan.cloud](https://priyan.cloud). Pushing to `main` does not deploy.
