import { createReadStream, createWriteStream } from 'node:fs'
import {dirname, resolve} from 'node:path'
import { pipeline } from 'node:stream/promises'
import {fileURLToPath} from 'node:url'
import { createGzip } from 'node:zlib'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const __path = resolve(__dirname, 'files', 'fileToCompress.txt')
const archivePath = resolve(__dirname, 'files', 'archive.gz')

const compress = async () => {
    // Write your code here 
    const write = createWriteStream(archivePath)
    const read = createReadStream(__path)
    const gzip = createGzip();
    await pipeline(read, gzip, write)
};

await compress();