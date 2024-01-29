
import { readdir } from 'node:fs/promises'
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const __path = resolve(__dirname, 'files')

const list = async () => {
    // Write your code here 
    try {
        const dirList = await readdir(__path);
        console.log(dirList);
    } catch (error) {
        if(error.syscall === 'scandir'){
            throw new Error ('FS operation failed')
        }else{
            throw error
        }
        
    }
};

await list();