// calculate the average price of products
function avg(data) {
    let product = data.products;
    // console.log(product[1]);
    let total_price = 0;
    let price_avg = 0;
    for (let i = 0; i < product.length; i ++) {
        total_price += product[i].price;
    } 
    price_avg = total_price/product.length;
    console.log(price_avg);
}

const data = {
    size:3,
    products:[
        {
            name:"Product 1",
            price:100
        },
        {
            name:"Product 2",
            price:700
        },
        {
            name:"Product 3",
            price:250
        }
    ]
};

avg(data);


