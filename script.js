let countEl = document.getElementById("count-el")
let restartEl = document.getElementById("restart-el")
let entryEl = document.getElementById("entry-el")
 
let count = 0

function increment() {
    count = count + 1
    countEl.textContent = count
}

function save() {
    counting = count + " -"
    entryEl.textContent +=counting + " "
}

function restart() {
    count = 0
    countEl.textContent = count
}