# Release

This library is consumed via git dependencies. To release a new version:

1. Make your code changes in `lib/`
2. Bump the version in `package.json`
3. Run `pnpm build` to generate fresh distribution files
4. Commit all changes including the `dist/` directory
5. PR and merge changes
6. Pull the latest changes to your local main branch
7. Run `make tag-release` to create and push the version tag

Consuming repositories will reference specific version tags:

```json
{
  "dependencies": {
    "@invoke-ai/ui-library": "github:invoke-ai/ui-library#v0.0.XX"
  }
}
```
