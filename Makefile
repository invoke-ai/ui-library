# simple Makefile with scripts that are otherwise hard to remember
# to use, run from the repo root `make <command>`

default: help

help:
	@echo "tag-release    Tags with the version from package.json."

tag-release:
	./scripts/tag_release.sh
