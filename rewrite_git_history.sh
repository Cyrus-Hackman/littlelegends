#!/bin/bash
git filter-branch --force --env-filter '
CORRECT_NAME="Cyrus-Hackman"
CORRECT_EMAIL="cyrusapenteng11@gmail.com"

if [ "$GIT_COMMITTER_EMAIL" = "noreply@lovable.dev" ] || \
   [ "$GIT_AUTHOR_EMAIL" = "noreply@lovable.dev" ] || \
   [ "$GIT_COMMITTER_NAME" = "Lovable" ] || \
   [ "$GIT_AUTHOR_NAME" = "Lovable" ] || \
   [ "$GIT_COMMITTER_NAME" = "gpt-engineer-app[bot]" ] || \
   [ "$GIT_AUTHOR_NAME" = "gpt-engineer-app[bot]" ];
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
