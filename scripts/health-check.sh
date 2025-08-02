#!/bin/bash

set -e

url="http://localhost"

status=$(curl --write-out '%{http_code}' --silent --output /dev/null "$url")

if [ "$status" -ne 200 ]; then
  echo "Health check failed with status code $status"
  exit 1
fi

echo "Health check passed with status code $status"