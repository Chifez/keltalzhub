#!/bin/sh

echo "Executing git_push.sh"
git add .
echo "Changes added"
git commit -m "$1"
echo "Commit created"nano ~/.bashrc
git push origin master
echo "Push completed"