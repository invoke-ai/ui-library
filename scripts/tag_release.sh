#!/bin/bash

if [[ ! $1 =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "Tag must match v1.2.3"
  exit 1
fi

git tag $1
git push origin $1
