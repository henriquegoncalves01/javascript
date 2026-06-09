function parimp(n){
    if(n%2 == 0){
        return 'par!'
    }else{
        return 'impar!'
    }
}
let res = parimp(1)
console.log(res) // ou apenas console.log(parimp(n))