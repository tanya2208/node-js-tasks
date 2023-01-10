import { spawn } from 'child_process'

const child = spawn('find', ['../task9']);

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

child.on('error', (error) => {
    console.log(`error: ${error.message}`);
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

child.on('message', (json) => {     
  console.log(`message ${json.msg}`);       
});