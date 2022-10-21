let fakestore = 'https://fakestoreapi.com/products/'
let display = 'the boy';
fetch(fakestore)
.then(res => {return res.json()})
.then((data) => {console.log(data)
    if (data){
        data.forEach(element => {
            display += `<div class="sub-container">
            <h3>${element.category}</h3>
            <img src="${element.image}" alt="shirt1" class="image1">
            <h2>${element.title.slice(0, 20)}</h2>
            <p${element.description.slice(0, 50)}</p>
            <h4>Price:$${element.price}</h4>
            <button class= 'addcart'>Add to cart</button>
        </div>`
        })
    }
    // document.querySelector('.main-container').innerHTML = display;
    document.getElementById('main-container').innerHTML = display
})
// console.log(data);
export default display;

