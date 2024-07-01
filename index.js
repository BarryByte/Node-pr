const fs = require('node:fs');

// fs.readFile('file.txt', 'utf8', (err) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log('File has been read successfully.');
// });

// fs.writeFile('file.txt', 'Content hi content', 'utf8', (err) => {
//   if (err) {
//     console.error('Error writing to file:', err);

//   }
//   console.log('File has been written successfully.');
// });

// fs.appendFile('file.txt', "class is going on", 'utf8',(err) =>{
//   if (err) {
//     console.error('Error appending to file:', err);
//   }
//   console.log('File has been appended successfully.');
// })

// fs.mkdir('dir1', (err) => {
//   if(err){
//     console.log(err);
//   }
//   console.log("dir formed")
// })

// fs.rmdir('dir1', (err) => {
//   if(err){
//     console.log(err);
//   }
//   console.log("dir removed");
// })

// fs.rename('file.txt', 'verynewfile.txt', (err)=> {
//   if(err){
//     console.log(err);
//   }
//   console.log("file renamed");
// })

// const p = '/home/barrybyte/projects/T-4/React projects/NodePractice/verynewfile.txt'
// const path = require("path");
// const dirname = path.dirname(p);
// const extension  = path.extname(p);
// console.log(dirname);
// console.log(extension);

// fs.copyFile('/home/barrybyte/projects/T-4/React projects/NodePractice/verynewfile.txt', '/home/barrybyte/projects/T-4/React projects/NodePractice/dir1/verynewfile.txt',(err)=>{
//   if(err){
//     console.log(err);
//   }
//   console.log("file moved")
// })

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    fs.readFile('./index.html', function(err, data) {
      if (err) {
        res.end(JSON.stringify(err));
        return;
      }
      res.write(data);
      res.end();

    });
  }

  if (req.url === "/login") {
    fs.readFile('./login.html', function(err, data) {
      if (err) {
        res.end(JSON.stringify(err));
        return;
      }
      res.write(data);
      res.end();

    });
  }
});

const port = 3000;
const host = "localhost";
server.listen(port, host, () => {
  console.log(`server is listening on http://${host}:${port} `);
});
