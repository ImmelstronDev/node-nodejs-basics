import { readFile } from 'node:fs/promises'
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const __path = resolve(__dirname, 'files', 'fileToRead.txt')

const read = async () => {
    // Write your code here 
    try {
        const fileContent = await readFile(__path, { encoding: 'utf8' })
        console.log(fileContent)
    } catch (error) {
        if(error.syscall === 'open'){
            throw new Error ('FS operation failed')
        }else{throw error}
        
    }
};

await read();