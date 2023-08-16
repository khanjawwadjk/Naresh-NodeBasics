const os = require('os');

console.log('Platform >', os.platform());
console.log('cpus >', os.cpus().length);
console.log('Arch >', os.arch());
console.log('uptime >', os.uptime());