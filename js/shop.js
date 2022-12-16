// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    // let buyedProduct = products.find((product) => product.id == id);
    for (let i = 0; i < products.length; i++) { 
        if(products[i].id == id) {
            buyedProduct = products[i];
        }
    }
    return cartList.push(buyedProduct);
}

// Exercise 2
function cleanCart() {
    cartList.length = 0;
    return cartList;
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = 0;
    for (let i = 0; i < cartList.length; i++) { 
        total += cartList[i].price;
    }
    return total;
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cart.length = 0;
    for (let i = 0; i < cartList.length; i++) {
        let existingProduct = cart.find(product => product.id === cartList[i].id);
        if (existingProduct) {
            existingProduct.quantity++;
            existingProduct.subtotal = existingProduct.price * existingProduct.quantity;
        } else {
            let product = cartList[i];
            product.quantity = 1;
            product.subtotal = product.price * product.quantity;
            cart.push(product);
        }
           
    }
    return cart;
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i < cart.length; i++) {
        // Promotion cooking oil
        if (cart[i].id == 1 && cart[i].quantity >= 3) {
            cart[i].price = 10;
            cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
        } 

        // Promotion Instant cupcake mixture
        if (cart[i].id == 3 && cart[i].quantity >= 10) {
            cart[i].price = cart[i].price * (1/3);
            cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
        } 
    }
    return cart;
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    generateCart();
    applyPromotionsCart();

    // Add products to table
    let productsHTML = '';
    let priceTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        if(cart[i].subtotalWithDiscount > 0) {
            priceTotal = cart[i].subtotalWithDiscount;
        } else {
            priceTotal = cart[i].subtotal;
        }
        productsHTML += '<tr><th scope="row">'+cart[i].name+'</th><td>$'+cart[i].price+'</td><td>'+cart[i].quantity+'</td><td>$'+priceTotal+'</td></tr>';
    }
    document.getElementById('cart_list').innerHTML = productsHTML;


    // Update total cart
    document.getElementById('total_price').innerHTML = calculateTotal();
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}
