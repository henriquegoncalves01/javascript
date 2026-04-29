function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('Insira uma data valida!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'foto-bebe-m.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
             if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-f.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
