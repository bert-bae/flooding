upload_to_s3() {
  echo "Uploading to S3 bucket name $S3_BUCKET..."
  aws s3 sync ./out s3://flooding-bertcode
}

upload_to_s3