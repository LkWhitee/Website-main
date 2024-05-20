let product = [false, false, false, false, false]
let countingPopUp = document.getElementById("countingPopUp")
let count = 0

function updatePopUp() {
    
}

function updateCount(i){
    if (product[i]) {
        count++
    }else{
        count--
    }
}

function addProduct1() {
    product[0] = !product[0]
    updateCount(0)
    log()
    updatePopUp()
}
function addProduct2() {
    product[1] = !product[1]
    updateCount(1)
    log()
    updatePopUp()
}
function addProduct3() {
    product[2] = !product[2]
    updateCount(2)
    log()
    updatePopUp()
}
function addProduct4() {
    product[3] = !product[3]
    updateCount(3)
    log()
    updatePopUp()
}
function addProduct5() {
    product[4] = !product[4]
    updateCount(4)
    log()
    updatePopUp()
}

function log() {
    console.log(product + " " + count)
}