#!/bin/bash

set -e

if [ -z "$1" ]; then
  echo "Usage: $0 <deployment-name>"
  exit 1
fi

deployment=$1

kubectl rollout undo deployment/$deployment