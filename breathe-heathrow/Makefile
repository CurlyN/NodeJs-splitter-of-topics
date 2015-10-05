.PHONY: build

ifndef VERSION
$(error VERSION is not set)
endif

build:
	docker build --rm -t breathe-heathrow .
	docker tag -f breathe-heathrow:latest opensensors/breathe-heathrow:$(VERSION)
	docker tag -f breathe-heathrow:latest opensensors/breathe-heathrow:latest

push:
	docker push opensensors/breathe-heathrow:$(VERSION)
	docker push opensensors/breathe-heathrow:latest

push-prod:
	docker tag -f breathe-heathrow:$(VERISON) opensensors/breathe-heathrow:prod
	docker push opensensors/breathe-heathrow:prod
