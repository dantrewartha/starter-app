#!/bin/bash
set -Eeuxo pipefail

git fetch --all --tags

version="$(docker run --rm -v `pwd`:/git-semver ghcr.io/mdomke/git-semver -no-meta)"
echo $version

tag=$version
echo $tag

imageName=[--CHANGE_ME--]
dockerHubImageName=bunndigital/[--CHANGE_ME--]
gitlabImageName=registry.gitlab.com/bunn-digital/web/[--CHANGE_ME--]

### Local Build
docker build -t $imageName:$tag .

### DockerHub
docker tag $imageName:$tag $dockerHubImageName:$tag
docker push $dockerHubImageName:$tag

### GITLAB
docker tag $imageName:$tag $gitlabImageName:$tag
docker push $gitlabImageName:$tag

echo $tag
