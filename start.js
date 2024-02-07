
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const folders = ['music', 'iPhone', 'DJI-Mini-4-Pro', 'Canon5D'];

// create today's date for the initial folder
let todayDate = new Date()
todayDate= todayDate.toISOString().split('T')[0];

// create a directory for the root project folder
mkdirp.sync(`./${todayDate}`);

// create folders inside the root project directory
for (const folder of folders) {
 mkdirp.sync(`./${todayDate}/${folder}`);
}
  
  