const separator = '--'

const parseArgs = () => {
    // Write your code here 
    const commandArgs = process.argv.slice(2)
    // console.log(commandArgs)
    const resultArgs = commandArgs.reduce((acc, cur, index)=> {
        if(cur.indexOf(separator) === 0 ) {
            acc.push(`${cur.slice(2)} is ${commandArgs[index+1]}`)
            return acc
        }
        return acc
    }, [])
    console.log(resultArgs.join(', '))
};

parseArgs();