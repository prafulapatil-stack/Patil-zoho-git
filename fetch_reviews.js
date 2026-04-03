import https from 'https';

const options = {
  hostname: 'www.google.com',
  path: '/search?q=PATIL+INVESTMENTS+reviews',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data.substring(0, 2000));
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
