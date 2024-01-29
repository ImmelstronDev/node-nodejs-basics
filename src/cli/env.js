const prefix = 'RSS_'
const envKeys = Object.keys(process.env)

const parseEnv = () => {
    // Write your code here 
    // console.log(envKeys)
    const resultArr = envKeys.reduce((acc, cur) => {
        if(cur.indexOf(prefix) === 0) {
            const res = `${cur}=${process.env[cur]}`
            acc.push(res)
            return acc
        }
        return acc
    },[])
    const result = resultArr.join('; ')
    console.log(result)
};

parseEnv();