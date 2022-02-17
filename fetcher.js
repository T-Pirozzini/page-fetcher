const URL = process.argv[2]; 
const localPath = process.argv[3]; 

const fs = require('fs');
const request = require("request")

request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(localPath, body, err => {
    if (err) {
      console.log(err)
      return;
    }
  });
  console.log('File written successfully');  
  console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
});

