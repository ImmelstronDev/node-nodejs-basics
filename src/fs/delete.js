import { access, constants, rm } from 'node:fs/promises'
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const __path = resolve(__dirname, 'files', 'fileToRemove.txt')

const remove = async () => {
    // Write your code here 
    try {
        const isFileExist = await access(__path, constants.F_OK)
        .then(()=> true)
        .catch(()=> false)
        if(isFileExist) {
            await rm(__path)
        }else{
            throw new Error ('FS operation failed')
        }
    } catch (error) {
        throw new Error ('FS operation failed')
    }
};

await remove();