let valor = [8, 9, 10, 41, 67]
valor.sort()
/*for(let pos = 0; pos<valor.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}*/
for(let pos in valor){
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}