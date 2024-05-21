let product = new Map()
let countingPopUpli = document.getElementById("countingPopUpli")
let countingPopUpp = document.getElementById("countingPopUpp")
let count = 0
let boolBuyPhase = true

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
    countingPopUpp.innerHTML = count 
}

function updateCount(){
    count = 0
    product.keys().forEach(foreachs);
    countingPopUpp.innerHTML = count

    if(count != 0){
        countingPopUpli.style.display = "block"
    }else{
        countingPopUpli.style.display = "none"
    }
}

function foreachs(item) {
    count += product.get(item);
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