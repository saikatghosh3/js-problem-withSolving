// find the largest number 

const numbers = [10,5,82,87,55,99];
const maxNumbers = numbers.reduce((acc,curr)=>{
    if(curr> acc){
        return curr;
    }else{
        return acc;
    }
},numbers[0]);
console.log(maxNumbers)


// calculate the toal number of an shopping cart
const shoppingCart = [
    { product: "Laptop", price: 60000, qty: 1 },
    { product: "Mouse", price: 1500, qty: 2 },
    { product: "Headphone", price: 3500, qty: 1 }
];

const totalPrice = shoppingCart.reduce((total, item)=>{
    
    return total + (item.price * item.qty)
},0)
console.log(totalPrice);
