import { access, constants, copyFile, mkdir, opendir } from 'node:fs/promises'
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const __path = resolve(__dirname, 'files')
let newPath = resolve(__dirname, 'files_copy')

const copy = async () => {
    // Write your code here 
    const isExistOriginalDir = await access(__path, constants.F_OK).then(()=> true).catch(()=>false)
    const isExistNewDir = await access(newPath, constants.F_OK).then(()=> true).catch(()=> false)
    if(!isExistOriginalDir || isExistNewDir) {
        throw new Error('FS operation failed')
    }
    await mkdir(newPath)
    try {
        const objDir = await opendir(__path)
        for await ( const file of objDir) {
            const isFile = file.isFile()
            if(isFile) {
                await copyFile(resolve(file.path, file.name), resolve(newPath, file.name), constants.COPYFILE_EXCL)
            }else{
                throw new Error('FS operation failed')
            }
        }
    } catch (error) {
        throw new Error('FS operation failed')
    }
    
};

await copy();
