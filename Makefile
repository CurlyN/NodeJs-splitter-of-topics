.PHONY: build

ifndef VERSION
$(error VERSION is not set)
endif

build:
	docker build --rm -t breathe-heathrow .
	docker tag -f wd:latest opensensors/wd:$(VERSION)
	docker tag -f wd:latest opensensors/wd:latest

push:
	docker push opensensors/wd:$(VERSION)
	docker push opensensors/wd:latest

push-prod:
	docker tag -f wd:$(VERISON) opensensors/wd:prod
	docker push opensensors/wd:prod
