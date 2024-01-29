import { cpus } from 'node:os'
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'
import { Worker } from 'node:worker_threads'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const __path = resolve(__dirname, './worker.js')

const performCalculations = async () => {
    // Write your code here
    const arrayOfCores = cpus()
    let startNumber = 10

    const workers = await Promise.allSettled(arrayOfCores.map(()=> {
        return new Promise((resolve, reject)=> {
            const instWorker = new Worker(__path,{
                workerData: startNumber+=1
            })
            instWorker.on('message', message => resolve(message))
            instWorker.on('error', error => reject(error))
        })
    }))
    const result = workers.map(({status, value})=>({
        status: status === 'fulfilled' ? 'resolve' : 'error',
        data: status === 'fulfilled' ? value : null
    }))
    console.log(result)
};

await performCalculations();