.PHONY: build

ifndef VERSION
$(error VERSION is not set)
endif

build:
	docker build --rm -t wicked-device .
	docker tag -f wicked-device:latest opensensors/wicked-device:$(VERSION)
	docker tag -f wicked-device:latest opensensors/wicked-device:latest

push:
	docker push opensensors/wicked-device:$(VERSION)
	docker push opensensors/wicked-device:latest

push-prod:
	docker tag -f wicked-device:$(VERISON) opensensors/wicked-device:prod
	docker push opensensors/wicked-device:prod
