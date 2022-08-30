let countEl = document.getElementById("countwrap")

let count = 0
function add() {
    count += 1
    countEl.innerText = count
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function clk(datetime){
    let currentdate = new Date()
    let h = checkTime(currentdate.getHours())
    let m = checkTime(currentdate.getMinutes())
    let s = checkTime(currentdate.getSeconds())

    datetime =  " " + currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + " @ "  
    + h + ":"  
    + m + ":" + s
    
    document.getElementById("clkp").innerText = datetime
    setTimeout(clk, 1000)
}

let saveLog = document.getElementById("savelog")
let saveItr = 0 


function clearcount(){
    let newcount = 0
    countEl.innerText = newcount
    count = newcount
}

function save() {
    let listitem = document.createElement('p')
    let dateatm = document.getElementById("clkp").innerHTML
    saveItr += 1 
    listitem.appendChild(document.createTextNode("Save # " + saveItr + dateatm + " - Count: " + count))
    saveLog.appendChild(listitem)
    clearcount()
}

function clearlog(){
    saveLog.replaceChildren()
    saveItr = 0
}