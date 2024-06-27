
let continuar = true

while(continuar ){
    let nota1 = Number(prompt('digite sua nota'))
    let nota2 = Number(prompt('digite sua nota'))
    let nota3 = Number(prompt('digite sua nota'))

    let media = (nota1 + nota2 +nota3)/3



    console.log(media.toFixed(2))
    let parar = prompt('se não deseja continuar digite parar')
    if(parar === 'parar'){
        continuar = false
    }
}