// get file meta data
// import fileMetadata from 'file-metadata';
// the play book by barney stinson
const fileMetadata = require('file-metadata');

console.log(await fileMetadata('/home/manan/folder/vid.mp4'));