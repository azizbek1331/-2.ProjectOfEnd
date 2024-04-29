let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
    {
        id: 1,
        name:'лучший день',
        price: 50,
        buttonText:"В корзину",
        image:'./ImagesOfFin/F1.PNG',
        nature: {
            tsvet: ['белый'],
            svet: ['нежные',],
            format: ['букет'],
            tsveta: ['Альстромерия'],
        }
    },
    {
        id: 2,
        name:'лучший день',
        price: 150,
        buttonText:"В корзину",
        image: './ImagesOfFin/F2.PNG',
        nature: {
            tsvet: ['желтый'],
            svet: ['яркие',],
            format: ['в вазе'],
            tsveta: ['Антуриум'],
        }
    },
    {
        id: 3,
        name:'лучший день',
        price: 120,
        buttonText:"В корзину",
        image: './ImagesOfFin/F3.PNG',
        nature: {
            tsvet: ['зеленый'],
            svet: ['нежные'],
            format: ['в конверте'],
            tsveta: ['Аспарагус'],
        }
    },
    {
        id: 4,
        name:'лучший день',
        price: 330,
        buttonText:"В корзину",
        priceAdditive:"187.000 ₽",
        image: './ImagesOfFin/F4.PNG',
        nature: {
            tsvet: ['красный'],
            svet: ['яркие'],
            format: ['в корзине'],
            tsveta: ['Астильба'],
        }
    },
    {
        id: 5,
        name:'лучший день',
        price: 370,
        buttonText:"В корзину",
        image: './ImagesOfFin/F5.PNG',
        nature: {
            tsvet: ['оранжевый'],
            svet: ['нежные'],
            format: ['в шляпной коробке'],
            tsveta: ['Астранция'],
        }
    },
    {
        id: 6,
        name:'лучший день',
        price: 350,
        buttonText:"В корзину",
        priceAdditive:"187.000 ₽",
        image: './ImagesOfFin/F6.PNG',
        nature: {
            tsvet: ['оранжевый'],
            svet: ['яркие'],
            format: ['в ящике'],
            tsveta: ['Альстромерия'],
        }
    },
    {
        id: 7,
        name:'лучший день',
        price: 400,
        buttonText:"В корзину",
        image: './ImagesOfFin/F7.PNG',
        nature: {
            tsvet: ['синий'],
            svet: ['нежные'],
            format: ['букет'],
            tsveta:[ 'Антуриум'],
        }
    },
    {
        id: 8,
        price: 190,
        buttonText:"В корзину",
        name:'лучший день',
        image: './ImagesOfFin/F8.PNG',
        nature: {
            tsvet: ['белый'],
            svet: ['яркие'],
            format: ['в вазе'],
            tsveta:[ 'Аспарагус'],
        }
    },
    {
        id: 9,
        price: 170,
        buttonText:"В корзину",
        priceAdditive:"187.000 ₽",
        name:'лучший день',
        image: './ImagesOfFin/F9.PNG',
        nature: {
            tsvet: ['желтый'],
            svet: ['нежные'],
            format: ['в конверте'],
            tsveta:[ 'Астильба'],
        }
    },
    {
        id: 10,
        name:'лучший день',
        price: 200,
        buttonText:"В корзину",
        image: './ImagesOfFin/F10.PNG',
        nature: {
            tsvet: ['зеленый'],
            svet: ['яркие'],
            format: ['в корзине'],
            tsveta:[ 'Астранция'],
        }
    },
    {
        id: 11,
        name:'лучший день',
        price: 250,
        buttonText:"В корзину",
        priceAdditive:"187.000 ₽",
        image: './ImagesOfFin/F11.PNG',
        nature: {
            tsvet: ['зеленый'],
            svet: ['яркие'],
            format: ['в корзине'],
            tsveta: ['Альстромерия'],
        }
    },
    {
        id: 12,
        name:'лучший день',
        price: 300,
        buttonText:"В корзину",
        image: './ImagesOfFin/F12.PNG',
        nature: {
            tsvet: ['красный'],
            svet: ['нежные'],
            format: ['в шляпной коробке'],
            tsveta: ['Антуриум'],
        }
    },
];
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter) {   
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('items');
        

        //create image
        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);

        ///create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);

        //create price
        let newPrice = document.createElement('div');
        newPrice.classList.add('price')
        newPrice.innerText=item.price.toLocaleString() + "$";
        newItem.appendChild(newPrice);

        let newButton = document.createElement('button');
        newButton.classList.add('buttonText')
        newButton.innerText=item.buttonText;
        newItem.appendChild(newButton)

        

        list.appendChild(newItem);
    });
};


filter.addEventListener('submit', function(event) {
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter= listProducts.filter( item => {
        //check category
        if(valueFilter.svetka.value != '') {
            if(item.nature.svet != valueFilter.svetka.value) {
                return false;
            }
        }

        //check color
        if(valueFilter.tsvet.value != '') {
            if(!item.nature.tsvet.includes(valueFilter.tsvet.value)) {
                return false;
            }
        }

        //check format
        if(valueFilter.formated.value !='') {
            if(!item.nature.format.includes(valueFilter.formated.value)) {
                return false;
            }
        }
          ///check tsvetko
        if(valueFilter.tsvetko.value != '') {
            if(!item.nature.tsveta.includes(valueFilter.tsvetko.value)) {
                return false;
            }
        }

        // check min price
        if(valueFilter.minPrice.value != '') {
            if(item.price < valueFilter.minPrice.value) {
                return false;
            }
        }

        return true;
    })
    
    showProduct(productFilter);
})

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

function myFunction() {
    var x = document.getElementById("F12").value;
    document.getElementById("checkbox_value").innerHTML = x;
}










