const fs = require('fs');
const https = require('https');

const url = 'https://api.microlink.io/?url=https://crave-silk.vercel.app/&screenshot=true&waitFor=3000';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log('Microlink response:', JSON.stringify(json, null, 2));
      
      if (json.data && json.data.screenshot && json.data.screenshot.url) {
        const screenshotUrl = json.data.screenshot.url;
        console.log('Downloading screenshot from:', screenshotUrl);
        
        const file = fs.createWriteStream('public/assets/crave.png');
        https.get(screenshotUrl, (imgRes) => {
          imgRes.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log('Screenshot downloaded successfully.');
          });
        }).on('error', (err) => {
          console.error('Error downloading image:', err.message);
        });
      } else {
        console.log('No screenshot URL found in response.');
      }
    } catch (e) {
      console.error('Error parsing JSON:', e);
    }
  });
}).on('error', (err) => {
  console.error('Error making request:', err.message);
});
