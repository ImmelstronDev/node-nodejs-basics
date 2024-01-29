import { createReadStream } from 'node:fs'
import {dirname, resolve} from 'node:path'
import { stdout } from 'node:process'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const __path = resolve(__dirname, 'files', 'fileToRead.txt')

const read = async () => {
    // Write your code here 
    createReadStream(__path, 'utf-8').pipe(stdout)
};

await read();