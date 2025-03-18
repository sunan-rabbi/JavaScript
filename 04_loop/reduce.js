const arr = [
    {
        name: "Laptop",
        price: 1200,
        category: "Electronics"
    },
    {
        name: "T-shirt",
        price: 25,
        category: "Clothing"
    },
    {
        name: "Coffee Beans",
        price: 15,
        category: "Food & Beverage"
    },
    {
        name: "Smartphone",
        price: 800,
        category: "Electronics"
    },
    {
        name: "Running Shoes",
        price: 90,
        category: "Clothing"
    },
    {
        name: "Chocolate Bar",
        price: 3,
        category: "Food & Beverage"
    },
    {
        name: "Tablet",
        price: 300,
        category: "Electronics"
    },
    {
        name: "Jeans",
        price: 60,
        category: "Clothing"
    },
    {
        name: "Tea Leaves",
        price: 10,
        category: "Food & Beverage"
    }
]

const totalPrice = arr.reduce((total, product) => total + product.price, 0)
console.log(totalPrice);