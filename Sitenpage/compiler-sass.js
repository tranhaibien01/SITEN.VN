const fs = require('fs');
const sass = require('node-sass');

const inputFile = './scss/styleplus.scss';
const outputFile = './css/style.css';

sass.render({
  file: inputFile,
  outFile: outputFile,
}, function (error, result) {
  if (!error) {
    fs.writeFile(outputFile, result.css, function (writeError) {
      if (!writeError) {
        console.log(`Successfully compiled ${inputFile} to ${outputFile}`);
      } else {
        console.error('Error writing CSS file:', writeError);
      }
    });
  } else {
    console.error('Error compiling Sass:', error);
  }
});
