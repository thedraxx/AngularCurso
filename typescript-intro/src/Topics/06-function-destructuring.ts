export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'iPhone 14 Pro Max',
    price: 1099.99
}

const tablet: Product = {
    description: 'iPhone 14 tablet Max',
    price: 1299.99
}


interface TaxCalculator {
    tax: number;
    products: Product[];
}

export interface TaxCalculatorResult {
    total: number;
    totalWithTax: number;
}


function taxCalculator(options: TaxCalculator): number[] {

    let total = 0;
    for (const product of options.products) {
        total += product.price * options.tax
    }

    return [total, total + options.tax]
}


const shoppingCart: Product[] = [phone, tablet]

const tax = 0.2

const result = taxCalculator({
    tax: tax,
    products: shoppingCart
})


const [total, totalWithTax] = result // Destructuring array

console.log(total) // [ 439.996, 1539.986 ]
console.log(totalWithTax) // [ 439.996, 1539.986 ]

export { }