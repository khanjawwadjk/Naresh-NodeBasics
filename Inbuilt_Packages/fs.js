const fs = require('fs');
const os = require('os');

// fs.writeFile('sample.txt', 'Hello world!', ()=>{
//     console.log("File created successfully !")
// });


//Using fs.writeFile method, when we try to add another data the old file completely erased and rewrite the file. Hence to append another data into the file we use fs.appendFile method. 
fs.appendFile('sampleForAppend.txt', 'Hello world! Hello JK:)  \n', ()=>{
    console.log("File appended successfully !")
});

let platform = os.platform();
let arch = os.arch();
let cpus = os.cpus().length;

let output = `You are using ${platform} of ${arch} bit architecture having ${cpus} CPUs.`;

fs.appendFile('fs&os.txt', output, ()=>{
    console.log('System file generated successfully')
});

fs.readFile('fs&os.txt', 'utf-8',(err, data)=>{
    if(err) throw err;
    console.log(data);
})

//To delete the file
// fs.unlink('fs&os.txt', (err)=>{
//     if(err) throw err;
//     console.log('File deleted successfully')
// })

//To rename the file
// fs.rename('oldNameWithExtension', 'newNameWithExtension', (err)=>{
//     if(err) throw err;
//     console.log('File renamed successfully');
// });
