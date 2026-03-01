const https = require('https');
const fs = require('fs');

const url = 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2ViYzI4NDVlNmViMzQ3MWNhMzYxMWUyYWZmZTIxYWNhEgsSBxCCgJGnsRIYAZIBJAoKcHJvamVjdF9pZBIWQhQxNzM1NDMxOTM4OTAwMjg2NTkxNA&filename=&opi=89354086';

https.get(url, (res) => {
  const file = fs.createWriteStream("reservations_new.html");
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log("Download complete.");
  });
}).on('error', (err) => {
  console.error(err);
});
