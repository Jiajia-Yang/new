#!/bin/bash
INFO='\033[36m';
NOR='\033[0m';
files=`git diff --cached --name-only --diff-filter=ACM | egrep "\\.(js|es6|jsx)$"`;
if [ -z "${files}" ]; then
  exit 0;
fi;
node ./node_modules/eslint/bin/eslint.js $files
