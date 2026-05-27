function contar(){
    var inicio = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var res = document.getElementById('res')
    
   if(inicio.value.length == 0 || fim.value.legth == 0 || passo.value.legth == 0){
    res.innerHTML = 'Impossivel contar'
    window.alert('ERRO falta dados')
   }else {
    res.innerHTML = 'Contando: '
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if(p <= 0){
        alert('considerando passo como 1')
    }
    if(i < f){
        //contagem crescente
        for(let c = i;c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
   }else{
    //contagem decrescente
        for(let c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
   }
   res.innerHTML += `\u{1F3C1}`
   }
}