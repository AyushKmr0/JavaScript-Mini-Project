// const serachInput = document.querySelector('#search-input');
// const searchBtn = document.querySelector('#search');
// const buttons = document.querySelectorAll('.button');
// const productContainer = document.querySelector('#products');

// function createCard(product) {
//     // card
//     const card = document.createElement('div');
//     card.classList.add('card', product.category, 'hide');

//     // imgContainer
//     const imgContainer = document.createElement('div');
//     imgContainer.className = 'img-container';

//     const img = document.createElement('img');
//     img.src = product.image;

//     imgContainer.appendChild(img);

//     // product details
//     const productContent = document.createElement('div');
//     productContent.className = 'product-content';

//     const productName = document.createElement('h3');
//     productName.innerText = product.productName;

//     const productPrice = document.createElement('h5');
//     productPrice.innerText = '$' + product.price;

//     productContent.appendChild(productName);
//     productContent.appendChild(productPrice);

//     card.appendChild(imgContainer);
//     card.appendChild(productContent);

//     productContainer.appendChild(card);

// }

// for (let product of products.data) {
//     createCard(product);
// }

// function filterProduct(category) {
//     const allCards = document.querySelectorAll('.card');

//     allCards.forEach((card) => {
//         if (category.toUpperCase() == 'ALL' || card.classList.contains(category)) {
//             card.classList.remove('hide');
//         }
//         else {
//             card.classList.add('hide');
//         }
//     });
// }

// buttons.forEach((button) => {
//     button.addEventListener('click', function () {
//         buttons.forEach((b) => b.classList.remove('active-button'));

//         this.classList.add('active-button');
//         filterProduct(this.innerText);
//     });
// });

// // search product
// searchBtn.addEventListener('click', function () {
//     const query = serachInput.value.trim().toUpperCase();
//     const allCards = document.querySelectorAll('.card');
//     const productName = document.querySelectorAll('.product-content h3')

//     productName.forEach((product, index) => {
//         if (product.innerText.toUpperCase().includes(query)) {
//             allCards[index].classList.remove('hide');
//         }
//         else {
//             allCards[index].classList.add('hide');

//         }
//     })
// })

// window.onload = () => {
//     filterProduct('all')
// }


const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search');
const buttons = document.querySelectorAll('.button');
const productContainer = document.querySelector('#products');

function createCard(product) {
    const card = document.createElement('div');
    card.classList.add('card', product.category, 'hide');

    //
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.src = product.image;

    imgContainer.appendChild(img);

    //
    const productContent = document.createElement('div');
    productContent.classList.add('product-content');

    const productName = document.createElement('h3');
    productName.innerText = product.productName;

    const productPrice = document.createElement('h5');
    productPrice.innerText = '$' + product.price;

    productContent.appendChild(productName);
    productContent.appendChild(productPrice);

    card.appendChild(imgContainer);
    card.appendChild(productContent);

    productContainer.appendChild(card);

}

for (let product of products.data) {
    createCard(product);
}

function filterProduct(category) {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach((card) => {
        if (category.toUpperCase() == 'ALL' || card.classList.contains(category)) {
            card.classList.remove('hide');
        }
        else {
            card.classList.add('hide');
        }
    });
}

buttons.forEach((button) => {
    button.addEventListener('click', function () {
        buttons.forEach((button) => button.classList.remove('active-button'));

        this.classList.add('active-button');

        filterProduct(this.innerText);
    });
});

searchBtn.addEventListener('click', function () {
    const query = searchInput.value.trim().toUpperCase();
    const allCards = document.querySelectorAll('.card');
    const productName = document.querySelectorAll('.product-content h3');

    productName.forEach((product, index) => {
        if (product.innerText.toUpperCase().includes(query)) {
            allCards[index].classList.remove('hide');
        }
        else {
            allCards[index].classList.add('hide');
        }
    });

});

window.onload = () => {
    filterProduct('all');
};
