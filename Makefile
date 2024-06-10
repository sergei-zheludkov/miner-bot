install: install-deps

install-deps:
	yarn install

build-containers:
	cd packages/devops && docker-compose build

start-dev:
	cd packages/devops && docker-compose up -d bot