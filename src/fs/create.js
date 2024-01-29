import {writeFile} from 'node:fs/promises'
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const __path = resolve(__dirname, 'files', 'fresh.txt')

const create = async () => {
    // Write your code here 
    try {
        await writeFile(__path, 'I am fresh and young', { flag: 'wx' })
    } catch (error) {
            throw new Error('FS operation failed')
    }
};

await create();