function tabuada(){
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    if(num.value.lenght == 0){
        window.alert('POR FAVOR, DIGITE UM NUMERO')   
    }else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c<=10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` 
            tab.appendChild(item)
        }
    }
}