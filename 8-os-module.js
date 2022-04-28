const os = require('os');

// info about current user
const userInfo = os.userInfo();
console.log(userInfo);

// to return uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

// console.log(currentOs);
// console.log(os.arch()); //returns OS CPU architecture, => x64
// console.log(os.constants);
// console.log(os.cpus());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.loadavg());
console.log(os.platform());
