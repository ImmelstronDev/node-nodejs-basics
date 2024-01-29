import { createHash } from 'node:crypto'
import {readFile, writeFile} from 'node:fs/promises'
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const __path = resolve(__dirname, 'files', 'fileToCalculateHashFor.txt')

const calculateHash = async () => {
    // Write your code here 
    try {
        const fileContent = await readFile(__path, { encoding: 'utf8' })
        const hashing = createHash('sha256')
        hashing.update(fileContent)
        console.log(hashing.digest('hex'))
    } catch (error) {
        throw error
    }
};

await calculateHash();