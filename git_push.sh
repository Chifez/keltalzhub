#!/bin/bash

commit_message="$1"  

echo "Initializing Git push..."

# Add changes
git add .
if [ $? -ne 0 ]; then
    echo "Error: Unable to add changes."
    exit 1
fi
echo "Added files"

# Commit changes with the specified commit message
git commit -m "$commit_message"
if [ $? -ne 0 ]; then
    echo "Error: Unable to commit changes."
    exit 1
fi
echo "Committed files"

# Push changes to the remote repository
git push origin master  
if [ $? -ne 0 ]; then
    echo "Error: Unable to push changes."
    exit 1
fi
echo "Push completed"
