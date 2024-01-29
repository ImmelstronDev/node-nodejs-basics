import { fork } from 'node:child_process'
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const __path = resolve(__dirname, 'files', 'script.js')

const spawnChildProcess = async (args) => {
    // Write your code here
    const arrayOfArgs = args.reduce((acc, cur)=> {
       return acc.concat(cur.split(' '))
    }, [])
    const childProc = fork(__path, arrayOfArgs, {stdio: 'pipe'})
    process.stdin.pipe(childProc)
    childProc.stdout.pipe(process.stdout)
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['Argument1', 'Argument2', 'Argument3']);
