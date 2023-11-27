function sorteio() {
    var min = window.document.getElementById('min').value
    var max = window.document.getElementById('max').value
    const s =  Math.floor((Math.random() * max)+ min)
    
    var  show = document.getElementById('res')   

    show.innerText = `O numero sorteado eh = ${s} `
}
