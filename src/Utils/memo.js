export const idmemo=()=>{
    const str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let result=''
    for(let i=0;i<25;i++){
        const radomindex=~~(Math.random()*52)
        // console.log(radomindex)
        // console.log(str[radomindex])
        result+=str[radomindex];
    }
    return result;
 }

 