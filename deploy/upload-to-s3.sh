upload_to_s3() {
  echo "Uploading to S3 bucket name $S3_BUCKET..."
  aws s3 cp ./public/ s3://$S3_BUCKET/ --recursive --cache-control max-age=0
  aws s3 cp ./build/ s3://$S3_BUCKET/build/ --recursive
}

upload_to_s3