import {rename as asyncRename, access, constants } from 'node:fs/promises'
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const __path = resolve(__dirname, 'files')

const rename = async () => {
    // Write your code here 
    try {
        const incomePath = resolve(__path, 'wrongFilename.txt')
        const newPath = resolve(__path, 'properFilename.md')

        const isIncomePathExist = await access(incomePath, constants.F_OK)
        .then(()=> true)
        .catch(()=> false)
        const isNewPathExist = await access(newPath, constants.F_OK)
        .then(()=> true)
        .catch(()=>false)

        if (!isIncomePathExist || isNewPathExist) {
            throw new Error ('FS operation failed')
        }
        await asyncRename(incomePath, newPath)
    } catch (error) {
        throw new Error ('FS operation failed')
    }
};

await rename();