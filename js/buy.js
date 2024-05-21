let product = {"countCrash1": 0, "countCrash2": 0, "countCrash3": 0, "countCrashRemastered": 0, "countCrash4": 0}
let count = 0
let boolBuyPhase = true


function valueChange(id, values){
    product[id] = values
    updateCount()
}
function setQuantity(){
    console.log("\t-----")
    setQuantityId("countCrash1")
    setQuantityId("countCrash2")
    setQuantityId("countCrash3")
    setQuantityId("countCrashRemastered")
    setQuantityId("countCrash4")
    console.log("\t-----")
}

function setQuantityId(x){
    let crash = document.getElementById(x);
    console.log(x + " " + product[x] + " " + crash);
    if (crash) { crash.value = Number(product[x]);}
}

function onlick(){
    let buyPhase = document.getElementById("confirmBuy")
    if (boolBuyPhase){
        buyPhase.style.display = "block"
        boolBuyPhase = false
    }else{
        buyPhase.style.display = "none"
        boolBuyPhase = true
    }
    setQuantity()
}


function updateCount(){
    count = 0
    count += Number(product["countCrash1"])
    count += Number(product["countCrash2"])
    count += Number(product["countCrash3"])
    count += Number(product["countCrashRemastered"])
    count += Number(product["countCrash4"])

    if(count != 0){
        let countingPopUpli = document.getElementById("countingPopUp")
        countingPopUpli.style.display = "block"
        countingPopUpli.innerHTML = Number(count) 
    }else{
        countingPopUpli.style.display = "none"
    }
}



function addProduct1() {
    product["countCrash1"]++
    updateCount()
}
function addProduct2() {
    product["countCrash2"]++
    updateCount()
}
function addProduct3() {
    product["countCrash3"]++
    updateCount()
}
function addProduct4() {
    product["countCrashRemastered"]++
    updateCount()
}
function addProduct5() {
    product["countCrash4"]++
    updateCount()
}