function getAverageColor(imageElement, ratio) {
    const canvas = document.createElement("canvas")

    let height = canvas.height = imageElement.naturalHeight
    let width = canvas.width = imageElement.naturalWidth

    const context = canvas.getContext("2d")
    context.drawImage(imageElement, 0, 0)

    let data, length
    let i = -4, count = 0

    try {
        data = context.getImageData(0, 0, width, height)
        length = data.data.length
    } catch (err) {
        console.log(err);
        return {
            R: 0,
            G: 0,
            B: 0
        }
    }

    let R, G, B
    R = G = B = 0

    while ((i += ratio * 4) < length) {
        ++count

        R += data.data[i]
        G += data.data[i + 1]
        B += data.data[i + 2]
    }

    R = (R / count)
    G = (G / count)
    B = (B / count)

    return {
        R,
        G,
        B
    }
}

const image = document.querySelector("img")
image.onload = () => {
    const { R, G, B } = getAverageColor(image, 4)

    document.body.style.background = `rgb(${R}, ${G}, ${B})`
}

let slide=document.getElementById("slide");
let upArrow = document.getElementById("upArrow");
let downArrow = document.getElementById("downArrow");

let x = 0;
upArrow.onclick = function () {
    if ( x > "-570") {
        x = x -190;
        slide.style.top = x + "px";
    }
}
console.log(slide);
downArrow.onclick = function () {
    if (x < 0) {
        x = x + 190;
        slide.style.top = x + "px";
    }
}

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");

let a = 1;

plus.addEventListener("click", () => {
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
    console.log("a");
})

minus.addEventListener("click", () => {
   if(a > 1) {
    a--;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
   }
})

let secondTab = document.getElementById('secondTab')
let paybottom = document.getElementById('descr_service')
let first = document.getElementById('premier')
let second = document.getElementById('deuxieme')
let myRange = document.getElementById('myRange')

first.addEventListener('click', ()=>{
    secondTab.className = 'juq_bu'
    paybottom.className = 'descr_service'
    myRange.setAttribute('value', '1')
})

second.onclick = ()=>{
    paybottom.className = 'juq_bu'
    secondTab.className = ''
    myRange.setAttribute('value', '2')
}

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let body = document.querySelector('.tete_com');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
    console.log(openShopping);
})

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

