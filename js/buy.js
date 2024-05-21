let product = new Map()
let cookie = document.cookie
let countingPopUpli = document.getElementById("countingPopUp")
let count = ""
let boolBuyPhase = true
 
updateCount()

function onlick(){
    let buyPhase = document.getElementById("cartPopUp")
    if (boolBuyPhase){
        buyPhase.style.display = "block"
        boolBuyPhase = false
    }else{
        buyPhase.style.display = "none"
        boolBuyPhase = true
    }
}

function updatePopUp() {
    countingPopUpli.innerHTML = count 
}

function updateCount(){
    count = 0
    product.keys().forEach(foreachs);
    
    function foreachs(item) {
        count += product.get(item);
    }
    
    countingPopUpli.innerHTML = count

    if(count != 0){
        countingPopUpli.style.display = "block"
    }else{
        countingPopUpli.style.display = "none"
    }
}



function addProduct1() {
    if (!product.has("product1")){
        product.set("product1", 1)
    }else{
        x = product.get("product1")
        x++
        product.set("product1", x)
    }
    updateCount()
    log()
    updatePopUp()
}
function addProduct2() {
    if (!product.has("product2")){
        product.set("product2", 1)
    }else{
        x = product.get("product2")
        x++
        product.set("product2", x)
    }
    updateCount()
    log()
    updatePopUp()
}
function addProduct3() {
    if (!product.has("product3")){
        product.set("product3", 1)
    }else{
        x = product.get("product3")
        x++
        product.set("product3", x)
    }
    updateCount()
    log()
    updatePopUp()
}
function addProduct4() {
    if (!product.has("product4")){
        product.set("product4", 1)
    }else{
        x = product.get("product4")
        x++
        product.set("product4", x)
    }
    updateCount()
    log()
    updatePopUp()
}
function addProduct5() {
    if (!product.has("product5")){
        product.set("product5", 1)
    }else{
        x = product.get("product5")
        x++
        product.set("product5", x)
    }
    updateCount()
    log()
    updatePopUp()
}

function log() {
    console.log(product + " " + count)
}