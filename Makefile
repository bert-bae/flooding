ifndef S3_BUCKET
$(error S3_BUCKET is not defined)
endif

deploy-s3:
	npm run build
	. ./deploy/upload-to-s3.sh