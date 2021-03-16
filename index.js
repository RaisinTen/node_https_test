const https = require('https'); 

  
// Sample URL 
const url = 'https://127.0.0.1:33333'; 
  
const request = https.request(url, (response) => { 
    let data = ''; 
    response.on('data', (chunk) => { 
        data = data + chunk.toString(); 
    }); 
  
    response.on('end', () => { 
        const body = JSON.parse(data); 
        console.log(body); 
    }); 
}) 
  
request.on('error', (error) => { 
    console.log('An error', error); 
}); 
  
request.end()  
