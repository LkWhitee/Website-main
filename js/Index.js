let popUpTrailer = document.getElementById('TrailerPopUp')
let openTrailer = false
let popUpBuy = document.getElementById('buyPopUp')
let openBuy = false
let pages = 1



function nextPage() {
    if (pages < 4){
        text = document.getElementById("storypt"+pages)
        text.style.display="none"
        pages++
        text = document.getElementById("storypt"+pages)
        text.style.display="block"
    }
    
}

function previusPage() {
    if (pages > 1){
        text = document.getElementById("storypt"+pages)
        text.style.display="none"
        pages--
        text = document.getElementById("storypt"+pages)
        text.style.display="block"
    }
}


function Trailerclicked() {
    if (openTrailer){
        popUpTrailer.style.display="none"
        openTrailer = false
    }else {
        openTrailer = true
        popUpTrailer.style.display="block"
    }

}

function buyClicked() {
    if (openBuy){
        popUpBuy.style.display="none"
        openBuy = false
    }else {
        openBuy = true
        popUpBuy.style.display="block"
    }

}