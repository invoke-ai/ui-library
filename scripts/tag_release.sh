#!/bin/bash

# Parse version from package.json
version=$(grep -oP '"version": "\K(.*?)(?=")' package.json)

tag="v$version"
git tag $tag
git push origin $tag
