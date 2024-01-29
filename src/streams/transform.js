import { EOL } from 'node:os';
import { stdin, stdout } from 'node:process';
import {Transform} from 'node:stream'

const transform = async () => {
    // Write your code here 
    const transform = new Transform({
        transform(chunk,encoding, cb){
            this.push(chunk.toString().split('').reverse().join('') + EOL);
            cb()
        }
    })
    stdin.pipe(transform).pipe(stdout)
};

await transform();