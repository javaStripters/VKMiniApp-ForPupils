#!/usr/bin/sh

cd front || exit
npm i --force && npm run build

cd ../back || exit
npm i && npm run start