let index = 0
let icon = document.querySelectorAll(".showcase .icon img")
icon[index].style = "transform:scale(1.5)"

let up = document.getElementById('up')
let down = document.getElementById('down')

function indexation() {
    icon.forEach(img => {
        img.style = ""
    })
}

up.addEventListener('click', (event) => {

    indexation()
    index -= 1
    console.log(index);
    event.target.style = "transform:scale(1.5)"
    nodeItemActive()

})

down.addEventListener('click', (event) => {

    indexation()
    index += 1
    console.log(index);
    event.target.style = "transform:scale(1.5)"
    nodeItemActive()

})

let secondTab = document.getElementById('secondTab')
let paybottom = document.getElementById('paybottom')
let first = document.getElementById('first')
let second = document.getElementById('second')
let myRange = document.getElementById('myRange')

first.addEventListener('click', ()=>{
    secondTab.className = 'juq_bu'
    paybottom.className = 'paybottom'
    myRange.setAttribute('value', '1')
})

second.onclick = ()=>{
    paybottom.className = 'juq_bu'
    secondTab.className = ''
    myRange.setAttribute('value', '2')
}


