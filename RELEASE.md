# Release

A GitHub workflow publishes the packages when a tag is pushed. To do this:

- Bump the version in the package's `package.json`.
- Run `make tag-release` to create and push the tags. This creates the appropriate tag by parsing `package.json`.
