import { createWriteStream } from 'node:fs'
import {dirname, resolve} from 'node:path'
import { stdin } from 'node:process'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const __path = resolve(__dirname, 'files', 'fileToWrite.txt')

const write = async () => {
    // Write your code here 
    const writeStream = createWriteStream(__path)
    stdin.pipe(writeStream)
};

await write();