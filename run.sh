#!/usr/bin/sh

cd front || exit
npm i --force 

cd ../back || exit
npm i 
npm run start
