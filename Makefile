.PHONY: build

ifndef VERSION
$(error VERSION is not set)
endif

build:
	docker build --rm -t wicked-device .
	docker tag -f wicked-device:latest opensensors/wd:$(VERSION)
	docker tag -f wicked-device:latest opensensors/wd:latest

push:
	docker push opensensors/wd:$(VERSION)
	docker push opensensors/wd:latest

push-prod:
	docker tag -f wicked-device:$(VERISON) opensensors/wd:prod
	docker push opensensors/wd:prod
