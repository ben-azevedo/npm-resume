#! /usr/bin/env node

const fs = require('fs')

fs.readFile(__dirname + '/info.json', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
  return data;
});